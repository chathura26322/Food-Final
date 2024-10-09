import { useState } from "react";
import ExploreMenu from "../components/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay";
import MobileApp from "../components/MobileApp";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleMenuChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="z-[2]">
        {/* Pass handleMenuChange to ExploreMenu */}
        <ExploreMenu onMenuChange={handleMenuChange} />
      </div>
      <hr />
      <div className="z-[0.5]">
        {/* Pass the selectedCategory to FoodDisplay */}
        <FoodDisplay selectedCategory={selectedCategory} />
      </div>
      <MobileApp />
    </div>
  );
};

export default MenuPage;
