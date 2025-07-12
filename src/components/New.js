import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion as m } from 'framer-motion';

// ---------------------- STYLED COMPONENTS ----------------------

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `url("https://images.hdqwalls.com/wallpapers/bthumb/pubg-ultimate-flamewraith-4k-ac.jpg")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  overflow: 'hidden',
  paddingTop: '120px', // 👈 pushes content below the navbar
  zIndex: 1,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0, 0, 0, 0.4)',
    zIndex: -1,
  },
}));


const HeroContainer = styled(Container)({
  textAlign: 'center',
  position: 'relative',
  zIndex: 2,
});

const GlowingText = styled(Typography)(({ theme }) => ({
  fontSize: '5rem',
  fontWeight: 900,
  background: 'linear-gradient(90deg, #ffffff, #dcdcdc)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 0 40px rgba(255, 255, 255, 0.6)',
  fontFamily: '"Orbitron", sans-serif',
  letterSpacing: '2px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '3.5rem',
  },
}));

const Subtitle = styled(Typography)({
  color: '#00ffe7',
  letterSpacing: '10px',
  fontFamily: '"Orbitron", sans-serif',
  fontWeight: 600,
  fontSize: '1.2rem',
  marginBottom: '10px',
  textShadow: '0 0 10px #00ffe7',
});

const BgText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '16rem',
  fontWeight: 900,
  opacity: 0.04,
  whiteSpace: 'nowrap',
  pointerEvents: 'none',
  color: '#fff',
  fontFamily: '"Orbitron", sans-serif',
  [theme.breakpoints.down('sm')]: {
    fontSize: '6rem',
  },
}));

const MotionButton = m(styled(Button)({
  padding: '0.9rem 2.2rem',
  fontSize: '1rem',
  fontWeight: 800,
  border: '2px solid #00f2fe',
  background: 'linear-gradient(to right, #00f2fe, #4facfe)',
  color: '#fff',
  borderRadius: '12px 0 12px 0',
  textTransform: 'uppercase',
  boxShadow: '0 0 25px rgba(0, 242, 254, 0.6)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 0 45px rgba(0, 242, 254, 0.8)',
    transform: 'scale(1.07)',
  },
}));


const Description = styled(Typography)(({ theme }) => ({
  color: '#ffffffdd',
  fontWeight: 600,
  fontSize: '1.3rem',
  maxWidth: '650px',
  margin: '0 auto 2.5rem auto',
  fontFamily: '"Orbitron", sans-serif',
  textShadow: '0 0 10px rgba(0,0,0,0.7)',
}));

// ---------------------- MAIN COMPONENT ----------------------

export default function Hero() {
  return (
    <HeroSection id="hero">
      <BgText>SHOWDOWN</BgText>

      <HeroContainer maxWidth="md">
        <Subtitle>The Season 1 of</Subtitle>

        <GlowingText
          component={m.h1}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hackgrounds India 2K25
        </GlowingText>

        <Description
          component={m.p}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Battle it out in the ultimate coding tournament. Show your skills, defeat your opponents,
          and become the <strong>King of Hackgrounds India 2K25</strong>!
        </Description>

        <Box
          sx={{
            display: 'flex',
            gap: 3,
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MotionButton
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = '#about')}
          >
            Learn More
          </MotionButton>

          <MotionButton
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = 'https://lu.ma/7spa1ao7')}
          >
            Register Now
          </MotionButton>
        </Box>
      </HeroContainer>
    </HeroSection>
  );
}
