import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Navigate } from "react-router-dom";

// Drawer
import { Badge, Button, Container, Drawer } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteCookie, USER_LOGIN } from "../../Utils/config";
import { loginAction } from "../../Redux/Reducers/userReducer";

//theme function
const reloadRender = () => {
  window.location.reload();
  localStorage.removeItem(USER_LOGIN);
  deleteCookie(USER_LOGIN);
  //dispatch
  const action = loginAction({});
  dispatch(action);
};
const renderLogin = () => {
  if (localStorage.getItem("userLogin")) {
    return (
      <>
        <Button onClick={reloadRender} className="nav-link">
          Logout
        </Button>
      </>
    );
  }

  return (
    <Box>
      <Button
        sx={{
          marginRight: "10px",
          background: "#a7ffeb",
          color: "#000",
          "&:hover": {
            color: "white",
            backgroundColor: "#a7ffeb",
          },
        }}
        disabled={false}
        size="medium"
        variant="outline"
      >
        <NavLink
          to="/login"
          style={{ textDecoration: "none", textTransform: "none" }}
        >
          Sign In
        </NavLink>
      </Button>
      <Button
        sx={{
          marginRight: "10px",
          color: "#000",
          background: "#bdbdbd",
          "&:hover": {
            color: "white",
            backgroundColor: "#bdbdbd",
          },
        }}
        disabled={false}
        size="medium"
        variant="outline"
      >
        <NavLink
          to="/register"
          style={{
            textDecoration: "none",
            textTransform: "none",
            color: "white",
          }}
        >
          Sign Up
        </NavLink>
      </Button>
    </Box>
  );
};
// header function
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header() {
  const { cart } = useSelector((state) => state.CartReducer);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        {" "}
        <NavLink style={{ textDecoration: "none" }} to="profile">
          Profile
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <NavLink to="profile">Profile</NavLink>
      </MenuItem>
      <MenuItem sx={{ marginRight: "10px" }}>
        <NavLink to="cart">
          <AddShoppingCartIcon />
          <p style={{ marginBottom: "20px", color: "red" }}>{cart.length}</p>
        </NavLink>
      </MenuItem>
    </Menu>
  );

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        paddingBottom: "100px",
        overflow: "hidden",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        position: "fixed",
        marginBottom: "200px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#fff", color: "black" }}
        >
          <Toolbar>
            {/* <MuiDrawer /> */}
            <Box>
              <NavLink to="home">
                <img
                  alt="shoeser"
                  src="https://demos.coderplace.com/woo/WCM01/WCM01004/wp-content/uploads/2022/10/logo.svg"
                  width="130"
                />
              </NavLink>
            </Box>

            <Search
              style={{
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                borderRadius: "20px",
                color: "black",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {/* <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
              <Box sx={{ marginTop: "10px" }}>{renderLogin()}</Box>

              <NavLink to="cart">
                <IconButton
                  size="medium"
                  edge="end"
                  aria-controls={menuId}
                  aria-haspopup="true"
                >
                  <AddShoppingCartIcon />
                  <p style={{ marginBottom: "20px", color: "red" }}>
                    ({cart.length})
                  </p>
                </IconButton>
              </NavLink>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </Container>
  );
}
