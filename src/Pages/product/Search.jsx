import React, { useEffect, useState } from "react";

const Search = ({
  productsList,
  setFilteredProducts,
}) => {
  const [searchedProduct, setSearchedProduct] = useState("");
  // console.log(searchedProduct)

  useEffect(() => {
    const filter = productsList.filter((product) => product.title.toLowerCase().includes(searchedProduct.toLowerCase()));
    // console.log(filter)
    setFilteredProducts(filter)
  },[searchedProduct])

  return (
    <>
      <input
        type="search"
        value={searchedProduct}
        onChange={(e) => setSearchedProduct(e.target.value)}
        className="border-2 border-blue-500 p-3 text-sm rounded-md w-1/2"
        placeholder="Search...."
      />
    </>
  );
};

export default Search;
