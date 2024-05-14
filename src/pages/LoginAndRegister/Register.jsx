import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import SocialMediaLogin from "../../components/SocialMediaLogin";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { createUser, updateUserProfile, user, setUser } =
    useContext(AuthContext);
  const from = location.state || "/";
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log({ email, password, name, photo });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // toast.success("Signup Successful");
        if (user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Welcome To Our Restaurant",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };
  return (
    <header
      style={{
        "background-image": "url(/src/assets/Image/swiper3.jpg)",
      }}
      className="bg-gray-900 pattern"
    >
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">
              Brand
            </h2>

            <h3 className="mt-2 text-2xl font-semibold text-gray-100">
              Hello <span className="text-blue-400">Guest</span>
            </h3>

            <p className="mt-4 text-gray-100">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
              eum modi incidunt adipisci quod porro et non exercitationem quasi,
              maxime culpa ut nemo ab delectus saepe iste nostrum explicabo a?
            </p>
          </div>

          <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
            <div className="w-full max-w-md bg-white rounded-lg dark:bg-gray-800">
              <div className="px-6 py-8 text-center">
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-white fo">
                  Sign In
                </h2>

                <form onSubmit={handleRegister}>
                  <div className="mt-4">
                    <input
                      className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                      type="name"
                      name="name"
                      placeholder="Name"
                    />
                    <input
                      className="block mt-4 w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                      type="text"
                      name="photo"
                      placeholder="Photo URL"
                    />
                    <input
                      className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                      type="email"
                      name="email"
                      placeholder="Email address"
                      aria-label="Email address"
                    />
                    <input
                      className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                      type="password"
                      name="password"
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

                    <div className="px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700">
                      <input value="Sign Up" type="submit" />
                    </div>
                  </div>
                </form>
                <p className="my-4  text-center ">
                  Already have an Account?
                  <Link className="font-bold ml-2 clr" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <title>Continental Dine | Registration </title>
      </Helmet>
    </header>
  );
};

export default Register;
