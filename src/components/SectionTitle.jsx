import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontSize: 800,
  fontWeight:'bold',
  textAlign: 'center',
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(4),
  color: '#2563eb',
  letterSpacing: '0.02em',
  lineHeight: 1.1,
  position: 'relative',
  transition: 'all 0.3s ease',
  cursor: 'default',
  
  // Add a subtle text shadow for better readability with purple
  textShadow: '0 2px 4px rgba(133, 79, 215, 0.1)',
  
  // Enhanced hover effect with purple drop shadow
  '&:hover': {
    transform: 'translateY(-5px) scale(1.05)',
    filter: 'drop-shadow(0 10px 20px rgba(133, 79, 215, 0.2))',
  },
  
  // Add an attractive background gradient text effect with purple
  background: 'linear-gradient(135deg, #854fd7, #a855f7, #9333ea)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  
  // Add subtle glow effect with purple tones
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '120%',
    height: '120%',
    background: 'radial-gradient(circle, rgba(133, 79, 215, 0.1) 0%, transparent 70%)',
    borderRadius: '50%',
    zIndex: -1,
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  
  '&:hover::before': {
    opacity: 1,
  },
  
  // Responsive font sizes (improved progression)
  fontSize: '1.8rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3.5rem',
  },
  
  // Optional: Add animation on mount
  '@keyframes fadeInUp': {
    from: {
      opacity: 0,
      transform: 'translateY(30px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  
  // Uncomment to add fade-in animation
  // animation: 'fadeInUp 0.6s ease-out',
}));

export default SectionTitle;
