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
  console.log(quantity);

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
      className="w-full   h-96 max-w-sm  px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.15] transition-all"
    >
      {/* <div className=" flex items-center justify-between">
        <span className="text-xs font-light text-gray-800 ">
          
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
      </div> */}
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"></div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {food_name}
          </h3>

          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-200">
              {price}
            </span>
            <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              Add to cart
            </button>
          </div>
          <div>
            <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              bid:
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopFoodsCard;
