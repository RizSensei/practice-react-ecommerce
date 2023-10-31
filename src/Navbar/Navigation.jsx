import React from "react";
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai"


const Navigation = ({handleCart,cartItemsCount}) => {

  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a className="text-white text-2xl font-bold">
            Ecommerce
          </a>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/admin" className="text-white">
                Admin
              </Link>
            </li>
            <li>
              <Link to="/product" className="text-white">
                Product
              </Link>
            </li>
            <li className="relative">
              <AiOutlineShoppingCart onClick={handleCart} className="text-white cursor-pointer hover:scale-110 "/><span className="absolute -top-2 left-3 text-xs font-semibold text-white text-center bg-red-500 p-0.5 rounded-full h-4 w-4">{cartItemsCount}</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
