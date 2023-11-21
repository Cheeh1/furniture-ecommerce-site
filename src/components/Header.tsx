import { ReactNode } from "react";
import arrow from "../assets/icons/arrow.svg";
import logo from "../assets/icons/logo.svg";

const Header = ({children}:{children: ReactNode}) => {
  return (
    <>
      <header className="image py-20 text-gray-700">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" />
          <h1 className="text-3xl font-semibold">{children}</h1>
        </div>
        <div className="flex gap-2 justify-center items-center">
            <p className="font-medium">Home</p>
            <img className="pt-1" src={arrow} alt="arrow" />
            <p className="font-normal">{children}</p>
        </div>
      </header>
    </>
  );
};
export default Header;
