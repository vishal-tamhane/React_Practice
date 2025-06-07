import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import React from 'react'
import { Link } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './components/contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"about",
        element: <About />,

      },
      {
        path:"contact",
        element:<Contact />,
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
