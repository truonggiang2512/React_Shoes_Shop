import React from "react";
import Header from "../Component/Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
export default function HomeTemplate() {
  return (
    <Container maxWidth={false}>
      <Header></Header>
      <div style={{ paddingTop: 130 }}>
        <Outlet></Outlet>
      </div>
      <footer></footer>
    </Container>
  );
}
