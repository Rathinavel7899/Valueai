// "use client";
// import { Button } from '@mui/material';
// import { styled } from '@mui/system';

// const StyledContactButton = styled(Button)(({ theme }) => ({
//   background: 'linear-gradient(45deg, #ff4757 0%, #c44569 100%)',
//   marginTop: theme.spacing(15),
//   marginLeft: theme.spacing(5),
//   color: 'white',
//   borderRadius:'15px',
//   padding: '12px 32px',
//   // borderRadius: theme.shape.borderRadius * 1.5,
//   textTransform: 'none',
//   fontSize: '1.1rem',
//   fontWeight: 600,
//   boxShadow: '0 4px 15px rgba(255, 71, 87, 0.3)',
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     background: 'linear-gradient(45deg, #ff3742 0%, #ff4757 100%)',
//     transform: 'translateY(-2px)',
//     boxShadow: '0 8px 25px rgba(255, 71, 87, 0.6), 0 0 20px rgba(255, 71, 87, 0.4)',
//   },
//   [theme.breakpoints.down('sm')]: {
//     marginTop: theme.spacing(1),
//     marginLeft: theme.spacing(1),
//     padding: '10px 20px',
//     fontSize: '1rem',
//   },
// }));

// export default StyledContactButton;

import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const StyledContactButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  marginTop: theme.spacing(15),
  marginLeft: theme.spacing(5),
  color: 'white',
  borderRadius: '20px',
  padding: '16px 40px',
  textTransform: 'none',
  fontSize: '1.2rem',
  fontWeight: 700,
  letterSpacing: '0.5px',
  overflow: 'hidden',
  cursor: 'pointer',
  border: 'none',
  minWidth: '200px',
  
  // Enhanced shadows and glow
  boxShadow: `
    0 8px 32px rgba(102, 126, 234, 0.4),
    0 4px 16px rgba(118, 75, 162, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1)
  `,
  
  // Smooth transitions
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  
  // Animated gradient background
  backgroundSize: '200% 200%',
  animation: 'gradientShift 6s ease infinite',
  
  // Shimmer effect overlay
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
    transition: 'left 0.6s ease',
    zIndex: 1,
  },
  
  // Pulse ring effect
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '0',
    height: '0',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.3s ease',
    zIndex: 0,
  },
  
  // Text styling
  '& .MuiButton-label, & > span': {
    position: 'relative',
    zIndex: 2,
  },
  
  '&:hover': {
    background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
    transform: 'translateY(-4px) scale(1.02)',
    
    // Enhanced hover shadows with multiple layers
    boxShadow: `
      0 16px 48px rgba(102, 126, 234, 0.6),
      0 8px 24px rgba(118, 75, 162, 0.4),
      0 0 40px rgba(102, 126, 234, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2)
    `,
    
    // Trigger shimmer effect
    '&::before': {
      left: '100%',
    },
    
    // Expand pulse ring
    '&::after': {
      width: '120%',
      height: '120%',
      opacity: 0,
    },
  },
  
  // Active/Click state
  '&:active': {
    transform: 'translateY(-2px) scale(1.01)',
    transition: 'all 0.1s ease',
  },
  
  // Focus state for accessibility
  '&:focus': {
    outline: 'none',
    boxShadow: `
      0 8px 32px rgba(102, 126, 234, 0.4),
      0 4px 16px rgba(118, 75, 162, 0.3),
      0 0 0 3px rgba(102, 126, 234, 0.3)
    `,
  },
  
  // Responsive design
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(3),
    padding: '14px 32px',
    fontSize: '1.1rem',
    minWidth: '180px',
  },
  
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2),
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 600,
    minWidth: '160px',
    borderRadius: '16px',
    
    // Reduce effects on mobile for performance
    '&::before': {
      display: 'none',
    },
    
    '&:hover': {
      transform: 'translateY(-2px)',
    },
  },
  
  // Disabled state
  '&:disabled': {
    background: 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)',
    color: 'rgba(255, 255, 255, 0.6)',
    cursor: 'not-allowed',
    transform: 'none',
    boxShadow: 'none',
    
    '&::before, &::after': {
      display: 'none',
    },
  },
  
  // Loading state (if using with loading prop)
  '&.loading': {
    pointerEvents: 'none',
    
    '&::before': {
      left: '100%',
      animationDelay: '0.5s',
    },
  },
}));

// Add keyframes for gradient animation
const globalStyles = `
  @keyframes gradientShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.4);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(102, 126, 234, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(102, 126, 234, 0);
    }
  }
`;

// Inject global styles (you might want to add this to your theme or global CSS)
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = globalStyles;
  document.head.appendChild(styleSheet);
}

export default StyledContactButton;
