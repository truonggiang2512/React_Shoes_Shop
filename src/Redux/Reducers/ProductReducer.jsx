import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../Utils/config";

const initialState = {
  arrProduct: [],
  arrCateGory: [],
};

const ProductReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getAllProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    getProductByIdAction: (state, action) => {
      state.arrProduct = action.payload;
    },
  },
});

export const { getAllProductAction, getProductByIdAction } =
  ProductReducer.actions;

export default ProductReducer.reducer;

//---- get api product----
export const getallProductApi = () => {
  return async (dispatch) => {
    const res = await http.get("Product");
    const action = getAllProductAction(res.data.content);
    console.log(res.data.content);
    dispatch(action);
  };
};

//-----get product by id
export const getProductByIDApi = () => {
  return async (dispatch) => {
    const res = await http.get("Product/getbyid");
    const action = getProductByIDApi(res.data.content);
    dispatch(action);
  };
};
