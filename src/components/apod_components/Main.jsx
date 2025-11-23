import { useState } from "react";
// import { useLocation } from 'react-router-dom';
import DisplayAPOD from './DisplayAPOD';
import SideBar from './SideBar';

// import useAPOD from "../hooks/useAPOD";
import LoadingState from "../../pages/LoadingState";

function Main({event}) {
    const [showModal, setShowModal] = useState(false);
       const [isOpen, setIsOpen] = useState(false);
     
       function handleToggleModal() {
           setShowModal(!showModal);
           setIsOpen(!isOpen)
       }
   
    
    // if (isLoading) return (<LoadingState />)
    // if (isError) return (<h3>{error || 'Unknown Error'}</h3>)
    return (
        <section className="w-full h-[full]">
            <DisplayAPOD showModal={showModal} handleToggleModal={handleToggleModal} event = {event}/>
            {showModal && <SideBar showModal={showModal} handleToggleModal={handleToggleModal} data={event} isOpen={isOpen} />}
        </section>
    )
}

export default Main