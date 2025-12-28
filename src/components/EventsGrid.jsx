import { Link, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { getAllEvents } from '../utils';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EventsGrid = () => {
  const isFavEvent = favEvents.some((ev)=> ev.date === event.date);
  const [isFav, setIsFav] = useState(isFavEvent);
  const favEvents = getAllEvents();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
 const handleAddToFav = () => {

    //if doesnt exist
    
    if (isFavEvent) {
      localStorage.removeItem(`event(${event.date})`);
      setIsFav(false);
    }
    //{ 
   
    //}
    else {
      localStorage.setItem(`event(${event.date})`, JSON.stringify(event));

      //show toast
      setIsFav(true);
    }
   
     
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
    <div className='pt-12 mb-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {events.map((event) => {
        const { title, date, hdurl, thumbnail_url, url, copyright } = event;
        const videoId = thumbnail_url ? '' : getYouTubeId(url);
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

        return (
          <Link
            key={date}
            to={`/events/${date}`}
            className='card w-full shadow-xl hover:shadow-2xl transition duration-300 indicator'
            data-aos="fade-up"
          >
            <figure className='px-4 pt-4 '>
              <button>
                <BsHeartFill className="h-10 w-10 badge badge-sm hover:badge-md hover:h-12 hover:w-12 badge-secondary indicator-item transition duration-300" 
                  color={isFav ? '#EA4335' : 'white'}
                  onClick={(e) => {
                    debugger
                  e.preventDefault();
                  e.stopPropagation();
                  handleAddToFav(event);
                }}/>
              </button>
               
              <img
                src={hdurl || thumbnail_url || thumbnailUrl} alt={title || 'bg-img'}
                className='rounded-xl h-64 md:h-48 w-full object-cover'
              />
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