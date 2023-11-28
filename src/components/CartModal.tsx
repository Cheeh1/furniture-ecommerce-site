import { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { RootState } from "../store/store";
import close from "../assets/icons/close.svg";
import cartClose from "../assets/icons/cart-close.svg";
import toast from "react-hot-toast";

interface Props {
  action: () => void;
  toggle: boolean;
}

const CartModal: FC<Props> = ({ toggle, action }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  const handleRemoveFromCart = (itemId: number) => {
    dispatch(removeFromCart(itemId));
    toast.error("Item removed from cart", {
      className: "text-sm",
      duration: 1000,
    });
  };

  return (
    <>
      <section
        className={
          toggle
            ? "block fixed top-0 bottom-0 left-0 right-0 bg-[#00000033]"
            : "hidden"
        }
      >
        <div className="absolute right-0 top-0">
          <div
            className="relative w-screen max-w-md lg:max-w-sm border border-gray-600 bg-gray-100 px-4 py-4 sm:px-6 lg:px-8 rounded-lg shadow-sm shadow-[#00000033]"
            aria-modal="true"
            role="dialog"
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-gray-700 text-xl">
                Shopping Cart
              </h1>
              <div onClick={action} className="cursor-pointer">
                <img src={cartClose} alt="cart" />
              </div>
            </div>
            <hr className="border-1 bg-[#D9D9D9] pt-[1px] my-2" />

            <div className="mt-4 flex flex-col gap-6">
              {cartItems.length ? (
                <div className="flex flex-col gap-3">
                  {cartItems.map((item) => (
                    <div className="flex items-center justify-between text-gray-700">
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
                              <span>{item.quantity}</span> X{" "}
                              <span>&#8358;</span>
                              <span>{`${item.price.toFixed(2)}`}</span>
                            </p>
                            <div>
                              <p className="text-[12px] font-semibold">
                                <span className="">SubTotal: </span>
                                <span>&#8358;</span>
                                {`${item.subTotalAmount.toFixed(2)}`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div onClick={() => handleRemoveFromCart(item.id)}>
                        <img
                          className="cursor-pointer"
                          src={close}
                          alt="close"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <p className="text-xl font-medium text-center text-gray-700">
                    Nothing in cart yet
                  </p>
                </div>
              )}

              <div className="space-y-4 text-center">
                <div className="block rounded font-semibold text-lg px-5 py-3 text-gray-700">
                  Total amount <span>{`(${cartItems.length})`}</span> :{" "}
                  <span>&#8358;</span>
                  <span>{`${totalAmount.toFixed(2)}`}</span>
                </div>

                {cartItems.length > 0 && (
                  <Link
                    to="/account"
                    onClick={action}
                    className="block rounded border isD border-gray-600 bg-gray-700 px-5 py-3 text-sm text-gray-100 hover:bg-gray-100 hover:text-gray-600 transition"
                  >
                    Checkout
                  </Link>
                )}

                <Link
                  to="/store"
                  onClick={action}
                  className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                >
                  Continue shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CartModal;
