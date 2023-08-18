import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../Utils/config";

const initialState = {
  cart: [
    {
      id: 1,
      name: "Adidas Prophere",
      price: 350,
      quantity: 1,
      image: "https://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  ],
  orderDetail: [
    {
      productId: "1",
      quantity: 0,
    },
  ],
  email: "ditconmemay@gmail.com",
};

const CartReducer = createSlice({
  name: "CartReducer",
  initialState,
  reducers: {
    addToCartAction: (state, action) => {
      let productClick = { ...action.payload };
      productClick.quantity = 1;
      let prodCart = state.cart.find((pro) => pro.id == productClick.id);
      console.log("prodCart", prodCart);
      if (prodCart) {
        prodCart.quantity += 1;
      } else {
        state.cart.push(productClick);
      }
    },
    delProductAction: (state, action) => {
      console.log("actionDel", action);
      let id = action.payload;
      let indexDel = state.cart.findIndex((prod) => prod.id === id);
      if (indexDel !== -1) {
        //Xử lý xoá
        state.cart.splice(indexDel, 1);
      }
    },
    changeQuantityAction: (state, action) => {
      let { id, quantity } = action.payload;
      let prodCart = state.cart.find((pro) => pro.id == id);
      console.log(prodCart);
      if (prodCart) {
        prodCart.quantity += quantity;
      }
    },
    postProductAction: (state, action) => {
      let { id, quantity } = action.payload;
      state.orderDetail.push({ id, quantity });
      console.log({ id, quantity });
    },
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
export const postProductApi = () => {
  return async (dispatch) => {
    const res = await http.post("Users/order", orderDetail, email);
    console.log(res.data.conent);
  };
};
