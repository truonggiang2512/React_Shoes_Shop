import React from "react";
import Header from "../Component/Header/Header";
import { Outlet } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentsIcon from "@mui/icons-material/Payments";
export default function HomeTemplate() {
  return (
    <Container maxWidth={false} disableGutters>
      <Header></Header>
      <div style={{ paddingTop: 130, paddingBottom: 130 }}>
        <Outlet></Outlet>
      </div>
      <footer style={{ backgroundColor: grey[100], paddingTop: "50px" }}>
        <Container>
          <Grid container spacing={3} columns={14} minHeight={160}>
            <Grid item xs={4} sm={2}>
              <Typography variant="button">HOME</Typography>
            </Grid>
            <Grid item xs={4} sm={2}>
              <Typography variant="button">SHOP</Typography>
            </Grid>
            <Grid item xs={4} sm={2}>
              <Typography variant="button">BLOG</Typography>
            </Grid>
            <Grid item xs={4} sm={2}>
              <Typography variant="button">MEDIA</Typography>
            </Grid>
            <Grid item xs={4} sm={2}>
              <Typography variant="button">PORTFOLIO</Typography>
            </Grid>
            <Grid item xs={4} sm={2}>
              <Typography variant="button">ABOUT US</Typography>
            </Grid>
            <Grid item xs={4} sm={2}>
              <Typography variant="button">CONTACT US</Typography>
            </Grid>
          </Grid>
          <hr />
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <FacebookOutlinedIcon></FacebookOutlinedIcon>
              <TwitterIcon></TwitterIcon>
              <GoogleIcon></GoogleIcon>
            </Box>
            <Box>
              <Typography>Copyright © 2023 CoderPlace</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <CreditCardIcon></CreditCardIcon>
              <PaymentsIcon></PaymentsIcon>
            </Box>
          </Box>
        </Container>
      </footer>
    </Container>
  );
}
