import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import Cart from "./pages/Cart";
import Sample from "./pages/sample";
import Test from "./pages/test";
import PlaceOrder from "./pages/PlaceOrder";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup";
import MyOrders from "./pages/MyOrders";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="w-[90%] m-auto z-[5]">
        <Navbar setShowLogin={setShowLogin} />
      </div>
      <hr className="w-[100%] m-auto" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/test" element={<Test />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/myorders" element={<MyOrders />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

