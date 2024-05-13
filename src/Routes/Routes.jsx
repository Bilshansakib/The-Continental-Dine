import { createBrowserRouter } from "react-router-dom";
import Main from "./../Layout/Main";
import Home from "../pages/Home";
import Login from "./../pages/LoginAndRegister/Login";
import Register from "../pages/LoginAndRegister/Register";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import PurchaseFood from "../pages/PurchaseFood";
import AddFoodItems from "../pages/AddFoodItems";
import ErrorPage from "../pages/ErrorPage";
import MyOrderedItems from "../pages/MyOrderedItems";
import PrivateRoute from "./PrivateRoute";
import MyPurchase from "../pages/MyPurchase";
import Update from "../pages/Update";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoute>
            <PurchaseFood></PurchaseFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/purchase/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        // loader: ({ params }) =>
        //   fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`),
      },
      {
        path: "/my-purchase-food-items",
        element: (
          <PrivateRoute>
            <MyPurchase></MyPurchase>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-food-items",
        element: (
          <PrivateRoute>
            <AddFoodItems></AddFoodItems>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-added-items",
        element: (
          <PrivateRoute>
            <MyOrderedItems></MyOrderedItems>
          </PrivateRoute>
        ),
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
