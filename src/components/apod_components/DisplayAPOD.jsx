import Footer from './Footer';
const DisplayAPOD = (props) => {
  const { event, handleToggleModal, showModal } = props
  // const [loaded, setLoaded] = React.useState(false);

  function handleImageClick () {
    if (event.url) window.open(event.url);
  }
  return (
 
      <div className='relative mx-auto flex flex-col  w-fit h-[calc(100vh-120px)] overflow-hidden' >
      {event['media_type'] === 'video' ?
        (
          <div className="ratio ratio-16x9">
            <iframe width="560"
              height="315"
              src={event.url}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={true}
              className='absolute w-full h-[80vh] object-fill'>
            </iframe>
          </div>
        )
        : (
          <div>
            {/* {!loaded && <div>Loading...</div>} */}
            <img src={event.hdurl} alt={event.title || 'bg-img'} className="h-full w-full object-cover cursor-pointer transform transition duration-300 hover:scale-105" onClick={handleImageClick} /*onLoad={() => setLoaded(true)}*/ />
          </div>

        )
      }
      <Footer showModal={showModal} handleToggleModal={handleToggleModal} data={event} />

      </div>
   
  )
}

export default DisplayAPOD
