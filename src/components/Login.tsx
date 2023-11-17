import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface FormData {
  email: string;
  password: string;
}

const schema = z.object({
  email: z
    .string()
    .min(5, { message: "Input your email" })
    .email("Input a valid email"),
  password: z.string().min(5, { message: "Password is too short" }),
});

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const { email, password } = data;
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Successfully logged in", {
        duration: 2000,
        position: "top-center",
        className: "text-sm",
      });
      console.log("Successfully logged in");
      setTimeout(() => {
        navigate("/checkout")
      }, 2000)
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message === "Firebase: Error (auth/network-request-failed).") {
          toast.error("Network connection failed", {
            duration: 2000,
            position: "top-center",
            className: "text-sm",
          });
        } else if (
          error.message === "Firebase: Error (auth/invalid-login-credentials).") {
          toast.error("Invalid login details", {
            duration: 2000,
            position: "top-center",
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
      <section className="flex flex-col gap-6">
        <h1 className="text-2xl font-semibold">Login In</h1>
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
              className="rounded-lg md:w-72"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium" htmlFor="">
              Password
            </label>
            <input
              {...register("password")}
              type="text"
              name="password"
              id="password"
              className="rounded-lg"
            />
            {errors.password && <p>{errors.password.message}</p>}
            <Link to="/forgotten">
              <p className="text-[10px] font-semibold text-gray-800">
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
