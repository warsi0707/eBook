import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/navbar.jsx'
import Home from './components/Home.jsx'
import Add
 from './components/Add.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Edit from './components/Edit.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element : <><Navbar/><Home/></>
  },
  {
    path: "/add",
    element: <><Navbar/><Add/></>
  },
  {
    path: "/login",
    element: <><Navbar/><Login/></>
  },
  {
    path: "/signup",
    element: <><Navbar/><Signup/></>
  },
  {
    path: "/edit", //:id add
    element: <><Navbar/><Edit/></>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
