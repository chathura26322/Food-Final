import React, { useState, useEffect, useContext } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { toast } from "react-toastify";
import { StoreContext } from "../Context/StoreContext";

const LoginPopup = ({ setShowLogin }) => {
  const { setToken, url, loadCartData } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign In");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onLogin = async (e) => {
    e.preventDefault();
    let new_url = url;
    if (currState === "Login") {
      new_url += "/api/users/login";
    } else {
      new_url += "/api/users/register";
    }
    const response = await axios.post(new_url, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      loadCartData({ token: response.data.token });
      setShowLogin(false);
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form className="bg-white p-8 rounded-lg w-96" onSubmit={onLogin}>
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-[#A70604] font-bold text-2xl">{currState}</h2>
          <CancelIcon
            onClick={() => setShowLogin(false)}
            className="cursor-pointer hover:text-[#A70604]"
          />
        </div>
        <div className="flex flex-col gap-4">
          {currState === "Sign Up" && (
            <input
              name="username"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Username"
              className="border border-gray-300 p-2 rounded-lg"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-2 rounded-lg"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-2 rounded-lg"
            required
          />
          <button
            type="submit"
            className="bg-[#A70604] text-white p-2 rounded-lg mt-2 hover:bg-black"
          >
            {currState}
          </button>
        </div>
        <div className="mt-4 text-sm">
          <p>
            {currState === "Sign In"
              ? "Create a new Account?"
              : "Already have an account?"}{" "}
            <span
              onClick={() =>
                setCurrState(currState === "Sign In" ? "Sign Up" : "Sign In")
              }
              className="text-[#A70604] pl-1 cursor-pointer font-medium hover:text-black"
            >
              {currState === "Sign In" ? "Sign Up Here" : "Login Here"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
