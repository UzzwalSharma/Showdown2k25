import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion as m } from 'framer-motion';

const GlassMorphicCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '90%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '2.5rem',
  background: 'rgba(17, 17, 25, 0.85)',
  borderRadius: '25px',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: `
    0 8px 32px 0 rgba(31, 38, 135, 0.37),
    inset 0 0 30px rgba(255, 255, 255, 0.05)
  `,
  zIndex: 2,
  display: 'flex',
  flexDirection: 'row',
  gap: '3rem',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
    padding: '1.5rem',
    gap: '2rem',
  }
}));


const ImageSection = styled(Box)(({ theme }) => ({
  flex: '1',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& img': {
    width: '100%',
    height: 'auto',
    maxHeight: '600px',
    objectFit: 'contain',
    filter: 'drop-shadow(0 0 20px rgba(255, 0, 0, 0.2))',
    [theme.breakpoints.down('md')]: {
      maxHeight: '350px',
    }
  }
}));


const HeroBackground = styled(Box)({
  position: 'relative',
  height: '100vh',
  width: '100%',
  overflow: 'hidden',
  background: 'url("/images/tekken8-bg.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))', // Reduced opacity from 0.7/0.8 to 0.5/0.6
    backdropFilter: 'blur(2px)', // Reduced blur from 3px to 2px
    zIndex: 1
  }
});

const ContentSection = styled(Box)(({ theme }) => ({
  flex: '1.2',
  zIndex: 2,
  padding: '0 1rem',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    padding: '0',
  }
}));


const HeroContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  color: '#ffffff',
  padding: '0 2rem',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 1rem',
  }
}));


const StyledButton = styled(Button)({
  marginTop: '2rem',
  padding: '0.8rem 2rem',
  fontSize: '1.2rem',
  borderRadius: '5px',
  textTransform: 'none',
  '&.register': {
    background: 'rgba(255, 0, 0, 0.2)', // Red tint
    color: '#ffffff',
    marginLeft: '1rem', // Add margin for spacing
    border: '2px solid #ff0000', // Red border
    '&:hover': {
      background: 'rgba(255, 0, 0, 0.4)', // Darker red on hover
    }
  },
  '&.learn': {
    background: 'rgba(0, 123, 255, 0.2)',
    color: '#ffffff',
    marginLeft: '1rem',
    border: '2px solid #0088ff',
    '&:hover': {
      background: 'rgba(0, 123, 255, 0.4)',
    }
  }
});

// Replace all instances of motion with m
const MotionTypography = m(Typography);
const MotionButton = m(StyledButton);

// Update any motion.div references to m.div
// For example:
// component={motion.div} becomes component={m.div}

function Hero() {
  return (
    <HeroBackground>
      <HeroContent
       style={{
          width: '100%',
          height: 'auto',
        paddingBottom: "50px",
          paddingTop:"50px"
        }}>
        <GlassMorphicCard>
          <ContentSection>
            <MotionTypography
              variant="h1"
              component={m.div}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 800,
                color: '#ff0000',
                marginBottom: '0.5rem',
                fontFamily: '"Tekken", sans-serif'
              }}
            >
              Techken
            </MotionTypography>
        
            <MotionTypography
              variant="h1"
              component={m.div}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              sx={{
                fontSize: { xs: '2rem', md: '3.5rem' },
                fontWeight: 700,
                color: '#0088ff',
                marginBottom: '0.5rem',
                fontFamily: '"Tekken", sans-serif'
              }}
            >
              Showdown 2K25
            </MotionTypography>
            
            <MotionTypography
              variant="h2"
              component={m.div}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              sx={{
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                fontWeight: 600,
                color: '#ffd700',
                marginBottom: '2rem',
                fontFamily: '"Tekken", sans-serif'
              }}
            >
              HACKATHON
            </MotionTypography>

            <MotionTypography
              variant="body1"
              component={m.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                maxWidth: '600px',
                marginBottom: '2rem'
              }}
            >
              Battle it out in the ultimate coding tournament. Show your skills, defeat your
              opponents, and claim the King of Techken Showdown 2K25 title!
            </MotionTypography>

        <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' }, // <- column on small screens
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    marginBottom: '2rem',
    paddingBottom: '2rem',
    width: '100%',
  }}
>
  <MotionButton
    className="learn"
    component={m.button}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.8 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    sx={{ width: { xs: '100%', sm: 'auto' } }} // full width on small
    onClick={() => window.location.href = '#about'}
  >
    Learn More
  </MotionButton>

  <MotionButton
    className="register"
    component={m.button}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 1.0 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    sx={{ width: { xs: '100%', sm: 'auto' } }} // full width on small
    onClick={() => window.location.href = 'https://forms.gle/your-google-form-link'}
  >
    Register Now
  </MotionButton>
</Box>

          </ContentSection>
          
          <ImageSection>
            <m.img
              src="/images/FrontImage.jpg"
              alt="Tekken Character"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
               style={{
          width: '100%',
          height: 'auto',
          maxWidth: '400px'
        }}
            />
          </ImageSection>
        </GlassMorphicCard>
      </HeroContent>
    </HeroBackground>
  );
}

export default Hero;