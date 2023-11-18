import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  //console.log("p", product);
  return (
    <Link to={`/products/${product.id}`}>
      <div className="w-[430px] border p-3 mx-2 mb-2 relative">
        <div className="text-3xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1">
          {product?.price} <span className="text-sm">TL</span>
        </div>
        <img className="w-[200px] h-[200px] " src={product?.image} />
        <div className="text-center px-3 mt-3 text-xl font-bold cursor-pointer">
          {product?.title}
        </div>
      </div>
    </Link>
  );
};

export default Product;
