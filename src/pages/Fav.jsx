import { useNavigation } from "react-router-dom";
import LoadingState from "./LoadingState";
import { getAllEvents } from "../utils";

const Fav = () => {
  const navigation = useNavigation();
  if (navigation.state == 'loading') {
    return <div className='w-full h-[90vh]'>
      <LoadingState />
    </div>
  }

  const events = getAllEvents();
  return (
    <div className='w-full h-[80vh] carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>{
      events.map((event) => {
        return <div key={event.date} className='carousel-item'>
          <img src={event.url} className='rounded-box h-full w-80 object-cover' />
        </div>
      })
    }</div>
  )
}

export default Fav