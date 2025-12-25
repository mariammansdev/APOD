import { useNavigation } from "react-router-dom";
import LoadingState from "./LoadingState";
import { getAllEvents } from "../utils";
import { DisplayAPOD } from "../components";

const Fav = () => {
  const navigation = useNavigation();
  if (navigation.state == 'loading') {
    return <div className='w-full h-[90vh]'>
      <LoadingState />
    </div>
  }

  const events = getAllEvents();
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
    <DisplayAPOD isFavPage = {true} favEvents = {events} />
  )
}

export default Fav