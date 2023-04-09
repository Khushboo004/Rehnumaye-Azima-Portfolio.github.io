import { Box, Button, Grid } from "@mui/material";
import React from "react";
import "../style/style.css";
import profileImage from "../assets/profile.jpg"; // import the image file
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div id="intro" className="pt-10">
      <Grid container spacing={2} className="hero">
        <Grid item xs={12}>
          <Grid container spacing={5}>
            {" "}
            {/* add the CSS class for centering */}
            <Grid item xs={12} md={3}>
              {/* empty grid item */}
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
              style={{
                width: "70%",
                height: "350px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img className="border rounded-md" src={profileImage} alt="" />
              {/* update the image source */}
            </Grid>
            <Grid item md={4} xs={12} className="text-white text-center">
              <h3 className="font-weight text-white text-1xl md:text-3xl mb-3 ">
                Hello, I'm Rehnumaye Azima
              </h3>
              <h3 className="font-weight text-white text-2xl lg:text-4xl md:text-3xl font-bold mb-3">
                {" "}
                a Web Developer in Spring Boot, Java, and React JS etc
              </h3>
              <h3 className="font-weight text-white text-1xl md:text-2xl mb-3">
                {" "}
                Welcome to my portfolio!
              </h3>
              <Box className="my-4">
                <Button variant="contained">
                  <a href="https://docs.google.com/document/d/1_sM7eLEwSfKudUvx-GSuBg6H3P5RBDau/edit?usp=share_link&ouid=107227359048577794300&rtpof=true&sd=true">
                    MY RESUME
                  </a>
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              {/* empty grid item */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroSection;
