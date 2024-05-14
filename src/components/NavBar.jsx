import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <>
      <div className={`lg:h-22 navbar shadow-sm container px-4 mx-auto`}>
        <div className="flex-1">
          <Link to="/" className="flex gap-2 items-center">
            {/* <img className='w-auto h-7' src={} alt='logo' /> */}
            <span className="drop-shadow-lg p-2  font-bold text-3xl text-white">
              <span className="px-2 bg-gradient-to-r font-rob from-red-400 to-white-500">
                The Continental
              </span>
            </span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal font-bold tex px-1 text-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-foods">All Foods</Link>
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100
                bg-gradient-to-r from-yellow-200 to-red-800 rounded-box w-52 font-semibold"
              >
                <li>
                  <Link
                    to="/my-purchase-food-items"
                    className="justify-between"
                  >
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
    </>
  );
};

export default NavBar;
