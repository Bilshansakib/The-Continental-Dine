import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";
import SocialMediaLogin from "../../components/SocialMediaLogin";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { signIn, user, loading } = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);
  const from = location.state || "/";

  // signIn
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    // const photo = form.photo.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const user = { email };
        //get access token
        navigate(from, { replace: true });
        axios
          .post(`${import.meta.env.VITE_API_URL}/jwt`, user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            toast.success("LogIn Successful");
          });
      })
      .catch((error) => console.log(error));
  };
  if (user || loading) return;
  return (
    <header
      style={{
        "background-image": "url(/src/assets/Image/swiper3.jpg)",
      }}
      className="container bg-cover mx-auto bg-gray-900 pattern"
    >
      <div className="container px-6 mx-auto">
        {/* <nav className="flex flex-col py-6 sm:flex-row sm:justify-between sm:items-center">
          <a href="#">
            <img
              className="w-auto h-6 sm:h-7"
              src="https://merakiui.com/images/logo.svg"
              alt=""
            />
          </a>

          <div className="flex items-center mt-2 -mx-2 sm:mt-0">
            <a
              href="#"
              className="px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 transform border-2 rounded-md hover:bg-gray-700"
            >
              Sign In
            </a>
            <a
              href="#"
              className="px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-300 transform bg-black rounded-md hover:bg-gray-800"
            >
              Sign Up
            </a>
          </div>
        </nav> */}

        <div className="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">
              The Continental Dine
            </h2>

            <h3 className="mt-2 text-2xl font-semibold text-gray-100">
              Hello <span className="text-blue-400">Guest</span>
            </h3>

            <p className="mt-4 text-gray-100">
              Competently grow high-payoff best practices for state of the art
              supply chains. Competently aggregate goal-oriented partnerships
              vis-a-vis covalent channels. Continually redefine cost effective
              results whereas.
            </p>
          </div>

          <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
            <div className="w-full max-w-md bg-white rounded-lg dark:bg-gray-800">
              <div className="px-6 py-8 text-center">
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-white fo">
                  Sign In
                </h2>

                <form onSubmit={handleLogin}>
                  <div className="mt-4">
                    <input
                      className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                      type="email"
                      name="email"
                      placeholder="Email address"
                      aria-label="Email address"
                    />
                    <input
                      className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                      type="password"
                      name="password"
                      placeholder="Password"
                      aria-label="Password"
                    />
                  </div>
                  <SocialMediaLogin></SocialMediaLogin>
                  <div className="flex items-center justify-between mt-4">
                    <a
                      href="#"
                      className="text-sm text-gray-600 dark:text-gray-200 hover:underline"
                    >
                      Forget Password?
                    </a>

                    <button
                      type="submit"
                      className="px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                <p className="my-4  text-center ">
                  New Here?
                  <Link className="font-bold ml-2 clr" to="/register">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <title>Continental Dine | Login </title>
      </Helmet>
    </header>
  );
};

export default Login;
