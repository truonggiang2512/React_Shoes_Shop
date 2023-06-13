import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
export const DOMAIN = "https://shop.cyberlearn.vn/";
export const USER_LOGIN = "userLogin";
export const TOKEN = "accessToken";
export const store = configureStore({
  reducer: {},
});
//cau hinh api gui di
//tao ra mot doi tuong axios
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});
export const { saveStorageJson, getStorageJson, clearStorage } = {
  saveStorageJson: (name, data) => {
    const string = JSON.stringify(data);
    localStorage.setItem(name, string);
  },
  getStorageJson: (name) => {
    if (localStorage.getItem(name)) {
      const data = JSON.parse(localStorage.getItem);
      return data;
    }
    return undefined;
  },
  clearStorage: (name) => {
    localStorage.removeItem(name);
  },
};
// cấu hình http
http.interceptors.request.use((config) => {
  config.headers = { ...config.headers };
  config.headers.Authorization = `Bearur`;
});
