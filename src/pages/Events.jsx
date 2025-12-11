import { Filters, EventsContainer, PaginationContainer } from "../components";
import { customFetch } from "../utils"
import { useNavigation } from "react-router-dom";
import LoadingState from "./LoadingState";

const url = '/events';

const fetchEvents = (queryParams) => {
  const { search, category, date, sort, price, shipping, page } =
    queryParams;
  return {
    queryKey: [
      'events',
      date ?? new Date(),
      // search ?? '',
      // category ?? 'all',
      // company ?? 'all',
      // sort ?? 'a-z',
      // price ?? 100000,
      // shipping ?? false,
      // page ?? 1,
    ],
    queryFn: () => customFetch(url, { params: queryParams })
  }
}



export const loader = (queryClient) => async ({ request }) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  const res = await queryClient.ensureQueryData(fetchEvents(params));
  const events = res.data;
  const meta = res.data.meta;
  return { events, meta, params };
}
const Events = () => {
 const navigation = useNavigation();
  if (navigation.state == 'loading') {
    return <div className='w-full h-[100vh]'>
        <LoadingState />
      </div>
  }

  return (
    <>
      <Filters />
      <EventsContainer />
      {/* <PaginationContainer /> */}
    </>
  )
}

export default Events