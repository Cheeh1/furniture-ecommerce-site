import Header from "../components/Header";
import Info from "../components/Info";

const Checkout = () => {
  return (
    <>
      <Header children="Checkout" />
      <main className="flex flex-col md:flex-row lg:flex-row justify-evenly pt-10 pb-20 px-5">
        <section className="flex flex-col gap-5 md:px-20">
          <h1 className="font-semibold text-2xl">Billing details</h1>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-sm font-medium">
                First Name
              </label>
              <input type="text" name="" id="" className="rounded-lg" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-sm font-medium">
                Last Name
              </label>
              <input type="text" name="" id="" className="rounded-lg" />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-sm font-medium">
                Street address
              </label>
              <input type="text" name="" id="" className="rounded-lg" />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-sm font-medium">
                Town/City
              </label>
              <input type="text" name="" id="" className="rounded-lg" />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-sm font-medium">
                Phone
              </label>
              <input type="text" name="" id="" className="rounded-lg" />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-sm font-medium">
                Email address
              </label>
              <input type="text" name="" id="" className="rounded-lg" />
            </div>
          </form>
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
          <button className="text-sm py-2 px-4 border border-black rounded-lg md:mx-20 lg:mx-20">
            Proceed to Payment
          </button>
        </section>
      </main>
      <Info />
    </>
  );
};
export default Checkout;
