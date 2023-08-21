import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import {
  Button,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Login from "../../Pages/Login/Login";
import Profile from "../../Pages/Profile/Profile";
import Register from "../../Pages/Register/Register";
import storage from "../../Utils/storage";
import { USER_LOGIN } from "../../Utils/constant";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { searchNameAsync } from "../../Redux/Reducers/SearchReducer/searchReducer";
export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const token = storage.get(USER_LOGIN);
  console.log(token, "header");
  const submitSearch = (event) => {
    event.preventDefault();
    let value = event.target.search.value;
    console.log(value);
    const actionApiSearch = searchNameAsync(value);
    dispatch(actionApiSearch);
    navigate("/search");
  };
  const isDisableLogin = () => {
    if (token) {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: { md: "flex", xs: "none" } }}>
            <Tooltip title="Notification">
              <IconButton>
                <NotificationsNoneIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Messages">
              <IconButton>
                <MailOutlineIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Lists">
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Button
            onClick={() => {
              navigate("cart");
            }}
          >
            <ShoppingCartCheckoutIcon />
          </Button>
          <Button
            onClick={() => {
              navigate("profile");
            }}
          >
            Profile
          </Button>
        </Box>
      );
    } else {
      return (
        <Box sx={{ display: "flex" }}>
          <Button
            onClick={() => {
              navigate("login");
            }}
          >
            Login
          </Button>

          <Button
            onClick={() => {
              navigate("register");
            }}
          >
            Register
          </Button>
        </Box>
      );
    }
  };
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Box
        sx={{
          position: "fixed",
          width: "100vw",
          backgroundColor: "background.paper",
          zIndex: (theme) => theme.zIndex.drawer + 30,
        }}
      >
        <Box
          px={2}
          sx={{
            border: 1,
            display: "flex",
            alignItems: "center",
            width: "100vw",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <ChecklistRtlIcon sx={{ color: "primary.main" }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { md: "flex", xs: "block" },
              alignItems: "center",
              gap: { md: 2, xs: 0 },
            }}
          >
            <Box
              sx={{
                display: { md: "flex", xs: "block" },
                alignItems: "center",
                gap: { md: 0.5, xs: 0 },
              }}
            >
              <Typography
                onClick={() => {
                  navigate("home");
                }}
                sx={{
                  fontSize: "2.0rem",
                  fontWeight: "bold",
                  color: "primary.main",
                  cursor: "pointer",
                }}
              >
                Shoeser
              </Typography>
              <Box
                sx={{
                  display: { md: "block", xs: "none", sm: "none" },
                  ml: 3,
                  width: 500,
                  maxWidth: "100%",
                }}
              >
                <form action="" onSubmit={submitSearch}>
                  <TextField
                    type="search"
                    fullWidth
                    size="small"
                    name="search"
                    id="search"
                    label="What service are you looking for?"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button type="submit" sx={{ p: 0, m: 0 }}>
                            <SearchIcon />
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                  />
                </form>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "flex" },
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {isDisableLogin()}
          </Box>
        </Box>
        <form action="" onSubmit={submitSearch}>
          <Box
            px={4}
            py={3}
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              width: "100vw",
              justifyContent: "space-between",
            }}
          >
            <TextField
              type="search"
              fullWidth
              size="small"
              id="search"
              label="What service are you looking for?"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </form>
      </Box>
    </Container>
  );
}
