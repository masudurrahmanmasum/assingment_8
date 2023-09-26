import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Donation from './Component/navPage/Donation.jsx';
import Statistic from './Component/navPage/Statistic.jsx';
import Home from './Component/Home/Home.jsx';
import NavbarMain from './Component/Navbar/NavbarMain.jsx';
import CardDetails from './Component/ShowDetails/CardDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarMain></NavbarMain>,
    children: [
      {
        path: "/",
        loader: () => fetch('../public/data.json'),
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>
      },
      {
        path: "/cardDetails/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch('../public/data.json')
      }
    ],
  }

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
