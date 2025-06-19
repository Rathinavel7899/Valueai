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

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#2A2E5A',
  color: '#fff',
  height: 'auto',
  minWidth:'80%',
  
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(96,165,250,0.3)',
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
    <Box width={"100%"} sx={{ py: 10, backgroundColor: '#1A1A2E' }}>
      <Title>About Value AI</Title>
      <Grid container spacing={4}>
        {cardData.map((section, index) => (
          <Grid size={{ md: 6, xs: 12 }} key={index}>
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

