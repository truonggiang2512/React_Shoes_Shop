import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Divider, Grid, ListItem } from "@mui/material";
import { Stack } from "@mui/system";
import { NavLink, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getallProductApi } from "../../Redux/Reducers/ProductReducer";
import { addToCartAction } from "../../Redux/Reducers/CartReducer";
import { grey } from "@mui/material/colors";

export default function Product() {
  const params = useParams();
  const renderAllProduct = () => {
    return arrProduct.map((item) => {
      return (
        <Grid item xs={16} md={5} lg={4} sm={8}>
          <Card>
            <React.Fragment key={item.id}>
              <CardContent sx={{ boxSizing: "border-box", padding: "0px" }}>
                <NavLink
                  to={`/detail/${item.id}`}
                  style={{ textAlign: "center", cursor: "pointer" }}
                >
                  <img style={{ width: "100%" }} src={item.image} alt="" />
                </NavLink>
                <Box sx={{ textAlign: "center" }}>
                  <Rating name="read-only" value={5} readOnly />
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
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3">Product</Typography>
      </Box>

      <Container>
        <Box sx={{ textAlign: "left", paddingBottom: 2 }}>
          <Typography sx={{ fontWeight: 600 }} variant="h5">
            Trend Alert
          </Typography>
        </Box>
        <Grid container spacing={3} columns={16} minHeight={160}>
          {renderAllProduct()}
        </Grid>
      </Container>
    </Box>
  );
}
