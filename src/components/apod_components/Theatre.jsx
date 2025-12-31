import React from 'react'

const Theatre = ({event, idx, favorites, isFavPage, refs}) => {
    const nextIdx = idx === favorites.length - 1 ? 0 : idx + 1;
    const prevIdx = idx === 0 ? favorites.length - 1 : idx - 1;
  return (
    <div id={`slide${idx}`} key={event.date} className='carousel-item relative w-full '  ref={refs[idx]}>
                    <iframe
                      src={event.url}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen={true}
                      className='w-full h-[80vh]'>
                    </iframe>
                   { isFavPage && favorites.length > 1 && <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href={`#slide${prevIdx}`} className="btn btn-circle cursor-pointer">❮</a>
                      <a href={`#slide${nextIdx}`} className="btn btn-circle cursor-pointer">❯</a>
                    </div>
                    }
                  </div>
  )
}

export default Theatre