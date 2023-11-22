import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import heart from "../assets/icons/heart.svg";
import cart from "../assets/icons/cart.svg";
import logo from "../assets/icons/logo.svg";
import CartModal from "./CartModal";
import { FavoriteContext } from "../context/FavoriteContext";
import { RootState } from "../store/store";
import { useSelector } from "react-redux/";

const Links = [
  {
    label: "home",
    path: "/",
    img: "home.svg",
  },
  {
    label: "store",
    path: "/store",
    img: "shop.png",
  },
  {
    label: "contact",
    path: "/contact",
    img: "cart-original.svg",
  },
];

const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const { favorites } = useContext(FavoriteContext);

  const [modal, setModal] = useState<boolean>(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <nav className="lg:px-12 flex justify-between px-5 md:px-10 items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="flex gap-5 items-center">
          {Links.map((link, index) => (
            <Link key={index} to={link.path}>
              <img src={`/images/${link.img}`} alt={link.label} />
            </Link>
          ))}
          <Link to="/favorite">
            <div className="relative">
              <img src={heart} alt="heart" />
              {favorites.length > 0 && (
                <span className="absolute top-0 left-4 text-gray-100 bg-gray-700 px-1.5 py-0 text-[12px] font-semibold rounded-sm">
                  {favorites.length}
                </span>
              )}
            </div>
          </Link>
          <div className="relative cursor-pointer" onClick={handleModal}>
            <img src={cart} alt="cart" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 left-4 text-gray-100 bg-gray-700 px-1.5 py-0 text-[12px] font-semibold rounded-sm">
                {cartItems.length}
              </span>
            )}
          </div>
        </ul>
      </nav>

      <CartModal action={handleModal} toggle={modal} />
    </>
  );
};
export default Navbar;
