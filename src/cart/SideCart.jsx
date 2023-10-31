import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const SideCart = ({
  handleCart,
  cartItems,
  cartItemsCount,
  setCartItemsCount,
  onCartChange
}) => {

  // const handleCartValue = (cartIndexValue,action) => {
  //   setCartIndex(cartIndexValue)
  //     if (action == "increment") {
  //     return setInitialCartValue((initialCartValue) => initialCartValue + 1);
  //   } else if (action == "decrement") {
  //     return setInitialCartValue((initialCartValue) => initialCartValue - 1);
  //   }
  // };

  const DeleteCartItems = (deleteCartItem) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem !== deleteCartItem
    );
      onCartChange(newCartItems)


    setCartItemsCount((prevValue) => prevValue - 1);
  };


  const onDecreaseClick = (item) => {
    let arr = [...cartItems]
    let index = arr.findIndex((e) => e.id === item.id)

    if(index > -1){
      arr[index].quantity = arr[index].quantity - 1;
      onCartChange(arr)
    }
  }

  const onIncreaseCLick = (item) => {
    let arr = [...cartItems]
    let index = arr.findIndex((e) => e.id === item.id)

    if(index > -1){
      arr[index].quantity = arr[index].quantity + 1;
      onCartChange(arr)
    }
  }


  return (
    <div className="w-full p-2 font-bold">
      <div className="flex justify-between">
        <h1 className="flex justify-center items-center space-x-2">
          <AiOutlineShoppingCart />
          <span>
            Cart <span className="text-blue-500">({cartItemsCount})</span>
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
          <CartItem cartItem={cartItem} key={index} onIncreaseCLick={onIncreaseCLick} onDecreaseClick={onDecreaseClick} onDeleteClick={DeleteCartItems} />
        ))}
      </div>
      <div className="mt-3 flex flex-col font-normal space-y-2">
        <div className="w-full flex justify-end">
          <span>Total : $ {
            cartItems?.reduce((prevValue,currValue) => {
              return prevValue + (currValue.quantity * currValue.price);
            }, 0)
            }</span>
        </div>
        <Link to="/checkout">
          <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-sm p-1.5">
          Proceed to CheckOut
        </button>
        </Link>
        
      </div>
    </div>
  );
};

export default SideCart;
