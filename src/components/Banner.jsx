import React from "react";
import imageQR from "../assets/img/header_qr.png";
import { Button, Grid } from "@mui/material";

export default function Banner() {
  return (
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
  );
}
