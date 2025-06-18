
"use client"
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: '#1A1A2E',
  
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
 
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
  fontSize: 80,
  fontWeight: 'bold',
  marginBottom:4,
  color: '#e0e0ff',
  [theme.breakpoints.down('sm')]: {
    fontSize: 50,
    // marginBottom:3
  },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 20,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
}));

const Started = () => {
  return (
    <Container sx={{width:'100%',paddingTop:{md:15,xs:5},paddingBottom:{xs:4,md:4}}}>
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
       ValueAI Automations
      </MainTitle>
      <Box sx={{ maxWidth: 800, px: { xs: 2, sm: 0 } }}>
        <Typography sx={{ fontSize: { xs: 20, sm:20} }}>
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
            borderRadius: 10,
            py:2,
            fontSize: { xs: 10, md:17 },
          }}
        >
          Get started
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: 'white',
            borderRadius: 10,
            py: 2,
               fontSize: { xs: 10, md:17 },
          }}
        >
          Contact sale
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Started;
