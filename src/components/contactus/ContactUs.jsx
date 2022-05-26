import {
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@mui/material';
import  img2  from "../images/bed_vase.webp"

import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <Box sx={{background: '#F5F3EE;', display: 'flex', flexWrap:{ xs:'wrap',sm:'nowrap'}}}>
      <Box sx={{margin: 'auto'}} ><img src={img2} alt="" width='100%'/></Box>
      <Box sx={{margin: 'auto'}}>
<Typography sx={{fontSize:{ xs:'20px',sm:'2vw'}, color:"#A9B088", fontWeight: '500', textAlign: 'center'}}>LET'S CONNECT</Typography>
<Typography sx={{fontSize:{ xs:'20px',sm:'1,5vw'}, color:"#A9B088", textAlign: 'center'}}>Beyond working with amazing clients, we’re always excited to connect with collaborators and kindred spirits. So whatever your reason for reaching out, please do, and we look forward to hearing from you!</Typography>
      </Box>
    </Box>
      <Box
        noValidate
        autoComplete="off"
        sx={{ width: '50vw', margin: '10vh auto' }}
      >
        <Typography
          sx={{ fontSize: '3em', fontWeight: 600, fontFamily: 'Roboto', textAlign:'center', color:'#A9B088'}}
          variant="h2"
          component="h1"
          marginBottom={3}
        >
          LEAVE A MESSAGE
        </Typography>

        <TextField
          sx={{ width: '49%', marginRight: '2%' }}
          label="Name"
          margin="dense"
          color="primary"
        />
        <TextField sx={{ width: '49%' }} label="Email" margin="dense" />
        <TextField sx={{ width: '100%' }} label="Subject" margin="dense" />
        <TextField
          sx={{ width: '100%' }}
          label="Description"
          margin="dense"
          multiline
          rows="4"
        />
        <Button
          sx={{ borderRadius: '20px', marginTop: '2%', backgroundColor:'#A9B088' }}
          variant="contained"
          size="large"
        >
          SUBMIT
        </Button>
      </Box>
    </div>
  );
};

export default ContactUs;
