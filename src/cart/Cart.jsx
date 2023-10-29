import React from 'react'

const Cart = ({cartItems}) => {
  return (
    <>
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
                {/* <button className="text-red-500 hover:scale-110" onClick={() => DeleteCartItems(cartItem)}>x</button> */}
              </div>

              {/* <div className="flex w-full  justify-between">
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
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cart