import { useRouteError, Link, useNavigation } from "react-router-dom"
import LoadingState from "./LoadingState";

const Error = () => {
  const error = useRouteError();
  const data = error.data ? error.data.substring(6) : '';
  const status = error.status;
  const navigation = useNavigation();
  if (navigation.state == 'loading') {
    return <div className='w-full h-[90vh]'>
      <LoadingState />
    </div>
  }
  return (
    <main className="grid min-h-[100vh] place-items-center">
      <div className="text-center">
        {status == '404' && <p className="font-bold text-8xl text-red-600 mb-10">{error.status}</p>}
        <h1 className="my-4 text-2xl font-semibold tracking-tight sm:text-5xl">Page Not Found</h1>
        <p className="text-lg leading-7">{`Sorry we couldn't find the page you're looking for. ${data}`}</p>
      </div>
      <div>
        <Link to='/' className="btn btn-secondary">Back to Home</Link>
      </div>
    </main>
  )
}

export default Error