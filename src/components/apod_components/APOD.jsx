import {useState } from "react";
import { useLocation } from 'react-router-dom';
import Main from './Main';
import SideBar from './SideBar';
import Footer from './Footer';
import useAPOD from "./hooks/useAPOD";
import LoadingState from "./LoadingState";
import useFormat from "./hooks/useFormat";

function APOD() {
    const [showModal, setShowModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
   
    function handleToggleModal() {
        setShowModal(!showModal);
        setIsOpen(!isOpen)
    }
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
    const location = useLocation();
    const params = location.state;
    const dateParam = useFormat(params.date);
    const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}&concept_tags=${true}&date=${dateParam}`;
    const data = useAPOD(url);

    return (
        <>
            {data ? 
                (<Main data={data} />) 
                : (<LoadingState />)
            }
            {showModal && <SideBar showModal={showModal} handleToggleModal={handleToggleModal} data={data} isOpen={isOpen} />}
            {data && (<Footer showModal={showModal} handleToggleModal={handleToggleModal} data={data} />)}
        </>
    )
}

export default APOD