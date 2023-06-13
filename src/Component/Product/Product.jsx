import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Divider, Grid, ListItem } from "@mui/material";
import { Stack } from "@mui/system";
import { NavLink } from "react-router-dom";
import Rating from "@mui/material/Rating";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Box sx={{ textAlign: "center" }}>
        <img
          style={{ width: "250px" }}
          src="https://shop.cyberlearn.vn/images/adidas-prophere.png"
          alt=""
        />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Rating name="read-only" value={4} readOnly />
      </Box>
      <Typography style={{ textAlign: "center" }} variant="h5" component="div">
        Name
      </Typography>

      <Typography style={{ textAlign: "center" }} variant="body2">
        $120.00
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: "center" }}>
      <Button
        style={{
          backgroundColor: "black",
          padding: "10px 25px",
          borderRadius: "12px",
          color: "#fff",
        }}
        size="small"
      >
        Add To Cart
      </Button>
    </CardActions>
  </React.Fragment>
);

export default function Product() {
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Box textAlign="center">
        <Box style={{ margin: "0 20px", display: "inline" }}>123</Box>
        <Box style={{ margin: "0 20px", display: "inline" }}>123</Box>
        <Box style={{ margin: "0 20px", display: "inline" }}>123</Box>
      </Box>
      <Container>
        <Grid
          sx={{ paddingTop: "50px" }}
          container
          spacing={3}
          columns={16}
          minHeight={160}
        >
          <Grid item xs={16} md={5} lg={4} sm={8}>
            <Card>{card}</Card>
          </Grid>
          <Grid item xs={16} md={5} lg={4} sm={8}>
            <Card sx={{ maxWidth: 345 }}>{card}</Card>
          </Grid>
          <Grid item xs={16} md={5} lg={4} sm={8}>
            <Card>{card}</Card>
          </Grid>
          <Grid item xs={16} md={5} lg={4} sm={8}>
            <Card sx={{ maxWidth: 345 }}>{card}</Card>
          </Grid>
          <Grid item xs={16} md={5} lg={4} sm={8}>
            <Card>{card}</Card>
          </Grid>
          <Grid item xs={16} md={5} lg={4} sm={8}>
            <Card sx={{ maxWidth: 345 }}>{card}</Card>
          </Grid>
          <Grid item xs={16} md={5} lg={4} sm={8}>
            <Card>{card}</Card>
          </Grid>
          <Grid item xs={16} md={5} lg={4} sm={8}>
            <Card sx={{ maxWidth: 345 }}>{card}</Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
