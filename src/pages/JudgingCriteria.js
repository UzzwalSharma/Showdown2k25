import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const JudgingSection = styled(Box)({
  backgroundImage: 'url("https://media.eventhubs.com/images/2023/11/01_ted14.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  width: '100%',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 100%)',
  }
});

const CriteriaCard = styled(Paper)({
  background: 'radial-gradient(circle at 30% 30%, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.65))',
  padding: '1.5rem',
  border: '2px solid #ff0000',
  borderRadius: '0',
  clipPath: 'polygon(0% 10%, 10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%)',
  width: '260px',
  height: '260px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 0 10px rgba(255,0,0,0.3)',
  transition: 'all 0.4s ease-in-out',

  '&:hover': {
    transform: 'translateY(-10px) scale(1.05)',
    boxShadow: '0 12px 24px rgba(255, 0, 0, 0.5), 0 0 30px rgba(255, 0, 0, 0.2)',

    '&::before': {
      transform: 'translateX(100%)',
      opacity: 0.25
    }
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(120deg, transparent, rgba(255, 0, 0, 0.2), transparent)',
    zIndex: 1,
    transition: 'all 0.5s ease-in-out',
    opacity: 0
  },

  '& > *': {
    position: 'relative',
    zIndex: 2
  }
});



const SectionTitle = styled(Typography)({
  color: '#ff0000',
  fontFamily: '"Tekken", sans-serif',
  marginBottom: '2rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: '3.5rem'
});

function JudgingCriteria() {
  const mainCriteria = [
    {
      title: "Technical Innovation",
      points: "30 Points",
      description: "Evaluation of the innovative use of technology, unique problem-solving approaches, and creative implementation of combat mechanics."
    },
    {
      title: "Combat System",
      points: "25 Points",
      description: "Assessment of fighting mechanics, move combinations, character balance, and overall gameplay fluidity."
    },
    {
      title: "AI Implementation",
      points: "20 Points",
      description: "Quality of AI opponent behavior, learning capabilities, and adaptive combat strategies."
    }
  ];

  const secondaryCriteria = [
    {
      title: "User Experience",
      points: "15 Points",
      description: "Interface design, game controls, visual feedback, and overall player engagement."
    },
    {
      title: "Project Completion",
      points: "10 Points",
      description: "Level of completion, code quality, documentation, and adherence to submission guidelines."
    }
  ];

  return (
    <JudgingSection>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        <SectionTitle variant="h2" align="center">
          Judging <span style={{ color: '#0088ff' }}>Criteria</span>
        </SectionTitle>

        <Typography variant="h6" align="center" sx={{ 
          color: '#ffffff',
          mb: 6,
          maxWidth: '800px',
          mx: 'auto',
          fontSize: '1.2rem'
        }}>
          Projects will be evaluated by a panel of industry experts from Bandai Namco and experienced fighting game developers.
          Each criterion is carefully designed to assess both technical excellence and gaming innovation.
        </Typography>

        {/* Main Criteria - All 3 on same level */}
        <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ mb: 5 }}>
          {mainCriteria.map((criterion, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <CriteriaCard>
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography variant="h6" sx={{ 
                    color: '#ff0000',
                    fontFamily: '"Tekken", sans-serif',
                    textAlign: 'center',
                    mb: 1,
                    fontSize: '1.15rem'
                  }}>
                    {criterion.title}
                  </Typography>
                  <Typography variant="h5" sx={{ 
                    color: '#0088ff',
                    textAlign: 'center',
                    mb: 1,
                    fontSize: '1.35rem',
                    textShadow: '0 0 10px rgba(0, 136, 255, 0.3)'
                  }}>
                    {criterion.points}
                  </Typography>
                  <Typography sx={{ 
                    color: '#ffffff',
                    textAlign: 'center',
                    fontSize: '0.95rem'
                  }}>
                    {criterion.description}
                  </Typography>
                </Box>
              </CriteriaCard>
            </Grid>
          ))}
        </Grid>

        {/* Secondary Criteria - 2 cards centered */}
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {secondaryCriteria.map((criterion, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CriteriaCard>
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography variant="h5" sx={{ 
                    color: '#ff0000',
                    fontFamily: '"Tekken", sans-serif',
                    textAlign: 'center',
                    mb: 1,
                    fontSize: '1.5rem'
                  }}>
                    {criterion.title}
                  </Typography>
                  <Typography variant="h4" sx={{ 
                    color: '#0088ff',
                    textAlign: 'center',
                    mb: 2,
                    fontSize: '2rem',
                    textShadow: '0 0 20px rgba(0, 136, 255, 0.3)'
                  }}>
                    {criterion.points}
                  </Typography>
                  <Typography sx={{ 
                    color: '#ffffff',
                    textAlign: 'center',
                    fontSize: '1rem'
                  }}>
                    {criterion.description}
                  </Typography>
                </Box>
              </CriteriaCard>
            </Grid>
          ))}
        </Grid>

        <Typography variant="body1" align="center" sx={{ 
          color: '#ffffff',
          mt: 6,
          maxWidth: '800px',
          mx: 'auto',
          fontSize: '1.1rem',
          padding: '2rem',
          background: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '8px',
          border: '1px solid #ff0000'
        }}>
          Note: All projects must be original work created during the hackathon period. 
          Judges' decisions are final and will be announced during the closing ceremony.
          Top scoring projects in each category will also be eligible for special prizes.
        </Typography>
      </Container>
    </JudgingSection>
  );
}

export default JudgingCriteria;