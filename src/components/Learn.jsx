import { Box } from '@mui/material'
import React from 'react'

const Learn = (props) => {
  return (
    <div>
        <Box
        style={{
          backgroundSize: "cover",
          height: "150px",
          width: "100%",
          border: "3px solid black", // set the border width and style
          borderColor: "red green blue yellow", // set the border color(s)
          borderRadius: "8px", // add border radius for rounded corners
          display: "flex",
          flexDirection: "column", // update to stack child elements vertically
          justifyContent: "center",
          alignItems: "center", // center child elements horizontally
          background:
            "linear-gradient(to bottom, #000000, #444444)", // change the gradient colors to black and dark gray
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)", // add a subtle box shadow
          fontSize: "20px",
          fontWeight: "bold",
          color: "white", // set the text color
        }}
      >
        <a href="https://www.java.com" target="_blank" rel="noreferrer" className="block">
         
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
  )
}

export default Learn