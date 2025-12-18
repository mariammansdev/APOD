
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  About,
  Fav,
  Error,
  HomeLayout,
  Landing,
  Events,
  SingleEvent,
} from './pages'


import ErrorElement from './components/ErrorElement'

import {loader as landingLoder} from './pages/Landing'
import {loader as singleEventLoader} from './pages/SingleEvent'
import { loader as eventsLoader } from './pages/Events';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: Infinity,
        staleTime: Infinity
      }
    }
  });
   const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoder(queryClient),
          errorElement: <ErrorElement />
        },
        {
          path: 'events',
          errorElement: <ErrorElement />,
          loader: eventsLoader(queryClient),
          element: <Events />
        },
        {
          path: 'events/:date',
          element: <SingleEvent />,
          loader: singleEventLoader(queryClient),
        },
        {
          path: 'fav',
          element: <Fav />,
        },
      {
        path: 'about',
        element: <About />,
      }
      ]
    }
  ]);
  // return (
    
  //   <QueryClientProvider client ={queryClient}>
  //   <Routes>
  //     <Route path='/' element = {<Home />} />
  //     <Route path='/apod' element = {<Main />} />
  //   </Routes>
  //   </QueryClientProvider>
  // );
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
