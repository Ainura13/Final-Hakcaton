import {
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@mui/material';

import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <Box
        noValidate
        autoComplete="off"
        sx={{ width: '50vw', margin: '10vh auto' }}
      >
        <Typography
          sx={{ fontSize: '3em', fontWeight: 600, fontFamily: 'Roboto' }}
          variant="h2"
          component="h1"
          marginBottom={3}
        >
          Get in touch
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
          sx={{ borderRadius: '20px', marginTop: '2%' }}
          variant="contained"
          size="large"
        >
          Get A Query
        </Button>
      </Box>
    </div>
  );
};

export default ContactUs;
