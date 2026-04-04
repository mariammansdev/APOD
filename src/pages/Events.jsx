import { Filters, EventsContainer } from "../components";
import { customFetch } from "../utils"
import { useNavigation } from "react-router-dom";
import LoadingState from "./LoadingState";

const url = '';

const fetchEvents = (queryParams) => {
  return {
    queryKey: [
      'events',
      queryParams
    ],
    queryFn: () => customFetch(url, { params: queryParams })
  }
}

export const loader = (queryClient) => async ({ request }) => {
  debugger
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  const res = await queryClient.ensureQueryData(fetchEvents(params));
  const events = res.data;
  const meta = res.data.meta;
  return { events, meta, params };
}
const Events = () => {
 const navigation = useNavigation();
  if (navigation.state == 'loading') {
    return <div className='w-full h-[90vh]'>
        <LoadingState />
      </div>
  }

  return (
    <div className="mb-14">
      <Filters />
      <EventsContainer />
    </div>
  )
}

export default Events