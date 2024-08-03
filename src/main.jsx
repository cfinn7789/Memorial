import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import './App.css';

import App from './App';
import Home from './pages/Home';
// import About from './pages/About';
// import Gallery from './pages/Gallery';
// import Stories from './pages/Stories';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    //   {
    //     path: '/About',
    //     element: <About />,
    //   },
    //   {
    //     path: '/Gallery',
    //     element: <Gallery />,
    //   },
    //   {
    //     path: '/Stories',
    //     element: <Stories />,
    //   },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);