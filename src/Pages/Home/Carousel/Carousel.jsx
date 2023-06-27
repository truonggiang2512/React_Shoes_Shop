import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { grey } from "@mui/material/colors";
import "./carousel.css";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="background">
            <Grid container spacing={2} columns={16}>
              <Grid
                item
                xs={8}
                sx={{ textAlign: "center", alignItems: "center" }}
              >
                {/* <Typography
                  sx={{ fontWeight: "500", color: "#000" }}
                  variant="h3"
                  gutterBottom
                >
                  Buy Lofer Shoes
                </Typography>
                <Typography variant="h4">
                  {" "}
                  <NavLink style={{ alignItems: "center" }}> View more</NavLink>
                </Typography> */}
              </Grid>
              <Grid item xs={8}>
                <ListItem sx={{ minHeight: "60vh" }}></ListItem>
              </Grid>
            </Grid>
          </div>

          {/* <Box className="background">
            <Grid container spacing={2} columns={16}>
              <Grid
                item
                xs={8}
                sx={{ textAlign: "center", alignItems: "center" }}
              >
                <Typography
                  sx={{ fontWeight: "500", color: "#000" }}
                  variant="h3"
                  gutterBottom
                >
                  Buy Lofer Shoes
                </Typography>
                <Typography variant="h4">
                  {" "}
                  <NavLink style={{ alignItems: "center" }}> View more</NavLink>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <ListItem>
                  <img
                    style={{ width: "50%" }}
                    src="https://shop.cyberlearn.vn/images/adidas-prophere.png"
                    alt=""
                  />
                </ListItem>
              </Grid>
            </Grid>
          </Box> */}
        </Slider>
      </div>
    );
  }
}
