import { Grid } from "@mui/material";
import React from "react";
import WorkoutPoster from "../assets/img/WorkoutPoster.png";
import RunPoster from "../assets/img/RunPoster.png";
import FootballPoster from "../assets/img/FootballPoster.png";
import s from "../style/categories.module.css";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <Grid padding={"80px 0"} container>
      <p className={s.text_title}>Buy by category</p>
      <Link to={"/workout"} style={{ width: "100%" }}>
        <Grid className={s.container}>
          <p className={s.text_category}>WORKOUT</p>
          <img className={s.poster} src={WorkoutPoster} alt="Workout" />
        </Grid>
      </Link>
      <Link to={"/run"} style={{ width: "100%" }}>
        <Grid className={s.container}>
          <img className={s.poster} src={RunPoster} alt="Run" />
          <p className={s.text_category}>RUN</p>
        </Grid>
      </Link>
      <Link to={"/football"} style={{ width: "100%" }}>
        <Grid className={s.container}>
          <p className={s.text_category}>FOOTBALL</p>
          <img className={s.poster} src={FootballPoster} alt="Football" />
        </Grid>
      </Link>
    </Grid>
  );
}
