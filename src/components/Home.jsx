
"use client"
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import flash from '@/assets/flash.png'
import Image from 'next/image';
import { AiOutlineBarChart } from "react-icons/ai";
import { FcGlobe } from "react-icons/fc";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { ArrowForward } from '@mui/icons-material';




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
  marginBottom: 4,
  color: '#e0e0ff',
  [theme.breakpoints.down('sm')]: {
    fontSize: 50,
    
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

const Home = () => {
  return (
    <Container maxWidth="xl" sx={{ width: '100%', paddingTop: { md: 10, xs: 5 }, paddingBottom: { xs: 4, md: 4 }, marginTop: { md: 8, xs: 6.5 } }}>

      <Box
        sx={{
          display: 'flex',
          gap: 1,
          backgroundColor: '#2a2840',
          border: ' 2px solid white',
          borderRadius: 4,
          px: 2,
          py: 1,


        }}
      >
        <Image src={flash} width={25} height={2} alt='Flash' />
        <Typography
          sx={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          Global Trading Technology
        </Typography>
      </Box>
      <MainTitle>
        ValueAI Automations
      </MainTitle>
      <Box sx={{ maxWidth: 800, px: { xs: 2, sm: 0 } }}>
        <Typography sx={{ fontSize: { xs: 20, sm: 20 } }}>
          Value AI helps companies achieve sustainable results through strategic AI implementation.
          We combine deep industry expertise with cutting-edge AI solutions to deliver transformative outcomes.
        </Typography>
      </Box>
      <ButtonContainer sx={{ marginTop: 4 }}>
      
    
      <Button
        variant="contained"
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          textTransform: 'capitalize',
          borderRadius: 3,
          fontSize: { xs: 14, md: 18 },
          fontWeight: 600,
          padding: { xs: '12px 24px', md: '16px 32px' },
          position: 'relative',
          overflow: 'hidden',
          minWidth: { xs: 140, md: 180 },
          height: { xs: 48, md: 56 },
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
          
          '&:hover': {
            background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 35px rgba(102, 126, 234, 0.6)',
            
            '& .button-text': {
              opacity: 0,
              transform: 'translateX(-100px)',
            },
            
            '& .arrow-icon': {
              opacity: 1,
              transform: 'translate(-50%, -50%) translateX(0)',
            }
          },
          
          // Shimmer effect
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            transition: 'left 0.5s',
          },
          
          '&:hover::before': {
            left: '100%',
          },
          
          '& .button-text': {
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: 1,
            transform: 'translateX(0)',
            zIndex: 1,
            position: 'relative',
          },
          
          '& .arrow-icon': {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%) translateX(100px)',
            opacity: 0,
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            fontSize: { xs: 20, md: 24 },
            zIndex: 1,
          }
        }}
      >
        <span className="button-text">Get started</span>
        <ArrowForward className="arrow-icon" />
      </Button>
  




        <Button
          variant="outlined"

          sx={{
            textTransform: 'capitalize',
            backgroundColor: 'black',
            color: 'white',
            borderColor: 'white',
            borderRadius: 2,

            fontSize: { xs: 10, md: 17 },
          }}
        >
          View Solution
        </Button>
      </ButtonContainer>
      <Box sx={{ marginTop: 6, display: 'flex', gap: 5, flexDirection: { md: 'row', xs: 'column' } }}>
        <Box>
          <Box sx={{ display: 'flex' }}>
            <AiOutlineBarChart style={{ width: 40, height: 40 }} />
            <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>
              100+
            </Typography>
          </Box>
          <Typography>
            Supported Brokers
          </Typography>
        </Box>
        <Box>
          <Box sx={{ display: 'flex' }}>
          <FcGlobe style={{ width: 40, height: 40 }}/>
          <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>
            Global
          </Typography>
          </Box>
          <Typography>
            Market Coverage
          </Typography>
        </Box>
        <Box>
          <Box sx={{ display: 'flex' }}>
             <PiArrowsCounterClockwiseBold style={{ width: 40, height: 40 }}/>
          <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>
            24/7
          </Typography>
          </Box>
          <Typography>
            Automation
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
