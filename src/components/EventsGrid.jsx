import { Link, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { useFavorites } from '../context/FavoritesContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PerformedImage from './PerformedImage';

const EventsGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { isFavorite, toggleFavorite } = useFavorites();
  const checkIsFavEvent = (date) => {
    return isFavorite(date);
  }
  let { events } = useLoaderData();
  if (!Array.isArray(events)) {
    events = [events];
  }
  function getYouTubeId(url) {
    if (!url) {
      return;
    }
    const regExp = /(?:youtube\.com.*v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  }



  return (
    <div className='pt-12 mb-14 px-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {events.map((apodEvent) => {
        const { title, date, hdurl, thumbnail_url, url, copyright } = apodEvent;
        const videoId = thumbnail_url ? '' : getYouTubeId(url);
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

        return (
          <Link
            key={date}
            to={`/events/${date}`}
            state={{
              fromList: true,
              listUrl: `/events${location.search}`,
            }}

            className='card w-full mb-6 shadow-xl hover:shadow-2xl transition duration-300 indicator'
            data-aos="fade-up"
          >
            <figure className='px-4 pt-4 '>
              <button>
                <BsHeartFill className="h-10 w-10 badge badge-sm hover:badge-md hover:h-12 hover:w-12 badge-secondary indicator-item transition duration-300"
                  color={checkIsFavEvent(apodEvent.date) ? '#EA4335' : 'white'}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite(apodEvent);
                  }} />
              </button>
              
            <PerformedImage
              src={hdurl || thumbnail_url || thumbnailUrl}
              alt={title}
              // lqip={lqip}
              eager={false}             // set true for above-the-fold items
              // rounded="rounded-t-xl"
            />

              {/* <img
                src= loading="lazy" decoding="async" alt={title || 'bg-img'}
                className='rounded-xl h-64 md:h-48 w-full object-cover'
              /> */}
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title capitalize tracking-wider'>{title}</h2>
              <span className='text-secondary'>{date}</span>
              {copyright && <span className='text-secondary'> © {copyright}</span>}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default EventsGrid