import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const  EventsGrid = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  let { events } = useLoaderData();
  if (!Array.isArray(events)) {
        events = [events];
    }
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {events.map((event) => {
        debugger
        const { title, date, hdurl, copyright } = event;
  
        return (
          <Link
            key={date}
            to={`/events/${date}`}
            className='card w-full shadow-xl hover:shadow-2xl transition duration-300'
            data-aos="fade-up"
          >
            <figure className='px-4 pt-4'>
              <img
                src={hdurl} alt={title || 'bg-img'}
                className='rounded-xl h-64 md:h-48 w-full object-cover'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title capitalize tracking-wider'>{title}</h2>
              <span className='text-secondary'>{date}</span>
              {copyright && <span className='text-secondary'>{copyright}</span>}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default EventsGrid