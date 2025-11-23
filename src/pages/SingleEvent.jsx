
import { useState } from 'react';
import { customFetch } from '../utils';
import { Link, useLoaderData } from 'react-router-dom';
import { Main } from '../components';

const singleEventQuery = (date) => {
  return {
    queryKey: ['single-event', date],
    queryFn: async () => {
      const res = await customFetch(`&date=${date}`);
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
     

  //  if (isLoading) return (<LoadingState />)
  //   if (isError) return (<h3>{error || 'Unknown Error'}</h3>)
  return (
    <section>
      {/* <div className='text-md breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/events'>Events</Link>
          </li>
        </ul>
      </div> */}
     < Main event = {event}/>
    
    </section>
    
  );
}

export default SingleEvent