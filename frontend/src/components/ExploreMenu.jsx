import { useState } from "react";
import "../index.css"; // Make sure to import the custom scrollbar style

const ExploreMenu = ({ onMenuChange }) => {
  const [menu, setMenu] = useState("");

  const handleClick = (menuItem) => {
    setMenu(menuItem);
    onMenuChange(menuItem);
  };

  return (
    <div>
      <div className="flex justify-between py-[30px] px-[40px] items-center h-[100px]">
        <div className="flex overflow-x-auto gap-[100px] relative scrollbar-none">
          {[
            "All Food",
            "Rice",
            "Salad",
            "Fast Food",
            "Deserts",
            "Sandwich",
            "Cake",
            "Pure Veg",
            "Pasta",
            "Noodles",
          ].map((menuItem) => (
            <p
              key={menuItem} // Add a unique key for each menu item
              className={`border-[3px] border-[#A70604] rounded-[25px] font-medium text-black min-w-[110px] p-[3px] h-[35px] text-center align-middle cursor-pointer ${
                menu === menuItem ? "bg-[#A70604] text-white" : ""
              }`}
              onClick={() => handleClick(menuItem)}
            >
              {menuItem}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;

