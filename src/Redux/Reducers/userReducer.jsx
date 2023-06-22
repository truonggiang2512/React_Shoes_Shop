import { createSlice } from "@reduxjs/toolkit";
import {
  USER_LOGIN,
  setStoreJson,
  http,
  setCookieJson,
  getStoreJson,
  deleteCookie,
} from "../../Utils/config";
import { history } from "../../main";

const initialState = {
  userLogin: getStoreJson(USER_LOGIN),
  userProfile: {},
  userUpdate: {},
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.userLogin = action.payload;
    },
    setProfileAction: (state, action) => {
      state.userProfile = action.payload;
    },
    updateProfileAction: (state, action) => {
      state.userUpdate = action.payload;
    },
  },
});

export const { loginAction, setProfileAction, updateProfileAction } =
  userReducer.actions;

export default userReducer.reducer;

// ------------- action async ----------

export const loginActionApi = (userLogin) => {
  //userLogin = {email,password}

  return async (dispatch) => {
    //Xử lý api

    const res = await http.post("/api/Users/signin", userLogin);

    //Sau khi đăng nhập thành công => đưa lên storeRedux
    const action = loginAction(res.data.content);
    dispatch(action);
    //Đem giá trị đăng nhập thành công lưu vào localstorage
    setStoreJson(USER_LOGIN, res.data.content);
    //Lưu cookie
    setCookieJson(USER_LOGIN, res.data.content, 30);
    history.push("/profile");
  };
};

export const getProfileApi = () => {
  return async (dispatch) => {
    const res = await http.post("/api/Users/getProfile");
    console.log(res);
    if (res) {
      //đưa lên store redux
      const action = setProfileAction(res.data.content);

      dispatch(action);
    }
  };
};
export const updateProfile = (userUpdate) => {
  return async (dispatch) => {
    try {
      //callapi
      const res = await http.post("/api/Users/updateProfile", userUpdate); //pending
      console.log(res.data.content);
    } catch (err) {
      console.log(err, "updateProfile"); //reject
    }
  };
};
