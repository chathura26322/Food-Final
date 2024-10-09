import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { assets } from "../assets/assets";
import LoginPopup from "./LoginPopup";
import { useContext, useState } from "react";
import { StoreContext } from "../Context/StoreContext";

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("home");

  const { getCount } = useContext(StoreContext);
  const [showForm, setShowForm] = useState(false);

  const handleSignInClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="flex w-[90%] justify-between m-auto items-center py-2 px-0 bg-cover max-h-[100px] ">
      <Link to="/">
        <div className="w-[120px] h-[120px] ">
          <img src={assets.logo} alt="logo" />
        </div>
      </Link>
      <div className="flex gap-5 justify-start">
        <Link to="/">
          <p
            className={`transition duration-500 hover:scale-105 cursor-pointer ${
              selectedMenu === "home" ? "border-b-4 border-[#A70604]" : ""
            }`}
            onClick={() => setSelectedMenu("home")}
          >
            HOME
          </p>
        </Link>
        <Link to="/menu">
          <p
            className={`transition duration-500 hover:scale-105 cursor-pointer ${
              selectedMenu === "menu" ? "border-b-4 border-[#A70604]" : ""
            }`}
            onClick={() => setSelectedMenu("menu")}
          >
            MENU
          </p>
        </Link>
        <a href="#app-download">
          <p
            className={`transition duration-500 hover:scale-105 cursor-pointer ${
              selectedMenu === "mobile app" ? "border-b-4 border-[#A70604]" : ""
            }`}
            onClick={() => setSelectedMenu("mobile app")}
          >
            MOBILE APP
          </p>
        </a>
        <a href="#footer">
          <p
            className={`transition duration-500 hover:scale-105 cursor-pointer ${
              selectedMenu === "contact-us" ? "border-b-4 border-[#A70604]" : ""
            }`}
            onClick={() => setSelectedMenu("contact-us")}
          >
            CONTACT US
          </p>
        </a>
      </div>
      <div className="flex rounded-[20px] border-[2.5px] border-[#A70604] w-[120px] justify-between h-[30px]">
        <div className="flex items-center rounded-l-[20px] justify-center bg-[#A70604] w-[60px]">
          <Link to="/cart">
            <ShoppingCartIcon className="text-white" />
          </Link>
        </div>
        <div className="flex items-center justify-center w-[60px] rounded-r-[20px]">
          <p className="text-[#dd3835] font-bold">{getCount()}</p>
        </div>
      </div>
      <div className="flex rounded-[20px] border-[2.5px] w-[200px] border-[#A70604] gap-2 h-[30px] my-2">
        <div className="bg-[#A70604] flex items-center justify-center w-[110px] rounded-l-[20px]">
          <span
            className="text-white cursor-pointer"
            onClick={handleSignInClick}
          >
            Sign In
          </span>
          {showForm && <LoginPopup handleSignInClick={handleSignInClick} />}
        </div>
        <div className="bg-white flex items-center justify-center w-[90px] rounded-r-[20px]">
          <span
            className="text-[#dd3835] cursor-pointer"
            onClick={handleSignInClick}
          >
            Register
          </span>
          {showForm && <LoginPopup handleSignInClick={handleSignInClick} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
