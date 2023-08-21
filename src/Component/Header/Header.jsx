import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import {
  Avatar,
  Button,
  Divider,
  InputAdornment,
  Menu,
  MenuItem,
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
import { USER_LOGIN, USER_PROFILE } from "../../Utils/constant";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { searchNameAsync } from "../../Redux/Reducers/SearchReducer/searchReducer";
import { TOKEN } from "../../Utils/config";
export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const token = storage.get(TOKEN);
  storage.save("CartList", "");
  const submitSearch = (event) => {
    event.preventDefault();
    let value = event.target.search.value;
    console.log(value);
    const actionApiSearch = searchNameAsync(value);
    dispatch(actionApiSearch);
    navigate("/search");
  };
  // Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //
  const isDisableLogin = () => {
    if (token) {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: { md: "flex", xs: "none" } }}></Box>
          <Button
            onClick={() => {
              navigate("cart");
            }}
          >
            <ShoppingCartCheckoutIcon />
          </Button>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                sx={{ width: 32, height: 32 }}
                src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/361344934_1100760674218876_329432079406950113_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jaRnAGDKEZcAX973Gjd&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfB54hg0gRIiuIO__nVoz8IqICjiftDdc_b2Q3gRRhLq8A&oe=64C83E0A"
              />
            </IconButton>
          </Tooltip>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                navigate("profile");
              }}
            >
              Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <Typography
                variant="subtitle1"
                onClick={() => {
                  storage.clear(TOKEN);
                  storage.clear(USER_LOGIN);
                  storage.clear("CartList");
                  storage.clear(USER_PROFILE);

                  window.location.pathname = "/home";
                }}
              >
                Log out
              </Typography>
            </MenuItem>
          </Menu>
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
            borderBottom: 1,
            display: "flex",
            alignItems: "center",
            width: "100vw",
            justifyContent: "space-between",
            height: "10vh",
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
