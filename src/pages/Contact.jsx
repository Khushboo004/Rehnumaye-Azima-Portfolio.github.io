import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
const Contact = () => {
  return (
    <div className='contact' id='contact'> 
          <h1 className="text-center text-4xl font-bold text-white underline underline-offset-8 py-10">Contact</h1>

      <Grid container justifyContent="center" className='pb-28' alignItems="center">
    <Grid item xs={10} sm={8} md={6} lg={4}>
      <Box p={4} bgcolor="grey.200" borderRadius={8}>
        <Typography variant="h5" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Box mt={3}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Box textAlign="center">
                <WhatsAppIcon style={{ fontSize: 48, color: "green" }} />
                <Typography variant="subtitle1">+8801858707175</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box textAlign="center">
                <a href="https://www.linkedin.com/in/rehnumaye-azima-769071262?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNNUoAxXISKmqy5Ehs4A%2F2g%3D%3D">
                <LinkedInIcon style={{ fontSize: 48, color: "blue" }} />
                <Typography variant="subtitle1"> Rehnumaye Azima </Typography>
                </a>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box textAlign="center">
                <EmailIcon style={{ fontSize: 48, color: "blue" }} />
                <Typography variant="subtitle1">rakhushboo75@gmail.com</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  </Grid>
    </div>
  );
};

export default Contact;
