import { useNavigation, useLocation, useNavigate } from "react-router-dom";
import LoadingState from "./LoadingState";
import { DisplayAPOD } from "../components";
import {useFavorites} from '../context/FavoritesContext'
import { useRef, useEffect } from "react";
const Fav = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const location = useLocation();
  const {showModal, handleInfoModal} = useFavorites();
  const handleBack = () => {
      const fallback = location.state?.listUrl ?? "/events";
      navigate(fallback, { replace: false });
  };

const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a || !root.contains(a)) return;

      e.preventDefault();
      const targetId = a.getAttribute("href").slice(1);
      const targetEl = root.querySelector(`#${CSS.escape(targetId)}`);
      targetEl?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });

      // Remove hash from URL to keep history clean
      history.replaceState(null, "", location.pathname + location.search);
    };

    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, []);


  if (navigation.state == 'loading') {
    return <div className='w-full h-[90vh]'>
      <LoadingState />
    </div>
  }

  return (
    // <div className='carousel w-full rounded-box'>{
    //   events.map((event, idx) => {
    //     const nextIdx = idx === events.length - 1 ? 0 : idx + 1;
    //     const prevIdx = idx === 0 ? events.length - 1 : idx - 1;
    //     return <div id={`slide${idx}`} key={event.date} className='carousel-item relative w-full'>
    //       <img src={event.url} className='w-full h-[80vh]' />
    //       <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    //         <a href={`#slide${prevIdx}`} className="btn btn-circle cursor-pointer">❮</a>
    //         <a href={`#slide${nextIdx}`} className="btn btn-circle cursor-pointer">❯</a>
    //       </div>
    //     </div>
    //   })
    // }</div>
    <>

    <div className='text-md breadcrumbs'>
        <button
          onClick={handleBack}
          className="btn btn-ghost"
          aria-label="Back to Events"
        >
          ← Back to Events
        </button>
      </div>

       <DisplayAPOD isFavPage = {true} showModal={showModal} handleInfoModal={handleInfoModal} containerRef={containerRef}/>
    </>
   
  )
}

export default Fav