import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../../Utils/config";
import storage from "../../Utils/storage";
const storeCart = storage.get("CartList");
const initialState = {
  cart: storeCart || [],
  orderDetail: [],
  email: "ditconmemay@gmail.com",
};

const CartReducer = createSlice({
  name: "CartReducer",
  initialState,
  reducers: {
    addToCartAction: (state, action) => {
      let productClick = { ...action.payload };
      productClick.quantity = 1;
      let prodCart = state.cart?.find((pro) => pro.id == productClick.id);
      if (prodCart) {
        prodCart.quantity += 1;
      } else {
        state.cart.push(productClick);
      }
      storage.save("CartList", state.cart);
    },
    delProductAction: (state, action) => {
      let id = action.payload;
      let indexDel = state.cart.findIndex((prod) => prod.id === id);
      if (indexDel !== -1) {
        state.cart.splice(indexDel, 1);
      }
      storage.save("CartList", state.cart);
    },
    changeQuantityAction: (state, action) => {
      let { id, quantity } = action.payload;
      let prodCart = state.cart.find((pro) => pro.id == id);
      console.log(prodCart);
      if (prodCart) {
        prodCart.quantity += quantity;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(buyProductAsync.pending, (state, action) => {})
      .addCase(buyProductAsync.fulfilled, (state, action) => {
        alert("mua thanh cong");
      })
      .addCase(buyProductAsync.rejected, (state, action) => {});
  },
});

export const {
  addToCartAction,
  delProductAction,
  changeQuantityAction,
  postProductAction,
} = CartReducer.actions;

export default CartReducer.reducer;

// post Product

export const buyProductAsync = createAsyncThunk(
  "buyProductAsync",
  async (formSubmit) => {
    try {
      const res = await http.post("Users/order", formSubmit);
      console.log(res.data.content);
      return res.data.content;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
