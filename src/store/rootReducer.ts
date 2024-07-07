import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./state/ProductSlice";

export const rootReducer = combineReducers({
  product: productReducer
});
