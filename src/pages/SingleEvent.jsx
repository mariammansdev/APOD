
import { useState } from 'react';
import { formatPrice, customFetch, generateAmountOptions } from '../utils';
import { Link, useLoaderData } from 'react-router-dom';
const singleEventQuery = (date) => {
  return {
    queryKey: ['single-event', date],
    queryFn: async () => {
      const res = await customFetch(`/events/${date}`);
      return res.data;
    },
  }

}

export const loader = (queryClient) => async ({ params }) => {
  const event = await queryClient.ensureQueryData(singleEventQuery(params.date));
  return { event };
}
const SingleEvent = () => {
  const { event } = useLoaderData();
  const { image, title, price, description, colors, company } = event.attributes;
  const dollarsAmount = formatPrice(price);
  const [eventColor, setEventColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <section>
      <div className='text-md breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/events'>Events</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className='w-96 h-96 object-cover rounded-lg lg:w-full'
        />
        {/* PRODUCT */}
        <div>
          <h1 className='capitalize text-3xl font-bold'>{title}</h1>
          <h4 className='text-xl text-neutral-content font-bold mt-2'>
            {company}
          </h4>
          <p className='mt-3 text-xl'>{dollarsAmount}</p>
          <p className='mt-6 leading-8'>{description}</p>
          {/* COLORS */}
          <div className='mt-6'>
            <h4 className='text-md font-medium tracking-wider capitalize'>
              colors
            </h4>
            <div className='mt-2'>
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type='button'
                    className={`badge w-6 h-6 mr-2 ${color === eventColor && 'border-2 border-secondary'}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setEventColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className='form-control w-full max-w-xs'>
            <label className='label' htmlFor='amount'>
              <h4 className='text-md font-medium -tracking-wider capitalize'>
                amount
              </h4>
            </label>
            <select
              className='select select-secondary select-bordered select-md'
              id='amount'
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(20)}
            </select>
          </div>
          {/* CART BTN */}
          <div className='mt-10'>
            <button className='btn btn-secondary btn-md' >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleEvent