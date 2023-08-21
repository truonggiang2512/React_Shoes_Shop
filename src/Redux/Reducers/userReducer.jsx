import { createSlice } from "@reduxjs/toolkit";

import { history } from "../../main";
import storage from "../../Utils/storage";
import { USER_LOGIN, USER_PROFILE } from "../../Utils/constant";
import { http, TOKEN } from "../../Utils/config";

const initialState = {
  userLogin: storage.get(USER_LOGIN),
  userProfile: {},
  userUpdate: {},
  orderProfile: [],
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state, action) => {},
    signupAction: (state, action) => {
      state.userLogin = action.payload;
    },
    setProfileAction: (state, action) => {
      state.userProfile = action.payload;
      state.orderProfile = state.userProfile.ordersHistory;
      console.log(state.orderProfile, "dcmm");
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
  return async (dispatch) => {
    try {
      const res = await http.post("Users/signin", userLogin);
      const action = loginAction(res.data.content);
      dispatch(action);
      storage.set(USER_LOGIN, res.data.content);
      storage.set(TOKEN, res.data.content?.accessToken);
      // if (res.data.statusCode === 200) {
      history.push("/home");
      // }
    } catch (error) {
      alert("Incorrect Email or Password");
    }
  };
};

export const getProfileApi = () => {
  return async (dispatch) => {
    const res = await http.post("Users/getProfile");
    const action = setProfileAction(res.data.content);
    dispatch(action);
    if (res) {
      const action = storage.set(USER_PROFILE, res.data.content);
      dispatch(action);
    }
  };
};
export const updateProfile = (userUpdate) => {
  return async (dispatch) => {
    try {
      const res = await http.post("Users/updateProfile", userUpdate);
      location.reload();
    } catch (err) {
      console.log(err, "updateProfile");
    }
  };
};
