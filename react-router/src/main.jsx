import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Router, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements, useLocation } from 'react-router-dom'
import App from './App.jsx'
import {Home,About,Contact,User,Github,githubLoaderInfo} from "./components/index.js"



//! Second method to create a router


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<App />}  >

      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route loader={githubLoaderInfo} path='github' element={<Github />} />
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

//! First method to create a router
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },{
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])



