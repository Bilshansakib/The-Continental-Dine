import { useState } from "react";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@mui/material";

const AddFoodItems = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Post a Food Item
        </h2>

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Food Title
              </label>
              <input
                id="food_title"
                name="food_title"
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

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Date</label>

              <DatePicker
                dateFormat="Pp"
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="category">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="border p-2 rounded-md"
              >
                <option value="Appetizers">Appetizers</option>
                <option value="Salads">Salads</option>
                <option value="Pasta">Pasta</option>
                <option value="Sushi & Sashimi">Sushi & Sashimi</option>
                <option value="Tacos & Quesadillas">Tacos & Quesadillas</option>
                <option value="Curries & Stews">Curries & Stews</option>
                <option value="Rice & Noodle Dishes">
                  Rice & Noodle Dishes
                </option>
                <option value="Grilled & Roasted Meats">
                  Grilled & Roasted Meats
                </option>
                <option value="Seafood Specialties">Seafood Specialties</option>
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
          <div className="mt-2">
            <label className="text-gray-700 " htmlFor="emailAddress">
              Your Email Address
            </label>
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
              Your Name
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
            <Button variant="contained">Save</Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddFoodItems;
