import { createBrowserRouter } from "react-router-dom";


import Missions from "./pages/Missions"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Missions />,
  },
]);
