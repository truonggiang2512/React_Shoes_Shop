import { Container } from "@mui/material";
import React from "react";
import Product from "../../Component/Product/Product";
import Blog from "./Blog/Blog";
import Carousel from "./Carousel/Carousel";
import Collection from "./Collection/Collection";
import ItemReview from "./ItemReview/ItemReview";

export default function Home() {
  return (
    <div>
      <Carousel />
      <ItemReview />
      <Product />
      <Collection />
    </div>
  );
}
