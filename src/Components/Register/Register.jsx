import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import auth from "../../Firebase/firebase.config";
import SocialLogin from "../SocialLogin/SocialLogin";
const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const password = form.get("password");

    const newUser = {
      email,
      name,
      password,
    };
    console.log(newUser);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            console.log("profile Updated");
            Swal.fire({
              icon: "success",
              title: "User Created Successfully",
              text: "Happy Journey",
            });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: `${error.message}`,
          text: "Something went wrong!",
        });
      });
  };
  return (
    <div>
      <div className="  max-w-screen-2xl mx-auto border">
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <div className="w-full mx-auto  p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-[#77B7DD]">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Sign up to Graydot Technologies
                </h2>
                <form onSubmit={handleRegister} className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      className={inputStyle}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className={inputStyle}
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className={inputStyle}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-5 py-3 text-base font-medium text-center text-white bg-[#77B7DD] rounded-lg hover:bg-[#77B7DD] focus:ring-4 focus:ring-[#33547D] sm:w-auto dark:bg-[#33547D] dark:hover:bg-[#33547D] dark:focus:ring-[#33547D]"
                  >
                    Register New Account
                  </button>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Already have account?{" "}
                    <Link
                      to={"/login"}
                      className="text-[#33547D] hover:underline dark:text-[#33547D]"
                    >
                      Login
                    </Link>
                  </div>
                </form>
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const inputStyle =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#33547D] focus:border-[#33547D] block w-full p-2.5 dark:bg-gray-700 dark:border-[#33547D] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#33547D] dark:focus:border-[#33547D]";

export default Register;
