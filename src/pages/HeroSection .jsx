import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Typewriter from "react-typewriter";
import "../style/style.css";
import profileImage from "../assets/profile.jpg"; // import the image file
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div>
      <div id="intro" className="pt-10">
        <Grid container spacing={2} className="hero">
          <Grid item xs={12}>
            <Grid container spacing={5}>
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
              <Grid
                item
                md={4}
                xs={12}
                className="text-white lg:text-left text-center"
              >
                <h3 className="font-weight text-white text-1xl md:text-3xl mb-3" style={{ fontFamily: "CarFont", background: "-webkit-linear-gradient(#FFD700, #FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
                  <Typewriter
                    typing={0.3}
                    minDelay={20}
                    maxDelay={70}
                    onTypingEnd={() => console.log("Typing ended!")}
                  >
                    Hello, I'm Rehnumaye Azima
                  </Typewriter>
                </h3>
                
                <h3
                  className="font-weight text-white text-2xl lg:text-4xl md:text-3xl font-bold mb-3"
                >
                  {" "}
                  a Web Developer in Spring Boot, Java, and React JS etc
                </h3>
                <h3 className=" text-white text-xl lg:text-2xl  mb-3">
                  {" "}
                  Welcome to my portfolio!
                </h3>
                <Box className="my-4">
                  <Button variant="contained">
                    <a href="https://docs.google.com/document/d/1_sM7eLEwSfKudUvx-GSuBg6H3P5RBDau/edit?usp=share_link&ouid=107227359048577794300&rtpof=true&sd=true"  target="_blank">
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
    </div>
  );
};

export default HeroSection;


// import React, { useState, useEffect } from "react";
// import { Box, Button, Grid } from "@mui/material";
// import Typewriter from "react-typewriter";
// import "../style/style.css";
// import profileImage from "../assets/profile.jpg";
// import Navbar from "./Navbar";

// const HeroSection = () => {
//   const [showText, setShowText] = useState(false);

//   useEffect(() => {
//     setShowText(true);
//   }, []);

//   return (
//     <div>
//       <div id="intro" className="pt-10">
//         <Grid container spacing={2} className="hero">
//           <Grid item xs={12}>
//             <Grid container spacing={5}>
//               <Grid item xs={12} md={3}></Grid>
//               <Grid
//                 item
//                 md={3}
//                 xs={12}
//                 style={{
//                   width: "70%",
//                   height: "350px",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <img className="border rounded-md" src={profileImage} alt="" />
//               </Grid>
//               <Grid
//                 item
//                 md={4}
//                 xs={12}
//                 className="text-white lg:text-left text-center"
//               >
//                 {showText && (
//                   <Typewriter
//                     onTypingEnd={() => setShowText(true)}
//                     cursor={<span style={{ display: "none" }}>&nbsp;</span>}
//                   >
//                     <h3
//                       className="font-weight text-white text-1xl md:text-3xl mb-3"
//                       style={{ fontFamily: "CarFont" }}
//                     >
//                       Hello, I'm Rehnumaye Azima
//                     </h3>
//                   </Typewriter>
//                 )}
//                 <h3
//                   className="font-weight text-white text-2xl lg:text-4xl md:text-3xl font-bold mb-3"
//                 >
//                   {" "}
//                   a Web Developer in Spring Boot, Java, and React JS etc
//                 </h3>
//                 <h3
//                   className="font-weight text-white text-1xl md:text-2xl mb-3"
//                 >
//                   {" "}
//                   Welcome to my portfolio!
//                 </h3>
//                 <Box className="my-4">
//                   <Button variant="contained">
//                     <a href="https://docs.google.com/document/d/1_sM7eLEwSfKudUvx-GSuBg6H3P5RBDau/edit?usp=share_link&ouid=107227359048577794300&rtpof=true&sd=true">
//                       MY RESUME
//                     </a>
//                   </Button>
//                 </Box>
//               </Grid>
//               <Grid item xs={12} sm={2}></Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
