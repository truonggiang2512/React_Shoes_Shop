import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import HomeTemplate from "./Template/HomeTemplate.jsx";
import Home from "./Pages/Home/Home.jsx";
import Detail from "./Pages/Detail/Detail.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Login from "./Pages/Login/Login.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Register from "./Pages/Register/Register.jsx";
import Search from "./Pages/Search/Search.jsx";
import { store } from "./Redux/configStore";
import { createBrowserHistory } from "history";
import { createBreakpoints } from "@mui/system";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import theme from "./theme.js";

export const history = createBrowserHistory();

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <CssVarsProvider theme={theme}>
          <CssBaseline />

          <Routes>
            <Route path="" element={<HomeTemplate />}>
              <Route index element={<Home />}></Route>
              <Route path="detail">
                <Route path=":id" element={<Detail />}></Route>
              </Route>
              <Route path="home" element={<Home />}></Route>
              <Route path="cart" element={<Cart />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="register" element={<Register />}></Route>
              <Route path="search" element={<Search />}></Route>
            </Route>
          </Routes>
        </CssVarsProvider>
      </HistoryRouter>
    </Provider>
  </>
);
