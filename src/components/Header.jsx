import { AppBar, Button, Grid } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import React from "react";
import { NavLink } from "react-router-dom";
import s from "../style/header.module.css";
import imageQR from "../assets/img/header_qr.png";

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
      <Grid container position={"relative"}>
        <img src={imageQR} alt="header_qr" width={"100%"} />
        <Grid
          container
          flexDirection={"column"}
          alignItems={"flex-start"}
          justifyContent={"space-around"}
          position={"absolute"}
          maxWidth={"41%"}
          height={"100%"}
          top={"0"}
          left={"3%"}
        >
          <h2>WE ARE NEVER DONE</h2>
          <h3>
            Celebrating 50 years of Nike from May 16th! Exclusive products,
            experiences and much more await you for five days. Scan and join the
            Nike app!
          </h3>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "16px",
              border: "0px solid white",
              textTransform: "none",
              fontWeight: "600",
              fontSize: "18px",
              padding: "5px 25px",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            Celebrate with us
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
