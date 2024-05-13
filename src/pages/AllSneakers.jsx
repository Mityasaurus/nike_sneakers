import React from "react";
import BannerQR from "../components/BannerQR";
import SlidingLine from "../components/SlidingLine";
import peopleNikeLogoPng from "../assets/img/peopleNikeLogo.png";
import { Grid } from "@mui/material";
import PaginatedSneakers from "../components/PaginatedSneakers";
import Categories from "../components/Categories";
import SneakersCardsHorzList from "../components/SneakersCardsHorzList";
// import { useApp } from "../utils/context";
import { sneakersItems } from "./../constants/db";

export default function AllSneakers() {
  // const { sneakersData } = useApp();
  const sneakersData = sneakersItems;
  console.log(sneakersData);

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
        marginTop={"-45px"}
      >
        <SneakersCardsHorzList
          type="new"
          size={2}
          sneakersData={sneakersData}
        />
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
      <PaginatedSneakers sneakersData={sneakersData} size={3} />
      <Categories />
      <p
        style={{
          fontSize: "40px",
          fontStyle: "italic",
          fontWeight: "1000",
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        LOOKS GOOD. RUNS GOOD. FEELS GOOD.
      </p>
      <Grid
        container
        justifyContent={"space-around"}
        alignItems={"center"}
        paddingBottom={"80px"}
      >
        <SneakersCardsHorzList
          type="discount"
          size={2}
          sneakersData={sneakersData}
        />
      </Grid>
    </Grid>
  );
}
