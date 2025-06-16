"use client"
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  useTheme,
  useMediaQuery,
  Fade,
  Grow,
  Zoom
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

// Keyframe animations
const titleGlow = keyframes`
  from { 
    filter: drop-shadow(0 0 20px rgba(147, 51, 234, 0.4)); 
  }
  to { 
    filter: drop-shadow(0 0 40px rgba(147, 51, 234, 0.8)); 
  }
`;

const orbPulse = keyframes`
  0%, 100% { 
    transform: scale(1); 
    box-shadow: 0 0 60px rgba(147, 51, 234, 0.6), 0 0 120px rgba(147, 51, 234, 0.4);
  }
  50% { 
    transform: scale(1.05); 
    box-shadow: 0 0 80px rgba(147, 51, 234, 0.8), 0 0 160px rgba(147, 51, 234, 0.6);
  }
`;

const rotate = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
`;

const segmentPulse = keyframes`
  0%, 100% { opacity: 0.9; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

// Styled components
const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 0),
  },
}));

const ParticlesContainer = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: 1,
});

const Particle = styled(Box)(({ delay, duration }) => ({
  position: 'absolute',
  width: '2px',
  height: '2px',
  background: 'rgba(147, 51, 234, 0.6)',
  borderRadius: '50%',
  animation: `${float} ${duration}s ease-in-out infinite`,
  animationDelay: `${delay}s`,
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 8vw, 8rem)',
  fontWeight: 700,
  lineHeight: 1.1,
  marginBottom: theme.spacing(4),
  background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textShadow: '0 0 40px rgba(147, 51, 234, 0.3)',
  animation: `${titleGlow} 3s ease-in-out infinite alternate`,
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: 'clamp(2rem, 10vw, 4rem)',
  },
}));

const GradientText = styled('span')({
  background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  display: 'inline-block',
});

const GlowingOrb = styled(Box)(({ theme }) => ({
  width: 300,
  height: 300,
  margin: theme.spacing(6, 'auto'),
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: 200,
    height: 200,
    margin: theme.spacing(4, 'auto'),
  },
}));

const OrbOuter = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  background: `radial-gradient(circle at 30% 30%, 
    rgba(147, 51, 234, 0.8) 0%, 
    rgba(79, 70, 229, 0.6) 50%, 
    rgba(67, 56, 202, 0.4) 100%)`,
  position: 'relative',
  animation: `${orbPulse} 4s ease-in-out infinite`,
  boxShadow: `
    0 0 60px rgba(147, 51, 234, 0.6),
    0 0 120px rgba(147, 51, 234, 0.4),
    inset 0 0 60px rgba(255, 255, 255, 0.1)
  `,
  cursor: 'pointer',
  transition: 'transform 0.1s ease-out',
  '&:hover': {
    animation: `${orbPulse} 2s ease-in-out infinite`,
  },
}));

const OrbInner = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 120,
  height: 120,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gap: theme.spacing(1),
  animation: `${rotate} 8s linear infinite`,
  [theme.breakpoints.down('md')]: {
    width: 80,
    height: 80,
  },
}));

const OrbSegment = styled(Box)(({ delay }) => ({
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: 8,
  animation: `${segmentPulse} 2s ease-in-out infinite`,
  animationDelay: `${delay}s`,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(6),
  padding: theme.spacing(2, 5),
  background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
  borderRadius: 50,
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  color: 'white',
  border: 'none',
  boxShadow: '0 4px 15px rgba(147, 51, 234, 0.3)',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 30px rgba(147, 51, 234, 0.5)',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #5b21b6 100%)',
  },
  '&:active': {
    transform: 'translateY(-1px)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    transition: 'left 0.5s',
  },
  '&:hover::before': {
    animation: `${shimmer} 0.5s ease-in-out`,
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.2rem, 3vw, 2rem)',
  color: 'rgba(255, 255, 255, 0.8)',
  fontWeight: 300,
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2),
  textAlign: 'center',
}));

const ContentWrapper = styled(Box)({
  position: 'relative',
  zIndex: 2,
});

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isVisible, setIsVisible] = useState({
    title: false,
    orb: false,
    subtitle: false,
    button: false,
  });

  // Generate particles on mount
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < (isMobile ? 30 : 50); i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 6,
        duration: Math.random() * 3 + 3,
      });
    }
    setParticles(newParticles);

    // Trigger animations
    const timeouts = [
      setTimeout(() => setIsVisible(prev => ({ ...prev, title: true })), 200),
      setTimeout(() => setIsVisible(prev => ({ ...prev, orb: true })), 800),
      setTimeout(() => setIsVisible(prev => ({ ...prev, subtitle: true })), 1400),
      setTimeout(() => setIsVisible(prev => ({ ...prev, button: true })), 1800),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [isMobile]);

  // Handle mouse movement for orb interaction
  const handleMouseMove = (e) => {
    if (!isMobile) {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / 20;
      const deltaY = (e.clientY - centerY) / 20;
      setMousePosition({ x: deltaX, y: deltaY });
    }
  };

  const resetMousePosition = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const handleGetStarted = () => {
    // Add your navigation logic here
    console.log('Get Started clicked');
    // Example: router.push('/signup') or window.location.href = '/signup'
  };

  return (
    <HeroContainer>
      {/* Animated Particles */}
      <ParticlesContainer>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            delay={particle.delay}
            duration={particle.duration}
            sx={{
              left: `${particle.left}vw`,
              top: `${particle.top}vh`,
            }}
          />
        ))}
      </ParticlesContainer>

      <Container maxWidth="lg">
        <ContentWrapper>
          <Box textAlign="center">
            {/* Main Title */}
            <Fade in={isVisible.title} timeout={1000}>
              <MainTitle variant="h1">
                Revolutionize the
                <br />
                way businesses
                <br />
                <GradientText>leverage AI</GradientText>
              </MainTitle>
            </Fade>

            {/* Glowing Orb */}
            <Zoom in={isVisible.orb} timeout={1000}>
              <GlowingOrb>
                <OrbOuter
                  onMouseMove={handleMouseMove}
                  onMouseLeave={resetMousePosition}
                  sx={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                  }}
                >
                  <OrbInner>
                    <OrbSegment delay={0} />
                    <OrbSegment delay={0.5} />
                    <OrbSegment delay={1} />
                    <OrbSegment delay={1.5} />
                  </OrbInner>
                </OrbOuter>
              </GlowingOrb>
            </Zoom>

           
          </Box>
        </ContentWrapper>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;