import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Editor from './pages/Editor/Editor';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "editor",
    element: <Editor />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);