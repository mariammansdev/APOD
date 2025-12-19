import { useState, useEffect } from "react";
import DisplayAPOD from './DisplayAPOD';
import SideBar from './SideBar';

// import useAPOD from "../hooks/useAPOD";
import AOS from 'aos';
import 'aos/dist/aos.css';


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
 
    return (
        <section className="w-full h-[full] overflow-hidden"  /*data-aos="fade-down"*/>
            <DisplayAPOD event={event} showModal={showModal} handleToggleModal={handleToggleModal}/>
            {showModal && <SideBar showModal={showModal} handleToggleModal={handleToggleModal} data={event} isOpen={isOpen} />}
        </section>
    )
}

export default Main