import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Tournament from './pages/Tournament/Tournament';

const initial_route = "/crypticsy";

const router = createBrowserRouter([
  {
    path: initial_route + "/",
    element: <Home />,
  },
  {
    path: initial_route + "/tournament",
    element: <Tournament/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);