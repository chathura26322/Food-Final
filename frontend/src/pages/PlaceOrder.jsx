import { useState } from "react";

const PlaceOrder = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  return (
    <form
      action=""
      className="flex items-start justify-between gap-[50px] mx-[100px]"
    >
      <div className="w-[100%] ">
        <p className="text-[30px] font-[600] mb-[40px] mt-[20px]">
          Delivery Information
        </p>
        <div className="flex gap-[10px]">
          <input
            className="mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#C5C5C5] rounded-[4px] outline-[#A70604]"
            type="text"
            name="firstname"
            placeholder="First Name"
            required
          />
          <input
            className="mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#C5C5C5] rounded-[4px] outline-[#A70604]"
            type="text"
            name="lastname"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="flex gap-[10px]">
          <input
            className="mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#C5C5C5] rounded-[4px] outline-[#A70604]"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            className="mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#C5C5C5] rounded-[4px] outline-[#A70604]"
            type="text"
            name="street"
            placeholder="Street"
            required
          />
        </div>
        <div className="flex gap-[10px]">
          <input
            className="mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#C5C5C5] rounded-[4px] outline-[#A70604]"
            type="text"
            name="city"
            placeholder="City"
          />
          <input
            className="mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#C5C5C5] rounded-[4px] outline-[#A70604]"
            type="text"
            name="province"
            placeholder="Province"
            required
          />
        </div>
        <div className="flex gap-[10px] mb-[20px]">
          <input
            className="mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#C5C5C5] rounded-[4px] outline-[#A70604]"
            type="text"
            name="zipcode"
            placeholder="Zip Code"
            required
          />
          <input
            className="mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#C5C5C5] rounded-[4px] outline-[#A70604]"
            type="text"
            name="phone"
            placeholder="Phone"
            required
          />
        </div>
      </div>
      <div className="w-[100%] max-w-[40%,500px] p-[30px]">
        <div>
          <h2>Cart Totals</h2>
          <div>
            <div>
              <p>SubTotal</p>
            </div>
            <hr />
            <div>
              <p>Delivery Fee</p>
            </div>
            <hr />
            <div>
              <b>Total</b>
            </div>
          </div>
        </div>
        <div>
          <button className="mt-[50px] h-[20px] border-none bg-[#A70604] text-white px-[12px] py-[30px] rounded-[15px] cursor-pointer hover:bg-black flex items-center justify-center">
            Proceed To Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
