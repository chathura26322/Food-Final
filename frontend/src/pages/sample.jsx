import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Sample = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);
  const navigate = useNavigate(); // Initialize navigate function

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

  const handleClick = (food) => {
    navigate("/test", { state: { selectedFood: food } }); // Navigate with selected food data
  };

  return (
    <div className="p-4">
      {list.map((food) => (
        <div
          key={food._id}
          className="border border-gray-300 p-4 mb-4 rounded-md shadow-sm"
        >
          <h1 className="text-xl font-semibold">{food.name}</h1>
          <h1 className="text-gray-700">{food.price}</h1>
          <h1 className="text-gray-600">{food.description}</h1>
          <h1 className="text-gray-500">{food.category}</h1>
          <img
            src={food.image}
            alt={food.name}
            className="w-24 h-24 object-cover rounded-md mt-2 mb-4"
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            onClick={() => handleClick(food)} // Navigate on click
          >
            Click Me
          </button>
        </div>
      ))}
    </div>
  );
};

export default Sample;
