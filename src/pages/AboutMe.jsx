import React from 'react'
import '../style/style.css'
import { Box, Grid } from '@mui/material'
import Pi from "../assets/icons8-about-me-female-50.png";
import Un from "../assets/icons8-username-48.png";
import BDay from "../assets/icons8-birthday-cake.gif";
import Ongoing from "../assets/icons8-loading-indicator-78.png";
import Phone from "../assets/icons8-mobile-phone-48.png"
import Mail from "../assets/icons8-mail-94.png"

const AboutMe = () => {
  const name = "Rehnumaye Azima";
  const birthday = "10 Aug, 2002";
  const ongoing = "";
  const phone = "+8801858707175";
  const email = "rakhushboo75@gmail.com";
return (
<div className='about text-white border shadow-2xl ' id='about' style={{ paddingTop: '20px', paddingBottom: '20px'}}>
  <h1 className="text-center text-4xl font-bold text-yellow-500 underline underline-offset-8 py-12">About Me</h1>
<Grid container spacing={1} className="text-center " >
{/* add the CSS class for centering */}
<Grid item xs={2}>


    </Grid>
    <Grid item xs={8} className="md:text-2xl text-1xl -mono">
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div className='flex'>      
  <h1 style={{ textAlign: "center", display: "flex", alignItems: "center" }} className='text-gray-100'> 
    <img src={Pi} width="30" height="30" style={{ marginRight: "10px" }}/> Personal Information
  </h1>
</div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
      <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
  <img src={Un} width="30" height="30" style={{ marginRight: "10px" }} />
  <strong style={{ marginRight: "10px" }}>Name:</strong>
  <span className='text-gray-300'>{name}</span>
</li>

        <li style={{ display: "block", marginBottom: "8px" }}>
        <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
  <img src={BDay} width="30" height="30" style={{ marginRight: "10px" }} className='rounded-full'/>
  <span className='text-gray-300'>{birthday}</span>
</li>
        </li>
        <li style={{ display: "block", marginBottom: "8px" }}>
        <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
  <img src={Ongoing} width="30" height="30" style={{ marginRight: "10px" }} className='rounded-full'/>
  <strong style={{ marginRight: "10px" }}>Ongoing:</strong>
  <span className='text-gray-300'>{ongoing}</span>
</li>
        </li>
        <li style={{ display: "block", marginBottom: "8px" }}>
        <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
  <img src={Phone} width="30" height="30" style={{ marginRight: "10px" }} className='rounded-full'/>
  <strong style={{ marginRight: "10px" }}>Phone:</strong>
  <span className='text-gray-300'>{phone}</span>
</li>        </li>
           <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
  <img src={Mail} width="30" height="30" style={{ marginRight: "10px" }} className='rounded-full'/>
  <strong style={{ marginRight: "10px" }}>Email:</strong>
  <span className='text-gray-300'>{email}</span>
</li>  
      </ul>
    </div>

     

      <div className='text-gray-400 py-4 font'>
        I have a deep passion for coding. I spend my time coding and technology. I am dedicated to staying current with the latest developments in technology and am always looking for new ways to apply it. My passion drives me to create innovative solutions and applications. I am always looking for new challenges and opportunities to apply my knowledge and skills using technology.
      </div>
    </Grid>
    <Grid item xs={2}>

    </Grid>
  </Grid>

</div>
)
}

export default AboutMe