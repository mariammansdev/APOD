import Main from './components/apod_components/Main';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home_components/Home';
import "react-datepicker/dist/react-datepicker.css";
import Body from './components/home_components/Body';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: Infinity,
        staleTime: Infinity
      }
    }
  });
  return (
    <QueryClientProvider client ={queryClient}>
    <Routes>
      <Route path='/' element = {<Body />} />
      <Route path='/apod' element = {<Main />} />
    </Routes>
    </QueryClientProvider>
  );
}

export default App;
