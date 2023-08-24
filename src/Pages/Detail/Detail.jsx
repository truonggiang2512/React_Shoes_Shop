import { Button } from "@mui/base";
import {
  Alert,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import React, { useEffect } from "react";
import CardActions from "@mui/material/CardActions";
import { useDispatch, useSelector } from "react-redux";
import { getProductByIDApi } from "../../Redux/Reducers/ProductReducer";
import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  addToCartAction,
  changeQuantityAction,
} from "../../Redux/Reducers/CartReducer";
import storage from "../../Utils/storage";
import { TOKEN } from "../../Utils/config";

export default function Detail() {
  const [productDetail, setProductDetail] = useState({});
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getProductDetailApi = async (id) => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method: "GET",
    });
    //Đưa dữ liệu lấy tự api về vào state
    setProductDetail(result.data.content);
    console.log("id", result.data.content);
  };
  const [open, setOpen] = React.useState(false);

  const handleAlertOpen = () => {
    setOpen(true);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const token = storage.get(TOKEN);
  useEffect(() => {
    getProductDetailApi(params.id);
  }, [params.id]);
  const renderRelateProduct = () => {
    return productDetail.relatedProducts?.map((item, index) => {
      return (
        <Grid item xs={16} md={5} lg={4} sm={8} key={index}>
          <Card>
            <React.Fragment>
              <CardContent>
                <Box sx={{ textAlign: "center" }}>
                  <img style={{ width: "250px" }} src={item.image} alt="" />
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Rating name="read-only" value={4} readOnly />
                </Box>
                <Typography
                  style={{ textAlign: "center" }}
                  variant="h5"
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
                  style={{
                    backgroundColor: "black",
                    padding: "10px 25px",
                    borderRadius: "12px",
                    color: "white",
                  }}
                  onClick={() => {
                    if (token) {
                      const action = addToCartAction(item);
                      dispatch(action);
                      handleAlertOpen();
                    } else {
                      alert("You must login first!!!");
                      navigate("/login");
                    }
                  }}
                  size="small"
                >
                  Add To Cart
                </Button>
                <Box>
                  <NavLink
                    style={{
                      marginLeft: "20px",
                      backgroundColor: "black",
                      padding: "10px 25px",
                      borderRadius: "12px",
                      color: "white",
                      textDecoration: "none",
                      fontFamily: "Arial",
                    }}
                    to={`/detail/${item.id}`}
                  >
                    View Detail
                  </NavLink>
                </Box>
              </CardActions>
            </React.Fragment>
          </Card>
        </Grid>
      );
    });
  };

  return (
    <Container>
      <Box>
        <Grid container spacing={3} columns={12}>
          <Grid item xs={12} sm={12} md={4} lg={6}>
            <CardMedia
              component="img"
              height="300"
              image={productDetail.image}
              alt="Paella dish"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <Box>
              <Typography variant="h2">{productDetail.name}</Typography>
            </Box>
            <Box>
              <Typography variant="h1">${productDetail.price}</Typography>
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
                    onClick={() => {
                      if (quantity < 1) {
                        alert("không thể chỉnh số lượng nhỏ hơn nữa");
                        return;
                      } else {
                        setQuantity(quantity - 1);
                      }
                    }}
                  >
                    -
                  </Button>
                  {quantity}

                  <Button
                    style={{
                      backgroundColor: "white",
                      fontSize: "25px",
                      padding: "2px 10px 2px 30px",
                    }}
                    onClick={() => {
                      setQuantity(quantity + 1);
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
                  onClick={() => {
                    if (token) {
                      const action = addToCartAction(item);
                      dispatch(action);
                      handleAlertOpen();
                    } else {
                      alert("You must login first!!!");
                      navigate("/login");
                    }
                  }}
                  size="small"
                >
                  Add To Cart
                </Button>
              </Box>
            </Box>
            <hr />

            <Grid container columns={20} minHeight={100}>
              {productDetail.size?.map((item) => (
                <Grid item xs={4} sm={2} lg={3} key={item}>
                  <Button
                    style={{
                      backgroundColor: "black",
                      padding: "10px 25px",
                      borderRadius: "12px",
                      color: "white",
                    }}
                    size="small"
                  >
                    {item}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <hr />
      <Box>
        <Typography sx={{ textAlign: "center" }}>Release Product</Typography>
      </Box>
      <Grid
        sx={{ paddingTop: "50px" }}
        container
        spacing={3}
        columns={12}
        minHeight={160}
      >
        {renderRelateProduct()}
      </Grid>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleAlertClose}
        >
          <Alert
            onClose={handleAlertClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Add to Cart successfully!!!
          </Alert>
        </Snackbar>
      </Stack>
    </Container>
  );
}
