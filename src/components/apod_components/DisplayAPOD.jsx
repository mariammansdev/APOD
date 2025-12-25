import { useEffect, useState } from 'react';
import { BsHeartFill, BsInfoCircleFill } from 'react-icons/bs';

const DisplayAPOD = (props) => {
  const { handleInfoModal, event, isFavPage, favEvents } = props

  const handleImageClick = (eventFav) => {
    if (eventFav && eventFav.url)  window.open(eventFav.url);
    if (event && event.url) window.open(event.url);
  }
  const handleAddToFav = () => {
    //if doesnt exist

    localStorage.setItem(`event(${event.date})`, JSON.stringify(event));
    //show toast

    //else
      //show message from daisy ui that it already exists
  }
  const [animateBtn, setAnimateBtn] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setAnimateBtn(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (

    <div className='mx-auto flex  w-full h-[calc(100vh-14.5rem)]' >
      <div className={"carousel w-full rounded-box "}>
        {isFavPage ? (
         
           <div className='carousel w-full rounded-box'>{
              favEvents.map((event, idx) => {
                const nextIdx = idx === favEvents.length - 1 ? 0 : idx + 1;
                const prevIdx = idx === 0 ? favEvents.length - 1 : idx - 1;
                return (
                  event['media_type'] === 'video' ? (
                 <div id={`slide${idx}`} key={event.date} className='carousel-item relative w-full'>
                    <iframe
                      src={event.url}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen={true}
                      className='w-full h-[80vh]'>
                    </iframe>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href={`#slide${prevIdx}`} className="btn btn-circle cursor-pointer">❮</a>
                      <a href={`#slide${nextIdx}`} className="btn btn-circle cursor-pointer">❯</a>
                    </div>
                  </div>
                ) :
                <div id={`slide${idx}`} key={event.date} className='carousel-item relative w-full'>

                  <img src={event.url} className='w-full h-[80vh] cursor-pointer object-fill' onClick={()=>handleImageClick(event)} />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href={`#slide${prevIdx}`} className="btn btn-circle cursor-pointer">❮</a>
                    <a href={`#slide${nextIdx}`} className="btn btn-circle cursor-pointer">❯</a>
                  </div>
                </div>
                )
              })
          }</div>
        )
        :
       ( <div className="flex-1 w-full">
          {event['media_type'] === 'video' ? (
            <div className="w-full h-full relative overflow-hidden">
              <iframe
                src={event.url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={true}
                className='w-full h-full'>
              </iframe>
            </div>
          ) : (
            <div className="w-full h-full relative hover-3d">
               <figure className="max-w-100 rounded-2xl">
                <img src={event.url} alt={event.title || 'bg-img'} className="object-fill cursor-pointer " onClick={handleImageClick} />
              </figure>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>)
}
        {/* Side column for the info button - sits next to the media */}
        <div className="w-24 flex flex-col p-4">
          <button
            onClick={handleInfoModal}
            aria-label="More info"
            className={`btn btn-ghost p-3 rounded-full w-14 h-14 text-2xl shadow-lg ${animateBtn ? 'animate-popshake' : ''}`}>
            <BsInfoCircleFill className='h-10 w-10' />
            {/* <i className="fa-solid fa-circle-info text-2xl"></i>       */}
          </button>
          {!isFavPage && <button
            onClick={handleAddToFav}
            className={`btn btn-ghost p-3 rounded-full w-14 h-14 text-2xl shadow-lg ${animateBtn ? 'animate-popshake' : ''}`}
          >
            <BsHeartFill className="h-10 w-10" />
          </button>}
        </div>
      </div>
    </div>


  )
}

export default DisplayAPOD
