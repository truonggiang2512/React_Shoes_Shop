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
      state.arrProduct = action.payload.map((product) => {
        product.categories = JSON.parse(product.categories);
        console.log(product.categories, "333");
        return product;
      });
      console.log(state.arrProduct);
    },
    getProductByIdAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    // getAllProductByCategoryAction: (state, action) => {
    //   state.arrProductCategory = action.payload;
    // },
  },
});

export const {
  getAllProductAction,
  getProductByIdAction,
  getAllProductByCategoryAction,
} = ProductReducer.actions;

export default ProductReducer.reducer;

//---- get api product----
export const getallProductApi = () => {
  return async (dispatch) => {
    const res = await http.get("/api/Product");
    const action = getAllProductAction(res.data.content);
    console.log(res.data.content);
    dispatch(action);
  };
};
// export const getallProductByCateGoryApi = (tenPhim) => {
//   console.log(tenPhim, 123);
//   return async (dispatch) => {
//     const res = await http.get("/api/Product/getProductByCategory", tenPhim);
//     const action = getAllProductByCategoryAction(res.data.content);
//     console.log(res.data.content);
//     dispatch(action);
//   };
// };
//-----get product by id
export const getProductByIDApi = () => {
  return async (dispatch) => {
    const res = await http.get("/api/Product/getbyid");
    const action = getProductByIDApi(res.data.content);
    dispatch(action);
  };
};
