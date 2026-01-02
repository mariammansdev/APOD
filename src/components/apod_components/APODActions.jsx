import { BsHeartFill, BsInfoCircleFill } from 'react-icons/bs';
import { useFavorites } from '../../context/FavoritesContext'
import { useState, useEffect } from 'react';

const APODActions = (props) => {
  const { isFavPage, favorites, event, handleInfoModal } = props;
  const { isFavorite, toggleFavorite, updateCurrentFavourite } = useFavorites();
  const checkIsFavEvent = (date) => {
    return isFavorite(date);
  }
  const [animateBtn, setAnimateBtn] = useState(true);
  const onClickInfo = () => {
    handleInfoModal();
    updateCurrentFavourite(event);
  }
  useEffect(() => {
    const t = setTimeout(() => setAnimateBtn(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {(isFavPage && favorites.length > 0 || !isFavPage) && <button
        onClick={onClickInfo}
        aria-label="More info"
        className={`btn btn-ghost cursor-pointer p-3 rounded-full w-14 h-14 text-2xl shadow-lg ${animateBtn ? 'animate-popshake' : ''}`}>
        <BsInfoCircleFill className='h-10 w-10' />
        {/* <i className="fa-solid fa-circle-info text-2xl"></i>       */}
      </button>}
      {<button
        onClick={() => toggleFavorite(event)}
        className={`btn btn-ghost cursor-pointer p-3 rounded-full w-14 h-14 text-2xl shadow-lg ${animateBtn ? 'animate-popshake' : ''}`}
      >
        <BsHeartFill className="h-10 w-10  transition duration-300" color={checkIsFavEvent(event.date) ? '#EA4335' : ''} />
      </button>}
    </>

  )
}

export default APODActions