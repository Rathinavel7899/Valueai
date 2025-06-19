"use client";
import React from 'react';
import {  Typography, Box, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import ImageIcon from '@mui/icons-material/Image';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import InsightsIcon from '@mui/icons-material/Insights';
import BarChartIcon from '@mui/icons-material/BarChart';
import SectionTitle from '../../../components/SectionTitle';


const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1A1E3A',
  color: '#FFFFFF',
  borderRadius: '16px',
  border: '1px solid #3B82F6',
  width: 300,
  minHeight: 200,
  padding: theme.spacing(2), 
  transition: '0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: '#60A5FA',
    backgroundColor: '#2A2E5A',
  }
}))

const features = {
  imageProcessing: [
    {
      icon: <ImageIcon fontSize="large" sx={{ color: '#60A5FA' }} />,
      title: 'Image Enhancement',
      description: 'Apply filters and corrections to improve image quality.',
    },
    {
      icon: <BlurOnIcon fontSize="large" sx={{ color: '#60A5FA' }} />,
      title: 'Style Transfer',
      description: 'Transfer artistic styles to transform image aesthetics.',
    },
    {
      icon: <ImageIcon fontSize="large" sx={{ color: '#60A5FA' }} />,
      title: 'Image Generation',
      description: 'Generate synthetic images using AI-based models.',
    },
    {
      icon: <BlurOnIcon fontSize="large" sx={{ color: '#60A5FA' }} />,
      title: 'Noise Reduction',
      description: 'Remove grain and noise to clean up visuals.',
    },
  ],
  dataAnalysis: [
    {
      icon: <InsightsIcon fontSize="large" sx={{ color: '#60A5FA' }} />,
      title: 'Pattern Recognition',
      description: 'Identify trends and patterns using machine learning.',
    },
    {
      icon: <BarChartIcon fontSize="large" sx={{ color: '#60A5FA' }} />,
      title: 'Predictive Modeling',
      description: 'Forecast outcomes based on historical data.',
    },
    {
      icon: <InsightsIcon fontSize="large" sx={{ color: '#60A5FA' }} />,
      title: 'Anomaly Detection',
      description: 'Detect unusual behavior or outliers in datasets.',
    },
    {
      icon: <BarChartIcon fontSize="large" sx={{ color: '#60A5FA' }} />,
      title: 'Data Clustering',
      description: 'Group similar data points using AI algorithms.',
    },
  ]
};

const FeatureSection = ({ title, items }) => (
  <Box >
    <SectionTitle component="h2">{title}</SectionTitle>
    <Box sx={{ display: 'flex', flexWrap:'wrap', flexDirection:{md:'row',xs:'column'}, gap: 3, justifyContent: 'center', mb: 6 ,px:{md:5,xs:8}}}>
      {/* <Grid container spacing={2}> */}
      {items.map((item, index) => (

        //  <Grid size={{ md: 4, xs: 12 }} key={index}>
        <StyledCard key={index} >
         
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              {item.icon}
              <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>{item.title}</Typography>
            </Box>
            <Typography variant="body2" color="#D1D5DB">{item.description}</Typography>
       
        </StyledCard>
        // </Grid>
      ))}
      {/* </Grid> */}
    </Box>
  </Box>
);

const FeaturesPage = () => {
  return (
    <Box width={"100%"} sx={{ backgroundColor: '#1A1A2E', color: 'white', py: 8 }}>
      <FeatureSection title="Image Processing&Generation" items={features.imageProcessing} />
      <FeatureSection title="Intelligent Data Analysis" items={features.dataAnalysis} />
    </Box>
  );
};

export default FeaturesPage;
