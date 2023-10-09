import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import EventsCardDetails from "../Pages/Home/Events/EventsCardDetails";
import PrivateRoutes from "./PrivateRoutes";
import EventsPage from "../Pages/EventsPage/EventsPage";
import ServicesCardDetails from "../Pages/Home/Services/ServicesCardDetails";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";
import PlacesCardDetails from "../Pages/Home/Places/PlacesCardDetails";
import Venues from "../Pages/Venues/Venues";
import ContactUsPage from "../Pages/ContactUsPage/ContactUsPage";

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
        path: "/allEvents",
        element: (
          <PrivateRoutes>
            <EventsPage></EventsPage>
          </PrivateRoutes>
        ),
      },
      {
        path: "/events/:id",
        element: (
          <PrivateRoutes>
            <EventsCardDetails></EventsCardDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/allServices",
        element: (
          <PrivateRoutes>
            <ServicesPage></ServicesPage>
          </PrivateRoutes>
        ),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoutes>
            <ServicesCardDetails></ServicesCardDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/venues",
        element: (
          <PrivateRoutes>
            <Venues></Venues>
          </PrivateRoutes>
        ),
      },
      {
        path: "/places/:id",
        element: (
          <PrivateRoutes>
            <PlacesCardDetails></PlacesCardDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoutes>
            <ContactUsPage></ContactUsPage>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default Routes;
