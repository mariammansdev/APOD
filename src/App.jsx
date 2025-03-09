import Main from './pages/Main';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import "react-datepicker/dist/react-datepicker.css";
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
      <Route path='/' element = {<Home />} />
      <Route path='/apod' element = {<Main />} />
    </Routes>
    </QueryClientProvider>
  );
}

export default App;
