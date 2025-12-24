import { useEffect, useState } from 'react';
import { BsHeartFill, BsInfoCircleFill } from 'react-icons/bs';

const DisplayAPOD = (props) => {
  const { handleInfoModal, event } = props

  const handleImageClick = () => {
    if (event.url) window.open(event.url);
  }
  const handleAddToFav = () => {
    localStorage.setItem(`event(${event.date})`, JSON.stringify(event));
  }
  const [animateBtn, setAnimateBtn] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setAnimateBtn(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (

    <div className='mx-auto flex flex-col w-full h-[calc(100vh-14.5rem)]' >
      <div className="flex-1 flex">
        <div className="flex-1 w-full">
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
            <div className="w-full h-full relative overflow-hidden">
              <img src={event.url} alt={event.title || 'bg-img'} className="h-full w-full object-fill cursor-pointer transform transition duration-300 hover:scale-105" onClick={handleImageClick} />
            </div>
          )}
        </div>

        {/* Side column for the info button - sits next to the media */}
        <div className="w-24 flex flex-col p-4">
          <button
            onClick={handleInfoModal}
            aria-label="More info"
            className={`btn btn-ghost p-3 rounded-full w-14 h-14 text-2xl shadow-lg ${animateBtn ? 'animate-popshake' : ''}`}>
            <BsInfoCircleFill className='h-10 w-10' />
            {/* <i className="fa-solid fa-circle-info text-2xl"></i>       */}
          </button>
          <button
            onClick={handleAddToFav}
            className={`btn btn-ghost p-3 rounded-full w-14 h-14 text-2xl shadow-lg ${animateBtn ? 'animate-popshake' : ''}`}
          >
            <BsHeartFill className="h-10 w-10" />
          </button>
        </div>
      </div>
    </div>


  )
}

export default DisplayAPOD
