import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Reducers/CartReducer";
import productReducer from "./Reducers/ProductReducer";
import searchReducer from "./Reducers/SearchReducer/searchReducer";
import userReducer from "./Reducers/userReducer";
export const store = configureStore({
  reducer: {
    productReducer: productReducer,
    CartReducer,
    userReducer: userReducer,
    searchReducer: searchReducer
  },
});
