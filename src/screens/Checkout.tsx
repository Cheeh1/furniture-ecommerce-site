import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "../components/Header";
import Info from "../components/Info";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header children="Checkout" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row lg:flex-row justify-evenly pt-10 pb-20 px-5"
      >
        <section className="flex flex-col gap-5 md:px-20">
          <h1 className="font-semibold text-2xl">Billing details</h1>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-sm font-medium">
                First Name
              </label>
              <input
                {...register("fname")}
                type="text"
                name="fname"
                id="fname"
                className="rounded-lg"
              />
              {errors.fname && (
                <p className="text-red-500 text-[12px]">
                  {errors.fname.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-sm font-medium">
                Last Name
              </label>
              <input
                {...register("lname")}
                type="text"
                name="lname"
                id="lname"
                className="rounded-lg"
              />
              {errors.lname && (
                <p className="text-red-500 text-[12px]">
                  {errors.lname.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-sm font-medium">
                Street address
              </label>
              <input
                {...register("address")}
                type="text"
                name="address"
                id="address"
                className="rounded-lg"
              />
              {errors.address && (
                <p className="text-red-500 text-[12px]">
                  {errors.address.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-sm font-medium">
                Town/City
              </label>
              <input
                {...register("city")}
                type="text"
                name="city"
                id="city"
                className="rounded-lg"
              />
              {errors.city && (
                <p className="text-red-500 text-[12px]">
                  {errors.city.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-sm font-medium">
                Phone
              </label>
              <input
                {...register("phone")}
                type="text"
                name="phone"
                id="phone"
                className="rounded-lg"
              />
              {errors.phone && (
                <p className="text-red-500 text-[12px]">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-sm font-medium">
                Email address
              </label>
              <input
                {...register("email")}
                type="text"
                name="email"
                id="email"
                className="rounded-lg"
              />
              {errors.email && (
                <p className="text-red-500 text-[12px]">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-3 pt-12">
            <div className="flex gap-40">
              <h1 className="font-medium">Product</h1>
              <h1 className="font-medium">Subtotal</h1>
            </div>
            <div className="flex gap-32">
              <p className="text-[#9F9F9F] text-sm tracking-widest">
                Asgaard <span className="text-black font-medium"> X 1</span>
              </p>
              <p className="text-[#302f2f] text-sm">$ 250000.00</p>
            </div>
            <div className="flex gap-40">
              <p className="text-sm">Subtotal</p>
              <p className="text-[#302f2f] text-sm">$ 25000.00</p>
            </div>
            <div className="flex gap-48">
              <p className="text-sm">Total</p>
              <p className="text-black font-medium">$ 25000.00</p>
            </div>
          </div>
          <input
            type="submit"
            value="Proceed to Payemnt"
            className="text-sm py-2 px-4 border border-black rounded-lg md:mx-20 lg:mx-20"
          />
        </section>
      </form>
      <Info />
    </>
  );
};
export default Checkout;
