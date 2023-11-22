import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./router";
import { store } from "./store/store";
import { Provider } from "react-redux";



ReactDOM.createRoot(document.getElementById('root')).render(
  
    <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>

)



// https://reactjsexample.com/weather-app-built-with-react-and-redux/
