"use client"
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)({
  // background: 'linear-gradient(180deg, #1e1e2f 0%, #2e2e4f 100%)',
  backgroundColor: '#1A1A2E',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
  padding: '0 20px',
});

const Subtitle = styled(Typography)({
  color: '#b0b0d1',
  marginBottom: '10px',
  fontSize: '1.1rem',
});

const MainTitle = styled(Typography)({
  fontSize: '4rem',
  fontWeight: 'bold',
  marginBottom: '30px',
  color: '#e0e0ff',
});

const ButtonContainer = styled(Box)({
  display: 'flex',
  gap: '20px',
});

const Started=()=> {
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%', mb: 4 }}>
        <Subtitle>
          Our AI-powered suite of solutions empowers your business with cutting-edge capabilities.
        </Subtitle>
        <Subtitle>
          Turning text to images harnessing intelligent AI and performing in-depth data analysis
        </Subtitle>
      </Box>
      <MainTitle>
        BUILDING AI SOLUTION
      </MainTitle>
      <ButtonContainer>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#6a4bff',
              '&:hover': { backgroundColor: '#5a3bff' },
              borderRadius: '25px',
              padding: '10px 30px',
            }}
          >
            Get started
          </Button>
         
        </Box>
        <Button
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: 'white',
            borderRadius: '25px',
            padding: '10px 30px',
          }}
        >
          Contact sale
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default Started