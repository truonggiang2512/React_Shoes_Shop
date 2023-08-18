import axios from "axios";
import { history } from "../main";
import { USER_LOGIN } from "./constant";
import storage from "./storage";

export const TOKEN = "accessToken";
export const DOMAIN = "https://shop.cyberlearn.vn/api/";
export const TOKEN_CYBERSOFT = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlSlMgMzQiLCJIZXRIYW5TdHJpbmciOiIyMi8wMy8yMDI0IiwiSGV0SGFuVGltZSI6IjE3MTEwNjU2MDAwMDAiLCJuYmYiOjE2OTMwNjkyMDAsImV4cCI6MTcxMTIxMzIwMH0.I9k3be3bbxp64NISKJ-A3aR6mEhF4QfCGakizTqBON8`;
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 3000,
});

http.interceptors.request.use(
  (config) => {
    config.headers = { ...config.headers };
    let token = storage.get(USER_LOGIN);
    config.headers.Authorization = ` Bearer ${token.accessToken}`;
    config.headers.tokenCybersoft = `${TOKEN_CYBERSOFT}`;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  (res) => {
    console.log(res.data);
    return res;
  },
  (err) => {
    if (err.response?.status === 401) {
      history.push("/login");
      return;
    }
    if (err.response?.status === 400 || err.response?.status === 404) {
      history.push("/");
      return;
    }
    return Promise.reject(err);
  }
);
