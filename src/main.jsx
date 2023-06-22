import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  Experimental_CssVarsProvider as CssVarsProvider,
} from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

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
import { colors } from "@mui/material";
import { createBreakpoints } from "@mui/system";
const breakpoints = createBreakpoints({});
export const history = createBrowserHistory();
const theme = createTheme({
  palette: {
    secondary: {
      main: colors.cyan[300],
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    h1: {
      fontSize: 28,
      lineHeight: "40px",
      fontWeight: 600,
      [breakpoints.down("md")]: {
        color: "red",
        fontSize: 18,
      },
      [breakpoints.up("md")]: {
        color: "blue",
        fontSize: 22,
      },
      [breakpoints.up("lg")]: {
        fontSize: 28,
        color: "green",
      },
    },
    h3: {
      fontSize: 28,
      lineHeight: "40px",
      fontWeight: 600,
      [breakpoints.down("md")]: {
        fontSize: 10,
      },
      [breakpoints.up("md")]: {
        fontSize: 16,
      },
      [breakpoints.up("lg")]: {
        fontSize: 30,
      },
    },
    h4: {
      fontSize: 12,
      lineHeight: "40px",
      fontWeight: 600,
      [breakpoints.down("md")]: {
        fontSize: 8,
      },
      [breakpoints.up("md")]: {
        fontSize: 12,
      },
      [breakpoints.up("lg")]: {
        fontSize: 12,
      },
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

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
        </ThemeProvider>
      </HistoryRouter>
    </Provider>
  </>
);
