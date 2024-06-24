import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dealership from './components/Pages/Dealership.jsx'
import Sites from './components/Pages/Sites'
import AboutUs from './components/Pages/AboutUs'
import ForBuyers from './components/Pages/ForBuyers'
import Home from './components/Pages/Hero.jsx'
import BuyHome from './components/Pages/BuyHome.jsx'
import Commercial from './components/Pages/Commercial.jsx'
import Land from './components/Pages/Land.jsx'
import Flat from './components/Pages/Flat.jsx'
import Villa from './components/Pages/Villa.jsx'
import Contact from './components/Pages/Contact.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
const router = createBrowserRouter([
  {
    path: '/', // Set the path to '/'
    element: <App />,
    children: [
      // default route
      {
        path: '', // Empty path for default route
        element: <Home />, // Render Home component as default
      },

      // --------------------------------------------------------------------------------------------------


      {
        path: 'Home',
        element: <Home />,
      },
      {
        path: 'AboutUs',
        element: <AboutUs />,
      },
      {
        path: 'sites',
        element: <Sites />,
      },
      {
        path: 'ForBuyers',
        element: <ForBuyers />,

      },
      {
        path: 'BuyHome',
        element: <BuyHome />,

      },
      {
        path: 'Commercial',
        element: <Commercial />,

      },
      {
        path: 'Land',
        element: <Land />,

      },
      {
        path: 'Flat',
        element: <Flat />,

      },
      {
        path: 'Villa',
        element: <Villa />,

      },
      {
        path: 'Dealership',
        element: <Dealership />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
       domain="dev-627ef7pt0sitk8q1.us.auth0.com"
       clientId="JX64kVBCN4MrSTqmDZhfTTiXXxWciDyA"
       authorizationParams={{
         redirect_uri: window.location.origin
       }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
)