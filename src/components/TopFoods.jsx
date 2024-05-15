import { useEffect, useState } from "react";
import TopFoodsCard from "./TopFoodsCard";
import axios from "axios";

const TopFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/foods`);
      setFoods(data);
    };
    getData();
  }, []);
  console.log(foods);
  return (
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
      {foods

        .filter((food) => food.purchase_count > 10)
        .map((food) => (
          <TopFoodsCard key={food._id} food={food} />
        ))}
    </div>
  );
};

export default TopFoods;
