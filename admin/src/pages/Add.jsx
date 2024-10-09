import { useState } from "react";
import { assets, url } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";

const Add = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Rice",
    price: "",
  });
  const [image, setImage] = useState(false);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("image", image);
    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setData({
          name: "",
          description: "",
          category: "Rice",
          price: "",
        });
        setImage(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  return (
    <div className="w-[70%] mt-[20px] justify-center px-4 ml-custom-left text-[16px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Add Your Food Here</h2>
      </div>
      <form className="space-y-6" onSubmit={onSubmitHandler}>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="image"
            className="flex flex-col items-center border-2 border-dashed border-gray-300 p-4 cursor-pointer"
          >
            <p className="text-gray-600 mb-2">Upload Image</p>
            <img
              className="w-[120px] h-[120px] object-cover"
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt="Upload Preview"
            />
          </label>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-gray-600">
            Product Name
          </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="name"
            name="name"
            value={data.name}
            placeholder="Type Here"
            className="p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-gray-600">
            Product Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={onChangeHandler}
            value={data.description}
            type="text"
            rows={6}
            placeholder="Write content here"
            className="p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="text-gray-600">
            Product Category
          </label>
          <select
            onChange={onChangeHandler}
            id="category"
            name="category"
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
          <label htmlFor="price" className="text-gray-600">
            Product Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            onChange={onChangeHandler}
            value={data.price}
            placeholder="Rs.500"
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-red-900 text-white px-6 py-2 rounded-[15px] hover:bg-black transition duration-300"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
