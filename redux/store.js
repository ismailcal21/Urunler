import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import ProductSlice from "./ProductSlice";
import CartSlice from "./CartSlice";

export const store = configureStore({
  reducer: {
    categories: CategorySlice,
    products: ProductSlice,
    carts: CartSlice,
  },
});
