import { useEffect, useState } from 'react';
import Footer from './Footer';

const DisplayAPOD = (props) => {
  const { handleToggleModal, showModal, event } = props
  
  // Guard against undefined event
  if (!event) {
    return <div className='flex items-center justify-center h-screen'>Loading...</div>;
  }
  
  // const [loaded, setLoaded] = React.useState(false);
  function handleImageClick () {
    if (event.url) window.open(event.url);
  }
  const [animateBtn, setAnimateBtn] = useState(true);
  useEffect(() => {
    // remove animation class after the animation finishes (duration + delay)
    const t = setTimeout(() => setAnimateBtn(false), 1200);
    return () => clearTimeout(t);
  }, []);

    return (

      <div className='mx-auto flex flex-col w-full h-[calc(100vh-120px)]' >
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
              <img src={event.hdurl} alt={event.title || 'bg-img'} className="h-full w-full object-cover cursor-pointer transform transition duration-300 hover:scale-105" onClick={handleImageClick} />
            </div>
          )}
        </div>

        {/* Side column for the info button - sits next to the media */}
        <div className="w-24 flex items-start justify-center p-4">
          <button
            onClick={handleToggleModal}
            aria-label="More info"
            className={`btn btn-ghost p-3 rounded-full w-14 h-14 text-2xl shadow-lg ${animateBtn ? 'animate-popshake' : ''}`}>
            <i className="fa-solid fa-circle-info text-2xl"></i>
          </button>
        </div>
      </div>
      {/* footer below media */}
      {/* <Footer showModal={showModal} handleToggleModal={handleToggleModal} data={event} /> */}
      </div>

   
  )
}

export default DisplayAPOD
