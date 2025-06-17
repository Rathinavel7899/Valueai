"use client"
import React from 'react';
import { Container, Typography, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InsightsIcon from '@mui/icons-material/Insights';
import SecurityIcon from '@mui/icons-material/Security';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import BarChartIcon from '@mui/icons-material/BarChart';
import SectionTitle from '../../../components/SectionTitle';

const blogData = [
    {
        icon: <CodeIcon />,
        title: 'Custom Script Development',
        description: 'Build custom scripts in Pine Script, Python, AFL, MQL4/5, EASYlanguage and more for your specific trading needs.',
    },
    {
        icon: <StorageIcon />,
        title: 'Strategy Backtesting',
        description: 'Comprehensive backtesting across global data providers to validate and optimize your trading strategies.',
    },
    {
        icon: <SettingsIcon />,
        title: 'Automated Execution',
        description: 'Deploy and automate your strategies across 100+ brokers and exchanges with real-time execution.',
    },
    {
        icon: <AssessmentIcon />,
        title: 'Performance Analytics',
        description: 'Analyze your trading performance with detailed metrics, charts, and reports to improve decision-making.',
    },
    {
        icon: <InsightsIcon />,
        title: 'Market Insights',
        description: 'Leverage AI-driven insights to identify market trends and opportunities for better trading outcomes.',
    },
    {
        icon: <SecurityIcon />,
        title: 'Secure Trading Environment',
        description: 'Ensure your trading operations are protected with advanced encryption and security protocols.',
    },
    {
        icon: <CloudSyncIcon />,
        title: 'Cloud-Based Trading',
        description: 'Access your trading strategies and data from anywhere with seamless cloud synchronization.',
    },
    {
        icon: <BarChartIcon />,
        title: 'Real-Time Market Monitoring',
        description: 'Monitor market movements in real-time with customizable dashboards and alerts for quick actions.',
    },
];




const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#1A1E3A',
    color: '#FFFFFF',
    borderRadius: '16px',
    border: '1px solid #3B82F6',
    padding: theme.spacing(2),
    width: '330px',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'background-color 0.3s, border-color 0.3s',
    '&:hover': {
        backgroundColor: '#2A2E5A',
        borderColor: '#60A5FA',
    },
}));

const IconWrapper = styled(Box)({
    color: '#60A5FA',
    fontSize: '28px',
    display: 'flex',
    alignItems: 'center',
});

const TitleText = styled(Typography)({
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '1.3',
});

const DescriptionText = styled(Typography)({
    fontSize: '14px',
    color: '#D1D5DB',
    marginBottom: '12px',
});

const Blog = () => {
    return (
        <Container maxWidth="xl" sx={{ backgroundColor: '#1A1A2E', color: 'white', marginTop: { md: 8, xs: 7 } }}>
            <SectionTitle component="h1">
                News about<br /> Value System
            </SectionTitle>

            <Box sx={{ display: 'flex', gap: 2, padding: 2, backgroundColor: '#1A1A2E', flexWrap: 'wrap', justifyContent: 'center' }}>
                {blogData.map((blog, index) => (
                    <StyledCard key={index}>
                        <CardContent sx={{ padding: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: '8px' }}>
                                <IconWrapper>{blog.icon}</IconWrapper>
                                <TitleText variant="h6">{blog.title}</TitleText>
                            </Box>
                            <DescriptionText variant="body2" sx={{ marginTop: 2 }}>
                                {blog.description}
                            </DescriptionText>
                        </CardContent>
                    </StyledCard>
                ))}
            </Box>
        </Container>
    );
};

export default Blog;