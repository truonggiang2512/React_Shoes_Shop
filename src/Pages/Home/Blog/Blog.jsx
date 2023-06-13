import {
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export default function Blog() {
  const [myColor, setMyColor] = React.useState("red");
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  const cardStyle = {
    transition: `all 300ms ease-in-out`,
    background: "red",
  };

  const transitionStyles = {
    entering: { height: 150 },
    entered: { height: 150 },
    exiting: { height: 0 },
    exited: { height: 0 },
  };
  return (
    <Container sx={{ marginTop: "100px" }}>
      <Typography sx={{ textAlign: "center" }}>From the Blog</Typography>
      <Grid
        sx={{ paddingTop: "50px" }}
        container
        spacing={3}
        columns={12}
        minHeight={160}
      >
        <Grid item xs={12} md={4} lg={4} sm={6}>
          <Box>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Box
                  onMouseEnter={() => setMyColor("green")}
                  onMouseLeave={() => setMyColor("red")}
                  sx={{
                    textAlign: "center",
                    border: "2px dashed",
                    borderColor: myColor,
                  }}
                >
                  <img
                    style={{
                      width: "250px",
                    }}
                    src="https://shop.cyberlearn.vn/images/adidas-prophere.png"
                    alt=""
                  />
                </Box>
                <Typography
                  style={{ textAlign: "center" }}
                  variant="h5"
                  component="div"
                >
                  Name
                </Typography>
                <Typography
                  style={{ textAlign: "left" }}
                  variant="body2"
                  component="div"
                >
                  WE LOVE EXPAND SPACE WITH A SLEEPER SOFA
                </Typography>
                <Typography
                  style={{ textAlign: "left" }}
                  variant="body2"
                  component="div"
                >
                  We love these outfits styled by Phyllis Evans Baker for a
                  Calvin Klein collaboration with
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={4} sm={6}>
          <Box>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Box
                  onMouseEnter={() => setMyColor("green")}
                  onMouseLeave={() => setMyColor("red")}
                  sx={{
                    textAlign: "center",
                    border: "2px dashed",
                    borderColor: myColor,
                  }}
                >
                  <img
                    style={{ width: "250px" }}
                    src="https://shop.cyberlearn.vn/images/adidas-prophere.png"
                    alt=""
                  />
                </Box>
                <Typography
                  style={{ textAlign: "center" }}
                  variant="h5"
                  component="div"
                >
                  Name
                </Typography>
                <Typography
                  style={{ textAlign: "left" }}
                  variant="body2"
                  component="div"
                >
                  WE LOVE EXPAND SPACE WITH A SLEEPER SOFA
                </Typography>
                <Typography
                  style={{ textAlign: "left" }}
                  variant="body2"
                  component="div"
                >
                  We love these outfits styled by Phyllis Evans Baker for a
                  Calvin Klein collaboration with
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={4} sm={6}>
          <Box>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Box
                  onMouseEnter={() => setMyColor("green")}
                  onMouseLeave={() => setMyColor("red")}
                  sx={{
                    textAlign: "center",
                    border: "2px dashed",
                    borderColor: myColor,
                  }}
                >
                  <img
                    style={{ width: "250px" }}
                    src="https://shop.cyberlearn.vn/images/adidas-prophere.png"
                    alt=""
                  />
                </Box>
                <Typography
                  style={{ textAlign: "center" }}
                  variant="h5"
                  component="div"
                >
                  Name
                </Typography>
                <Typography
                  style={{ textAlign: "left" }}
                  variant="body2"
                  component="div"
                >
                  WE LOVE EXPAND SPACE WITH A SLEEPER SOFA
                </Typography>
                <Typography
                  style={{ textAlign: "left" }}
                  variant="body2"
                  component="div"
                >
                  We love these outfits styled by Phyllis Evans Baker for a
                  Calvin Klein collaboration with
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
