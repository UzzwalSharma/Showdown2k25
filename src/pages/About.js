import React from 'react';
import Scrollzoom from '../components/Scrollzoom'; // ✅ relative path within src/
import TournamentAboutSection from '../components/TournamentAboutSection.jsx';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
// import Timer from '/Timer.jsx';
import Timer from '../components/Timer.jsx';
import AnimatedTitle from '../components/Animated_Title.jsx';
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

// const SectionTitle = styled(Typography)({
//   color: '#ff0000',
//   fontFamily: '"Tekken", sans-serif',
//   marginBottom: '1rem',
//   textTransform: 'uppercase',
//   letterSpacing: '2px',
//   fontSize: '3rem'  // Increased font size for main title
// });

const SubSectionTitle = styled(Typography)({
  color: '#ff0000',
  fontFamily: '"Tekken", sans-serif',
  marginBottom: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: '2rem'  // Consistent size for subsection titles
});

// const BlueText = styled('span')({
//   color: '#0088ff'
// });

const TimelineContainer = styled(Box)({
  width: '100%',
  padding: '0rem 0rem',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '100px',  // Adjusted left margin
    right: '40px',  // Adjusted right margin
    width: 'calc(100% - 210px)',  // Adjusted width to align with points
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
  marginTop: '-12px', // Adjusted to align with the line
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

// const BulletPoint = styled('li')({
//   listStyle: 'none',
//   position: 'relative',
//   paddingLeft: '2rem',
//   marginBottom: '1rem',
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     left: 0,
//     top: '50%',
//     transform: 'translateY(-50%)',
//     width: '20px',
//     height: '20px',
//     backgroundImage: 'url("/images/BulletPunch.jpg")',
//     backgroundSize: 'contain',
//     backgroundRepeat: 'no-repeat'
//   }
// });

function About() {
  return (
    <AboutSection>
      <TournamentAboutSection/>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 4 }}>
        {/* <Box sx={{ mb: 6 }}>
          <SectionTitle variant="h2" align="center">
            About <BlueText component="span" sx={{ fontSize: 'inherit' }}>The Tournament</BlueText>
          </SectionTitle>
        </Box> */}
        
         {/* <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: 4,
    mb: 6,
  }}
>

          ye overview wala card hai
          
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

ye challenge wala card hai 


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
        </Box> */}

  <InfoCard
  sx={{
    mb: 6,
    background: 'rgba(0, 0, 0, 0.85)', // dark translucent background
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: { xs: 2, md: 4 },
    py: { xs: 4, md: 6 },

      clipPath: `polygon(
      5% 0%, 95% 0%,       /* top edge */
      100% 5%, 100% 95%,   /* right edge */
      95% 100%, 5% 100%,   /* bottom edge */
      0% 95%, 0% 5%        /* left edge */
    )`,

    // Neon border effect: bright glowing cyan/neon color
    border: '2px solid rgba(0, 136, 255, 0.95)',
    boxShadow: `
      0 0 8px #00fff7,
      0 0 20px #00fff7,
      0 0 30px #00fff7,
      inset 0 0 10px #00fff7
    `,

    // Smooth scaling and glowing on hover
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: `
        0 0 15px #00fff7,
        0 0 40px #00fff7,
        0 0 50px #00fff7,
        inset 0 0 15px #00fff7
      `,
      borderColor: '#00fff7',
    },
  }}
>
  <SubSectionTitle variant="h4" align="center" sx={{ mb: 4 }}>
    Tournament Timeline
  </SubSectionTitle>

  <TimelineContainer>
    <Grid
      container
      spacing={4}
      direction={{ xs: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={12} md={6}>
        <TimelinePoint>
          <Typography
            variant="h6"
            sx={{
              color: '#ff0000',
              fontFamily: '"Tekken", sans-serif',
              fontSize: { xs: '1.3rem', md: '1.5rem' },
              textShadow: '0 0 10px rgba(255, 0, 0, 0.5)',
              textAlign: 'center',
            }}
          >
            Online Round
          </Typography>
          <Typography
            sx={{
              color: '#ffffff',
              textAlign: 'center',
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontWeight: 'bold',
              mt: 1,
            }}
          >
            Last Week of July
          </Typography>
        </TimelinePoint>
      </Grid>

      <Grid item xs={12} md={6}>
        <TimelinePoint isEnd>
          <Typography
            variant="h6"
            sx={{
              color: '#0088ff',
              fontFamily: '"Tekken", sans-serif',
              fontSize: { xs: '1.3rem', md: '1.5rem' },
              textShadow: '0 0 10px rgba(0, 136, 255, 0.5)',
              textAlign: 'center',
            }}
          >
            Final Showdown
          </Typography>
          <Typography
            sx={{
              color: '#ffffff',
              textAlign: 'center',
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontWeight: 'bold',
              mt: 1,
            }}
          >
            First Week of August
          </Typography>
        </TimelinePoint>
      </Grid>
    </Grid>
  </TimelineContainer>
</InfoCard>


       
    
  
<AnimatedTitle
  title="<b>GET<br/>READY<br/>FOR<br/><br />The Ultimate Coding Tournament</b>"
  containerClass="mb-10"
/>




  <Scrollzoom/>

      </Container>
    </AboutSection>
  );
}

export default About;