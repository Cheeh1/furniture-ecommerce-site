import { SubmitHandler } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../config/Firebase";
import toast from "react-hot-toast";
import { FormData, useFormData } from "../hooks/useFormData";
import eye from "../assets/icons/eye-regular.svg";
import eyeSlash from "../assets/icons/eye-slash-regular.svg";

const Register = () => {
  const {
    register,
    handleSubmit,
    errors,
    reset,
    showPassword,
    handleShowPassword,
  } = useFormData();

  const auth = getAuth();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const { email, password } = data;
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("User successfully registered", {
        className: "text-sm",
      });
      reset(); // clear input field after validating
      console.log("User succesfully registered");
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (
          error.message === "Firebase: Error (auth/network-request-failed)."
        ) {
          toast.error("Network connection failed", {
            className: "text-sm",
          });
        } else if (
          error.message === "Firebase: Error (auth/email-already-in-use)."
        ) {
          toast.error("Email already in use", {
            className: "text-sm",
          });
          reset(); // clears form if there is a wrong use of email
        } else {
          console.log("Error registering user:", error.message);
        }
      } else {
        console.log("Unknown error:", error);
      }
    }
  };

  return (
    <>
      <section className="flex flex-col gap-6 text-gray-700">
        <h1 className="text-2xl font-semibold">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium" htmlFor="">
              Email Address
            </label>
            <input
              {...register("email")}
              type="text"
              name="email"
              id="email"
              className="rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-[10px] font-medium">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative flex flex-col gap-1">
            <label className="text-sm font-medium" htmlFor="">
              Password
            </label>

            <input
              {...register("password")}
              type={!showPassword ? "password" : "text"}
              name="password"
              id="password"
              className="rounded-lg"
            />
            <span
              onClick={handleShowPassword}
              className="absolute w-5 right-3 bottom-3 cursor-pointer"
            >
              {!showPassword ? (
                <img src={eyeSlash} alt="eye-slash" />
              ) : (
                <img src={eye} alt="eye" />
              )}
            </span>

            {errors.password && (
              <p className="text-red-500 text-[10px] font-medium">
                {errors.password.message}
              </p>
            )}
          </div>
          <p className="w-80 text-[10px]">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-semibold">Privacy Policy</span>.
          </p>
          <input
            type="submit"
            value="Register"
            className="text-sm py-2 border border-black rounded-lg w-20 cursor-pointer"
          />
        </form>
      </section>
    </>
  );
};
export default Register;
