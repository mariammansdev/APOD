import EventsGrid from './EventsGrid';
import SectionTitle from './SectionTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FeaturedEvents = () => {
  
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  
  return (
    <div className='pt-24'  data-aos="fade-up">
      <SectionTitle text='featured Events' />
      <EventsGrid />
    </div>
  );
};
export default FeaturedEvents;
