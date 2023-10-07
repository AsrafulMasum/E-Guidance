import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import EventsCardDetails from "../Pages/Home/Events/EventsCardDetails";
import PrivateRoutes from "./PrivateRoutes";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/events/:id",
        element: (
          <PrivateRoutes>
            <EventsCardDetails></EventsCardDetails>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default Routes;
