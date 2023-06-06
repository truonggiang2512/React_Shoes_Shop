import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { grey, pink, red } from "@mui/material/colors";
// Create a theme instance.
import { createBreakpoints } from "@mui/system";
const breakpoints = createBreakpoints({});
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#fff",
        },
        primary: {
          main: "#fff",
        },
      },
      overrides: {
        MuiButton: {
          raisedPrimary: {
            color: "#fff",
            background: "#000",
          },
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#fff",
          background: {
            default: "#000",
            paper: "#000",
          },
        },
      },
    },
  },
  // ...other properties
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

export default theme;
