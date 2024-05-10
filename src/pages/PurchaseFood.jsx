import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import RecipeReviewCard from "../components/RecipeReviewCard";
import { Button } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";

const PurchaseFood = () => {
  const { user } = useAuth();
  const food = useLoaderData();
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
  const currentDate = new Date().toLocaleDateString();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const price = parseFloat(form.price.value);
    const buyer = user?.displayname;
    const email = user?.email;
    const foodId = _id;
    const quantityLeft = quantity;

    const purchaseData = {
      price,
      email,
      foodId,
      buyer,
      quantityLeft,
    };
    console.table(purchaseData);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/order`,
        purchaseData
      );
      console.log(data);
      toast.success("Order Placed Successfully!");
    } catch (err) {
      toast.success(err.response.data);
      e.target.reset();
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
      {/* Job Details */}
      {/* <div className="flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-800 ">
            Time : {currentDate}
          </span>
          <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
            Available : {quantity}
          </span>
        </div>

        <div>
          <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
            {food_name}
          </h1>

          <p className="mt-2 text-lg text-gray-600 ">{description}</p>
          <p className="mt-6 text-sm font-bold text-gray-600 ">
            Buyer Details:
          </p>
          <div className="flex items-center gap-5">
            <div>
              <p className="mt-2 text-sm  text-gray-600 ">Name: Jhankar Vai.</p>
              <p className="mt-2 text-sm  text-gray-600 ">
                Email: jhankar@mahbub.com
              </p>
            </div>
            <div className="rounded-full object-cover overflow-hidden w-14 h-14">
              <img src="" alt="" />
            </div>
          </div>
          <p className="mt-6 text-lg font-bold text-gray-600 ">
            Price: {price}
          </p>
        </div>
      </div> */}
      <RecipeReviewCard food={food}></RecipeReviewCard>
      {/* Place A Bid Form */}
      <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Place A Order
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                disabled
                defaultValue={user?.email}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="price">
                Price :
              </label>
              <input
                id="price"
                type="text"
                name="price"
                defaultValue={price}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="comment">
                Buyer Name :
              </label>
              <input
                id="buyer"
                name="buyer"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Purchase date :</label>

              <input
                type="type"
                className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                defaultValue={currentDate}
              />
            </div>
          </div>

          <div className=" mt-6">
            <Button
              type="submit"
              className="px-8 w-full py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              variant="contained"
              color="success"
            >
              Purchase Now
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default PurchaseFood;
