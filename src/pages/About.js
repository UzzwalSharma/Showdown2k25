import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const AboutSection = styled(Box)({
  backgroundImage: 'url("/images/temple.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', // Added for parallax effect
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

const InfoCard = styled(Paper)({
  background: 'rgba(0, 0, 0, 0.8)',
  padding: '2rem',
  borderRadius: '8px',
  border: '1px solid #ff0000',
  marginBottom: '2rem'
});

const SectionTitle = styled(Typography)({
  color: '#ff0000',
  fontFamily: '"Tekken", sans-serif',
  marginBottom: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: '3rem'  // Increased font size for main title
});

const SubSectionTitle = styled(Typography)({
  color: '#ff0000',
  fontFamily: '"Tekken", sans-serif',
  marginBottom: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: '2rem'  // Consistent size for subsection titles
});

const BlueText = styled('span')({
  color: '#0088ff'
});

const TimelineContainer = styled(Box)({
  width: '100%',
  padding: '3rem 2rem',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50px',  // Increased left margin
    width: 'calc(100% - 100px)',  // Reduced width to account for dots
    height: '6px',
    background: 'linear-gradient(to right, #ff0000, #0088ff)',
    transform: 'translateY(-50%)',
    zIndex: 1
  }
});

const TimelinePoint = styled(Box)(({ isEnd }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '&::before': {
    content: '""',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: isEnd ? '#0088ff' : '#ff0000',
    boxShadow: `0 0 20px ${isEnd ? '#0088ff' : '#ff0000'}`,
    marginBottom: '1rem',
    zIndex: 2,
    animation: 'breathe 2s infinite ease-in-out'
  },
  '@keyframes breathe': {
    '0%': {
      boxShadow: `0 0 15px ${isEnd ? '#0088ff' : '#ff0000'}`,
      transform: 'scale(1)'
    },
    '50%': {
      boxShadow: `0 0 30px ${isEnd ? '#0088ff' : '#ff0000'}`,
      transform: 'scale(1.2)'
    },
    '100%': {
      boxShadow: `0 0 15px ${isEnd ? '#0088ff' : '#ff0000'}`,
      transform: 'scale(1)'
    }
  }
}));

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
    backgroundRepeat: 'no-repeat'
  }
});

function About() {
  return (
    <AboutSection>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 4 }}>
        <Box sx={{ mb: 6 }}>
          <SectionTitle variant="h2" align="center">
            About <BlueText component="span" sx={{ fontSize: 'inherit' }}>The Tournament</BlueText>
          </SectionTitle>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 4, mb: 6 }}>
          <InfoCard sx={{ 
            flex: 1, 
            height: '100%',
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <SubSectionTitle variant="h4" sx={{ fontSize: '1.8rem' }}>
              Event Overview
            </SubSectionTitle>
            <ul style={{ padding: 0, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
              <BulletPoint>
                <Typography variant="body1" sx={{ color: '#ffffff', fontSize: '1.1rem' }}>
                  Welcome to Techken Showdown 2K25, an epic coding tournament inspired by the Tekken Game Universe
                </Typography>
              </BulletPoint>
              <BulletPoint>
                <Typography variant="body1" sx={{ color: '#ffffff', fontSize: '1.1rem' }}>
                  A groundbreaking hackathon bringing together the best minds in technology
                </Typography>
              </BulletPoint>
              <BulletPoint>
                <Typography variant="body1" sx={{ color: '#ffffff', fontSize: '1.1rem' }}>
                  Expected footfall of over 5000+ participants
                </Typography>
              </BulletPoint>
            </ul>
          </InfoCard>
          
          <InfoCard sx={{ 
            flex: 1, 
            height: '100%',
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <SubSectionTitle variant="h4" sx={{ fontSize: '1.8rem' }}>
              The Challenge
            </SubSectionTitle>
            <ul style={{ padding: 0, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
              <BulletPoint>
                <Typography variant="body1" sx={{ color: '#ffffff', fontSize: '1.1rem' }}>
                  Create innovative applications that capture Tekken's competitive spirit
                </Typography>
              </BulletPoint>
              <BulletPoint>
                <Typography variant="body1" sx={{ color: '#ffffff', fontSize: '1.1rem' }}>
                  Develop AI-powered combat systems and gaming experiences
                </Typography>
              </BulletPoint>
              <BulletPoint>
                <Typography variant="body1" sx={{ color: '#ffffff', fontSize: '1.1rem' }}>
                  Push technological boundaries in fighting game innovation
                </Typography>
              </BulletPoint>
            </ul>
          </InfoCard>
        </Box>

        <InfoCard sx={{ 
          mb: 6, 
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <SubSectionTitle variant="h4" align="center" sx={{ mb: 4 }}>
            Tournament Timeline
          </SubSectionTitle>
          <TimelineContainer>
            <Grid container justifyContent="space-between">
              <Grid item xs={6}>
                <TimelinePoint>
                  <Typography variant="h6" sx={{ 
                    color: '#ff0000', 
                    fontFamily: '"Tekken", sans-serif',
                    fontSize: '1.5rem',
                    textShadow: '0 0 10px rgba(255, 0, 0, 0.5)'
                  }}>
                    Online Round
                  </Typography>
                  <Typography sx={{ 
                    color: '#ffffff', 
                    textAlign: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 'bold'
                  }}>
                    Last Week of July
                  </Typography>
                </TimelinePoint>
              </Grid>
              <Grid item xs={6}>
                <TimelinePoint isEnd>
                  <Typography variant="h6" sx={{ 
                    color: '#0088ff', 
                    fontFamily: '"Tekken", sans-serif',
                    fontSize: '1.5rem',
                    textShadow: '0 0 10px rgba(0, 136, 255, 0.5)'
                  }}>
                    Final Showdown
                  </Typography>
                  <Typography sx={{ 
                    color: '#ffffff', 
                    textAlign: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 'bold'
                  }}>
                    First Week of August
                  </Typography>
                </TimelinePoint>
              </Grid>
            </Grid>
          </TimelineContainer>
        </InfoCard>

        <Box sx={{ 
          mt: 6, 
          width: '100%', 
          height: '600px',
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            boxShadow: '0 0 30px rgba(255, 0, 0, 0.4)',
            zIndex: 1
          }
        }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/2hPuRQz6IlM"
            title="Tekken 8 King vs Jin Kazama"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'relative', zIndex: 2, borderRadius: '12px' }}
          />
        </Box>
      </Container>
    </AboutSection>
  );
}

export default About;