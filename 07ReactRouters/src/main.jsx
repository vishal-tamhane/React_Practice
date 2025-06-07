import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import { createRoutesFromChildren, Link } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './components/contact.jsx'
import User from './components/User/User.jsx'
import { Route } from 'react-router-dom'
import Github from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children:[
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path:"about",
//         element: <About />,

//       },
//       {
//         path:"contact",
//         element:<Contact />,
//       },
//     ]
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' element={<Github />} />
      <Route path='*' element={<div>404 Not Found</div>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
