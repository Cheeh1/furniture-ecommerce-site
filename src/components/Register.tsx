import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../config/Firebase";
import toast from "react-hot-toast"

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

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const auth = getAuth();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const { email, password } = data;
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("User successfully registered", {
        duration: 2000,
        position: "top-center",
        className: "text-sm",
      });
      console.log("User succesfully registered");
    } catch (error: unknown) {
      if (error instanceof Error) {
       if (error.message === "Firebase: Error (auth/network-request-failed).") {
         toast.error("Network connection failed", {
           duration: 2000,
           position: "top-center",
           className: "text-sm",
         });
       } else if (error.message === "Firebase: Error (auth/email-already-in-use).") {
         toast.error("Email already in use", {
           duration: 2000,
           position: "top-center",
           className: "text-sm",
         });
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
      <section className="flex flex-col gap-6">
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
            className="text-sm py-2 border border-black rounded-lg w-20"
          />
        </form>
      </section>
    </>
  );
};
export default Register;
