import TopFoodsCard from "./TopFoodsCard";

const TopFoods = ({ foods }) => {
  console.log(foods);
  return (
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {foods.map((food) => (
        <TopFoodsCard key={food._id} food={food} />
      ))}
    </div>
  );
};

export default TopFoods;
