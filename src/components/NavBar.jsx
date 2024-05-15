import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import { BsFillReplyAllFill } from "react-icons/bs";
import { AiFillPicture } from "react-icons/ai";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div
      className={`lg:h-22 bg-gray-200 border-b-2 border-gray-600 navbar shadow-lg `}
    >
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          {/* <img className='w-auto h-7' src={} alt='logo' /> */}
          <span className="drop-shadow-lg p-2 text-sky-900 font-bold text-3xl">
            <span className="px-2 bg-gradient-to-r font-rob">
              The Continental Dine
            </span>
          </span>
        </Link>
      </div>
      <div className="flex-1 border-2 flex justify-between">
        <ul className="menu menu-horizontal text-sky-900 font-bold">
          <li>
            <Link to="/">
              <HiHome></HiHome> Home
            </Link>
          </li>
          <li>
            <Link to="/all-foods">
              <BsFillReplyAllFill></BsFillReplyAllFill> All Foods
            </Link>
          </li>
          <li>
            <Link to="/gallery">
              <AiFillPicture></AiFillPicture> Gallery
            </Link>
          </li>

          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 border-2 shadow bg-base-100
                bg-gradient-to-r from-yellow-100 to-gray-100  rounded-box w-52 font-semibold"
            >
              <li>
                <Link to="/my-purchase-food-items" className="justify-between">
                  My Purchase Food Items
                </Link>
              </li>
              <li>
                <Link to="/add-food-items">Add Food Items</Link>
              </li>
              <li>
                <Link to="/my-added-items">My Added Items</Link>
              </li>

              <li className="mt-2">
                <button
                  onClick={logOut}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
