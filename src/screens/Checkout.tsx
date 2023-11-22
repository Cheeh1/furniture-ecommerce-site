import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "../components/Header";
import Info from "../components/Info";
import { usePaystackPayment } from "react-paystack";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface FormData {
  fname: string;
  lname: string;
  address: string;
  city: string;
  phone: number;
  email: string;
}

const schema = z.object({
  fname: z.string().min(3, { message: "Input your first name" }),
  lname: z.string().min(3, { message: "Input your last name" }),
  address: z.string().min(5, { message: "Input your address" }),
  city: z.string().min(1, { message: "Input your city" }),
  phone: z.string().min(3, { message: "Input your number" }),
  email: z
    .string()
    .min(5, { message: "Input your email" })
    .email("Invalid Email Address"),
});

const Checkout = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    initializePayment(onSuccess, onClose); // initialize the payment when the form submits.
  };

  // integrating paystack using usePaystackPayment
  const initializePayment = usePaystackPayment({
    reference: new Date().getTime().toString(),
    email: getValues("email"),
    firstname: getValues("fname"),
    lastname: getValues("lname"),
    phone: getValues("phone"),
    amount: totalAmount * 100,
    publicKey: import.meta.env.VITE_PUBLICKEY,
  });

  // pop-up after a successfull transaction
  const navigate = useNavigate();
  const onSuccess = () => {
    toast.success("Thanks for doing business with us! Come back soon!!", {
      className: " text-sm font-medium",
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  // pop-up after the transcation is aborted
  const onClose = () => {
    toast.error("Wait! You need this furniture, don't go😥", {
      className: "text-sm font-medium",
      duration: 3000,
    });
  };

  return (
    <>
      <Header children="Checkout" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-10 md:flex-row lg:flex-row justify-evenly pt-10 pb-20 px-5 text-gray-700"
      >
        <section className="flex flex-col gap-5 md:px-20">
          <h1 className="font-semibold text-2xl">Billing details</h1>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstname" className="text-sm font-medium">
                First Name
              </label>
              <input
                {...register("fname")}
                type="text"
                name="fname"
                id="fname"
                className="rounded-lg placeholder:text-[10px] border px-2 py-2 border-gray-700 focus:outline"
              />
              {errors.fname && (
                <p className="text-red-500 text-[12px]">
                  {errors.fname.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastname" className="text-sm font-medium">
                Last Name
              </label>
              <input
                {...register("lname")}
                type="text"
                name="lname"
                id="lname"
                className="rounded-lg placeholder:text-[10px] border px-2 py-2 border-gray-700 focus:outline"
              />
              {errors.lname && (
                <p className="text-red-500 text-[12px]">
                  {errors.lname.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="address" className="text-sm font-medium">
                Street address
              </label>
              <input
                {...register("address")}
                type="text"
                name="address"
                id="address"
                className="rounded-lg placeholder:text-[10px] border px-2 py-2 border-gray-700 focus:outline"
              />
              {errors.address && (
                <p className="text-red-500 text-[12px]">
                  {errors.address.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="city" className="text-sm font-medium">
                Town/City
              </label>
              <input
                {...register("city")}
                type="text"
                name="city"
                id="city"
                className="rounded-lg placeholder:text-[10px] border px-2 py-2 border-gray-700 focus:outline"
              />
              {errors.city && (
                <p className="text-red-500 text-[12px]">
                  {errors.city.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
              <input
                {...register("phone")}
                type="text"
                name="phone"
                id="phone"
                className="rounded-lg placeholder:text-[10px] border px-2 py-2 border-gray-700 focus:outline"
              />
              {errors.phone && (
                <p className="text-red-500 text-[12px]">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-sm font-medium">
                Email address
              </label>
              <input
                {...register("email")}
                type="text"
                name="email"
                id="email"
                className="rounded-lg placeholder:text-[10px] border px-2 py-2 border-gray-700 focus:outline"
              />
              {errors.email && (
                <p className="text-red-500 text-[12px]">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <h1 className="font-semibold text-2xl">Products</h1>
          <div className="flex flex-col gap-3">
            {cartItems.map((item) => (
              <div className="flex items-end gap-10 text-gray-600">
                <div className="flex items-center gap-3">
                  <img
                    className="w-14"
                    src={`/images/${item.image}`}
                    alt={item.title}
                  />
                  <div className="flex flex-col">
                    <h1 className="text-sm font-medium ">{item.title}</h1>
                    <div className="flex flex-col">
                      <p className="text-[12px]">
                        <span>{item.quantity}</span> X <span>&#8358;</span>
                        <span>{`${item.price.toFixed(2)}`}</span>
                      </p>
                      <p className="text-[12px] font-semibold">
                        <span className="">SubTotal: </span>{" "}
                        <span>&#8358;</span>
                        {`${item.subTotalAmount.toFixed(2)}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center rounded font-semibold text-lg px-5 py-3 text-gray-600">
              Total amount <span>{`(${cartItems.length})`}</span> :
              <span>&#8358;</span>
              <span>{`${totalAmount.toFixed(2)}`}</span>
            </div>
          </div>
          <input
            type="submit"
            value="Proceed to Payment"
            // onClick={() => initializePayment(onSuccess, onClose)}  use onclick to render both the variable holding the alll config and the onSuccess and onclose as parameteres
            className="text-sm py-2 px-4 border font-medium border-black rounded-lg md:mx-20 lg:mx-20 cursor-pointer"
          />
        </section>
      </form>
      <Info />
    </>
  );
};
export default Checkout;
