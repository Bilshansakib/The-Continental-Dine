import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const FoodDetails = () => {
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
    purchase_count,
  } = food || {};
  return (
    <section className="bg-white font-fah dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          view Food details:
        </h1>

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            src={food_image}
            alt=""
          />

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <div className="space-y-4">
              <p className="text-sm underline text-blue-500 uppercase">
                Category : {food_category}
              </p>
              <p className="text-sm underline text-blue-500 uppercase">
                Food origin : {food_origin}
              </p>
            </div>

            <a
              href="#"
              className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
            >
              {food_name}
            </a>
            <div className="flex space-y-2 items-center justify-start gap-6">
              <p
                href="#"
                className="inline-block mt-2 text-blue-500 text-2xl hover:text-blue-400"
              >
                Price : {`${price}`}
              </p>
              <Link to={`/purchase/${_id}`}>
                <Button variant="contained" color="success">
                  Purchase
                </Button>
              </Link>
            </div>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              <h1>Short descriotion : </h1>
              {description}
            </p>

            <div className="flex items-center mt-6">
              <h2 className="mx-4">Made By :</h2>
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src={
                  user?.photoURL ||
                  `https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80`
                }
                alt=""
              />

              <div className="mx-4">
                <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  {user?.email}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user?.displayName || "unknown"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <title>Continental Dine | Food Details </title>
      </Helmet>
    </section>
  );
};

export default FoodDetails;
