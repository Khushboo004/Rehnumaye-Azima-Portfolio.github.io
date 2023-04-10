import { Grid, Box } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Java from "../assets/java.jpg";
import SpringBoot from "../assets/spring boot.png";
import Learn from "../components/Learn";

const Skils = () => {
  return (
    <div className="pt-9" id="skills">
      <h1 className="text-center text-4xl font-bold text-white py-12 pt underline underline-offset-8  "> Skills</h1>
      <Grid container spacing={1} className="py-14">
        <Grid xs={2}></Grid>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            {" "}
            {/* add the CSS class for centering */}
            <Grid item md={3} xs={6}>
              <Learn lang="Java" per="85%" img={"https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"}/>
            </Grid>
            <Grid item md={3} xs={6}>
              <Learn lang="Spring Boot" per="90%" img={"https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg"} />
            </Grid>
            <Grid item md={3} xs={6}>
              <Learn lang="MySQL" per="85%" img={"https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"} />
            </Grid>
            <Grid item md={3} xs={6}>
              <Learn lang="Node JS" per="60%" img={"https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"} />
            </Grid>
            <Grid item md={3} xs={6}>
              <Learn lang="React" per="85%" img={"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"} />
            </Grid>
            <Grid item md={3} xs={6}>
              <Learn lang="HTML" per="95%" img={"https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"} />
            </Grid>
            <Grid item md={3} xs={6}>
              <Learn lang="MongoDb " per="80%" img={"https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"} />
            </Grid>
            <Grid item md={3} xs={6}>
              <Learn lang="JavaScript" per="80%" img={"https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
    </div>
  );
};

export default Skils;
