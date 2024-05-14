import { Link } from "react-router-dom";
import Carousal from "../components/Carousal";
import TopFoods from "../components/TopFoods";
import { Helmet } from "react-helmet-async";

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
          <button className="btn ">See All</button>
        </div>
      </Link>
      <h2>top chefs</h2>
    </div>
  );
};

export default Home;
