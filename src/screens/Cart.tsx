import Info from "../components/Info";
import Header from "../components/Header";
import deleteBtn from "../assets/icons/delete.svg";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Header children="Cart" />
      <main className="py-20 flex lg:flex-row flex-col gap-10 px-10 justify-evenly">
        <section className="flex gap-10">
          <div className="lg:px-20 px-5 flex lg:flex-row flex-col gap-14 bg-[#dbc8c8] rounded-xl">
            <p className="font-medium">Product</p>
            <p className="font-medium">Price</p>
            <p className="font-medium">Quantity</p>
            <p className="font-medium">Subtotal</p>
          </div>

          <div className="flex gap-8 lg:flex-row flex-col items-center">
            <img
              className="bg-[#dbc8c8] w-10 rounded-md"
              src="/images/asgaard-sofa-2.png"
              alt="furniture"
            />
            <p className="text-[#9F9F9F] text-sm">Asgaard Sofa</p>
            <p className="text-[#9F9F9F] text-sm">$ 250000.00</p>
            <p className="text-[#9F9F9F] text-sm border py-1 px-2">1</p>
            <p className="font-medium text-sm ml-12">$ 250000.00</p>
            <img className="w-5" src={deleteBtn} alt="deleteBtn" />
          </div>
        </section>

        <section className="flex flex-col gap-10 bg-[#dbc8c8] py-10 px-20 rounded-xl">
          <h1 className="font-semibold text-2xl">Cart Totals</h1>
          <div className="fkex flex-col gap-3">
            <div className=" flex gap-9">
              <p className="text-sm font-medium">SubTotal</p>
              <p className="text-sm font-medium">$ 250000.00</p>
            </div>
            <div className="flex gap-16">
              <p className="text-sm font-medium">Total</p>
              <p className="text-sm font-medium">$ 250000.00</p>
            </div>
          </div>
          <Link to="/checkout">
            <button className="text-sm py-2 px-4 border font-medium border-black rounded-lg">
              Check Out
            </button>
          </Link>
        </section>
      </main>
      <Info />
    </>
  );
};
export default Cart;
