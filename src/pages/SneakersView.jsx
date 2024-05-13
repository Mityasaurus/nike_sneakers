import React from "react";
// import { useApp } from "../utils/context";
import { Grid } from "@mui/material";
import SneakersCardVert from "../components/SneakersCardVert";
import { sneakersItems } from "../constants/db";

export default function SneakersView({ type, name }) {
  // const { sneakersData } = useApp();
  const sneakersData = sneakersItems;
  const items = sneakersData.filter((s) => s.type === type);
  return (
    <Grid
      container
      flexDirection={"column"}
      alignItems={"flex-start"}
      width={"100%"}
      overflow={"hidden"}
      paddingBottom={"55px"}
    >
      <h2
        style={{
          color: "black",
          fontStyle: "normal",
          fontSize: "40px",
          fontWeight: "800",
          margin: "15px 0 25px 55px",
        }}
      >
        {name}
      </h2>
      <Grid
        container
        justifyContent={"space-evenly"}
        alignItems={"center"}
        width={"100%"}
        rowGap={"55px"}
      >
        {items.map((s) => (
          <SneakersCardVert name={s.name} price={s.price} img={s.img} />
        ))}
      </Grid>
    </Grid>
  );
}
