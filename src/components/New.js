import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion as m, AnimatePresence } from 'framer-motion';

// ---------------------- STYLED COMPONENTS ----------------------

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100vh',
  width: '100%',
  overflow: 'hidden',
  paddingTop: '120px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
}));

const BackgroundLayer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'opacity 1s ease-in-out',
  zIndex: 0,
});

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.4)',
  zIndex: 1,
});

const HeroContainer = styled(Container)({
  textAlign: 'center',
  position: 'relative',
  zIndex: 2,
  padding: '0 1rem',
});

const GlowingText = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 7vw, 5rem)',
  fontWeight: 900,
  background: 'linear-gradient(90deg, #ffffff, #dcdcdc)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 0 40px rgba(255, 255, 255, 0.6)',
  fontFamily: '"Orbitron", sans-serif',
  letterSpacing: '2px',
}));

const Subtitle = styled(Typography)({
  color: '#00ffe7',
  letterSpacing: '10px',
  fontFamily: '"Orbitron", sans-serif',
  fontWeight: 600,
  fontSize: '1.1rem',
  marginBottom: '10px',
  textShadow: '0 0 10px #00ffe7',
});

const BgText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: 'clamp(4rem, 20vw, 16rem)',
  fontWeight: 900,
  opacity: 0.04,
  whiteSpace: 'nowrap',
  pointerEvents: 'none',
  color: '#fff',
  fontFamily: '"Orbitron", sans-serif',
  zIndex: 1,
}));



const MotionButton = m(styled(Button)(({ theme }) => ({
  padding: '0.9rem 2.4rem',
  fontSize: '1.1rem',
  fontWeight: 800,
  letterSpacing: '1.5px',
  fontFamily: '"Orbitron", sans-serif',
  color: '#feba00',
  border: '2px solid #feba00',
  borderRadius: '14px 0 14px 0',
  textTransform: 'uppercase',
  position: 'relative',
  background: 'transparent',
  backgroundImage: `linear-gradient(
    135deg,
    rgba(254, 186, 0, 0.1),
    rgba(254, 114, 0, 0.08)
  )`,
  boxShadow: '0 0 20px rgba(254, 186, 0, 0.4)',
  backdropFilter: 'blur(6px)',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)',
    transform: 'skewX(-20deg)',
    animation: 'shimmer 2.5s infinite',
    backgroundSize: '200% 100%',
    zIndex: 1,
    pointerEvents: 'none',
  },

  '&:hover': {
    color: '#000',
    backgroundImage: 'linear-gradient(135deg, #feba00, #fe7200)',
    boxShadow: '0 0 35px rgba(254, 186, 0, 0.6)',
    transform: 'scale(1.08)',
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
})));




const Description = styled(Typography)(({ theme }) => ({
  color: '#ffffffdd',
  fontWeight: 600,
  fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
  maxWidth: '650px',
  margin: '0 auto 2.5rem auto',
  fontFamily: '"Orbitron", sans-serif',
  textShadow: '0 0 10px rgba(0,0,0,0.7)',
}));

// ---------------------- MAIN COMPONENT ----------------------

export default function Hero() {
  const images = [
    'https://images.hdqwalls.com/wallpapers/bthumb/pubg-ultimate-flamewraith-4k-ac.jpg',
    'https://wallpapercave.com/wp/wp5153883.jpg',
    'https://wallpapercave.com/wp/wp5350653.jpg',
    'https://www.itl.cat/pngfile/big/307-3077811_top-call-of-duty-warzone-wallpapers-in-4k.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000); // 5s per image
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroSection id="hero">
      <AnimatePresence mode="wait">
        <m.div
          key={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        />
      </AnimatePresence>

      <Overlay />
      <BgText>SHOWDOWN</BgText>

      <HeroContainer maxWidth="md">
        <Subtitle>The Season 1 of</Subtitle>

        <GlowingText
          component={m.h1}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hackground India 2K25
        </GlowingText>

        <Description
          component={m.p}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Unleash your code. Outplay, outbuild, outsmart. <br />
          Rise to the top and become the <strong>Champion of Hackgrounds India 2K25</strong>!
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
