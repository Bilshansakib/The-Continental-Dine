import { Link } from "react-router-dom";
const TopFoodsCard = ({ food }) => {
  console.log(food);
  const {
    _id,
    food_image,
    food_name,
    description,
    price,
    made_by,
    food_origin,
    food_category,
    quantity,
    bid_count,
  } = food || {};

  return (
    // <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all">
    //   <div className="flex items-center justify-between">
    //     <span className="text-xs font-light text-gray-800 ">Deadline:</span>
    //     <span className="px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full "></span>
    //   </div>

    //   <div>
    //     <h1 className="mt-2 text-lg font-semibold text-gray-800 "></h1>

    //     <p className="mt-2 text-sm text-gray-600 "></p>
    //     <p className="mt-2 text-sm font-bold text-gray-600 ">Range:</p>
    //     <p className="mt-2 text-sm font-bold text-gray-600 ">Bid Count:</p>
    //   </div>
    // </div>
    <Link
      to={`/food/${_id}`}
      className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-light text-gray-800 ">
          {/* Deadline: {new Date(deadline).toLocaleDateString()} */}
        </span>
        <span className="px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full ">
          {food_category}
        </span>
      </div>

      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
          {food_name}
        </h1>

        <p title={description} className="mt-2 text-sm text-gray-600 ">
          {description.substring(0, 70)}...
        </p>
        <p className="mt-2 text-sm font-bold text-gray-600 ">Range: ${price}</p>
        <p className="mt-2 text-sm font-bold text-gray-600 ">Bid Count:</p>
      </div>
    </Link>
  );
};

export default TopFoodsCard;
