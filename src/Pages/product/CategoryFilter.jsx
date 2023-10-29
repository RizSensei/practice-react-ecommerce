import React, { useEffect, useState } from "react";

const CategoryFilter = ({ categoriesList,productsList,
    setFilteredProducts, }) => {
  const [checkedValue, setCheckedValue] = useState([]);
//   console.log(checkedValue);

  const handleCheck = (event) => {
    var checked_array = [...checkedValue];
    if (event.target.checked) {
      checked_array = [...checkedValue, event.target.value];
    } else {
      checked_array.splice(checkedValue.indexOf(event.target.value), 1);
    }
    setCheckedValue(checked_array);
  };

  useEffect(()=>{
    if(checkedValue.length > 0){
       const filter = productsList.filter((product) => checkedValue.includes(product.category.toLowerCase()))
    setFilteredProducts(filter) 
    }else{
    setFilteredProducts(productsList) 

    }
  },[checkedValue])

  return (
    <>
      <div className="grid grid-cols-2">
        {categoriesList.map((category, index) => (
          <label key={index} class="flex items-center space-x-2">
            <input
              type="checkbox"
              value={category}
              onChange={handleCheck}
              class="form-checkbox text-indigo-600"
            />
            <span>{category}</span>
          </label>
        ))}
      </div>
    </>
  );
};
export default CategoryFilter;
