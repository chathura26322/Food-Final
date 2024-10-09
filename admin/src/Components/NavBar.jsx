import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const NavBar = () => {
  return (
    <div className="h-[50px] border-b-[0.5px] flex border-[#E7E4E4] items-center text-[14px] text-[#555]">
      <div className="w-[100%] p-[20px] flex items-center justify-between">
        <div className="flex items-center border-[0.5px] border-solid border-[#D3D3D3] p-[3px]">
          <input className="border-none outline-none bg-transparent" type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-[20px] relative">
            <LanguageOutlinedIcon className="text-[20px]" />
            English
          </div>
          <div>
            <DarkModeOutlinedIcon className="text-[20px]" />
          </div>
          <div>
            <FullscreenExitOutlinedIcon className="text-[20px]" />
          </div>
          <div className="flex items-center mr-[20px] relative">
            <NotificationsNoneOutlinedIcon className="text-[20px]" />
            <div className="w-[15px] h-[15px] bg-red-500 border rounded-[50%] text-white flex items-center justify-center text-[10px] font-bold absolute top-[-5px] right-[-5px]">1</div>
          </div>
          <div className="flex items-center mr-[20px] relative">
            <ChatBubbleOutlineOutlinedIcon className="text-[20px]" />
            <div className="w-[15px] h-[15px] bg-red-500 border rounded-[50%] text-white flex items-center justify-center text-[10px] font-bold absolute top-[-5px] right-[-5px]">2</div>
          </div>
          <div className="flex items-center mr-[20px] relative">
            <ListOutlinedIcon className="text-[20px]" />
          </div>
          <div className="flex items-center mr-[20px] relative">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="w-[30px] h-[30px] border rounded-[50%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
