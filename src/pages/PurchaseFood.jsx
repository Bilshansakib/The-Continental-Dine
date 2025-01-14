import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import RecipeReviewCard from "../components/RecipeReviewCard";
import { Button } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const PurchaseFood = () => {
  const [startDate, setStartDate] = useState(new Date());
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
    order_count,
    buyer,
  } = food || {};
  const currentDate = new Date().toLocaleDateString();
  const handleFormSubmit = async (e) => {
    // if (user?.email === buyer.email)
    //   return toast.error(`Quantity ${quantity}, Not Available"`);
    e.preventDefault();
    const form = e.target;
    // const price = parseFloat(form.price.value);
    const price = form.price.value;
    const buyerName = form.buyerName.value;
    const buyer = user?.displayName;
    const email = user?.email;
    const foodId = _id;
    const foodImage = food_image;
    const FoodDescription = description;
    const foodName = food_name;
    const foodOrigin = food_origin;
    const quantityLeft = parseFloat(quantity - order_count);
    const orderCost = quantityLeft - 1;
    const purchase = orderCost + quantityLeft;
    if (quantityLeft < 1)
      // return toast.error(`Quantity ${quantity}, Not Available"`);
      return Swal.fire({
        position: "top-center",
        icon: "error",
        title: `Quantity left: ${quantity}, Not Available Now`,
        showConfirmButton: false,
        timer: 2000,
      });

    const purchaseData = {
      foodImage,
      price,
      email,
      currentDate,
      foodId,
      buyer,
      quantityLeft,
      foodName,
      FoodDescription,
      foodOrigin,
      purchase,

      // buyerName,
      // buyer_email: user?.email,
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
      <div className="mt-6">
        <RecipeReviewCard food={food}></RecipeReviewCard>
      </div>
      {/* Place A Bid Form */}
      <section className="p-6 w-full mt-6 bg-white rounded-b-md shadow-md flex-1 md:min-h-[350px]">
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
                id="buyerName"
                name="buyerName"
                type="text"
                defaultValue={user.displayName}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Purchase date :</label>

              {/* <input
                type="type"
                className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                defaultValue={currentDate}
              /> */}
              <DatePicker
                dateFormat="Pp"
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          <div className=" mt-6">
            <Button
              type="submit"
              className={`  px-8 w-full py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600`}
              variant="contained"
              color="success"
            >
              Purchase Now
            </Button>
          </div>
        </form>
      </section>
      <Helmet>
        <title>Continental Dine | Purchase </title>
      </Helmet>
    </div>
  );
};

export default PurchaseFood;
