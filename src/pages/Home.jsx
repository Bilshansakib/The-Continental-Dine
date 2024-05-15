import { Link } from "react-router-dom";
import Carousal from "../components/Carousal";
import TopFoods from "../components/TopFoods";
import { Helmet } from "react-helmet-async";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Continental Dine | Home </title>
      </Helmet>
      <Carousal></Carousal>
      <TopFoods></TopFoods>
      <Link to="all-foods">
        <div className="text-center my-4 hover:scale-[1.15] transform-all">
          <Button variant="outlined">See All</Button>
        </div>
      </Link>
      <div className="mt-10 mx-auto">
        <h2 className="font-bold text-center">Best Chef's in the world</h2>
        <section className="py-6 dark:bg-gray-100">
          <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/XXVXWhX/Stock-Cake-Diverse-Handheld-Foods-1715415149.jpg"
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/GHHDXXG/Stock-Cake-Sizzling-Beef-Cubes-1715415648.jpg"
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/Pr2ft5G/Stock-Cake-Juicy-Watermelon-Balls-1715418115.jpg"
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/WBT17jx/Stock-Cake-Chefs-Preparing-Meal-1715418235.jpg
                "
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
