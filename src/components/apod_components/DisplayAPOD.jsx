import { useEffect, useState, useRef, useMemo } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { useFavorites } from '../../context/FavoritesContext';
import Theatre from './Theatre';
import APODImage from './APODImage';
import APODActions from './APODActions';
import RotatingHero from '../RotatingHero';

const DisplayAPOD = (props) => {

  const { handleInfoModal, event, isFavPage, containerRef } = props;
  const { favorites } = useFavorites()

  return (

    <div className='mx-auto flex  w-full h-[calc(100vh-14.5rem)]' >
      <div className="absolute inset-0 -z-10 flex justify-center">
        <RotatingHero size={560} hideSun={true} />
      </div>
      <div className={"carousel w-full rounded-box "}>
        {isFavPage ? (
          <div className='carousel w-full rounded-box ' ref={containerRef} >{
            favorites.map((event, idx) => {
              return (
                <div key={idx} className="carousel-item w-full ">
                  {event['media_type'] === 'video' ? (
                    <Theatre event={event} idx={idx} favorites={favorites} isFavPage={isFavPage} />
                  ) : (
                    <APODImage event={event} idx={idx} favorites={favorites} isFavPage={isFavPage} />
                  )}
                  <APODActions isFavPage={isFavPage} favorites={favorites} event={event} handleInfoModal={handleInfoModal} />
                </div>
              )
            })
          }</div>
        )
          :
          (<div className=" w-full flex justify-center">
            {event['media_type'] === 'video' ? (
              <Theatre event={event} favorites={favorites} isFavPage={isFavPage} />
            ) : (
              <div>
                <APODImage event={event} favorites={favorites} isFavPage={isFavPage} />

              </div>
            )}
            {<div className="w-24 flex flex-col p-4">
              <APODActions isFavPage={isFavPage} favorites={favorites} event={event} handleInfoModal={handleInfoModal} />
            </div>}          </div>
          )
        }
        {/* Side column for the info button - sits next to the media */}

      </div>
    </div>


  )
}

export default DisplayAPOD
