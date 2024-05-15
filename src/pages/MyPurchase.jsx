import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import axios from "axios";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

const MyPurchase = () => {
  const { user } = useAuth();
  const [purchase, setPurchase] = useState([]);

  useEffect(() => {
    getFoodItems();
  }, [user]);

  const getFoodItems = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/my-purchase/${user?.email}`,
      { withCredentials: true }
    );

    setPurchase(data);
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/food/${id}`
      );
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          getFoodItems();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" mx-auto container">
      <Helmet>
        <title>Continental Dine | Purchase Food </title>
      </Helmet>
      <div>
        <div
          // style={{
          //   "background-image": "url(src/assets/Image/logo4.jpg)",
          // }}
          className={`container addedPhoto h-[300px] mx-auto bg-center relative overflow-hidden rounded-b-lg bg-cover bg-no-repeat p-12 text-center`}
        >
          <div
            className="absolute bgStyle bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            // style="background-color: rgba(0, 0, 0, 0.6)"
          >
            <div className="flex h-full items-center justify-center">
              <div className="text-white">
                <h2 className="mb-4 text-4xl font-semibold">My Purchase</h2>
                <h4 className="mb-6 text-xl font-semibold">
                  Purchase Your Food
                </h4>
                <Link to="/">
                  <button
                    type="button"
                    className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Call to actions
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {purchase.map((p, index) => (
        <div key={p._id} className="bg-gray-100 dark:text-gray-900">
          <div className=" py-4 grid mt-2 grid-cols-12 mx-auto dark:bg-gray-50">
            <div
              className="bg-no-repeat relative ml-20 rounded-full bg-cover dark:bg-gray-300 col-span-full lg:col-span-4"
              style={{
                height: 255,
                width: 255,
                backgroundImage: `url('${p.foodImage}')`,
              }}
            >
              <span>
                <Link to={`/update/${p._id}`}>
                  {/* <button className="absolute bottom-1 bg-orange-300 p-2 rounded-full">
                    
                  </button> */}
                  <span className="absolute bottom-1 rounded-full">
                    <Button variant="contained">
                      <EditNoteTwoToneIcon></EditNoteTwoToneIcon> updates
                    </Button>
                  </span>
                </Link>
              </span>
              <Button onClick={() => handleDelete(p._id)} variant="outlined">
                <span className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  <span>Delete</span>
                </span>
              </Button>
            </div>
            <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
              <div className="flex justify-start">
                <span className="px-2 py-1 font-semibold text-xs rounded-full bg-violet-600 text-gray-50">
                  Item No. {index + 1}
                </span>
              </div>
              <h1 className="text-3xl font-semibold mt-2">{p.foodName}</h1>
              <p className="flex-1 ">{p.foodDescription}</p>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-600"
              >
                <span>Price : {p.price}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <div className="flex items-center justify-between pt-2">
                <div className="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 dark:text-gray-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="self-center text-sm">by {p.email}</span>
                </div>
                <span className="text-sm">Origin: {p.foodOrigin}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPurchase;
