
const APODImage = ({event, idx, favorites, isFavPage}) => {
    const nextIdx = idx === favorites.length - 1 ? 0 : idx + 1;
    const prevIdx = idx === 0 ? favorites.length - 1 : idx - 1;
  
  const handleImageClick = (eventFav) => {
    if (eventFav && eventFav.url) window.open(eventFav.url);
    if (event && event.url) window.open(event.url);
  }
  return (
    <div id={`slide${idx}`} key={event.date} className='carousel-item relative w-full flex flex-col'>
        <div>
  <img src={event.url} className='w-full h-[80vh] cursor-pointer object-fill' onClick={() => handleImageClick(event)} />
        {favorites.length > 1 && isFavPage && <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href={`#slide${prevIdx}`} className="btn btn-circle cursor-pointer">❮</a>
            <a href={`#slide${nextIdx}`} className="btn btn-circle cursor-pointer">❯</a>
        </div>
        }
        </div>
      
         <div> 
                     <p className="text-2xl  leading-relaxed mt-9 font-exo2 mb-16">
                          {event.explanation}
                        </p>
                </div>
    </div>
  )
}

export default APODImage