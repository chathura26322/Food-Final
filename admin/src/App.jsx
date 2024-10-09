import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import Home from "./pages/Home";
import Users from "./pages/Users";
import SideBar from "./Components/SideBar";
import NavBar from "./Components/NavBar";
import Add from "./pages/Add";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import List from "./pages/List";
import UpdatePopUp from "./pages/UpdatePopUp";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/update" element={<UpdatePopUp />} />
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/*"
          element={
            <div className="flex relative">
              <SideBar />
              <div className="flex-grow-[6]">
                <NavBar />
                <div className="flex p-[20px] gap-[20px]">
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/list" element={<List />} />
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
