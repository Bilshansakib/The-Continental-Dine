import { useState } from "react";
import Page_Title from "../components/Page_Title";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DisplaySettingsOutlinedIcon from "@mui/icons-material/DisplaySettingsOutlined";
const AllFoods = () => {
  const { user } = useAuth();
  const [allFoods, setAllFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getFoodItems();
  }, [user, search]);

  const getFoodItems = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/foods?search=${search}`
    );
    setAllFoods(data);
  };
  // const getFoodItems = async () => {
  //   const { data } = await axios(
  //     `${import.meta.env.VITE_API_URL}/foods?search=${search}`
  //   );

  //   setAllFoods(data);
  // };
  console.log(allFoods);

  const handleSearch = (e) => {};
  return (
    <div className="mx-auto container">
      <Page_Title></Page_Title>
      <form>
        <div className=" flex justify-end my-12">
          <label className="input max-w-72  input-bordered flex items-center gap-2">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              name="search"
              className="grow"
              placeholder="Search"
            />
            <button type="submit" className="badge badge-info">
              Optional
            </button>
          </label>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {allFoods
          .filter((food) => {
            return search.toLocaleLowerCase() === ""
              ? food
              : food.food_name.toLocaleLowerCase().includes(search);
          })
          .map((food) => (
            <div
              key={food._id}
              className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800"
            >
              <div className="flex justify-center -mt-16 md:justify-end">
                <img
                  className="object-cover w-28 h-28 border-2 border-blue-500 rounded-full dark:border-blue-400"
                  alt={food.food_name}
                  src={food.food_image}
                />
              </div>

              <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
                {food.food_name}
              </h2>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
                Category: {food.food_category}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
                Price: {food.price}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
                Quantity: {food.quantity}
              </p>
              {!user && (
                <Link to="/login">
                  <div className="flex justify-end mt-4">
                    <span
                      className="text-lg flex items-center gap-2 font-medium text-blue-600 dark:text-blue-300"
                      tabindex="0"
                      role="link"
                    >
                      <DisplaySettingsOutlinedIcon></DisplaySettingsOutlinedIcon>
                      View Details
                    </span>
                  </div>
                </Link>
              )}
              {user && (
                <Link to={`/food/${food._id}`}>
                  <div className="flex justify-end mt-4">
                    <a
                      className="text-lg flex items-center gap-2 font-medium text-blue-600 dark:text-blue-300"
                      tabindex="0"
                      role="link"
                    >
                      <DisplaySettingsOutlinedIcon></DisplaySettingsOutlinedIcon>
                      View Details
                    </a>
                  </div>
                </Link>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllFoods;
