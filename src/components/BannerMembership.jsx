import { Button, Grid } from "@mui/material";
import React from "react";
import imageMembership from "../assets/img/bannerMembership.png";

export default function BannerMembership() {
  return (
    <Grid container position={"relative"}>
      <img src={imageMembership} alt="footer_membership" width={"100%"} />
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
        <h2>YOUR NIKE MEMBERSHIP</h2>
        <h3 style={{ fontWeight: "300" }}>
          Join our members and show your love with{" "}
          <span style={{ color: "white", fontWeight: "600" }}>
            Nike by you!
          </span>
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
          Join Us
        </Button>
      </Grid>
    </Grid>
  );
}
