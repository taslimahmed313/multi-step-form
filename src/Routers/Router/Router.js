import { createBrowserRouter } from "react-router-dom";
import SignUp from "../../components/SignUp/SignUp/SignUp";
import Main from "../../Layout/Main";
import Login from "../../Pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ],
  },
]);