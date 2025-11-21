import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

import { Home } from './pages';
import { Certificates } from './pages/Msc/Certificates';
import { ThemeProvider } from './hooks/useTheme';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/certificates",
    element: <Certificates />,
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);