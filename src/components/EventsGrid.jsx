import {useLoaderData } from 'react-router-dom';
import EventCard from './EventCard';

const EventsGrid = () => {
  let { events } = useLoaderData();
  if (!Array.isArray(events)) {
    events = [events];
  }
  function getYouTubeId(url) {
    if (!url) {
      return;
    }
    const regExp = /(?:youtube\.com.*v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  }


  return (
    <div className='pt-12 mb-14 px-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {events.map((apodEvent) => {
        return (
         <EventCard  key={apodEvent.date} apodEvent= {apodEvent} getYouTubeId={getYouTubeId}/>
        );
      })}
    </div>
  );
}

export default EventsGrid