import { createSlice } from "@reduxjs/toolkit";

import { history } from "../../main";
import storage from "../../Utils/storage";
import { USER_LOGIN, USER_PROFILE } from "../../Utils/constant";
import { http } from "../../Utils/config";

const initialState = {
  userLogin: storage.get(USER_LOGIN),
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
  return async (dispatch) => {
    const res = await http.post("Users/signin", userLogin);
    const action = loginAction(res.data.content);
    dispatch(action);
    storage.set(USER_LOGIN, res.data.content);

    if (res.data.statusCode === 200) {
      history.push("/profile");
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
      g;
      location.reload();
    } catch (err) {
      console.log(err, "updateProfile");
    }
  };
};
