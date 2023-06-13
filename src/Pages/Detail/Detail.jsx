import { Button } from "@mui/base";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import React from "react";
import CardActions from "@mui/material/CardActions";

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
          color: "white",
        }}
        size="small"
      >
        Add To Cart
      </Button>
    </CardActions>
  </React.Fragment>
);
export default function Detail() {
  return (
    <Container>
      <Box>
        <Grid container spacing={3} columns={12}>
          <Grid item xs={12} sm={12} md={4} lg={6}>
            <CardMedia
              component="img"
              height="300"
              image="https://shop.cyberlearn.vn/images/adidas-prophere.png"
              alt="Paella dish"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <Box>
              <Typography variant="h2">Name</Typography>
            </Box>
            <Box>
              <Typography variant="h1">Price</Typography>
            </Box>
            <Box>
              <li>100% Quality</li>
              <li>Increases Resistance</li>
              <li>Free Shipping Over $59</li>
            </Box>
            <hr />
            <Box sx={{ display: "flex", gap: 2, padding: "30px 0px" }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ border: "1px solid grey " }}>
                  <Button
                    style={{
                      backgroundColor: "white",
                      fontSize: "25px",
                      padding: "2px 30px 2px 10px",
                    }}
                  >
                    -
                  </Button>{" "}
                  1
                  <Button
                    style={{
                      backgroundColor: "white",
                      fontSize: "25px",
                      padding: "2px 10px 2px 30px",
                    }}
                  >
                    +
                  </Button>
                </Box>
                <Button
                  style={{
                    backgroundColor: "black",
                    padding: "10px 25px",
                    borderRadius: "12px",
                    color: "white",
                  }}
                  size="small"
                >
                  Add To Cart
                </Button>
              </Box>
            </Box>
            <hr />

            <Grid container columns={20} minHeight={100}>
              <Grid item xs={4} sm={2} lg={3}>
                <Button
                  style={{
                    backgroundColor: "black",
                    padding: "10px 25px",
                    borderRadius: "12px",
                    color: "white",
                  }}
                  size="small"
                >
                  36
                </Button>
              </Grid>
              <Grid item xs={4} sm={2} lg={3}>
                <Button
                  style={{
                    backgroundColor: "black",
                    padding: "10px 25px",
                    borderRadius: "12px",
                    color: "white",
                  }}
                  size="small"
                >
                  37
                </Button>
              </Grid>
              <Grid item xs={4} sm={2} lg={3}>
                <Button
                  style={{
                    backgroundColor: "black",
                    padding: "10px 25px",
                    borderRadius: "12px",
                    color: "white",
                  }}
                  size="small"
                >
                  38
                </Button>
              </Grid>
              <Grid item xs={4} sm={2} lg={3}>
                <Button
                  style={{
                    backgroundColor: "black",
                    padding: "10px 25px",
                    borderRadius: "12px",
                    color: "white",
                  }}
                  size="small"
                >
                  39
                </Button>
              </Grid>
              <Grid item xs={4} sm={2} lg={3}>
                <Button
                  style={{
                    backgroundColor: "black",
                    padding: "10px 25px",
                    borderRadius: "12px",
                    color: "white",
                  }}
                  size="small"
                >
                  40
                </Button>
              </Grid>
              <Grid item xs={4} sm={2} lg={3}>
                <Button
                  style={{
                    backgroundColor: "black",
                    padding: "10px 25px",
                    borderRadius: "12px",
                    color: "white",
                  }}
                  size="small"
                >
                  41
                </Button>
              </Grid>
              <Grid item xs={4} sm={2} lg={3}>
                <Button
                  style={{
                    backgroundColor: "black",
                    padding: "10px 25px",
                    borderRadius: "12px",
                    color: "white",
                  }}
                  size="small"
                >
                  42
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography>Release Product</Typography>
      </Box>
      <Grid
        sx={{ paddingTop: "50px" }}
        container
        spacing={3}
        columns={12}
        minHeight={160}
      >
        <Grid item xs={16} md={5} lg={4} sm={8}>
          <Card>{card}</Card>
        </Grid>
        <Grid item xs={16} md={5} lg={4} sm={8}>
          <Card>{card}</Card>
        </Grid>
        <Grid item xs={16} md={5} lg={4} sm={8}>
          <Card>{card}</Card>
        </Grid>
      </Grid>
    </Container>
  );
}
