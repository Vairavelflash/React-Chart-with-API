import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Root from "./routes/root";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import Error from "./pages/Error";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Login />
  },
  { path: "/home", element: <Home/>},
 
  { path: "*", element:  <Error/>}
]);
