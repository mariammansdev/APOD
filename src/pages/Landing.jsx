import { FeaturedEvents, Hero } from "../components"
import { customFetch, apodurl } from "../utils";
import { useNavigation } from "react-router-dom";
import LoadingState from "./LoadingState";

const url = `${apodurl}&count=6`

const featuredEventsQuery = {
  queryKey: ['featured-events'],
  queryFn: async () => {
    const res = await customFetch(url);
    debugger
    return res.data;
  },
}
export const loader = (queryClient) => async () => {
  const events = await queryClient.ensureQueryData(featuredEventsQuery);

  return { events };
} 
const Landing = () => {
  const navigation = useNavigation();
    if (navigation.state == 'loading') {
      return <div className='w-full h-[90vh]'>
          <LoadingState />
        </div>
    }
  
  return (
    <>
      <Hero />
      <FeaturedEvents />
    </>
  )
}

export default Landing