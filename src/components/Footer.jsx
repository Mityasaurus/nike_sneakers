import React from "react";
import BannerMembership from "./BannerMembership";
import SupportUkraine from "./SupportUkraine";
import { Grid } from "@mui/material";
import NikeLogoWithUkraine from "../assets/img/NikeLogoWithUkraine.png";
import { Link } from "react-router-dom";
import s from "../style/footer.module.css";

export default function Footer() {
  return (
    <footer>
      <BannerMembership />
      <SupportUkraine />
      <Grid
        container
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        bgcolor={"black"}
        color={"white"}
      >
        <Grid
          container
          flexDirection={"column"}
          justifyContent={"space-around"}
          alignItems={"center"}
          width={"fit-content"}
          marginLeft={"30px"}
          gap={"50px"}
        >
          <Link className={s.link} to={"/all"}>
            ALL
          </Link>
          <Link className={s.link} to={"/woman"}>
            WOMAN
          </Link>
          <Link className={s.link} to={"/men"}>
            MEN
          </Link>
        </Grid>
        <img
          src={NikeLogoWithUkraine}
          alt="Nike logo with Ukraine"
          style={{ margin: "40px 0" }}
        />
        <Grid
          container
          flexDirection={"column"}
          justifyContent={"space-around"}
          alignItems={"center"}
          width={"fit-content"}
          marginRight={"30px"}
          gap={"50px"}
        >
          <Link className={s.link} to={"/worcout"}>
            WORCOUT
          </Link>
          <Link className={s.link} to={"/run"}>
            RUN
          </Link>
          <Link className={s.link} to={"/football"}>
            FOOTBALL
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
}
