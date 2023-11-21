import React, { useEffect, useState } from "react";
import Search from "./Search";
import CategoryFilter from "./CategoryFilter";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import { ToastContainer, toast } from "react-toastify";

const Product = ({
  productsList,
  setProductsList,
  filteredProducts,
  setFilteredProducts,
  setCartItems,
  cartItems,
}) => {
  const [categoriesList, setCategoriesList] = useState([]);

  const notify = () => toast.success("Product added to Cart");

  const handleAddToCart = (product) => {
    let item = cartItems.find(item => item.id === product.id)
    if(item){
      return toast.error('This product has already been added')
    }
    setCartItems((cartItems) => [...cartItems, {...product, quantity: 1}])
    notify();
  };

  // fetch and collect categories
  useEffect(() => {
    const categories = [
      ...new Set(productsList.map((product) => product.category)),
    ];
    setCategoriesList(categories);
  }, []);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentProducts = productsList.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(productsList.length / recordsPerPage);

  useEffect(() => {
    setFilteredProducts(currentProducts);
  }, []);

  return (
    <>
      <ToastContainer />
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
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-10 mt-3">
        
        {/* product items listings */}
        {filteredProducts?.map((product) => (
          <div
            key={product.id}
            className="bg-gray-300 relative w-60 mx-auto  rounded-md overflow-hidden shadow-lg "
          >
            <div className="h-60 w-full bg-gray-600">
            <Link to={`/product/${product.id}`} className="text-xs"> 
            {/* product.id ko thau mah index halera milxa */}
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full hover:scale-105"
              />
              </Link>
            </div>
            <div className="px-2 py-2">
              <div className="font-semibold text-sm mb-2">{product.title}</div>
            </div>
            <div className="px-4 py-2 text-xs flex font-bold">
              <span className="absolute top-5 right-1 flex items-center bg-blue-500 text-white rounded-full px-3 py-1 font-medium">
                {product.category}
              </span>
              <span className="w-full flex justify-end text-gray-700">
                ${product.price}
              </span>
              <span className="absolute top-[55%] right-1 aspect-square flex items-center cursor-pointer text-white bg-blue-500 hover:bg-blue-600 hover:text-white rounded-full px-3 py-1 font-medium">
                <button onClick={() => handleAddToCart(product)}>
                  <AiOutlineShoppingCart />
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Product;
