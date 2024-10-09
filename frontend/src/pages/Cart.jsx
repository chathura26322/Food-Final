import React from "react";

const Cart = () => {
  return (
    <div className="mx-[100px]">
      <div>
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[#646563] text-[max(1vw,_12px)] ">
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
