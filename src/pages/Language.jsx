import { Box, Container, Grid } from '@mui/material'
import React from 'react'

const Language = () => {
  return (
    <div id="language">
    <h1 className="text-center text-4xl font-bold text-red-100 underline underline-offset-8 py-12">Language</h1>
    <Container>
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="p-12"
      spacing={2}
    >
  <Grid container spacing={2}>
<Grid item md ={4} xs={12}>
  <Box p={4} bgcolor="lightgray" borderRadius={4} textAlign="center">
    <h1 className="text-3xl font-bold">English</h1>
    {/* <p>I can read, write, speak English.</p>  */}
  </Box>
</Grid>
<Grid item md ={4} xs={12}>
  <Box p={4} bgcolor="lightgray" borderRadius={4} textAlign="center">
    <h1 className="text-3xl font-bold">Bangla</h1>
    {/* <p>I can read, write, speak  Bangla.</p>  */}
  </Box>
</Grid>
<Grid item md ={4} xs={12}>
  <Box p={4} bgcolor="lightgray" borderRadius={4} textAlign="center">
    <h1 className="text-3xl font-bold">Hindi</h1>
    {/* <p>I can understand & speak Hindi</p>  */}
  </Box>
</Grid>
</Grid>

    
    </Grid>
    </Container>
  </div>
  )
}

export default Language