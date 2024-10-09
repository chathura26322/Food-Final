import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { url } from "../assets/assets.js";
import { Link } from "react-router-dom";
import UpdatePopUp from "./UpdatePopUp";

const List = () => {
  const [list, setList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

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

  const removeFood = async (id) => {
    try {
      const response = await axios.post(`${url}/api/food/delete`, { id });
      const newFood = list.filter((food) => food._id !== id);
      setList(newFood);
      toast.success("Food Removed Successfully");
    } catch (error) {
      toast.error("Error removing food");
    }
  };

  const handleEditClick = (food) => {
    setSelectedFood(food); // Set the selected food item
    setShowPopup(true); // Show the popup
  };

  const closePopup = () => {
    setShowPopup(false); // Hide the popup
    setSelectedFood(null); // Clear the selected food item
  };

  const handleUpdate = (updatedFood) => {
    setList((prevList) =>
      prevList.map((item) =>
        item._id === updatedFood._id ? updatedFood : item
      )
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Food List</h2>
        <Link to="/add">
          <button className="px-4 py-2 rounded-lg border hover:bg-green-700 hover:text-white border-green-500 text-green-500 hover:border-green-700">
            Add Food
          </button>
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <table className="w-[1200px] bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Image</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((food, index) => (
              <tr key={food._id} className="border-b text-center">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4 flex justify-center items-center">
                  <img
                    className="w-20 h-20 rounded-xl"
                    src={`${url}/images/` + food.image}
                    alt=""
                  />
                </td>
                <td className="py-2 px-4">{food.name}</td>
                <td className="py-2 px-4">Rs.{food.price}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleEditClick(food)}
                    className="px-4 py-2 rounded-lg border hover:bg-green-700 hover:text-white border-green-500 text-green-500 hover:border-green-700 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeFood(food._id)}
                    className="px-4 py-2 rounded-lg border hover:bg-red-700 hover:text-white border-red-500 text-red-500 hover:border-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Conditionally render the UpdatePopUp component */}
      {showPopup && (
        <UpdatePopUp
          food={selectedFood}
          onClose={closePopup}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default List;
