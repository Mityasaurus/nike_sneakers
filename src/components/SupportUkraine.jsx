import { Grid } from "@mui/material";
import React from "react";
import ukr from "../assets/img/ukr.png";

export default function SupportUkraine() {
  return (
    <Grid
      width={"100%"}
      height={"350px"}
      container
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
    >
      <p style={{ fontSize: "24px", fontWeight: "300" }}>THANKS FOR WATCHING</p>
      <h4 style={{ fontSize: "48px", fontStyle: "italic", fontWeight: "1000" }}>
        Glory to Ukraine
      </h4>
      <img src={ukr} alt="Ukrainian flag" width={"80px"} />
    </Grid>
  );
}
