import { SubmitHandler } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FormData, useFormData } from "../hooks/useFormData";
import eye from "../assets/icons/eye-regular.svg";
import eyeSlash from "../assets/icons/eye-slash-regular.svg";

const Login = () => {
  const {
    register,
    handleSubmit,
    errors,
    reset,
    showPassword,
    handleShowPassword,
  } = useFormData();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const { email, password } = data;
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Successfully logged in", {
        className: "text-sm",
      });
      console.log("Successfully logged in");
      reset(); // clears the input after validating input
      setTimeout(() => {
        navigate("/checkout");
      }, 2000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (
          error.message === "Firebase: Error (auth/network-request-failed)."
        ) {
          toast.error("Network connection failed", {
            className: "text-sm",
          });
        } else if (
          error.message === "Firebase: Error (auth/invalid-login-credentials)."
        ) {
          toast.error("Invalid login details", {
            className: "text-sm",
          });
        } else {
          console.log("Error logging in user:", error.message);
        }
      } else {
        console.log("Unknown error:", error);
      }
    }
  };

  const auth = getAuth();

  return (
    <>
      <section className="flex flex-col gap-6 text-gray-700">
        <h1 className="text-2xl font-semibold">Login In</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium" htmlFor="email">
              Email Address
            </label>
            <input
              {...register("email")}
              type="text"
              name="email"
              id="email"
              className="rounded-lg md:w-72 border px-2 py-1.5 border-gray-700 focus:outline"
            />
            {errors.email && (
              <p className="text-red-500 text-[10px] font-medium">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative flex flex-col gap-1">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              {...register("password")}
              type={!showPassword ? "password" : "text"}
              name="password"
              id="password"
              className="rounded-lg border px-2 py-1.5 border-gray-700 focus:outline"
            />
            <span
              onClick={handleShowPassword}
              className="absolute w-5 right-3 top-9 cursor-pointer"
            >
              {!showPassword ? (
                <img src={eyeSlash} alt="eye-slash" />
              ) : (
                <img src={eye} alt="eye" />
              )}
            </span>
            {errors.password && (
              <p className="text-red-500 text-[10px] font-medium">
                Input your password
              </p>
            )}
            <Link to="/forgotten">
              <p className="text-[10px] font-semibold text-gray-500">
                Lost Your Password?
              </p>
            </Link>
          </div>
          <input
            type="submit"
            value="Log In"
            className="text-sm py-2 border border-black rounded-lg w-20 cursor-pointer"
          />
        </form>
      </section>
    </>
  );
};
export default Login;
