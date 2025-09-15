import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Aboutus from './components/AboutUs/Aboutus.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import Portfolio from './components/PortFolio/Portfolio.jsx'
import Service from './components/Services/Service.jsx'
import Fullstack from './components/Services/Fullstack.jsx'
import Home from './components/Homepage/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
     {
        path: '/',
        element: <Home />,
      },{
        path: '/about',
        element: <Aboutus />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/service',
        element: <Service />,
      },
      {
        path: '/service/fullstack',
        element: <Fullstack />,
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
