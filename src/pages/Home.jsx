import { Link } from "react-router-dom";
import Carousal from "../components/Carousal";
import TopFoods from "../components/TopFoods";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Carousal></Carousal>
      <TopFoods></TopFoods>
      <Link to="all-foods">
        <div className="text-center my-4 hover:scale-[1.15] transform-all">
          <button className="btn ">See All</button>
        </div>
      </Link>
    </div>
  );
};

export default Home;
