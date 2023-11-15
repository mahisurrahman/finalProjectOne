import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../main/Main";
import Home from "../../pages/Home/Home";
import OurMenu from "../../pages/ourMenu/OurMenu";

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
          
        }
      ]
    },
  ]);

export default Routes;