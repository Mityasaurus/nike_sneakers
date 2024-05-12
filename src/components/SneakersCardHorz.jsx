import React from "react";
import { Grid } from "@mui/material";
import s from "../style/sneakersCardHorz.module.css";
import ArrowBuyPng from "../assets/img/arrow_buy.png";
import { Link } from "react-router-dom";

export default function SneakersCardHorz({ name, type, img }) {
  return (
    <Grid
      container
      width={"600px"}
      height={"235px"}
      bgcolor={"#EFEFEF"}
      borderRadius={"18px"}
      boxShadow={"5px 5px 25px 0px rgba(0,0,0,0.25)"}
    >
      <Grid
        width={"50%"}
        container
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {type === "new" ? (
          <p className={s.title_red_new}>NEW</p>
        ) : (
          <p className={s.title_red_discount}>-20% Discount</p>
        )}
        {type === "new" ? (
          <p className={s.text_desc}>{name}</p>
        ) : (
          <p className={s.text_desc}>on your first purchase</p>
        )}

        {type === "new" ? (
          <img style={{ cursor: "pointer" }} src={ArrowBuyPng} alt="Buy" />
        ) : (
          <Link
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "16px",
              padding: "12px 27px",
              fontSize: "20px",
              marginTop: "30px",
            }}
          >
            Shop now
          </Link>
        )}
      </Grid>
      <Grid width={"50%"} zIndex={"999"}>
        <img className={s.SneakersImg} src={img} alt="Sneakers" />
      </Grid>
    </Grid>
  );
}
