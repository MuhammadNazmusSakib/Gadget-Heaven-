import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './Component/Root'
import Dashboard from './Component/New/Dashboard'
import Statistics from './Component/New/Statistics'
import Home from './Component/New/Home'
import BecomeASeller from './Component/New/BecomeASeller'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "/statistics",
        element: <Statistics/>
      },
      {
        path: "/becomeASeller",
        element: <BecomeASeller/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
