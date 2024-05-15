import { useState } from "react";
import Page_Title from "../components/Page_Title";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DisplaySettingsOutlinedIcon from "@mui/icons-material/DisplaySettingsOutlined";
import { Helmet } from "react-helmet-async";
const GalleryPage = () => {
  const { user } = useAuth();
  const [allFoods, setAllFoods] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  useEffect(() => {
    getFoodItems();
  }, [user]);

  const getFoodItems = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/foods`);
    setAllFoods(data);
  };
  console.log(allFoods);
  return (
    <div className="mx-auto container ">
      <Helmet>
        <title>Continental Dine | Gallery </title>
      </Helmet>
      <div
        className={`container mx-auto bg-center relative photo1 overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center`}
        //   style="background-image: url('/src/assets/Image/image1.jpg')"
      >
        <div
          className="absolute bgStyle bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          // style="background-color: rgba(0, 0, 0, 0.6)"
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">Gallery</h2>
              <h4 className="mb-6 text-xl font-semibold"></h4>
              <button
                type="button"
                className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Call to action
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {allFoods.map((food) => (
          <div key={food._id} className="justify-center p-4   ">
            <img
              src={food.food_image}
              alt=""
              className="w-full h-96 gap-10 rounded shadow-sm min-h-96  dark:bg-gray-500 aspect-square"
            />
            <div>
              {isHovering && (
                <div className="relative animate-pulse mt-4">
                  <h2>• {food.food_name}</h2>
                  <h2>• {user.email}</h2>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
