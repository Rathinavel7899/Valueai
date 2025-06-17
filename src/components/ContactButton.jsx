"use client";
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledContactButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #ff4757 0%, #c44569 100%)',
  marginTop: theme.spacing(15),
  marginLeft: theme.spacing(5),
  color: 'white',
  borderRadius:'15px',
  padding: '12px 32px',
  // borderRadius: theme.shape.borderRadius * 1.5,
  textTransform: 'none',
  fontSize: '1.1rem',
  fontWeight: 600,
  boxShadow: '0 4px 15px rgba(255, 71, 87, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #ff3742 0%, #ff4757 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(255, 71, 87, 0.6), 0 0 20px rgba(255, 71, 87, 0.4)',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    padding: '10px 20px',
    fontSize: '1rem',
  },
}));

export default StyledContactButton;
