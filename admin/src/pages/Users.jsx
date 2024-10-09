import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Users = () => {
  const [list, setList] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/users");
      const users = response.data;
      const userData = users.map((user, index) => ({
        number: index + 1,
        id: user._id,
        name: user.name,
        email: user.email,
      }));
      setList(userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const removeUser = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/users/delete`,
        { id }
      );
      console.log(response.data.id);
      const newUsers = list.filter((user) => user.id !== id);
      setList(newUsers);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Customers</h2>
        <button className=" px-4 py-2 rounded-lg border hover:bg-green-700 hover:text-white  border-green-500 text-green-500 hover:border-green-700 ">
          Add New
        </button>
      </div>
      <div className="flex  justify-between items-center">
        <table className="w-[1200px] bg-white">
          <thead>
            <tr>
              <th className="py-2">#</th>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((user) => (
              <tr key={user.id} className="border-b text-center">
                <td className="p-2">{user.number}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">
                  <button
                    onClick={() => removeUser(user.id)}
                    className="border text-red-400 hover:bg-red-700 hover:text-white border-red-400 px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
