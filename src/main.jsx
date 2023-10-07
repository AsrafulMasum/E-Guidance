import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./Provider/AuthProvider";
import DataProvider from "./Provider/DataProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <RouterProvider router={Routes}></RouterProvider>
      </DataProvider>
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>
);
