import { useState } from "react";
import Page_Title from "../components/Page_Title";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AllFoods = () => {
  const { user } = useAuth();
  const [allFoods, setAllFoods] = useState([]);

  useEffect(() => {
    getFoodItems();
  }, [user]);

  const getFoodItems = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/foods`);

    setAllFoods(data);
  };
  console.log(allFoods);
  return (
    <div className="mx-auto container">
      <Page_Title></Page_Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {allFoods.map((food) => (
          <div
            key={food._id}
            className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <div className="flex justify-center -mt-16 md:justify-end">
              <img
                className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                alt="Testimonial avatar"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
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
                  <a
                    href="#"
                    className="text-lg font-medium text-blue-600 dark:text-blue-300"
                    tabindex="0"
                    role="link"
                  >
                    View Details
                  </a>
                </div>
              </Link>
            )}
            {user && (
              <Link to={`/food/${food._id}`}>
                <div className="flex justify-end mt-4">
                  <a
                    href="#"
                    className="text-lg font-medium text-blue-600 dark:text-blue-300"
                    tabindex="0"
                    role="link"
                  >
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
