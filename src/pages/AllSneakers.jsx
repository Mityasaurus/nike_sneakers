import React from "react";
import BannerQR from "../components/BannerQR";
import SlidingLine from "../components/SlidingLine";
import peopleNikeLogoPng from "../assets/img/peopleNikeLogo.png";
import SneakersCardHorz from "../components/SneakersCardHorz";
import { Grid } from "@mui/material";
import PaginatedSneakers from "../components/PaginatedSneakers";
import Categories from "../components/Categories";

export default function AllSneakers() {
  return (
    <Grid overflow={"hidden"}>
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
      <Grid
        container
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"25px"}
        margin={"100px 0"}
      >
        <p style={{ fontSize: "40px", fontWeight: "200" }}>At the moment</p>
        <h4
          style={{ fontSize: "80px", fontWeight: "1000", fontStyle: "italic" }}
        >
          SUMMERTIME MOOD
        </h4>
        <p style={{ fontSize: "40px", fontWeight: "200" }}>
          Fight the heat in a sunny look!
        </p>
      </Grid>
      <PaginatedSneakers />
      <Categories />
    </Grid>
  );
}
