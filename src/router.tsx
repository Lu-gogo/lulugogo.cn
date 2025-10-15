// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Animate from "./views/Animate/index";
import Gunpla from "./views/Gunpla/index";
import Identify from "./views/Identify/index";
import NotFound from "./views/NotFound/index";
import Home from './views/Home/index.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'animate',
        element: <Animate />,
      },
      {
        path: 'gunpla',
        element: <Gunpla />,
      },
      {
        path: 'identify',
        element: <Identify />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])