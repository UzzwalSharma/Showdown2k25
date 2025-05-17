import React from 'react';
import { Container, Typography, Box, Grid, Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
  background: 'rgba(26, 26, 26, 0.9)',
  color: '#ffffff',
  padding: '2rem',
  borderRadius: '10px',
  border: '1px solid rgba(255, 0, 0, 0.3)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  }
});

const HeroSection = styled(Box)({
  backgroundImage: 'url("/images/cyber-arena.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 100%)',
  }
});

function Home() {
  return (
    <>
      <Box sx={{ mt: 4, mb: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <StyledCard>
                <Typography variant="h4" gutterBottom sx={{ color: '#ff0000', fontFamily: '"Tekken", sans-serif' }}>
                  The Tournament
                </Typography>
                <Typography variant="body1">
                  The Techken Showdown 2K25 Hackathon is a 48-hour coding competition where developers, designers, and innovators come together to create amazing projects inspired by the legendary Tekken fighting game series.
                </Typography>
              </StyledCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledCard>
                <Typography variant="h4" gutterBottom sx={{ color: '#0088ff', fontFamily: '"Tekken", sans-serif' }}>
                  The Theme
                </Typography>
                <Typography variant="body1">
                  This year's theme is "The King of Techken Showdown 2K25 Tournament" - celebrating the legacy of the Tekken fighting game series. Projects should incorporate elements of fighting games, competition, or martial arts in innovative ways.
                </Typography>
              </StyledCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 8, background: 'rgba(0, 0, 0, 0.8)' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom sx={{ color: '#ffd700', fontFamily: '"Tekken", sans-serif', mb: 4 }}>
            Prizes & Rewards
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "King of Techken Showdown 2K25",
                prize: "$5,000",
                extras: ["Tekken 8 Collector's Edition", "Interview feature on Tekken website", "Mentorship with Bandai Namco devs"]
              },
              {
                title: "Devil's Advocate",
                prize: "$2,500",
                extras: ["Tekken 8 Deluxe Edition", "High-end gaming peripherals"]
              },
              {
                title: "Techken Showdown 2K25",
                prize: "$1,000",
                extras: ["Tekken 8 Standard Edition", "Tekken merchandise pack"]
              }
            ].map((reward, index) => (
              <Grid item xs={12} md={4} key={index}>
                <StyledCard>
                  <Typography variant="h5" gutterBottom sx={{ color: '#ffd700', fontFamily: '"Tekken", sans-serif' }}>
                    {reward.title}
                  </Typography>
                  <Typography variant="h4" sx={{ color: '#ff0000', mb: 2 }}>
                    {reward.prize}
                  </Typography>
                  {reward.extras.map((extra, i) => (
                    <Typography key={i} variant="body2" sx={{ color: '#ffffff80' }}>
                      • {extra}
                    </Typography>
                  ))}
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Home;