
// // import { Card, CardContent, Typography, Box, Chip, Container } from '@mui/material';
// // import CodeIcon from '@mui/icons-material/Code';
// // import StorageIcon from '@mui/icons-material/Storage';
// // import SettingsIcon from '@mui/icons-material/Settings';
// // import { styled } from '@mui/material/styles';

// // const StyledCard = styled(Card)(({ theme }) => ({
// //   background: '#1a1a1a',
// //   borderRadius: '16px',
// //   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
// //   border: '1px solid rgba(255, 255, 255, 0.1)',
// //   color: '#fff',
// //   padding: theme.spacing(2),
// //   textAlign: 'center',
// //   transition: 'transform 0.3s, box-shadow 0.3s',
// //   '&:hover': {
// //     transform: 'scale(1.05)',
// //     boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
// //   },
// // }));

// // const StyledChip = styled(Chip)(({ theme }) => ({
// //   background: '#2196f3',
// //   color: '#fff',
// //   borderRadius: '16px',
// //   margin: theme.spacing(0.5),
// //   '&:hover': {
// //     background: '#1976d2',
// //   },
// // }));

// // const ServiceCard = ({ icon: Icon, title, description, features }) => {
// //   return (
// //     <StyledCard>
// //         <Box sx={{display:'flex'}}>
// //           <Box sx={{ mb: 2 }}>
// //           <Icon sx={{ fontSize: 40, color: '#2196f3' }} />
// //         </Box>
// //         <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
// //           {title}
// //         </Typography>

// //         </Box>
        
// //         <Typography variant="body2" sx={{ color: '#bbb', mb: 2 }}>
// //           {description}
// //         </Typography>
// //         <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
// //           {features.map((feature, index) => (
// //             <StyledChip key={index} label={feature} size="small" />
// //           ))}
// //         </Box>
    
// //     </StyledCard>
// //   );
// // };

// // // Example usage
// // const Services = () => {
// //   const services = [
// //     {
// //       icon: CodeIcon,
// //       title: "Custom Script Development",
// //       description: "Build custom scripts in Pine Script, Python, AFL, MQL4/5, EasyLanguage and more for your specific trading needs.",
// //       features: ["Pine Script", "Python", "MQL4/5", "AFL", "EasyLanguage"],
// //     },
// //     {
// //       icon: StorageIcon,
// //       title: "Strategy Backtesting",
// //       description: "Comprehensive backtesting across global data providers to validate and optimize your trading strategies.",
// //       features: ["Yahoo Finance", "TradingView", "Binance", "AlphaVantage"],
// //     },
// //     {
// //       icon: SettingsIcon,
// //       title: "Automated Execution",
// //       description: "Deploy and automate your strategies across 100+ brokers and exchanges with real-time execution.",
// //       features: ["100+ Brokers", "Real-time", "Multi-asset", "Cross-platform"],
// //     },
// //   ];

// //   return (
// //     <Container maxWidth='xl' sx={{width:'100%'}}>
// //        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, p: 3,  backgroundColor: '#1A1A2E' }}>
// //       {services.map((service, index) => (
// //         <ServiceCard key={index} {...service} />
// //       ))}
// //     </Box>
// //     </Container>
   
// //   );
// // };

// // export default Services;
// import CodeIcon from '@mui/icons-material/Code';
// import StorageIcon from '@mui/icons-material/Storage';
// import SettingsIcon from '@mui/icons-material/Settings';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import MonitorIcon from '@mui/icons-material/Monitor';
// import SecurityIcon from '@mui/icons-material/Security';
// import { Card, CardContent, CardHeader, Typography, Box, Chip, Container } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const StyledCard = styled(Card)(({ theme }) => ({
//   transition: 'all 0.3s',
//   borderRadius:10,
//   borderColor:'blue',
//   '&:hover': {
//     transform: 'scale(1.05)',
//     borderColor: 'white',
//   },
//   border: '1px solid',
//   borderColor: theme.palette.divider,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     width: 'auto',
//     maxWidth: '20rem',
//   },
// }));

