import React, { useEffect, useRef, useState } from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { gsap } from 'gsap';
import NeonStrikeLine from './Neonline.jsx';

// Styled Typography for section titles
const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#ff0000',
  fontFamily: '"Tekken", sans-serif',
  marginBottom: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: '3rem',
}));

const SubSectionTitle = styled(Typography)({
  color: '#ff0000',
  fontFamily: '"Tekken", sans-serif',
  marginBottom: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: '2rem',
});

const BlueText = styled('span')({
  color: '#0088ff',
});

const BulletPoint = styled('li')({
  listStyle: 'none',
  position: 'relative',
  paddingLeft: '2rem',
  marginBottom: '1rem',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '20px',
    height: '20px',
    backgroundImage: 'url("/images/BulletPunch.jpg")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
});

// 3D Floating Animation for cards
const float3d = keyframes`
  0%, 100% {
    transform: rotateY(0deg) rotateX(0deg) translateZ(0);
    box-shadow: 0 10px 15px rgba(255, 0, 0, 0.5);
  }
  50% {
    transform: rotateY(8deg) rotateX(6deg) translateZ(15px);
    box-shadow: 0 20px 35px rgba(255, 0, 0, 0.7);
  }
`;

// Clipped Card Style with 3D effect and floating animation
const ClippedCard = styled(Paper)({
  background: 'rgba(0, 0, 0, 0.75)',
  border: '2px solid #ff0000',
  clipPath: 'polygon(0 0, 95% 0, 100% 15%, 100% 100%, 5% 100%, 0 85%)',
  transition: 'background 0.4s ease, border-color 0.4s ease',
  padding: '2rem',
  minHeight: '300px',
  transformStyle: 'preserve-3d',
  cursor: 'pointer',
  animation: `${float3d} 5s ease-in-out infinite`,

  '&:hover': {
    background: 'rgba(255, 0, 0, 0.1)',
    borderColor: '#ff0000',
    animationPlayState: 'paused',
    transform: 'rotateY(15deg) rotateX(10deg) translateZ(30px)',
    boxShadow: '0 15px 25px rgba(255, 0, 0, 0.7)',
  },
});

const bgImages = [
  '/BGMI_images/drop-loot.jpg',
  '/BGMI_images/kv.jpg',
  '/BGMI_images/pubg-mobile-steampunk-frontier-2025-gq-1920x1080.jpg',
];

const TournamentAboutSection = () => {
  const bgRef = useRef(null);
  const [index, setIndex] = useState(0);

  // GSAP Background Transition Handler
  const changeBackground = () => {
    gsap.to(bgRef.current, {
      duration: 0.4,
      opacity: 0,
      scale: 0.85,
      rotate: -4,
      ease: 'power3.in',
      onComplete: () => {
        const nextIndex = (index + 1) % bgImages.length;
        setIndex(nextIndex);
        gsap.fromTo(
          bgRef.current,
          {
            scale: 1.1,
            opacity: 0,
            rotate: 5,
            transformOrigin: 'top left',
          },
          {
            duration: 0.6,
            scale: 1,
            opacity: 1,
            rotate: 0,
            ease: 'power3.out',
          }
        );
      },
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeBackground();
    }, 2000); // Faster and more cinematic
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Background Image Layer */}
      <Box
        ref={bgRef}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bgImages[index]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
          zIndex: 1,
        }}
      />

      {/* Content Layer */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        <Box sx={{ mb: 6 }}>
          <SectionTitle align="center">
            About <BlueText>The Tournament</BlueText>
          </SectionTitle>
          <NeonStrikeLine />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            perspective: 1500, // Perspective for 3D effect
            justifyContent: 'center',
          }}
        >
          {/* Event Overview Card */}
          <ClippedCard elevation={5}>
            <SubSectionTitle>Event Overview</SubSectionTitle>
            <ul style={{ padding: 0 }}>
              <BulletPoint>
                <Typography variant="body1" sx={{ color: '#ffffff' }}>
                  Welcome to Techken Showdown 2K25, an epic coding tournament inspired by the Tekken Game Universe
                </Typography>
              </BulletPoint>
              <BulletPoint>
                <Typography variant="body1" sx={{ color: '#ffffff' }}>
                  A groundbreaking hackathon bringing together the best minds in technology
                </Typography>
              </BulletPoint>
              <BulletPoint>
                <Typography variant="body1" sx={{ color: '#ffffff' }}>
                  Expected footfall of over 5000+ participants
                </Typography>
              </BulletPoint>
            </ul>
          </ClippedCard>

          {/* Challenge Card */}
          <ClippedCard elevation={5}>
            <SubSectionTitle>The Challenge</SubSectionTitle>
            <ul style={{ padding: 0 }}>
              <BulletPoint>
                <Typography variant="body1" sx={{ color: '#ffffff' }}>
                  Create innovative applications that capture Tekken's competitive spirit
                </Typography>
              </BulletPoint>
              <BulletPoint>
                <Typography variant="body1" sx={{ color: '#ffffff' }}>
                  Develop AI-powered combat systems and gaming experiences
                </Typography>
              </BulletPoint>
              <BulletPoint>
                <Typography variant="body1" sx={{ color: '#ffffff' }}>
                  Push technological boundaries in fighting game innovation
                </Typography>
              </BulletPoint>
            </ul>
          </ClippedCard>

        </Box>
      </Container>
    </Box>
  );
};

export default TournamentAboutSection;
