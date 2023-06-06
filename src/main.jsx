import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import HomeTemplate from "./Template/HomeTemplate.jsx";
import Home from "./Pages/Home/Home.jsx";
import Detail from "./Pages/Detail/Detail.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Login from "./Pages/Login/Login.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Register from "./Pages/Register/Register.jsx";
import Search from "./Pages/Search/Search.jsx";
import { store } from "./Redux/config";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<Home />}></Route>
            <Route path="detail">
              <Route path=":id" element={<Detail />}></Route>
            </Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="search" element={<Search />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Route>
        </Routes>
      </Provider>
    </CssVarsProvider>
  </BrowserRouter>
);
