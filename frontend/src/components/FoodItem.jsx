import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { ToastContainer } from "react-toastify";
import { useContext, useState } from "react";
import { StoreContext } from "../Context/StoreContext";

const FoodItem = ({ id, name, price, description, category, image }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);
  const [showIcons, setShowIcons] = useState(false);

  const itemCount = cartItems[id] || 0;

  // Toggle the visibility of the Add and Remove buttons when the item is added
  const handleAddToCart = () => {
    addToCart(id); // Add item to cart via context
    setShowIcons(true); // Show the add/remove icons for this item
  };

  // Handle removal of item from cart
  const handleRemoveFromCart = () => {
    if (itemCount > 1) {
      removeFromCart(id); // Remove one instance of the item
    } else {
      removeFromCart(id); // Remove the last instance and hide icons
      setShowIcons(false); // Hide icons when item count reaches zero
    }
  };

  return (
    <div className="w-[300px] p-[10px] rounded-[20px] bg-white">
      <div className="cursor-pointer transition duration-500 border rounded-2xl hover:scale-105 py-[30px]">
        <div className="relative">
          <img
            className="mb-[10px]"
            src={"http://localhost:4000/images/" + image}
            alt={name}
          />
          {showIcons && (
            <>
              <RemoveCircleOutlineIcon
                onClick={handleRemoveFromCart}
                className="absolute bottom-2 left-2 bg-inherit hover:text-red-400 text-white rounded-full"
              />
              <AddCircleOutlineIcon
                onClick={handleAddToCart}
                className="absolute bottom-2 right-2 bg-inherit hover:text-green-600 text-white rounded-full"
              />
            </>
          )}
        </div>
        <p className="mb-[5px] text-gray-500">{id}</p>
        <h3 className="mb-[10px] text-lg font-bold px-[10px]">{name}</h3>
        <p className="mb-[10px] text-justify text-gray-700 px-[10px]">
          {description}
        </p>
        <p className="mb-[10px] text-lg font-semibold px-[10px]">Rs.{price}</p>
        <p className="mb-[20px] text-gray-500 px-[10px]">{category}</p>
        <div className="flex justify-center items-center">
          <button
            onClick={handleAddToCart} // Show buttons and add item when clicked
            className="bg-[#A70604] text-white rounded-[10px] h-[40px] w-[90%] px-[10px] py-[5px] flex justify-center items-center gap-[2px] max-w-xs transition duration-500 cursor-pointer hover:scale-105"
          >
            Add to Cart
            <ShoppingCartIcon className="ml-[5px]" />
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
