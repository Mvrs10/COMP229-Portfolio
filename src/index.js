//File: index.js
//Student: Minh Khoi Phan
//ID: 301278135;
//Date: Sept. 28, 2024
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from "./components/About/about";
import Service from "./components/Service/service";
import Project from "./components/Project/project";
import Contact from "./components/Contact/contact";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// Declare router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Service",
    element: <Service/>,
  },
  {
    path: "/Project",
    element: <Project/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
]);
// Declare DOM object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);
