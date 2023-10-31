import React, { memo } from 'react'

const CartItem = ({cartItem, onIncreaseCLick, onDecreaseClick, onDeleteClick}) => {

  return (
    <div
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
        <button
          className="text-red-500 hover:scale-110"
          onClick={() => onDeleteClick(cartItem)}
        >
          x
        </button>
      </div>

      <div className="flex w-full  justify-between">
        <div className="flex space-x-1">
          <button
            onClick={() => onDecreaseClick(cartItem)}
            disabled={cartItem.quantity === 1}
            className="p-1 bg-gray-200 hover:bg-gray-300 h-5 w-5 flex items-center justify-center"
          >
            -
          </button>
          <input
            type="text"
            value={cartItem.quantity}
            className="p-1 bg-gray-200 h-5 w-5 text-center text-xs"
          />
          <button
            onClick={() => {
                onIncreaseCLick(cartItem)
          

            }}
            className="p-1 bg-gray-200 hover:bg-gray-300 h-5 w-5 flex items-center justify-center"
          >
            +
          </button>
        </div>
        <div className="text-blue-500">
          $ {cartItem.price * cartItem.quantity}
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartItem