import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts, totalAmount, itemsCount } = useSelector(
    (state) => state.carts
  );

  console.log("carts", carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return <div>Cart</div>;
};

export default Cart;
