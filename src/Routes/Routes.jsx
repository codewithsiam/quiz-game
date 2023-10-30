import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Game from "../Components/Game";
import Layout from "../Layouts/Layout";
import Login from "../Pages/Login";
import ProtectedRoute from "./protectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "game",
        element:<ProtectedRoute><Game /></ProtectedRoute>,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
