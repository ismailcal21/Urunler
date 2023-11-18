import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import CategorySlice from "./CategorySlice";

const initialState = {
  products: [],
  productStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export const getCategoryProducts = createAsyncThunk(
  "getCategoryProducts",
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return data;
  }
);

export const getDetailProducts = createAsyncThunk(
  "getDetailProducts",
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  }
);

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productStatus = STATUS.FAIL;
      })

      .addCase(getDetailProducts.pending, (state, action) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getDetailProducts.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload;
      })
      .addCase(getDetailProducts.rejected, (state, action) => {
        state.productDetailStatus = STATUS.FAIL;
      })
      .addCase(getCategoryProducts.pending, (state, action) => {
        state.productStatus = STATUS.LOADING;
      })
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        state.productStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getCategoryProducts.rejected, (state, action) => {
        state.productStatus = STATUS.FAIL;
      });
  },
});

export default ProductSlice.reducer;
