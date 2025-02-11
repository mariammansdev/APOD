const DisplayAPOD = (props) => {
  const { data } = props
  function handleImageClick () {
    if (data.url) window.open(data.url);
  }
  return (
    <div className = 'imgContainer'>
      {data['media_type'] === 'video' ?
        (
          <div className="ratio ratio-16x9">
            <iframe width="560" 
              height="315" 
              src={data.url} 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen= {true}
              className='video-iframe'>
            </iframe>
          </div>
        )
        : (
          <img src={data.hdurl} alt={data.title || 'bg-img'} className="bgImage" onClick={handleImageClick}/>
        )
      }
    </div>
  )
}

export default DisplayAPOD
