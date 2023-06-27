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
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getallProductApi } from "../../Redux/Reducers/ProductReducer";
import { addToCartAction } from "../../Redux/Reducers/CartReducer";
import { grey } from "@mui/material/colors";
export default function Product() {
  const renderAllProduct = () => {
    return arrProduct.map((item) => {
      return (
        <Grid item xs={16} md={5} lg={4} sm={8}>
          <Card>
            <React.Fragment key={item.id}>
              <CardContent sx={{ boxSizing: "border-box", padding: "0px" }}>
                <Box sx={{ textAlign: "center" }}>
                  <img style={{ width: "250px" }} src={item.image} alt="" />
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Rating name="read-only" value={4} readOnly />
                </Box>
                <Typography
                  style={{ textAlign: "center" }}
                  variant="h6"
                  component="div"
                >
                  {item.name}
                </Typography>

                <Typography style={{ textAlign: "center" }} variant="body2">
                  ${item.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  onClick={() => {
                    const action = addToCartAction(item);
                    dispatch(action);
                    console.log(action);
                  }}
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
          </Card>
        </Grid>
      );
    });
  };
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  console.log(arrProduct);
  const getProductApi = () => {
    const action = getallProductApi();
    dispatch(action);
  };
  useEffect(() => {
    getProductApi();
  }, []);
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Box textAlign="center">
        <Button
          sx={{
            color: "#000",
            margin: "0 20px",
            display: "inline",
            fontSize: "16px",
            background: "#fff",
            fontWeight: "600",
            "&:hover": {
              color: grey[500],
              backgroundColor: "#fff",
            },
          }}
        >
          Popular
        </Button>
        <Button
          sx={{
            color: "#000",
            margin: "0 20px",
            display: "inline",
            fontSize: "16px",
            background: "#fff",
            fontWeight: "600",

            "&:hover": {
              color: grey[500],
              backgroundColor: "#fff",
            },
          }}
        >
          Latest
        </Button>
        <Button
          sx={{
            color: "#000",
            margin: "0 20px",
            display: "inline",
            fontSize: "16px",
            background: "#fff",
            fontWeight: "600",

            "&:hover": {
              color: grey[500],
              backgroundColor: "#fff",
            },
          }}
        >
          Top Seller
        </Button>
      </Box>
      <Container>
        <Grid
          sx={{ paddingTop: "50px" }}
          container
          spacing={3}
          columns={16}
          minHeight={160}
        >
          {renderAllProduct()}
        </Grid>
      </Container>
    </Box>
  );
}
