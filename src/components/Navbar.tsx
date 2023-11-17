import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import heart from "../assets/icons/heart.svg";
// import search from "../assets/icons/search.svg";
import cart from "../assets/icons/cart.svg";
import vector from "../assets/icons/vector.svg";
import logo from "../assets/icons/logo.svg";
import home from "../assets/icons/home.svg";
import CartModal from "./CartModal";

const Links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const { pathname } = useLocation();

  const [modal, setModal] = useState<boolean>(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <nav className="lg:px-12 flex gap-16 md:justify-between md:px-10 lg:justify-between items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul className="hidden gap-10 font-medium">
          {Links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`${pathname === link.path ? " text-[#777474]" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="flex gap-10 items-center">
          <Link to="/">
            <img className="w-7" src={home} alt="home" />
          </Link>
          <Link to="/contact">
            <img src={vector} alt="vector" />
          </Link>
          <Link to="/favorite">
            <img src={heart} alt="heart" />
          </Link>

          <img
            onClick={handleModal}
            className="cursor-pointer"
            src={cart}
            alt="cart"
          />
        </div>
      </nav>

      <CartModal action={handleModal} toggle={modal} />
    </>
  );
};
export default Navbar;
