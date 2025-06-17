"use client"
import * as React from 'react';
import { Container, Box, TextField } from '@mui/material';
import StyledContactButton from '../../../components/ContactButton'

const Contact = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        color: 'white',
        py: 5,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#1a1a2e',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          width: '100%',
          maxWidth: 400,
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          
          fullWidth
          InputLabelProps={{
            style: { color: 'white' },
          }}
          InputProps={{
            style: { color: 'white', backgroundColor: '#424242' }, 
          }}
          sx={{
          
            '& .MuiOutlinedInput-root': {
              borderRadius:'15px',
              '& fieldset': {
                borderColor: 'white', 
              },
              
              '&.Mui-focused fieldset': {
                borderColor: 'white', 
              },
            },
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            style: { color: 'white' },
          }}
          InputProps={{
            style: { color: 'white', backgroundColor: '#424242' }, 
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
               borderRadius:'15px',
              '& fieldset': {
                borderColor: 'white', 
              },
              
              '&.Mui-focused fieldset': {
                borderColor: 'white', 
              },
            },
          }}
        />
        <TextField
          label="Msg"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          InputLabelProps={{
            style: { color: 'white' },
          }}
          InputProps={{
            style: { color: 'white', backgroundColor: '#424242' }, 
          }}
          sx={{
            '& .MuiOutlinedInput-root': { 
              borderRadius:'15px',
              '& fieldset': {
                borderColor: 'white', 
              },
              
              '&.Mui-focused fieldset': {
                borderColor: 'white', 
              },
            },
          }}
        />
        <StyledContactButton sx={{marginRight:7,marginTop:1}}>
          Submit
        </StyledContactButton>
      </Box>
    </Container>
  );
};

export default Contact;