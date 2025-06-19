// import { Box, Container, Typography } from '@mui/material'
// import React from 'react'


// const cardData = [
//   {
//     title: 'Our Mission',
//     content:
//       'At Value AI, our mission is to democratize access to intelligent trading and investing tools, empowering individuals and businesses with cutting-edge AI-driven financial insights.',
//   },
//   {
//     title: 'What We Do',
//     content:
//       'We build AI-powered solutions for traders, investors, and institutions. From strategy automation and market forecasting to data visualization and integrations with platforms like TradingView, Zerodha, Binance, and more.',
//   },
//   {
//     title: 'Why Value AI',
//     content:
//       'We combine domain expertise in finance with real-time technology, ensuring our tools are both powerful and easy to use. Trusted by analysts, retail traders, and educators.',
//   },
//   {
//     title: 'Our Team',
//     content:
//       'A dynamic blend of data scientists, traders, and developers with a shared vision to transform how markets are understood and navigated. We believe in transparency, precision, and constant innovation.',
//   },
//   {
//     title: 'Core Values',
//     content:
//       '🚀 Innovation\n🔐 Integrity\n🤝 Collaboration\n📊 Clarity\n\nWe build responsibly, collaborate openly, and simplify complex systems to serve real users.',
//   },
//   {
//     title: 'Our Impact',
//     content:
//       'From students learning algorithmic trading to professionals automating complex workflows, Value AI helps thousands take control of their financial future.',
//   },
// ]
// const About = () => {
//   return (
//     <Container maxWidth='xl' sx={{ backgroundColor: '#1A1A2E',color:'white'}}>
//       <Box>
//         <Typography variant='h6'>
//             Our Achivements
//         </Typography>
//       </Box>

//     </Container>
//   )
// }

// export default About

"use client";
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from '@mui/material';
import { styled } from '@mui/system';

const cardData = [
  {
    title: 'Our Mission',
    content:
      'At Value AI, our mission is to democratize access to intelligent trading and investing tools, empowering individuals and businesses with cutting-edge AI-driven financial insights.',
  },
  {
    title: 'What We Do',
    content:
      'We build AI-powered solutions for traders, investors, and institutions. From strategy automation and market forecasting to data visualization and integrations with platforms like TradingView, Zerodha, Binance, and more.',
  },
  {
    title: 'Why Value AI',
    content:
      'We combine domain expertise in finance with real-time technology, ensuring our tools are both powerful and easy to use. Trusted by analysts, retail traders, and educators.',
  },
  {
    title: 'Our Team',
    content:
      'A dynamic blend of data scientists, traders, and developers with a shared vision to transform how markets are understood and navigated. We believe in transparency, precision, and constant innovation.',
  },
  {
    title: 'Core Values',
    content:
      '🚀 Innovation\n🔐 Integrity\n🤝 Collaboration\n📊 Clarity\n\nWe build responsibly, collaborate openly, and simplify complex systems to serve real users.',
  },
  {
    title: 'Our Impact',
    content:
      'From students learning algorithmic trading to professionals automating complex workflows, Value AI helps thousands take control of their financial future.',
  },
];



//  const StyledCard = styled(Card)(({ theme }) => ({
//    backgroundColor: '#2A2E5A',
//    color: '#fff',
//    height: 'auto',
//    maxWidth: 350,
//    borderRadius: 15,
//    transition: 'transform 0.4s ease, box-shadow 0.4s ease, border 0.4s ease',
//    border: '1px solid transparent',
//    '&:hover': {
//      transform: 'translateY(-5px) scale(1.03) rotate(0.5deg)',
//      boxShadow: '0 12px 32px rgba(96,165,250,0.4)',
//      border: '1px solid rgba(96,165,250,0.6)',
//    },
//  }));
const StyledCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #2A2E5A 0%, #3B4278 100%)',
  color: '#fff',
  height: 'auto',
  maxWidth: 350,
  borderRadius: 18,
  border: '1px solid rgba(96,165,250,0.4)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.2), 0 0 8px rgba(96,165,250,0.2)',
  transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s ease, border 0.35s ease, background 0.6s ease',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.04)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.25), 0 0 16px rgba(96,165,250,0.4)',
    border: '1px solid rgba(96,165,250,0.9)',
    background: 'linear-gradient(135deg, #3B4278 0%, #5A6BBA 100%)',
    animation: 'hoverGlow 1.5s infinite ease-in-out',
  },
  '&:active': {
    transform: 'translateY(-4px) scale(1.02)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2), 0 0 12px rgba(96,165,250,0.3)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 0,
    height: 0,
    background: 'rgba(96,165,250,0.3)',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.4s ease, height 0.4s ease',
    pointerEvents: 'none',
  },
  '&:active::after': {
    width: '200%',
    height: '200%',
    transition: 'width 0.4s ease, height 0.4s ease, opacity 0.4s ease',
    opacity: 0,
  },
  '@keyframes hoverGlow': {
    '0%': { boxShadow: '0 12px 24px rgba(0,0,0,0.25), 0 0 16px rgba(96,165,250,0.4)' },
    '50%': { boxShadow: '0 16px 28px rgba(0,0,0,0.3), 0 0 20px rgba(96,165,250,0.5)' },
    '100%': { boxShadow: '0 12px 24px rgba(0,0,0,0.25), 0 0 16px rgba(96,165,250,0.4)' },
  },
}));

const Title = styled(Typography)({
  fontSize: 50,
  fontWeight: 'bold',
  color: '#60A5FA',
  textAlign: 'center',
  marginBottom: 20,
});

const AboutCards = () => {
  return (
    <Box width={"100%"} sx={{ py: 10, backgroundColor: '#1A1A2E',px:8 }}>
      <Title>About Value AI</Title>
      <Grid container spacing={4}>
        {cardData.map((section, index) => (
          <Grid size={{ md: 4, xs: 12 }} key={index}>
            <StyledCard>
        
                <Typography variant="h6" gutterBottom sx={{p:3, fontWeight: 600,  }}>
                  {section.title}
                </Typography>
                <Typography variant="body2" sx={{ p:3,  }}>
                  {section.content}
                </Typography>
              
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutCards;

