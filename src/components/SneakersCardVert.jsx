import React from "react";
import { Grid } from "@mui/material";
import s from "../style/sneakersCardVert.module.css";
import ArrowBuyPng from "../assets/img/arrow_buy.png";
import TestSneakersPhoto from "../assets/img/sneakers.png";

export default function SneakersCardVert() {
  return (
    <Grid
      container
      width={"600px"}
      height={"235px"}
      bgcolor={"#EFEFEF"}
      borderRadius={"18px"}
      boxShadow={"5px 5px 25px 0px rgba(0,0,0,0.25)"}
      marginTop={"-45px"}
    >
      <Grid
        width={"50%"}
        container
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <p className={s.title_red}>NEW</p>
        <p className={s.text_desc}>Nike Air Max Dn</p>
        <img src={ArrowBuyPng} alt="Buy" />
      </Grid>
      <Grid width={"50%"} zIndex={"999"}>
        <img className={s.SneakersImg} src={TestSneakersPhoto} alt="Sneakers" />
      </Grid>
    </Grid>
  );
}
