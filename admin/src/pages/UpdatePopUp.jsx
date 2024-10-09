import { useState, useEffect } from "react";
import { url } from "../assets/assets";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { toast } from "react-toastify";
import axios from "axios";

const UpdatePopUp = ({ food, onClose, onUpdate }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(
    food ? `${url}/images/${food.image}` : null
  );

  useEffect(() => {
    if (food) {
      setName(food.name || "");
      setDescription(food.description || "");
      setCategory(food.category || "");
      setPrice(food.price || "");
      setImagePreview(food.image ? `${url}/images/${food.image}` : null);
    }
  }, [food]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", food._id);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    if (image) {
      formData.append("image", image);
    }
    try {
      const response = await axios.post(`${url}/api/food/update`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        toast.success(response.data.message);
        onUpdate(response.data.data);
        onClose(); // Close the popup after successful update
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error updating food");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // Set the preview of the selected image
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[80%] max-w-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Update Food</h2>
          <HighlightOffIcon
            onClick={onClose}
            className="text-red-500 cursor-pointer"
          />
        </div>
        <form className="space-y-4" onSubmit={handleUpdate}>
          <div>
            <label
              htmlFor="image"
              className="flex flex-col items-center border-2 border-dashed border-gray-300 p-4 cursor-pointer rounded-lg"
            >
              <img
                className="w-20 h-20 rounded-xl"
                src={imagePreview || `${url}/images/` + food.image}
                alt="Food Preview"
              />
            </label>
            <input type="file" id="image" hidden onChange={handleImageChange} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-600" htmlFor="name">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type Here"
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-600" htmlFor="description">
              Product Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write content here"
              className="p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-600" htmlFor="category">
              Product Category
            </label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="Rice">Rice</option>
              <option value="Fast Food">Fast Food</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
              <option value="Salad">Salad</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-600" htmlFor="price">
              Product Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Rs. 500"
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg border hover:bg-green-700 hover:text-white border-green-500 text-green-500 hover:border-green-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePopUp;
