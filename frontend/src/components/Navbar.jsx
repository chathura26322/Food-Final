import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { StoreContext } from "../Context/StoreContext";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LoginPopup from "./LoginPopup";

const Navbar = ({ setShowLogin }) => {
  const [selectedMenu, setSelectedMenu] = useState("home");
  const { getTotalCartAmount, getCount, token, setToken } =
    useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <div className="flex w-[90%] justify-between m-auto items-center py-2 px-0 bg-cover max-h-[100px] ">
      <Link to="/">
        <div className="w-[120px] h-[120px]">
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
      {!token ? (
        <div>
          <button
            onClick={() => setShowLogin(true)}
            className="border-none bg-[#A70604] h-[30px] w-[100px] text-white px-[12px] py-[10px] rounded-[15px] cursor-pointer hover:bg-black flex items-center justify-center"
          >
            Sign In
          </button>
        </div>
      ) : (
        <div>
          <AccountCircleIcon />
          <ul>
            <li onClick={navigate("/myorders")}>
              {""}
              <ShoppingBagIcon />
              <p>Oders</p>
            </li>
            <hr />
            <li onClick={logout}>
              {""}
              <p>Logout</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
