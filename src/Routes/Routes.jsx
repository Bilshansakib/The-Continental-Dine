import { createBrowserRouter } from "react-router-dom";
import Main from "./../Layout/Main";
import Home from "../pages/Home";
import Login from "./../pages/LoginAndRegister/Login";
import Register from "../pages/LoginAndRegister/Register";
import AllFoods from "../pages/AllFoods";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-foods",
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
