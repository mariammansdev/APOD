import { useEffect, useState, useRef, useMemo } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { useFavorites } from '../../context/FavoritesContext';
import Theatre from './Theatre';
import APODImage from './APODImage';
import APODActions from './APODActions';

const DisplayAPOD = (props) => {
  
  const { handleInfoModal, event, isFavPage, containerRef } = props;
  const { favorites } = useFavorites()

  return (
    
    <div className='mx-auto flex  w-full h-[calc(100vh-14.5rem)]' >
      <div className={"carousel w-full rounded-box "}>
        {isFavPage ? (
          <div className='carousel w-full rounded-box ' ref={containerRef } >{
            favorites.map((event, idx) => {
              return (
                
                event['media_type'] === 'video' ? (
                  <Theatre event={event} idx={idx} favorites={favorites} isFavPage={isFavPage}/>
                ) :
                  <APODImage event={event} idx={idx} favorites={favorites} isFavPage={isFavPage}/>
              )
            })
          }</div>
        )
          :
          (<div className="flex-1 w-full">
            {event['media_type'] === 'video' ? (
              <Theatre event={event} favorites={favorites} isFavPage={isFavPage}/>
            ) : (
              <div>
              <APODImage event={event} favorites={favorites} isFavPage={isFavPage}/>
              <button
                      onClick={handleInfoModal}
                      aria-label="More info"
                      className={`btn btn-ghost p-3 rounded-full w-14 h-14 text-2xl shadow-lg ${animateBtn ? 'animate-popshake' : ''}`}>
                      <BsInfoCircleFill className='h-10 w-10' />
                      {/* <i className="fa-solid fa-circle-info text-2xl"></i>       */}
                      </button>
                      </div>
            )}
          </div>)
        }
        {/* Side column for the info button - sits next to the media */}
        {<div className="w-24 flex flex-col p-4">
          <APODActions isFavPage={isFavPage} favorites={favorites} event={event} handleInfoModal={handleInfoModal}/>
        </div>}
      </div>
    </div>


  )
}

export default DisplayAPOD
