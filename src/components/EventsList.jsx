import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';

import { useEffect } from 'react';

const EventsList = () => {
    let { events } = useLoaderData();
    if (!Array.isArray(events)) {
        events = [events];
    }
    return (
        <div className='pt-12 grid gap-4'>
            {events.map((event) => {
                const { title, date, hdurl, copyright } = event;

                return (
                    <Link
                        key={date}
                        to={`/events/${date}`}
                        className='p-8 flex flex-col sm:flex-row rounded-lg shadow-xl hover:shadow-2xl duration-300 group'
                        data-aos="fade-up"
                    >
                        <img
                            src={hdurl} alt={title || 'bg-img'}
                            className='h-24 w-24 rounded-lg h-64 md:h-48 sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300'
                        />
                        <div className='ml-0 sm:ml-16'>
                            <h3 className='capitalize font-medium text-lg'>{title}</h3>
                            <h4 className='capitalize text-md text-neutral-content'>
                                {copyright}
                            </h4>
                        </div>
                        {/* <p className='font-medium ml-0 sm:ml-auto text-lg'>
                            {copyright}
                        </p> */}
                    </Link>
                );
            })}
        </div>
    );
}
export default EventsList;