// const OurSolution = () => {
//   const services = [
//     {
//       icon: CodeIcon,
//       title: "Custom Script Development",
//       description: "Build custom scripts in Pine Script, Python, AFL, MQL4/5, EasyLanguage and more for your specific trading needs.",
//       features: ["Pine Script", "Python", "MQL4/5", "AFL", "EasyLanguage"],
//     },
//     {
//       icon: StorageIcon,
//       title: "Strategy Backtesting",
//       description: "Comprehensive backtesting across global data providers to validate and optimize your trading strategies.",
//       features: ["Yahoo Finance", "TradingView", "Binance", "AlphaVantage"],
//     },
//     {
//       icon: SettingsIcon,
//       title: "Automated Execution",
//       description: "Deploy and automate your strategies across 100+ brokers and exchanges with real-time execution.",
//       features: ["100+ Brokers", "Real-time", "Multi-asset", "Cross-platform"],
//     },
//     {
//       icon: MonitorIcon,
//       title: "Live Dashboards",
//       description: "Monitor your strategies with comprehensive dashboards, PnL tracking, and performance analytics.",
//       features: ["Real-time PnL", "Performance Analytics", "Risk Monitoring", "Custom Alerts"],
//     },
//     {
//       icon: TrendingUpIcon,
//       title: "Strategy Optimization",
//       description: "Continuous optimization and maintenance of deployed strategies with advanced rebalancing logic.",
//       features: ["Auto-rebalancing", "Performance Tuning", "Risk Management", "24/7 Monitoring"],
//     },
//     {
//       icon: SecurityIcon,
//       title: "VPS & Cloud Hosting",
//       description: "Reliable hosting solutions with enterprise-grade security and 99.9% uptime guarantee.",
//       features: ["99.9% Uptime", "Enterprise Security", "Global Servers", "24/7 Support"],
//     },
//   ];

//   return (
//     <Container maxWidth='xl'>
//     <Box component="section" sx={{ py: 12, px: 3, position: 'relative',  backgroundColor: '#1A1A2E' }}>
//       <Box
//         sx={{
//           position: 'absolute',
//           inset: 0,
//           background: 'linear-gradient(to bottom, transparent, rgba(33, 150, 243, 0.05), transparent)',
//         }}
//       />
//       <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10,backgroundColor: '#1A1A2E',color:'white' }}>
//         <Box sx={{ textAlign: 'center', mb: 8 }}>
//           <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 50 }, fontWeight: 'bold', mb: 2 }}>
//             Our Solutions
//           </Typography>
//           <Typography variant="h6"  sx={{  mx: 'auto' }}>
//             We act as a technology partner for traders, funds, and quants,<br/> providing comprehensive automation services
//           </Typography>
//         </Box>
//         <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
//           {services.map((service, index) => {
//             const IconComponent = service.icon;
//             return (
//               <StyledCard key={index} sx={{backgroundColor: '#1A1A2E',color:'white' }}>
//                 <CardHeader
//                   title={
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
//                       <Box sx={{ p:1, borderRadius: 2, bgcolor: 'primary.main' }}>
//                         <IconComponent sx={{ fontSize: 24, color: 'white' }} />
//                       </Box>
//                       <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                         {service.title}
//                       </Typography>
//                     </Box>
//                   }
//                 />
//                 <CardContent>
//                   <Typography variant="body2"  sx={{ mb: 3, lineHeight: 1.6 }}>
//                     {service.description}
//                   </Typography>
//                   <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
//                     {service.features.map((feature, featureIndex) => (
//                       <Chip
//                         key={featureIndex}
//                         label={feature}
//                         size="small"
//                         sx={{
//                           bgcolor: 'black',
//                           color: 'white',
//                           borderRadius: 10,
//                           p:1,
//                           fontSize: 13,
//                           '&:hover': { bgcolor: 'primary.dark' },
//                         }}
//                       />
//                     ))}
//                   </Box>
//                 </CardContent>
//               </StyledCard>
//             );
//           })}
//         </Box>
//       </Container>
//     </Box>
//     </Container>
//   );
// };

// export default OurSolution;
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MonitorIcon from '@mui/icons-material/Monitor';
import SecurityIcon from '@mui/icons-material/Security';
import { Card, CardContent, CardHeader, Typography, Box, Chip, Container } from '@mui/material';
import { styled } from '@mui/material/styles';


