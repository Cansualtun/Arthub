import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBaseRequest } from "@/types";
import ProductService from "@/services/ProductService";

const GET_PRODUCT_LIST = "/product";

export const getProductList = createAsyncThunk(
  GET_PRODUCT_LIST,
  async (_thunkAPI) => {
    return await ProductService.getProductList();
  }
);
