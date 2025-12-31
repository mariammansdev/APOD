import { useState, useEffect } from "react";
import DisplayAPOD from './DisplayAPOD';
import SideBar from './SideBar';

// import useAPOD from "../hooks/useAPOD";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useFavorites} from '../../context/FavoritesContext'

function Main({event}) {
      useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
    
  // const {isOpen, showModal, handleInfoModal} = useFavorites();
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleInfoModal = () =>{
      debugger
      setShowModal(!showModal);
      setIsOpen(!isOpen)
  }
       
    return (
        <section className="w-full h-[full] overflow-hidden"  /*data-aos="fade-down"*/>
            <DisplayAPOD event={event} showModal={showModal} handleInfoModal={handleInfoModal}/>
            {showModal && <SideBar showModal={showModal} handleInfoModal={handleInfoModal} data={event} isOpen={isOpen} />}
        </section>
    )
}

export default Main