const StyledHeaderTypography = styled(Typography)(({ theme }) => ({
  fontSize: '50px',
  fontWeight: 900,
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  position: 'relative',
  
  // Beautiful gradient text
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
  backgroundSize: '200% 200%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
  
  // Animated gradient
  animation: 'gradientFlow 8s ease infinite',
  
  // Text shadow for depth (fallback for non-webkit browsers)
  textShadow: '0 4px 20px rgba(102, 126, 234, 0.3)',
  
  // Letter spacing for premium look
  letterSpacing: '-0.02em',
  lineHeight: 1.1,
  
  // Subtle text stroke for definition
  WebkitTextStroke: '1px rgba(102, 126, 234, 0.1)',
  
  // Smooth transitions
  transition: 'all 0.3s ease',
  
  // Hover effects
  '&:hover': {
    transform: 'translateY(-2px)',
    textShadow: '0 8px 30px rgba(102, 126, 234, 0.4)',
    WebkitTextStroke: '1px rgba(102, 126, 234, 0.2)',
  },
  
  // Decorative elements
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '-20px',
    width: '60px',
    height: '4px',
    background: 'linear-gradient(90deg, transparent, #667eea, transparent)',
    borderRadius: '2px',
    opacity: 0.6,
    animation: 'slideIn 1s ease 0.5s both',
  },
  
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    right: '-20px',
    width: '60px',
    height: '4px',
    background: 'linear-gradient(90deg, transparent, #764ba2, transparent)',
    borderRadius: '2px',
    opacity: 0.6,
    animation: 'slideIn 1s ease 0.7s both',
  },
  
  // Responsive design
  [theme.breakpoints.down('md')]: {
    fontSize: '40px',
    marginBottom: theme.spacing(3),
    
    '&::before, &::after': {
      width: '40px',
      left: '-15px',
      right: '-15px',
    },
  },
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
    marginBottom: theme.spacing(2),
    letterSpacing: '-0.01em',
    
    '&::before, &::after': {
      width: '30px',
      height: '3px',
      left: '-10px',
      right: '-10px',
    },
  },
  
  // Ultra-small screens
  [theme.breakpoints.down(400)]: {
    fontSize: '24px',
    
    '&::before, &::after': {
      display: 'none',
    },
  },
}));
const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'all 0.3s',
  borderRadius: 10,
  borderColor: 'blue',
  '&:hover': {
    transform: 'scale(1.05)',
    borderColor: 'white',
  },
  border: '1px solid',
  borderColor: theme.palette.divider,
  width: 400,
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
    maxWidth:350,
  },
  backgroundColor: '#1A1A2E', 
  color: 'white',
}));

const OurSolution = () => {
  const services = [
    {
      icon: CodeIcon,
      title: "Custom Script Development",
      description: "Build custom scripts in Pine Script, Python, AFL, MQL4/5, EasyLanguage and more for your specific trading needs.",
      features: ["Pine Script", "Python", "MQL4/5", "AFL", "EasyLanguage"],
    },
    {
      icon: StorageIcon,
      title: "Strategy Backtesting",
      description: "Comprehensive backtesting across global data providers to validate and optimize your trading strategies.",
      features: ["Yahoo Finance", "TradingView", "Binance", "AlphaVantage"],
    },
    {
      icon: SettingsIcon,
      title: "Automated Execution",
      description: "Deploy and automate your strategies across 100+ brokers and exchanges with real-time execution.",
      features: ["100+ Brokers", "Real-time", "Multi-asset", "Cross-platform"],
    },
    {
      icon: MonitorIcon,
      title: "Live Dashboards",
      description: "Monitor your strategies with comprehensive dashboards, PnL tracking, and performance analytics.",
      features: ["Real-time PnL", "Performance Analytics", "Risk Monitoring", "Custom Alerts"],
    },
    {
      icon: TrendingUpIcon,
      title: "Strategy Optimization",
      description: "Continuous optimization and maintenance of deployed strategies with advanced rebalancing logic.",
      features: ["Auto-rebalancing", "Performance Tuning", "Risk Management", "24/7 Monitoring"],
    },
    {
      icon: SecurityIcon,
      title: "VPS & Cloud Hosting",
      description: "Reliable hosting solutions with enterprise-grade security and 99.9% uptime guarantee.",
      features: ["99.9% Uptime", "Enterprise Security", "Global Servers", "24/7 Support"],
    },
  ];

  return (
    <Box sx={{ width: '100%', mx: 0 }}>
      <Box component="section" sx={{ py: 12, px: 0, position: 'relative', backgroundColor: '#1A1A2E' }}>
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent, rgba(33, 150, 243, 0.05), transparent)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, backgroundColor: '#1A1A2E', color: 'white', px: 0 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <StyledHeaderTypography variant="h2" sx={{ fontSize: { xs: 30, md: 50 }, fontWeight: 'bold', mb: 2 }}>
              Our Solutions
            </StyledHeaderTypography>
            <Typography variant="h6" sx={{ mx: 'auto' }}>
              We act as a technology partner for traders, funds, and quants,<br /> providing comprehensive automation services
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, px: 2 }}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <StyledCard key={index}>
                  <CardHeader
                    title={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Box sx={{ p: 1, borderRadius: 2, bgcolor:'#8744ed' }}>
                          <IconComponent sx={{ fontSize: 24, color: 'white' }} />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                          {service.title}
                        </Typography>
                      </Box>
                    }
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6 }}>
                      {service.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                      {service.features.map((feature, featureIndex) => (
                        <Chip
                          key={featureIndex}
                          label={feature}
                          size="small"
                          sx={{
                            bgcolor: 'black',
                            color: 'white',
                            borderRadius: 10,
                            p: 1,
                            fontSize: 13,
                            '&:hover': { bgcolor: '#8744ed' },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </StyledCard>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default OurSolution;