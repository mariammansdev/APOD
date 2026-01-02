import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import PerformedImage from './PerformedImage';
import { BsHeartFill } from 'react-icons/bs';
import { useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EventCard = ({apodEvent, getYouTubeId}) => {
    const { title, date, hdurl, thumbnail_url, url, copyright } = apodEvent;
    const videoId = thumbnail_url ? '' : getYouTubeId(url);
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    const { isFavorite, toggleFavorite, theme, themes } = useFavorites();
    const checkIsFavEvent = (date) => {
        return isFavorite(date);
    }
    const isLightTheme = useCallback(()=>{
        return Object.keys(themes).find(key => themes[key] === theme) != "night";
    }, [theme]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

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
                <BsHeartFill className={`h-10 w-10 badge badge-sm hover:badge-md hover:h-12 hover:w-12 ${isLightTheme() ? "badge-primary": "badge-primary"}  indicator-item transition duration-300`}
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
        </figure>
        <div className='card-body items-center text-center'>
            <h2 className='card-title capitalize tracking-wider'>{title}</h2>
            <span className='text-secondary'>{date}</span>
            {copyright && <span className='text-secondary'> © {copyright}</span>}
        </div>
    </Link>
  )
}

export default EventCard