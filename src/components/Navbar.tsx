import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import heart from "../assets/icons/heart.svg";
import cart from "../assets/icons/cart.svg";
import logo from "../assets/icons/logo.svg";
import CartModal from "./CartModal";
import { FavoriteContext } from "../context/FavoriteContext";

const Links = [
  {
    label: "home",
    path: "/",
    img: "home.svg",
  },
  {
    label: "contact",
    path: "/contact",
    img: "vector.svg",
  },
  // {
  //   label: "favorite",
  //   path: "/favorite",
  //   img:"heart.svg"
  // }
];

const Navbar = () => {
  const { favorites } = useContext(FavoriteContext);

  const [modal, setModal] = useState<boolean>(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <nav className="lg:px-12 flex gap-16 md:justify-between md:px-10 lg:justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="flex gap-10 items-center">
          {Links.map((link, index) => (
            <Link key={index} to={link.path}>
              <img src={`../src/assets/icons/${link.img}`} alt={link.label} />
            </Link>
          ))}
          <Link to="/favorite">
            <div className="relative">
              <img src={heart} alt="heart" />
              {favorites.length > 0 && (
                <span className="absolute top-0 left-3 text-gray-100 bg-gray-800 px-1.5 py-0 text-[12px] font-semibold rounded-sm">
                  {favorites.length}
                </span>
              )}
            </div>
          </Link>
          <img
            onClick={handleModal}
            className="cursor-pointer"
            src={cart}
            alt="cart"
          />
        </ul>
      </nav>

      <CartModal action={handleModal} toggle={modal} />
    </>
  );
};
export default Navbar;
