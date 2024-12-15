import {useState } from "react";
import Main from './Main';
import SideBar from './SideBar';
import Footer from './Footer';
import useAPOD from "./hooks/useAPOD";

function APOD() {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
    const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`;
    const data = useAPOD(url);
    const [showModal, setShowModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    function handleToggleModal() {
      setShowModal(!showModal);
      setIsOpen(!isOpen)
    }

    return (
        <>
            {data ? 
                (<Main data={data} />) 
                : (
                <div className='loadingState'>
                    <i className="fa-solid fa-gear"></i>
                </div>
                )
            }
            {showModal && <SideBar showModal={showModal} handleToggleModal={handleToggleModal} data={data} isOpen={isOpen} />}
            {data && (<Footer showModal={showModal} handleToggleModal={handleToggleModal} data={data} />)}
        </>
    )
}

export default APOD