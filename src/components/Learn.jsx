import { Box } from "@mui/material";
import React, { useState } from "react";

const Learn = (props) => {
  const [hover, setHover] = useState(false); // state to track hover state

  const handleMouseEnter = () => {
    setHover(true); // set hover state to true on mouse enter
  };

  const handleMouseLeave = () => {
    setHover(false); // set hover state to false on mouse leave
  };

  return (
    <div>
      <Box
        style={{
          backgroundSize: "cover",
          height: "150px",
          width: "100%",
          border: "3px solid black", 
          borderColor: "red green blue yellow", 
          borderRadius: "8px", 
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center", 
          background: "linear-gradient(to bottom, #000000, #444444)", 
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)", 
          fontSize: "20px",
          fontWeight: "bold",
          color: "white", 
          transform: hover ? "scale(1.05)" : "scale(1)", 
          transition: "all 0.3s ease", 
          cursor: "pointer", // add cursor pointer for hover effect
          boxShadow: hover
            ? "0px 4px 8px rgba(0, 0, 0, 0.2)"
            : "0px 2px 6px rgba(0, 0, 0, 0.1)", // update box shadow based on hover state
        }}
        onMouseEnter={handleMouseEnter} // handle mouse enter event
        onMouseLeave={handleMouseLeave} // handle mouse leave event
      >
        <a
          href="https://www.java.com"
          target="_blank"
          rel="noreferrer"
          className="block"
        >
          <img
            src={props.img}
            alt="java"
            width="50"
            height="50"
            style={{ alignSelf: "center" }} // align the image at the top center
          />{" "}
        </a>
        <h1> {props.lang}</h1>
        <p className="text-xl text-orange-500">{props.per}</p>
      </Box>
    </div>
  );
};

export default Learn;
