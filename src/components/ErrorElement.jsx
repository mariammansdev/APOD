import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  const msg = error?.response?.data?.msg || "There was an error...";

  return <h4 className='font-bold text-4xl'>
    {msg}
  </h4>;
};
export default ErrorElement;
