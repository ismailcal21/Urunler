import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const DetailComp = ({ productDetail }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < productDetail?.rating?.count) {
      setQuantity(quantity + 1);
    }
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
      })
    );
  };

  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[700px] h-[700px] object-cover"
        src={productDetail.image}
        alt=""
      />
      <div>
        <div className="text-4xl font-bold">{productDetail?.title}</div>
        <div className="my-2 text-2xl">{productDetail?.description}</div>
        <div className="my-2 text-xl text-red-500">
          Raiting :{productDetail?.raiting?.rate}
        </div>
        <div className="my-2">Count :{productDetail?.raiting?.count}</div>
        <div className="text-5xl font-bold">{productDetail?.price}</div>
        <div className="flex items-center gap-5 my-4">
          <div onClick={decrement} className="text-5xl cursor-pointer">
            -
          </div>
          <input
            className="w-12 text-center text-4xl font-bold"
            type="text"
            value={quantity}
          />
          <div onClick={increment} className="text-4xl cursor-pointer">
            +
          </div>
          <div
            onClick={addBasket}
            className="my-4 border w-[200px] text-2xl rounded bg-gray-200 h-16 flex items-center justify-center cursor-pointer hover:bg-sky-700 transition duration-300 ease-in-out"
          >
            Sepete Ekle
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
