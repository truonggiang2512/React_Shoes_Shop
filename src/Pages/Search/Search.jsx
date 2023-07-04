import Button from "@mui/material/Button";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Rating,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getallProductApi } from "../../Redux/Reducers/ProductReducer";
import Shuffle from "shufflejs";

export default function Search() {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const [shoesTotal, setShoesTotal] = useState(0);
  const [shuffle, setShuffle] = useState(null);
  const [filterKey, setFilterKey] = useState("*");

  /* Hook Init */
  const shuffleRef = useRef();

  const createShuffle = () => {
    setShuffle(
      new Shuffle(shuffleRef.current, {
        itemSelector: ".filter-item",
        speed: 500,
        staggerAmount: 100,
        useTransforms: true,
      })
    );
  };

  //-----------------
  const filterProduct = (keyFilter) => {
    if (shuffle) {
      setFilterKey(keyFilter);
      console.log("keyfilter", keyFilter);
    } else {
      createShuffle();
      setFilterKey(keyFilter);
      Shuffle.ALL_ITEMS = "*";
    }
  };

  useEffect(() => {
    if (shuffle) {
      shuffle.sort({});
      shuffle.filter(filterKey);
      setShoesTotal(shuffle.sortedItems.length);
    }
  }, [filterKey]);
  //--------------------
  const dispatch = useDispatch();

  const getProductApi = () => {
    const action = getallProductApi();
    dispatch(action);
  };
  useEffect(() => {
    getProductApi();
  }, []);

  const renderAllProduct = () => {
    return arrProduct.map((item) => {
      return (
        <Grid
          item
          xs={16}
          md={5}
          lg={4}
          sm={8}
          key={item.id}
          data-groups={JSON.stringify(item?.categories[0]?.id)}
        >
          <Card className="filter-item">
            <React.Fragment>
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

  return (
    <>
      <Container sx={{ paddingTop: "100px" }}>
        <Tabs value={filterKey} onChange={filterProduct}>
          <Tab value="*" label="All Shoes" />
          <Tab value="VANS_CONVERSE" label="Vans" />
          <Tab value="ADIDAS" label="Adidas" />
          <Tab value="NIKE" label="Nike" />
        </Tabs>

        <Box position="apart" display="none">
          <Typography>Category</Typography>
        </Box>
        <Grid
          sx={{ paddingTop: "50px" }}
          container
          spacing={3}
          columns={16}
          minHeight={160}
          ref={shuffleRef}
        >
          {arrProduct?.map((item, index) => {
            const key = item ? item.id : index;
            console.log(JSON.stringify(item?.categories[0]?.id), "key");
            return (
              <Grid
                item
                xs={16}
                md={5}
                lg={4}
                sm={8}
                key={key}
                data-groups={JSON.stringify(item?.categories[0]?.id)}
              >
                <Card className="filter-item">
                  <React.Fragment>
                    <CardContent
                      sx={{ boxSizing: "border-box", padding: "0px" }}
                    >
                      <NavLink
                        to={`/detail/${item.id}`}
                        style={{ textAlign: "center", cursor: "pointer" }}
                      >
                        <img
                          style={{ width: "100%" }}
                          src={item.image}
                          alt=""
                        />
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

                      <Typography
                        style={{ textAlign: "center" }}
                        variant="body2"
                      >
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
          })}
        </Grid>
      </Container>
    </>
  );
}
