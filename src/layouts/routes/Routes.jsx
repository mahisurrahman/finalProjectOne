import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../main/Main";
import Home from "../../pages/Home/Home";
import OurMenu from "../../pages/ourMenu/OurMenu";
import OurShop from "../../pages/ourShop/OurShop";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import PrivateRoutes from './privateRoutes/PrivateRoutes';
import ContactUs from "../../pages/contact/ContactUs";
import Dashboard from '../dashboardLayout/AdminDashboard';
import UserDashboard from "../dashboardLayout/UserDashboard";



  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/our-menu",
          element: <OurMenu></OurMenu>,
        },
        {
          path: "/our-shop",
          element: <OurShop></OurShop>,
        },
        {
          path: "/our-shop/:category",
          element:<OurShop></OurShop>,
        },
        {
          path: "/contact",
          element: <ContactUs></ContactUs>,
        },
      ]
    },
    {
      path: 'user-dashboard',
      element: <PrivateRoutes><UserDashboard></UserDashboard></PrivateRoutes>,
      children: [
        {

        },
      ]
    },
    {
      path: 'admin-dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
        
      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: "/register", 
      element: <Register></Register>,
    },
  ]);

export default Routes;