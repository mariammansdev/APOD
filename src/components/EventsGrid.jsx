import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const  EventsGrid = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { events } = useLoaderData();

  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {events.map((event) => {
        const { title, date, image, copyright } = event;
  
        return (
          <Link
            key={event.date}
            to={`/events/${event.date}`}
            className='card w-full shadow-xl hover:shadow-2xl transition duration-300'
          >
            <figure className='px-4 pt-4'>
              <img
                src={event.hdurl} alt={event.title || 'bg-img'}
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