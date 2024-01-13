import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        {
          const loggedInUser = result.user;
          console.log(loggedInUser);

          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "Happy Journey",
          });
          navigate("/dashboard");
        }

        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: `${error.message}`,
          text: "Something went wrong!",
        });
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#33547D] transition-all hover:bg-sky-500/10 active:bg-sky-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-dark="true"
      >
        Google
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default SocialLogin;
