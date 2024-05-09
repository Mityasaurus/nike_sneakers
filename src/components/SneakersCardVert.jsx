import { Grid } from "@mui/material";
import React from "react";
import s from "../style/sneakersCardVert.module.css";
import TestSneakersPhoto from "../assets/img/sneakers.png";
import ArrowBuyPng from "../assets/img/arrow_buy.png";

export default function SneakersCardVert({ name, price }) {
  return (
    <Grid
      className={s.card}
      position={"relative"}
      container
      justifyContent={"normal"}
      alignItems={"flex-start"}
      flexDirection={"column"}
      width={"400px"}
      height={"580px"}
      bgcolor={"#EFEFEF"}
      borderRadius={"18px"}
      boxShadow={"5px 5px 25px 0px rgba(0,0,0,0.25)"}
    >
      <img className={s.SneakersImg} src={TestSneakersPhoto} alt="Sneakers" />
      <h4 className={s.text_title}>{name}</h4>
      <p className={s.text_price}>${price}</p>
      <img className={s.ArrowBuyImg} src={ArrowBuyPng} alt="Buy" />
    </Grid>
  );
}
