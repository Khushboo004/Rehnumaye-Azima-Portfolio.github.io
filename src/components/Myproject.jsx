import { Button, CardActions, Container, Grid, colors } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import "../style/style.css";
import github from "../assets/github.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

import { Carousel } from "react-responsive-carousel";

export default function Myproject(props) {
  const slides = [];
  for (let i = 1; i <= 19; i++) {
    if (props[`src${i}`]) {
      slides.push({
        src: props[`src${i}`],
        alt: `Image ${i}`,
      });
    }
  }

  const renderCarouselSlides = () => {
    return slides.map((slide, index) => (
      <div key={index}>
        <img
          src={slide.src}
          alt={slide.alt}
          style={{
            width: "100%", // set the desired width here
            height: "340px", // set the desired height here
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </div>
    ));
  };

  return (
    <div className="mt-14">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Card
            sx={{ display: "flex" }}
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3))", // change the gradient colors to light black
              color: "white", // set the text color
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Carousel showThumbs={false}>{renderCarouselSlides()}</Carousel>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      component="div"
                      variant="h5"
                      fontWeight={"bold"}
                      className="underline underline-offset-2 text-sky-500"
                    >
                      {props.projectName}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    ></Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pl: 1,
                      pb: 1,
                    }}
                  >
                    {/* <p>{props.desc}</p> */}
                    <Typography>
                      <p>
                        <p>{props.desc}</p>
                      </p>
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      alignItems: "center",
                      pl: 1,
                      pb: 1,
                    }}
                  >
                    {/* <p>{props.desc}</p> */}
                    <Typography component="div">
                      <h1 className="font-bold text-1xl text-green-700 underline underline-offset-3">
                        Skilled Covered :
                      </h1>
                    </Typography>
                    <Typography component="div">
                      <h1 className="text-1xl">{props.skils}</h1>
                    </Typography>
                  </Box>
                  <CardActions>
                    <Button size="small" variant="contained">
                      <a
                        href={props.fesc}
                        className="flex justify-center items-center"
                      >
                        {" "}
                        <img src={github} width="40" height="40" alt="" />{" "}
                        {props.fe}
                      </a>
                    </Button>
                    {props.bk ? (
                      <Button size="small" variant="contained" color="info">
                        <a
                          href={props.bksc}
                          className="flex justify-center items-center"
                        >
                          <img src={github} width="40" height="40" alt="" />{" "}
                          {props.bk}
                        </a>
                      </Button>
                    ) : (
                      ""
                    )}
                    {props.demo ? (
                      <Button
                        size="small"
                        variant="contained"
                        color="success"
                        sx={{ padding: "12px" }} // add padding to the button
                      >
                        <a href={props.demo}>Demo</a>
                      </Button>
                    ) : (
                      ""
                    )}
                  </CardActions>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
