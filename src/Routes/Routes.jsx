import { createBrowserRouter } from "react-router-dom";
import Main from "./../Layout/Main";
import Home from "../pages/Home";
import Login from "./../pages/LoginAndRegister/Login";
import Register from "../pages/LoginAndRegister/Register";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import PurchaseFood from "../pages/PurchaseFood";
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
        path: "/food/:id",
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`),
      },
      {
        path: "/purchase/:id",
        element: <PurchaseFood></PurchaseFood>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/purchase/${params.id}`),
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
