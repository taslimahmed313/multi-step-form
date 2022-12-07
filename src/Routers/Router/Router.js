import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import SignupFirstStep from "../../Pages/Signup/SignupFirst/SignupFirstStep";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <SignupFirstStep></SignupFirstStep>,
      },
    ],
  },
]);