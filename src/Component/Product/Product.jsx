import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, Grid, ListItem } from "@mui/material";
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
          style={{ width: "300px" }}
          src="https://shop.cyberlearn.vn/images/adidas-prophere.png"
          alt=""
        />
      </Box>
      <Box>
        <Rating name="read-only" value={4} readOnly />
      </Box>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button style={{ backgroundColor: "black" }} size="small">
        Learn More
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
      <Grid sx={{ paddingTop: "50px" }} container spacing={3} minHeight={160}>
        <Grid item xs={12} md={3}>
          <Card variant="outlined">{card}</Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card variant="outlined">{card}</Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card variant="outlined">{card}</Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card variant="outlined">{card}</Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card variant="outlined">{card}</Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card variant="outlined">{card}</Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card variant="outlined">{card}</Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card variant="outlined">{card}</Card>
        </Grid>
      </Grid>
    </Box>
  );
}
