import React from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const ProductDetail = ({ productsList }) => {
  // console.log(productsList)
  const { id } = useParams();
  // console.log(id)
  const product = productsList[`${id}`];
  console.log(product);
  const { title, image, description, price, rating } = product;
  {
    console.log(rating.rate);
  }

  return (
    <>
    <div className=" text-white mt-1 ml-1">
      <Link to={"/product"} className="bg-blue-500 px-2 py-1 hover:bg-blue-600">Back</Link>
    </div>
      <div className="flex h-full w-full ">
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="h-[75%] aspect-square">
            <img src={image} alt={title} className="h-full w-full" />
          </div>
        </div>
        <div className="w-1/2 p-2 px-10 flex flex-col  justify-center">
          <h3 className="text-5xl font-bold">{title}</h3>
          <p className="mt-2">{description}</p>
          <div className="flex w-full justify-between mt-5">
            <div className="flex flex-col">
            <span className="text-amber-500 flex">
              {Array.from({ length: rating.rate }, (_, index) => (
                <AiFillStar key={index} />
              ))}
            </span>
            <p className="text-gray-700 text-sm underline">
              {rating.count} reviews
            </p>
          </div>
          <div className="flex h-full space-x-2 justify-center items-center">
            <span className="font-semibold text-blue-500">$ {price}</span>
            
            <button className="text-white bg-green-500 hover:bg-green-600 hover:scale-105 p-1 px-3 rounded-sm">
              Add to Cart
            </button>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
