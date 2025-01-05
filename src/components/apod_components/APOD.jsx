import {useState } from "react";
import { useLocation } from 'react-router-dom';
import Main from './Main';
import SideBar from './SideBar';
import Footer from './Footer';
import useAPOD from "./hooks/useAPOD";
import LoadingState from "./LoadingState";

function APOD() {
    const [showModal, setShowModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { apodQuery, isLoading, isError, error } = useAPOD(location);
    function handleToggleModal() {
        setShowModal(!showModal);
        setIsOpen(!isOpen)
    }

    if (isLoading) return (<LoadingState />)
    if (isError) return (<h3>{error || 'Unknown Error'}</h3>)
    return (
        <>
            <Main data={apodQuery} />
            {showModal && <SideBar showModal={showModal} handleToggleModal={handleToggleModal} data={apodQuery} isOpen={isOpen} />}
            <Footer showModal={showModal} handleToggleModal={handleToggleModal} data={apodQuery} />
        </>
    )
}

export default APOD