import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import AddchartSharp from "@mui/icons-material/AddchartSharp";
import FoodBankSharp from "@mui/icons-material/FoodBankSharp";

const SideBar = () => {
  return (
    <div className="w-[220px] border-r-[0.5px] border-solid border-[#E6E3E3] min-h-[100vh] bg-white">
      <div className="h-[50px] flex items-center justify-center">
        <span className="text-[25px] p-[20px]  font-bold text-[#A70604]">
          Admin
        </span>
      </div>
      <hr className="h-0 border-[0.5px] border-solid border-[#E6E3E3]" />
      <div className="pl-[10px]">
        <ul className="list-none m-0 p-0">
          <p className="text-[10px] font-bold text-[#999] mt-[15px] mb-[5px]">
            MAIN
          </p>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li className="flex items-center p-[5px] cursor-pointer transition duration-500  hover:scale-105 hover:bg-transparent">
              <DashboardIcon className="text-[18px] text-[#A70604]" />
              <span className="text-[13px] font-[600] text-[#888] ml-[10px]">
                Dashboard
              </span>
            </li>
          </Link>
          <p className="text-[10px] font-bold text-[#999] mt-[15px] mb-[5px]">
            LISTS
          </p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li className="flex items-center p-[5px] cursor-pointer transition duration-500  hover:scale-105 hover:bg-transparent">
              <PersonOutlineIcon className="text-[18px] text-[#A70604]" />
              <span className="text-[13px] font-[600] text-[#888] ml-[10px]">
                Users
              </span>
            </li>
          </Link>
          <Link to="/add" style={{ textDecoration: "none" }}>
            <li className="flex items-center p-[5px] cursor-pointertransition duration-500  hover:scale-105 hover:bg-transparent">
              <AddchartSharp className="text-[18px] text-[#A70604]" />
              <span className="text-[13px] font-[600] text-[#888] ml-[10px]">
                Add Food
              </span>
            </li>
          </Link>
          <Link to="/list" style={{ textDecoration: "none" }}>
            <li className="flex items-center p-[5px] cursor-pointer transition duration-500  hover:scale-105 hover:bg-transparent">
              <FoodBankSharp className="text-[18px] text-[#A70604]" />
              <span className="text-[13px] font-[600] text-[#888] ml-[10px]">
                Food List
              </span>
            </li>
          </Link>
          <li className="flex items-center p-[5px] cursor-pointertransition duration-500  hover:scale-105 hover:bg-transparent">
            <LocalShippingIcon className="text-[18px] text-[#A70604]" />
            <span className="text-[13px] font-[600] text-[#888] ml-[10px]">
              Delivery
            </span>
          </li>
          <p className="text-[10px] font-bold text-[#999] mt-[15px] mb-[5px]">
            USEFUL
          </p>
          <li className="flex items-center p-[5px] cursor-pointer transition duration-500  hover:scale-105 hover:bg-transparent">
            <InsertChartIcon className="text-[18px] text-[#A70604]" />
            <span className="text-[13px] font-[600] text-[#888] ml-[10px]">
              Stats
            </span>
          </li>
          <li className="flex items-center p-[5px] cursor-pointer transition duration-500  hover:scale-105 hover:bg-transparent">
            <NotificationsNoneIcon className="text-[18px] text-[#A70604]" />
            <span className="text-[13px] font-[600] text-[#888] ml-[10px]">
              Notifications
            </span>
          </li>
          <p className="text-[10px] font-bold text-[#999] mt-[15px] mb-[5px]">
            SERVICE
          </p>
          <li className="flex items-center p-[5px] cursor-pointertransition duration-500  hover:scale-105 hover:bg-transparent">
            <SettingsSystemDaydreamOutlinedIcon className="text-[18px] text-[#A70604]" />
            <span className="text-[13px] font-[600] text-[#888] ml-[10px]">
              System Health
            </span>
          </li>
          <li className="flex items-center p-[5px] cursor-pointer transition duration-500  hover:scale-105 hover:bg-transparent">
            <PsychologyOutlinedIcon className="text-[18px] text-[#A70604]" />
            <span className="text-[13px] font-[600] text-[#888] ml-[10px]">
              Logs
            </span>
          </li>
          <li className="flex items-center p-[5px] cursor-pointer transition duration-500  hover:scale-105 hover:bg-transparent">
            <SettingsApplicationsIcon className="text-[18px] text-[#A70604]" />
            <span className="text-[13px] font-[600] text-[#888] ml-[10px]">
              Settings
            </span>
          </li>
          <p className="text-[10px] font-bold text-[#999] mt-[15px] mb-[5px]">
            USER
          </p>
          <li className="flex items-center p-[5px] cursor-pointer transition duration-500  hover:scale-105 hover:bg-transparent">
            <AccountCircleOutlinedIcon className="text-[18px] text-[#A70604]" />
            <span className="text-[13px] font-[600] text-[#888] ml-[10px]">
              Profile
            </span>
          </li>
          <li className="flex items-center p-[5px] cursor-pointer transition duration-500  hover:scale-105 hover:bg-transparent">
            <ExitToAppIcon className="text-[18px] text-[#A70604]" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="text-[13px] font-[600] text-[#888] ml-[10px]">
                Logout
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
