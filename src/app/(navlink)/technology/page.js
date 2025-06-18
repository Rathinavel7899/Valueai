"use client"
import React from 'react'
import { Container, Typography, Box, Chip } from '@mui/material'
import { styled } from '@mui/material/styles'
import SectionTitle from '../../../components/SectionTitle'

const platformsAndTools = [
  'TradingView', 'Python', 'MT4/5', 'Amibroker', 'Pine Script',
  'Binance', 'Coinbase', 'Zerodha', 'TD Ameritrade', 'Interactive Brokers',
  'FXCM', 'Yahoo Finance', 'AlphaVantage', 'MQL4/5', 'EASYlanguage'
]

const supportedMarkets = [
  'Stocks', 'Crypto', 'Forex', 'Commodities', 'Options',
  'Indices', 'Futures', 'ETFs', 'Bonds', 'CFDs'
]


const firstLineTools = platformsAndTools.slice(0, 6)
const secondLineTools = platformsAndTools.slice(7, 13)
const firstLineMarkets = supportedMarkets.slice(0, 6)
const secondLineMarkets = supportedMarkets.slice(6)


const DescriptionText = styled(Typography)({
  color: '#D1D5DB',
  fontSize: '16px',
  textAlign: 'center',
  marginBottom: '32px',
})

const SubTitle = styled(Typography)({
  color: '#FFFFFF',
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '16px',
  textAlign: 'center',
})

const TagChip = styled(Chip)({
  backgroundColor: '#2A2E5A',
  color: '#60A5FA',
  fontSize: '14px',
  margin: '8px',
  padding: '8px 16px',
  borderRadius: '20px',
  '&:hover': {
    backgroundColor: '#3B82F6',
    color: '#FFFFFF',
  },
})

const Technology = () => {
  return (
    <Container maxWidth="xl" sx={{  backgroundColor: '#1A1A2E', color: 'white', padding: '64px 0' }}>
      <SectionTitle>
        Technology Stack
      </SectionTitle>
      <DescriptionText variant="body1">
        We work with all major trading platforms, brokers, and data providers to ensure seamless integration
      </DescriptionText>

      <Box sx={{ marginBottom: '48px' }}>
        <SubTitle variant="h2">
          Platforms & Tools
        </SubTitle>
     
        <Box sx={{ display: 'flex', flexDirection:{md:'row',xs:'column'}, justifyContent: 'center', gap: 1, marginBottom: '16px' }}>
          {firstLineTools.map((platform, index) => (
            <TagChip key={index} label={platform} />
          ))}
        </Box>
      
        <Box sx={{ display: 'flex',  flexDirection:{md:'row',xs:'column'}, justifyContent: 'center', gap: 1 }}>
          {secondLineTools.map((platform, index) => (
            <TagChip key={index} label={platform}  />
          ))}
        </Box>
        {/* <Box >
            <Grid container spacing={2}>
              {supportedMarkets.map((tool,index)=>(
                 <Grid size={{ md: 12, xs: 12 }} key={index}>
                <TagChip key={index} sx={{color:'white'}}>
                    {tool}
                </TagChip>
                </Grid>
              ))}
            </Grid>
        </Box> */}
      </Box>

      <Box>
        <SubTitle variant="h2">
          Supported Markets
        </SubTitle>
    
        <Box sx={{ display: 'flex',  flexDirection:{md:'row',xs:'column'}, justifyContent: 'center', gap: 1, marginBottom: '16px' }}>
          {firstLineMarkets.map((market, index) => (
            <TagChip key={index} label={market} />
          ))}
        </Box>
  
        <Box sx={{ display: 'flex',  flexDirection:{md:'row',xs:'column'}, justifyContent: 'center', gap: 1 }}>
          {secondLineMarkets.map((market, index) => (
            <TagChip key={index} label={market} />
          ))}
        </Box>
        {/* <Box >
            <Grid container spacing={2}>
              {supportedMarkets.map((tool,index)=>(
                 <Grid size={{ md: 12, xs: 12 }} key={index}>
                <TagChip key={index} sx={{color:'white'}}>
                    {tool}
                </TagChip>
                </Grid>
              ))}
            </Grid>
        </Box> */}
      </Box>
    </Container>
  );
};

export default Technology