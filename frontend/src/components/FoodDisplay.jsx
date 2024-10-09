import { useContext, useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import axios from "axios";
import { toast } from "react-toastify";
import { StoreContext } from "../Context/StoreContext";

const FoodDisplay = ({ selectedCategory }) => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);
  const { addToCart } = useContext(StoreContext);
  const getFood = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      setList(response.data.data);
    } catch (error) {
      console.log(error);
      toast.error("Error fetching food list");
    }
  };

  useEffect(() => {
    getFood();
  }, []);
  const filteredList = list.filter(
    (food) =>
      selectedCategory === "" ||
      food.category === selectedCategory ||
      selectedCategory === "All Food"
  );

  return (
    <div className="flex flex-wrap justify-center  pt-[30px]">
      {filteredList.map((food) => (
        <FoodItem
          key={food._id}
          name={food.name}
          price={food.price}
          description={food.description}
          category={food.category}
          image={food.image}
        />
      ))}
    </div>
  );
};

export default FoodDisplay;
