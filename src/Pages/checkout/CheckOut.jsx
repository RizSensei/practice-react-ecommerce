import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const getLocalStorageItems = () => {
  let items = localStorage.getItem("cartItems");
  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
};

const CheckOut = () => {
  const items = getLocalStorageItems();
  return (
    <div className="w-1/2 ml-24">
       <p className="flex items-center space-x-1 text-xl font-medium"><AiOutlineShoppingCart/><span>Cart Summary</span></p> 
       
      {items.map((item) => (
        <div key={item.id} className="flex space-x-2 p-1.5  rounded-md mb-1">
          <div className="w-24 h-24 aspect-square border-2 shadow-md rounded-md">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-fit"
            />
          </div>

          <div className="space-y-2 w-full">
            <div className="flex w-full h-full items-center justify-between">
              <div className="w-1/2">
                <h1>{item.title}</h1>
              </div>
              <div className="flex space-x-1">
                Qty: 
                <input
                  type="text"
                  value={item.quantity}
                  className="p-1 h-5 w-5 text-center text-xs text-green-600 font-semibold"
                />
              </div>
              <div className="text-blue-500 font-semibold">
                $ {item.price * item.quantity}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-end">
        <h1>Total : $ {
            items?.reduce((prevValue,currValue) => {
              return prevValue + (currValue.quantity * currValue.price);
            }, 0)
            }</h1>
      </div>
      <button className="w-full bg-green-500 text-white rounded-md py-1 mt-1">Place Order</button>
    </div>
  );
};

export default CheckOut;
