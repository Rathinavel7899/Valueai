
"use client"
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: '#1A1A2E',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
  padding: '0 20px',
  [theme.breakpoints.down('sm')]: {
    padding: '20px 10px',
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: '#b0b0d1',
  marginBottom: '10px',
  fontSize: '1.1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.95rem',
  },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: '4.5rem',
  fontWeight: 'bold',
  marginBottom: '30px',
  color: '#e0e0ff',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.2rem',
  },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
  },
}));

const Started = () => {
  return (
    <Container >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '80%',
          mb: 4,
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 0 },
          textAlign: { xs: 'left', sm: 'center' },
        }}
      >
        <Subtitle>
          Our AI-powered suite of solutions empowers your business with cutting-edge capabilities.
        </Subtitle>
        <Subtitle>
          Turning text to images harnessing intelligent AI and performing in-depth data analysis
        </Subtitle>
      </Box>
      <MainTitle>
        Transforming Businesses through <br /> AI Innovation
      </MainTitle>
      <Box sx={{ maxWidth: 800, px: { xs: 2, sm: 0 } }}>
        <Typography sx={{ fontSize: { xs: '1rem', sm: '1.4rem' } }}>
          Value AI helps companies achieve sustainable results through strategic AI implementation. 
          We combine deep industry expertise with cutting-edge AI solutions to deliver transformative outcomes.
        </Typography>
      </Box>
      <ButtonContainer sx={{ marginTop: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#6a4bff',
            '&:hover': { backgroundColor: '#5a3bff' },
            borderRadius: '25px',
            padding: '10px 30px',
            fontSize: { xs: '0.9rem', sm: '1rem' },
          }}
        >
          Get started
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: 'white',
            borderRadius: '25px',
            padding: '10px 30px',
            fontSize: { xs: '0.9rem', sm: '1rem' },
          }}
        >
          Contact sale
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Started;
