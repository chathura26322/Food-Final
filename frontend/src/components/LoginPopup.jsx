import { useEffect, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
// eslint-disable-next-line react/prop-types
const LoginPopup = ({ handleSignInClick }) => {
  const [currState, setCurrState] = useState("Sign In or Register");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handelSubmit = () => {
    if (currState === "Sign Up") {
      axios
        .post("http://localhost:4000/api/user/register", {
          name,
          email,
          password,
        })
        .then((response) => {
          if (response.data.success) {
            handleSignInClick(false);
          } else {
            setErrorMessage(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post("http://localhost:4000/api/user/login", { email, password })
        .then((response) => {
          if (response.data.success) {
            handleSignInClick(false);
          } else {
            setErrorMessage(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    const handleSubmit = (event) => {
      event.preventDefault();
    };

    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }, []);

    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
        <form className="bg-white p-8 rounded-lg w-96" onSubmit={handleSubmit}>
          <div className="flex  justify-between items-center mb-[20px]">
            <h2 className="text-[#A70604] font-bold text-2xl">{currState}</h2>
            <CancelIcon
              onClick={() => handleSignInClick(false)}
              className="cursor-pointer hover:text-[#A70604]"
            />
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-300 p-2 rounded-lg"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-2 rounded-lg"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 p-2 rounded-lg"
              required
            />
            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms" className="text-sm">
                By continuing, I agree to the terms of use & privacy policy.
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#A70604] text-white p-2 rounded-[10px] mt-2 hover:bg-black"
            >
              Login
            </button>
          </div>
          <div className="mt-4 text-sm">
            <p>
              Create a new Account?{" "}
              <span
                onClick={() => setCurrState("Sign Up")}
                className="text-[#A70604] pl-[3px] cursor-pointer font-medium hover:text-black"
              >
                Click Here
              </span>
            </p>
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setCurrState("Login")}
                className="text-[#A70604] pl-[3px] cursor-pointer font-medium hover:text-black"
              >
                Login Here
              </span>
            </p>
          </div>
        </form>
      </div>
    );
  };
};
export default LoginPopup;
