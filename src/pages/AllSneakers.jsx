import React from "react";
import Banner from "../components/Banner";
import SlidingLine from "../components/SlidingLine";
import peopleNikeLogoPng from "../assets/img/peopleNikeLogo.png";
import SneakersCardVert from "../components/SneakersCardVert";
import { Grid } from "@mui/material";

export default function AllSneakers() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Banner />
      <SlidingLine />
      <img src={peopleNikeLogoPng} alt="People nike logo photo" width="100%" />
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        gap={"30px"}
      >
        <SneakersCardVert />
        <SneakersCardVert />
      </Grid>
    </div>
  );
}
