import React from "react";
import BannerQR from "../components/BannerQR";
import SlidingLine from "../components/SlidingLine";
import peopleNikeLogoPng from "../assets/img/peopleNikeLogo.png";
import SneakersCardHorz from "../components/SneakersCardHorz";
import { Grid } from "@mui/material";

export default function AllSneakers() {
  return (
    <div style={{ overflow: "hidden" }}>
      <BannerQR />
      <SlidingLine />
      <img src={peopleNikeLogoPng} alt="People nike logo" width="100%" />
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        gap={"4%"}
      >
        <SneakersCardHorz />
        <SneakersCardHorz />
      </Grid>
    </div>
  );
}
