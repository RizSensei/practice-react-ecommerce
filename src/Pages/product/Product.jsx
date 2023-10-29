import React, { useEffect, useState } from "react";
import Search from "./Search";
import CategoryFilter from "./CategoryFilter";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Product = ({handleAddToCart,cartItems,productsList,setProductsList,filteredProducts,setFilteredProducts}) => {

  const [categoriesList, setCategoriesList] = useState([]);

  // fetch and collect categories
  useEffect(() => {
    const categories = [
      ...new Set(productsList.map((product) => product.category)),
    ];
    setCategoriesList(categories);
  }, []);

  return (
    <>
      <div className="w-full flex justify-center my-1 space-x-3">
        <Search
          productsList={productsList}
          setFilteredProducts={setFilteredProducts}
        />
        <CategoryFilter
          productsList={productsList}
          setFilteredProducts={setFilteredProducts}
          categoriesList={categoriesList}
        />
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
        {filteredProducts.map((product) => (
          
          <div
            key={product.id}
            className="w-64 mx-auto bg-white rounded overflow-hidden shadow-lg"
          >
            <div className="h-60 w-full">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full"
              />
            </div>
            <div className="px-2 py-2">
              <div className="font-bold text-sm mb-2">{product.title}</div>
              {/* <div className="text-gray-700 text-xs h-16 overflow-y-scroll">
                {product.description}
              </div> */}
            </div>
            <div className="px-4 py-2 text-xs flex justify-center space-x-2 font-bold">
              <span className="flex items-center bg-gray-200 rounded-full px-3 py-1  text-gray-700">
                #{product.category}
              </span>
              <span className="flex items-center bg-gray-200 rounded-full px-3 py-1  text-gray-700">
                ${product.price}
              </span>
              <span className="flex items-center cursor-pointer bg-gray-200 hover:bg-blue-500 hover:text-white rounded-full px-3 py-1  text-gray-700">
                <button onClick={() => handleAddToCart(product)}>
                  <AiOutlineShoppingCart />
                </button>
              </span>
            </div>
            <Link to ={`/product/${product.id}`} className="text-xs">More Details</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
