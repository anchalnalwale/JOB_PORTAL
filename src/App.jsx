
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Button } from './components/ui/button'
import JobListing from './pages/job-listing';

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children: [
      {
        path:"/",
        element:<LandingPage/>
      },
      {
        path:"/onboarding",
        element:<Onboarding/>,
      },
      {
        path:'/jobs',
        element:<JobListing/>
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App
