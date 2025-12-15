
import { customFetch } from '../utils';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { Main } from '../components';
import { useNavigation } from "react-router-dom";
import LoadingState from "./LoadingState";

const singleEventQuery = (date) => {
  return {
    queryKey: ['single-event', date],
    queryFn: async () => {
      const res = await customFetch(`&date=${date}`);
      return res.data;
    },
  }

}

export const loader = (queryClient) => async ({ params }) => {
  const event = await queryClient.ensureQueryData(singleEventQuery(params.date));
  return { event };
}
const SingleEvent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { event } = useLoaderData();

  const cameFromList = Boolean(location.state?.fromList);

  const handleBack = () => {
    if (cameFromList && window.history.length > 1) {
      navigate(-1);
    } else {
      const fallback = location.state?.listUrl ?? "/events";
      navigate(fallback, { replace: false });
    }
  };


  const navigation = useNavigation();
  if (navigation.state == 'loading') {
    return <div className='w-full h-[90vh]'>
      <LoadingState />
    </div>
  }
  return (
    <section>
      {/* <div className='text-md breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/events'>Events</Link>
          </li>
        </ul>
      </div> */}
      <div className='text-md breadcrumbs'>
        <button
          onClick={handleBack}
          className="btn btn-ghost"
          aria-label="Back to Products"
        >
          ← Back to Events
        </button>
      </div>


      < Main event={event} />

    </section>

  );
}

export default SingleEvent