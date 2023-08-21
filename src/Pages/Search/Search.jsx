import React, { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

export default function Search() {
  const arrSearch = useSelector((state) => state.searchReducer.arrSearch);
  console.log(arrSearch, "search");
  const renderSearch = () => {
    if (isEmpty) {
      return arrSearch.data?.map((item, key) => {
        return (
          <Grid item xs={4}>
            <NavLink
              style={{ textDecoration: "none", color: "none" }}
              to={`/detail/${item?.id}`}
            >
              <Box sx={{ Width: 280, boder: "none", color: "primary.main" }}>
                <Box sx={{ cursor: "pointer" }}>
                  <CardMedia
                    sx={{
                      borderRadius: 2,
                      height: { md: "160px", xs: "210px", sm: "160px" },
                    }}
                    component="img"
                    width="100%"
                    image={item.image}
                    alt="green iguana"
                  />
                  <CardContent sx={{ padding: "10px 0 0 0 " }}>
                    <Box pt={2}>
                      <Typography
                        sx={{
                          overflow: "hidden",
                          display: "-webkit-box",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          msTextOverflow: "ellipsis",
                        }}
                        variant="subtitle1"
                        color="text.main"
                      >
                        {item.name}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        style={{
                          display: "inline-block",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        From US${item.price}
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
              </Box>
            </NavLink>
          </Grid>
        );
      });
    } else {
      return <Box></Box>;
    }
  };
  const renderSearchFalse = () => {
    if (isEmpty) {
      return <Box></Box>;
    } else {
      return (
        <Box sx={{ textAlign: "center" }}>
          <Box px={4} py={4}>
            <Box>
              <Box sx={{ margin: "auto", width: "auto" }}>
                <img
                  width="45%"
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/empty-search-results.aabcd99.png"
                  alt=""
                />
              </Box>
            </Box>
            <Box py={2}>
              <Typography variant="h5">
                <h2>No Services Found For Your Search</h2>
              </Typography>
              <Typography variant="subtitle1">
                Try a new search or get a free quote for your project from our
                community of freelancers.
              </Typography>
            </Box>
          </Box>
        </Box>
      );
    }
  };

  return (
    <>
      <Container sx={{ py: 5 }} maxWidth="lg">
        <Typography variant="h2">
          Results for <b>{arrSearch.search}</b>
        </Typography>
        <Box my={2}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 16 }}>
            {" "}
            {arrSearch.data?.map((item, key) => {
              return (
                <Grid item xs={4}>
                  <NavLink
                    style={{ textDecoration: "none", color: "none" }}
                    to={`/detail/${item?.id}`}
                  >
                    <Box
                      sx={{ Width: 280, boder: "none", color: "primary.main" }}
                    >
                      <Box sx={{ cursor: "pointer" }}>
                        <CardMedia
                          sx={{
                            borderRadius: 2,
                            height: { md: "160px", xs: "210px", sm: "160px" },
                          }}
                          component="img"
                          width="100%"
                          image={item.image}
                          alt="green iguana"
                        />
                        <CardContent sx={{ padding: "10px 0 0 0 " }}>
                          <Box pt={2}>
                            <Typography
                              sx={{
                                overflow: "hidden",
                                display: "-webkit-box",
                                textOverflow: "ellipsis",
                                whiteSpace: "normal",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                msTextOverflow: "ellipsis",
                              }}
                              variant="subtitle1"
                              color="text.main"
                            >
                              {item.name}
                            </Typography>
                          </Box>
                          <Typography
                            sx={{
                              overflow: "hidden",
                              display: "-webkit-box",
                              textOverflow: "ellipsis",
                              whiteSpace: "normal",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              msTextOverflow: "ellipsis",
                            }}
                            variant="subtitle1"
                            color="#9e9e9e"
                          >
                            {item.shortDescription}
                          </Typography>
                          <Box py={0.5}>
                            <Typography
                              style={{
                                display: "inline-block",
                                fontSize: "16px",
                                fontWeight: "600",
                              }}
                            >
                              From US${item.price}
                            </Typography>
                          </Box>
                          <Box pt={3}>
                            <Button
                              sx={{ borderRadius: "30px" }}
                              variant="contained"
                            >
                              Add to cart
                            </Button>
                          </Box>
                        </CardContent>
                      </Box>
                    </Box>
                  </NavLink>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
