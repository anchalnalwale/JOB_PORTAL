
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Button } from './components/ui/button'
import JobListing from './pages/job-listing';
import JobPage from './pages/job';

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
        path:"/jobs",
        element:<JobListing/>
      },
      {
        path:"/job/:id",
        element:<JobPage/>
      },
      {
        path:"/post-job",
        element:<PostJob/>
      },
      {
        path:"/saved-job",
        element:<SavedJobs/>
      },
      {
        path:"/my-jobs",
        element:<MyJobs/>
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
