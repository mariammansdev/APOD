import { useState, useEffect } from "react";
// import { useLocation } from 'react-router-dom';
import DisplayAPOD from './DisplayAPOD';
import SideBar from './SideBar';

// import useAPOD from "../hooks/useAPOD";
import AOS from 'aos';
import 'aos/dist/aos.css';

import LoadingState from "../../pages/LoadingState";

function Main({event}) {
      useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
    
    const [showModal, setShowModal] = useState(false);
       const [isOpen, setIsOpen] = useState(false);
     
       function handleToggleModal() {
           setShowModal(!showModal);
           setIsOpen(!isOpen)
       }
   
    
    // if (isLoading) return (<LoadingState />)
    // if (isError) return (<h3>{error || 'Unknown Error'}</h3>)
    return (
        <section className="w-full h-[full]"  /*data-aos="fade-down"*/>
            <DisplayAPOD showModal={showModal} handleToggleModal={handleToggleModal} event = {event}/>
            {showModal && <SideBar showModal={showModal} handleToggleModal={handleToggleModal} data={event} isOpen={isOpen} />}
        </section>
    )
}

export default Main