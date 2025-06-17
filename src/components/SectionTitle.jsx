
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 700,
  textAlign: 'center',
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(4),
  color: '#ec4899', 
  letterSpacing: '0.02em',
  lineHeight: 1.1,
  position: 'relative',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px) scale(1.02)',
  },
  fontSize: '1.8rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: 30,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 50,
  },
}));

export default SectionTitle;
