import { Filters, EventsContainer, PaginationContainer } from "../components";
import { customFetch } from "../utils"
const url = '/events';

const fetchEvents = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;
  return {
    queryKey: [
      'events',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch(url, { params: queryParams })
  }
}



export const loader = (queryClient) => async ({ request }) => {
  debugger
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  const res = await queryClient.ensureQueryData(fetchEvents(params));
  const events = res.data.data;
  const meta = res.data.meta;
  return { events, meta, params };
}
const Events = () => {
  return (
    <>
      <Filters />
      <EventsContainer />
      <PaginationContainer />
    </>
  )
}

export default Events