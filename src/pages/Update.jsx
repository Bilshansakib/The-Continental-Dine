import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import CountrySelect from "../components/Food_Origing";
import useAuth from "../hooks/useAuth";

const Update = () => {
  const food = useLoaderData();
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  console.log(food);
  const {
    food_image,
    food_name,
    description,
    price,
    made_by,
    food_origin,
    food_category,
    quantity,
    bid_count,
    date,
  } = food || {};
  console.log(id);
  //   const [startDate, setStartDate] = useState(new Date(date) || new Date());
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const food_name = form.food_name.value;
    const food_image = form.food_image.value;

    const email = form.email.value;

    const food_category = form.food_category.value;
    const price = parseFloat(form.price.value);
    const quantity = parseFloat(form.quantity.value);
    const description = form.description.value;
    const food_origin = form.food_origin.value;
    const foodData = {
      food_name,
      food_image,

      food_category,
      price,
      quantity,
      description,
      food_origin,
      id,
      //   buyer: {
      //     email,
      //     name: user?.displayName,
      //     photo: user?.photoURL,
      //   },
      order_count: 0,
    };
    console.table(foodData);
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/food/${id}`,
        foodData
      );
      console.log(data);
      toast.success("Food Item Updated Successfully!");
      navigate("/my-purchase-food-items");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="flex font-fir justify-center items-center min-h-[calc(100vh-306px)] my-12">
        <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
          <h2 className="text-lg font-semibold text-gray-700 capitalize ">
            Post a Food Item
          </h2>

          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
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

              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700">Date :</label>

                {/* <DatePicker
                  dateFormat="Pp"
                  className="border p-2 rounded-md"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                /> */}
                {/* <input type="text" defaultValue={startDate} /> */}
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
            <div className="">
              <div className="mt-4 ">
                {/* <label className="text-gray-700 " htmlFor="emailAddress">
          Food Origin :
        </label> */}
                {/* <input
          id="food_origin"
          type="food_origin"
          name="food_origin"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
        /> */}
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
                Save Update
              </Button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Update;
