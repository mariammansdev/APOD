import { PerformedImage } from "..";
const APODImage = ({ event, idx, favorites, isFavPage }) => {
  const nextIdx = idx === favorites.length - 1 ? 0 : idx + 1;
  const prevIdx = idx === 0 ? favorites.length - 1 : idx - 1;

  const handleImageClick = (eventFav) => {
    if (eventFav && eventFav.url) window.open(eventFav.url);
    if (event && event.url) window.open(event.url);
  }
  return (
    <div id={`slide${idx}`} key={event.date} className='relative w-full h-[80vh] flex items-center justify-center'>
      <div className='flex justify-center items-center'>
        {!isFavPage ?
          <PerformedImage
            src={event.url}
            alt={event.title}
            // lqip={lqip}
            eager={false}
            className='w-[90%] h-[80vh]  rounded-xl cursor-pointer object-fill'
            onClick={() => handleImageClick(event)}
          // rounded="rounded-t-xl"
          />
          :

          <PerformedImage
            src={event.url}
            alt={event.title}
            // lqip={lqip}
            isFavPage={true}
            eager={false}
            className='w-[80%] h-[80vh] rounded-xl cursor-pointer object-fill'
            onClick={() => handleImageClick(event)}
          // rounded="rounded-t-xl"
          />
        }
        {/* <img src={event.url} className='w-[80%] h-[80vh] rounded-xl cursor-pointer object-fill' onClick={() => handleImageClick(event)} />} */}

      </div>
      {favorites.length > 1 && isFavPage && <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href={`#slide${prevIdx}`} className="btn btn-circle cursor-pointer">❮</a>
        <a href={`#slide${nextIdx}`} className="btn btn-circle cursor-pointer">❯</a>
      </div>
      }
    </div>
  )
}

export default APODImage