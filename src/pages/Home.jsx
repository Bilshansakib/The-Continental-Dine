import { useLoaderData } from "react-router-dom";
import Carousal from "../components/Carousal";
import TopFoods from "../components/TopFoods";
import TopFoodsCard from "../components/TopFoodsCard";

const Home = () => {
  const foods = useLoaderData();
  return (
    <div className="container mx-auto">
      <Carousal></Carousal>
      <TopFoods foods={foods}></TopFoods>
    </div>
  );
};

export default Home;
