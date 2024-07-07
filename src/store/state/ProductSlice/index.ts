import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialApiResponse } from "@/constant/apiResponse";
import { getProductList } from "./thunk";
import { IGetProductListResult } from "@/types/product";

export interface IProductSliceInitialState {
  getProductListState: IGetProductListResult;
}

const initialState: IProductSliceInitialState = {
  getProductListState: initialApiResponse,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Product List
    builder.addCase(getProductList.pending, (state) => {
      state.getProductListState.isLoading = true;
    });
    builder.addCase(getProductList.fulfilled, (state, action: PayloadAction<IGetProductListResult>) => {
      state.getProductListState.isLoading = false;
      state.getProductListState = action.payload;
    });
    builder.addCase(getProductList.rejected, (state) => {
      state.getProductListState.isLoading = false;
    });
  },
});

const { reducer: productReducer } = productSlice;

export default productReducer;
