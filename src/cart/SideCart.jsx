import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const SideCart = ({ handleCart, cartItems, cartItemsCount, setCartItems, setCartItemsCount }) => {
  const [initialCartValue, setInitialCartValue] = useState(1);
  // const [cartIndex, setCartIndex] = useState(null);

  useEffect(() => {
    if (initialCartValue < 1) {
      setInitialCartValue(1);
    }
  }, [initialCartValue]);

  const handleCartValue = (cartIndexValue, action) => {
   const updatedCartItems = [...cartItems]
   const currentItem = updatedCartItems[cartIndexValue]
  //  console.log(currentItem)

    console.log(cartIndexValue)
      if (action == "increment" && currentItem) {
        setInitialCartValue((initialCartValue) => initialCartValue + 1);
      } else if (action == "decrement" && currentItem) {
        setInitialCartValue((initialCartValue) => initialCartValue - 1);
      }
  };

  const DeleteCartItems = (deleteCartItem) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem !== deleteCartItem)
    setCartItems(newCartItems);
    setCartItemsCount((prevValue) => prevValue - 1)
  }

  return (
    <div className="w-full p-2 font-bold">
      <div className="flex justify-between">
        <h1 className="flex justify-center items-center space-x-2">
          <AiOutlineShoppingCart />
          <span>
            Cart <span className="text-blue-500">({cartItemsCount})</span>{" "}
          </span>
        </h1>
        <button
          onClick={handleCart}
          className="w-1/12 text-red-500 hover:bg-red-500 hover:text-white rounded-md"
        >
          X
        </button>
      </div>
      <div className="mt-3 text-xs">
        {cartItems?.map((cartItem, index) => (
          <div
            key={index}
            className="flex space-x-2 p-1.5 border-2 border-gray-500 rounded-md mb-1"
          >
            <div className="w-16 h-16 aspect-square">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-2 w-full">
              <div className="flex justify-between">
                <span className="text-[13px]">{cartItem.title}</span>
                <button className="text-red-500 hover:scale-110" onClick={() => DeleteCartItems(cartItem)}>x</button>
              </div>

              <div className="flex w-full  justify-between">
                <div className="flex space-x-1">
                  <button
                    onClick={() => handleCartValue(index, "decrement")}
                    className="p-1 bg-gray-200 hover:bg-gray-300 h-5 w-5 flex items-center justify-center"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value= {initialCartValue}
                    className="p-1 bg-gray-200 h-5 w-5 text-center text-xs"
                  />
                  <button
                    onClick={() => handleCartValue(index, "increment")}
                    className="p-1 bg-gray-200 hover:bg-gray-300 h-5 w-5 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
                <div className="text-blue-500">
                  $ {cartItem.price * initialCartValue}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-col font-normal space-y-2">
        <Link
          to="/cart"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-sm p-1.5 text-center"
        >
          Show Cart
        </Link>
        <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-sm p-1.5">
          Proceed to CheckOut
        </button>
      </div>
    </div>
  );
};

export default SideCart;
