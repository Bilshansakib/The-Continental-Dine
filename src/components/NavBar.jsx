import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <>
      <div className={` bg-orange-300 navbar shadow-sm container px-4 mx-auto`}>
        <div className="flex-1">
          <Link to="/" className="flex gap-2 items-center">
            {/* <img className='w-auto h-7' src={} alt='logo' /> */}
            <span className="font-bold font-fah text-3xl">Lixa</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/my-added-food-items" className="justify-between">
                    My added Food Items
                  </Link>
                </li>
                <li>
                  <Link to="/add-food-items">Add Food Items</Link>
                </li>
                <li>
                  <Link to="/my-ordered-food-items">My Order</Link>
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
