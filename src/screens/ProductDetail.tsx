import { Link, useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import arrow from "../assets/icons/arrow.svg";
import starFilled from "../assets/icons/star-filled.svg";
import starHalf from "../assets/icons/star-half.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import { ProductData } from "../data/ProductData";
import { FavoriteContext } from "../context/FavoriteContext";
import { useDispatch } from "react-redux";
import { addToCart, updateQuantity } from "../store/cartSlice";
import toast from "react-hot-toast";
import { CartItem } from "../store/cartSlice"; // reused the type from cartSlice.ts

const ProductDetail = () => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product) {
      const newItem: CartItem = {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: count,
        subTotalAmount: count * product.price,
      };
      dispatch(addToCart(newItem));
      toast.success("Item added to cart", {
        duration: 1000,
        className: "text-sm",
      });
    }
  };

  const handleQuantityChange = (newCount: number) => {
    setCount(newCount);

    if (product) {
      dispatch(updateQuantity({ itemId: product.id, quantity: newCount }));
    }
  };

  {
    /* Use the handleProductClick function when the user clicks on the link */
  }

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const { favorites, handleFavorite } = useContext(FavoriteContext);

  const [count, setCount] = useState<number>(1);

  const { Id } = useParams();
  const parsedId = Id ? parseInt(Id) : 1;

  const product = ProductData.find((item) => item.id === parsedId);
  return (
    <>
      <main className="text-gray-700">
        {product ? (
          <main className="pt-10 pb-20 gap-10 flex flex-col">
            <section className="flex gap-2 lg:px-60 px-5">
              <Link to="/">
                <p className="text-sm">Home</p>
              </Link>
              <img className="w-3" src={arrow} alt="arrow" />
              <Link to="/store">
                <p className="text-sm">Store</p>
              </Link>
              <img className="w-3" src={arrow} alt="arrow" />
              <p className="font-medium text-sm">{product.title}</p>
            </section>

            <section className="flex flex-col lg:flex-row gap-10 justify-center">
              <div className="flex lg:flex-col flex-row gap-5 justify-center">
                <img
                  className="lg:w-20 w-16 bg-[#dbc8c8] rounded-lg p-1"
                  src={`/images/${product.image}`}
                  alt={product.title}
                />
                <img
                  className="lg:w-20 w-16 bg-[#dbc8c8] rounded-lg p-1"
                  src={`/images/${product.image}`}
                  alt={product.title}
                />
                <img
                  className="lg:w-20 w-16 bg-[#dbc8c8] rounded-lg p-1"
                  src={`/images/${product.image}`}
                  alt={product.title}
                />
                <img
                  className="lg:w-20 w-16 bg-[#dbc8c8] rounded-lg p-1"
                  src={`/images/${product.image}`}
                  alt={product.title}
                />
              </div>

              <div className="flex justify-center">
                <img
                  className="bg-[#dbc8c8] rounded-lg lg:w-96 w-80 lg:h-full"
                  src={`/images/${product.image}`}
                  alt={product.title}
                />
              </div>

              <div className="flex flex-col px-5 md:px-10 lg:px-0 gap-3 py-2">
                <h1 className="text-2xl font-medium">{product.title}</h1>
                <p className="text-[#9F9F9F] font-medium text-lg">
                  <span>&#8358;</span>{" "}
                  <span>{`${product.price.toFixed(2)}`}</span>
                </p>
                <div className="flex gap-2 items-center">
                  <div className="flex gap-2">
                    <img src={starFilled} alt="star-logo" />
                    <img src={starFilled} alt="star-logo" />
                    <img src={starFilled} alt="star-logo" />
                    <img src={starFilled} alt="star-logo" />
                    <img src={starHalf} alt="star-logo" />
                  </div>
                  <hr className="border h-6" />
                  <p className="text-[#9F9F9F] text-sm">5 Customer reviews</p>
                </div>
                <p className="lg:w-96 text-sm">{product.description}</p>
                <p className="text-[#9F9F9F] text-sm">{`Category: ${product.category}`}</p>
                <div className="flex gap-20">
                  <div className="flex gap-3 items-center">
                    <p className="text-sm text-[#9F9F9F]">Share:</p>
                    <div className="flex gap-3">
                      <img className="w-4" src={facebook} alt="facebook" />
                      <img className="w-4" src={twitter} alt="twitter" />
                      <img className="w-4" src={linkedin} alt="linkedin" />
                    </div>
                  </div>
                  <button onClick={() => handleFavorite(product.id)}>
                    {favorites.includes(product.id) ? (
                      <i className="fa-solid text-red-500 fa-heart"></i>
                    ) : (
                      <i className="fa-regular text-red-500 fa-heart"></i>
                    )}
                  </button>
                </div>
                <div className="flex gap-5 pt-10">
                  <div>
                    <label htmlFor="Quantity" className="sr-only">
                      {" "}
                      Quantity{" "}
                    </label>

                    <div className="px-5 flex items-center border border-gray-200 rounded">
                      <button
                        onClick={() =>
                          handleQuantityChange(count > 1 ? count - 1 : 1)
                        }
                        type="button"
                        className=" text-black"
                      >
                        &minus;
                      </button>

                      <input
                        type="number"
                        id="Quantity"
                        value={count}
                        onChange={(e) =>
                          handleQuantityChange(parseInt(e.target.value))
                        }
                        className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                      />

                      <button
                        onClick={() =>
                          handleQuantityChange(count < 5 ? count + 1 : 5)
                        }
                        type="button"
                        className="text-black"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="rounded-[10px] border py-2 px-4 text-sm font-medium border-black"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </section>
          </main>
        ) : (
          <p className="text-3xl font-medium text-center py-20 text-red-500">
            Product Not Found
          </p>
        )}

        <hr />

        <section className="flex flex-col items-center gap-12 py-20">
          <h1 className="font-medium text-xl md:text-2xl lg:text-3xl text-center">
            Other Top-Rated Products
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 px-10 md:grid-cols-3  justify-center gap-10 items-center">
            {ProductData.slice(4, 8).map((product) => (
              <div
                key={product.id}
                className="overflow-hidden border border-gray-500 rounded-lg pb-5 shadow-gray-400 shadow-sm hover:shadow-lg"
              >
                <Link to={`/products/${product.id}`}>
                  <img
                    src={`/images/${product.image}`}
                    alt={product.title}
                    className="h-52 w-full border border-gray-300"
                  />
                </Link>

                <div className="flex flex-col items-start gap-2 pl-2 bg-white pt-3">
                  <p className="text-[#969393] w-54 text-center font-semibold">
                    {product.title}
                  </p>
                  <div className="px-1 flex gap-14 items-end">
                    <p className="font-medium text-sm">
                      <span>&#8358;</span>{" "}
                      <span>{`${product.price.toFixed(2)}`}</span>
                    </p>
                    <Link to={`/products/${product.id}`}>
                      <button className="text-sm font-medium text-gray-800 bg-[#dbc8c8] py-1 px-2 rounded-lg">
                        View details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <Link to="/store">
              <button className="font-medium text-md">View More</button>
            </Link>
            <hr className="border-black border-1" />
          </div>
        </section>
      </main>
    </>
  );
};
export default ProductDetail;
