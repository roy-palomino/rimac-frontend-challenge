import { createBrowserRouter } from "react-router-dom";

import Home from "../views/Home";
import Planes from "../views/Planes";
import Resumen from "../views/Resumen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/planes",
    element: <Planes />,
  },
  {
    path: "/resumen",
    element: <Resumen />,
  },
]);
