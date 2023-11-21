import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import toast from "react-hot-toast";

const Forgotten = () => {
  const [text, setText] = useState<string>("");

  const navigate = useNavigate();
  const auth = getAuth();
  const handleForgotPassword = async (email: string) => {
    try {
      if (!email) {
        toast.error("Please provide a valid email address", {
          duration: 1000,
          position: "top-center",
          className: "text-sm",
        });
        return;
      }

      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent successfully", {
        duration: 1000,
        position: "top-center",
        className: "text-sm",
      });
      console.log("Password reset email sent successfully");

      setTimeout(() => {
        navigate("/account");
      }, 2000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error("User Not Found", {
          duration: 1000,
          position: "top-center",
          className: "text-sm",
        });
        console.log("Error sending password reset email:", error.message);
      } else {
        console.log("unknown error:", error);
      }
    }
  };
  return (
    <>
      <section className="border py-20 flex flex-col items-center gap-4 text-gray-700">
        <h1 className="text-3xl font-medium">Enter your email</h1>
        <input
          type="email"
          id="Email"
          name="email"
          placeholder="youremail@gmail.com"
          className="mt-1 w-72 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md placeholder:text-sm placeholder:text-gray-400 border-text-gray-900"
          defaultValue={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <button
          className="text-sm font-semibold py-2 px-4 border border-black rounded-lg shadow-black shadow-sm"
          onClick={() => handleForgotPassword(text)}
        >
          Reset Password
        </button>
      </section>
    </>
  );
};
export default Forgotten;
