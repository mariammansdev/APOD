import { FeaturedEvents, Hero } from "../components"
import { customFetch, apodurl } from "../utils";

const url = `${apodurl}&count=9`

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
  return (
    <>
      <Hero />
      <FeaturedEvents />
    </>
  )
}

export default Landing