import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const StageSection = styled(Box)({
  padding: '4rem 0',
  background: '#0a0a0a',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 100%)',
    zIndex: 1
  }
});

const StageCard = styled(motion.div)({
  position: 'relative',
  height: '300px',
  borderRadius: '10px',
  overflow: 'hidden',
  cursor: 'pointer',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
    zIndex: 1
  }
});

const StageImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease-in-out'
});

const StageInfo = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '2rem',
  color: '#fff',
  zIndex: 2
});

function Stages() {
  const stages = [
    {
      name: "Thunder Storm Arena",
      description: "Where lightning meets destiny",
      image: "/images/thunder-stage.jpg"
    },
    {
      name: "Cyber Arena",
      description: "The future of combat",
      image: "/images/cyber-stage.jpg"
    },
    {
      name: "Ancient Temple",
      description: "Sacred grounds of battle",
      image: "/images/temple-stage.jpg"
    },
    {
      name: "Colosseum",
      description: "Where legends are born",
      image: "/images/colosseum-stage.jpg"
    }
  ];

  return (
    <StageSection>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography 
          variant="h2" 
          sx={{ 
            color: '#fff',
            textAlign: 'center',
            mb: 6,
            fontFamily: '"Tekken", sans-serif',
            textShadow: '0 0 10px rgba(255,0,0,0.5)'
          }}
        >
          Battle Arenas
        </Typography>
        <Grid container spacing={4}>
          {stages.map((stage, index) => (
            <Grid item xs={12} md={6} key={index}>
              <StageCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <StageImage src={stage.image} alt={stage.name} />
                <StageInfo>
                  <Typography variant="h4" sx={{ fontFamily: '"Tekken", sans-serif' }}>
                    {stage.name}
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.8 }}>
                    {stage.description}
                  </Typography>
                </StageInfo>
              </StageCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StageSection>
  );
}

export default Stages;