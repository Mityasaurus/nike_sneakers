import { AppBar, Grid } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import React from "react";
import { NavLink } from "react-router-dom";
import s from "../style/header.module.css";

export default function Header() {
  return (
    <Grid container justifyContent={"space-between"}>
      <AppBar position="static" color="transparent">
        <Grid
          container
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={"15px 25px"}
        >
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
            maxWidth={"13%"}
            marginLeft={"15px"}
          >
            <NavLink to={"/woman"}>WOMAN</NavLink>
            <NavLink to={"/men"}>MEN</NavLink>
            <NavLink to={"/all"}>ALL</NavLink>
          </Grid>
          <h1>
            YOUR<span>SNEAKER</span>
          </h1>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
            maxWidth={"13%"}
            marginRight={"15px"}
            padding={"0 2%"}
          >
            <PersonOutlineOutlinedIcon
              sx={{ fontSize: 35 }}
              style={{ cursor: "pointer" }}
            />
            <SearchOutlinedIcon
              sx={{ fontSize: 35 }}
              style={{ cursor: "pointer" }}
            />
            <LocalMallOutlinedIcon
              sx={{ fontSize: 35 }}
              style={{ cursor: "pointer" }}
            />
          </Grid>
        </Grid>
      </AppBar>
    </Grid>
  );
}
