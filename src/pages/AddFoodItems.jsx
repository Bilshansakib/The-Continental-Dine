import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import CountrySelect from "../components/Food_Origing";
import { Helmet } from "react-helmet-async";

const AddFoodItems = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const food_name = form.food_name.value;
    const food_image = form.food_image.value;

    const email = form.email.value;
    const date = startDate;
    const food_category = form.food_category.value;
    const price = parseFloat(form.price.value);
    const quantity = parseFloat(form.quantity.value);
    const description = form.description.value;
    const food_origin = form.food_origin.value;
    const foodData = {
      food_name,
      food_image,
      date,
      food_category,
      price,
      quantity,
      description,
      food_origin,
      buyer: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      order_count: 0,
    };
    console.table(foodData);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/food`,
        foodData
      );
      console.log(data);
      toast.success("Food Item Updated Successfully!");
      navigate("/my-added-items");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div
        style={{
          "background-image": "url(/src/assets/Image/swiper3.jpg)",
        }}
        className="flex postFoodItem rounded-md container mx-auto p-6 font-fir justify-center items-center min-h-[calc(100vh-306px)] my-12"
      >
        <section className=" p-2 md:p-6 mx-auto bg-white opacity-80 rounded-md shadow-md ">
          <h2 className="text-lg font-semibold text-gray-700 capitalize ">
            Post a Food Item
          </h2>

          <form onSubmit={handleFormSubmit} className="flex lg:flex-row gap-2">
            <div className="grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 " htmlFor="job_title">
                  Food Title :
                </label>
                <input
                  id="food_name"
                  name="food_name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 ">Food Image URL</label>
                <input
                  id="food_image"
                  name="food_image"
                  type="text"
                  placeholder="Image URL"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div className="flex flex-col  ">
                <label className="text-gray-700">Date :</label>

                <DatePicker
                  dateFormat="Pp"
                  className="border py-2 lg:py-2 rounded-md"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700 " htmlFor="food_category">
                  Category :
                </label>
                <select
                  name="food_category"
                  id="food_category"
                  className="border p-2 rounded-md"
                >
                  <option value="Appetizers">Appetizers</option>
                  <option value="Salads">Salads</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Sushi & Sashimi">Sushi & Sashimi</option>
                  <option value="Tacos & Quesadillas">
                    Tacos & Quesadillas
                  </option>
                  <option value="Curries & Stews">Curries & Stews</option>
                  <option value="Rice & Noodle Dishes">
                    Rice & Noodle Dishes
                  </option>
                  <option value="Grilled & Roasted Meats">
                    Grilled & Roasted Meats
                  </option>
                  <option value="Seafood Specialties">
                    Seafood Specialties
                  </option>
                  <option value="Vegetarian & Vegan Options">
                    Vegetarian & Vegan Options
                  </option>
                  <option value="Sandwiches & Wraps">Sandwiches & Wraps</option>
                  <option value="Pizza & Flatbreads">Pizza & Flatbreads</option>
                  <option value="Tapas & Small Plates">
                    Tapas & Small Plates
                  </option>
                  <option value="Desserts & Sweets">Desserts & Sweets</option>
                </select>
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="min_price">
                  Price $
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="max_price">
                  Quantity No.
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="0"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div>
              <div>
                <div className="mt-6 ">
                  <CountrySelect></CountrySelect>
                </div>
                <div className="relative mt-2">
                  <label className="text-gray-700 " htmlFor="emailAddress">
                    Your Email Address :
                  </label>
                  <span className="absolute items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className=" w-6 h-6 mx-3 text-gray-400 dark:text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <input
                    id="emailAddress"
                    type="email"
                    name="email"
                    disabled
                    defaultValue={user?.email}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
                <div className="mt-2">
                  <label className="text-gray-700 " htmlFor="emailAddress">
                    Your Name :
                  </label>
                  <input
                    id="username"
                    type="username"
                    name="username"
                    disabled
                    defaultValue={user?.displayName}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label className="text-gray-700 " htmlFor="description">
                  Description
                </label>
                <textarea
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  name="description"
                  id="description"
                ></textarea>
              </div>
              <div className="flex justify-end mt-6">
                <Button type="submit" variant="contained">
                  Save
                </Button>
              </div>
            </div>
          </form>
        </section>
        <Helmet>
          <title>Continental Dine | Add Food </title>
        </Helmet>
      </div>
    </div>
  );
};

export default AddFoodItems;
