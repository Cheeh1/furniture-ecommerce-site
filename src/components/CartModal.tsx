import { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../cartSlice";
import { RootState } from "../store";
import close from "../assets/icons/close.svg";
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
            className="relative w-screen max-w-md lg:max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 rounded-lg shadow-sm shadow-[#00000033]"
            aria-modal="true"
            role="dialog"
          >
            <button
              onClick={action}
              className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
            >
              <span className="sr-only">Close cart</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="mt-4 flex flex-col gap-6">
              {cartItems.length ? (
                <div className="flex flex-col gap-3">
                  {cartItems.map((item) => (
                    <div className="flex items-center justify-between text-gray-600">
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
                              <span>{`$${item.price.toFixed(2)}`}</span>
                            </p>
                            <div>
                              <p className="text-[12px] font-semibold">
                                <span className="">SubTotal: </span>
                                {` $${item.subTotalAmount.toFixed(2)}`}
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
                  <p className="text-xl font-medium text-center text-gray-600">
                    Nothing in cart yet
                  </p>
                </div>
              )}

              <div className="space-y-4 text-center">
                <div className="block rounded font-semibold text-lg px-5 py-3 text-gray-600">
                  Total amount <span>{`(${cartItems.length})`}</span> :{" "}
                  <span>{`$${totalAmount.toFixed(2)}`}</span>
                </div>

                {cartItems.length > 0 && (
                  <Link
                    to="/checkout"
                    onClick={action}
                    className="block rounded border isD border-gray-600 bg-gray-700 px-5 py-3 text-sm text-gray-100 hover:bg-gray-100 hover:text-gray-600 transition"
                  >
                    Checkout
                  </Link>
                )}

                <Link
                  to="/"
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
