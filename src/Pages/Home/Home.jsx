import { Container } from "@mui/material";
import React from "react";
import Product from "../../Component/Product/Product";
import Carousel from "./Carousel/Carousel";
import Collection from "./Collection/Collection";
import ItemReview from "./ItemReview/ItemReview";

export default function Home() {
  return (
    <div>
      <Container maxWidth="xl">
        <Carousel />
        <Collection />
        <ItemReview />
        <Product />
      </Container>
    </div>
  );
}
