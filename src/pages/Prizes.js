import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const PrizesSection = styled(Box)({
  backgroundImage: 'url("/images/cyber-arena.jpg")',
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

const PrizeCard = styled(Paper)(({ tier }) => ({
  background: 'rgba(0, 0, 0, 0.8)',
  padding: '1.5rem',
  borderRadius: '12px',
  border: '2px solid',
  borderColor: tier === 'first' ? '#ffd700' : tier === 'second' ? '#c0c0c0' : tier === 'third' ? '#cd7f32' : '#ff0000',
  width: '300px',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'all 0.4s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  margin: '0 auto',
  '&:hover': {
    transform: 'translateY(-15px) scale(1.02)',
    boxShadow: tier === 'first' 
      ? '0 20px 30px rgba(255, 215, 0, 0.3), 0 0 50px rgba(255, 215, 0, 0.1)' 
      : tier === 'second' 
      ? '0 20px 30px rgba(192, 192, 192, 0.3), 0 0 50px rgba(192, 192, 192, 0.1)' 
      : tier === 'third' 
      ? '0 20px 30px rgba(205, 127, 50, 0.3), 0 0 50px rgba(205, 127, 50, 0.1)'
      : '0 20px 30px rgba(255, 0, 0, 0.3), 0 0 50px rgba(255, 0, 0, 0.1)',
    '&::before': {
      transform: 'translateY(0)',
      opacity: 0.15
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: tier === 'first' 
      ? 'linear-gradient(135deg, #ffd700, #fff6a6, #ffd700)' 
      : tier === 'second' 
      ? 'linear-gradient(135deg, #c0c0c0, #ffffff, #c0c0c0)' 
      : tier === 'third' 
      ? 'linear-gradient(135deg, #cd7f32, #ffc8a6, #cd7f32)'
      : 'linear-gradient(135deg, #ff0000, #ff8888, #ff0000)',
    opacity: 0,
    transform: 'translateY(100%)',
    transition: 'all 0.4s ease-in-out',
    zIndex: 0
  }
}));

const SectionTitle = styled(Typography)({
  color: '#ff0000',
  fontFamily: '"Tekken", sans-serif',
  marginBottom: '2rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: '3.5rem'  // Increased from 3rem
});

function Prizes() {
  const mainPrizes = [
    {
      tier: 'first',
      title: ["King of", "Techken Showdown 2K25"],
      prize: "$5,000",
      extras: ["Tekken 8 Collector's Edition", "Interview feature on Tekken website", "Mentorship with Bandai Namco devs"]
    },
    {
      tier: 'second',
      title: ["Devil's", "Advocate"],
      prize: "$2,500",
      extras: ["Tekken 8 Deluxe Edition", "High-end gaming peripherals"]
    },
    {
      tier: 'third',
      title: ["Techken", "Showdown 2K25"],
      prize: "$1,000",
      extras: ["Tekken 8 Standard Edition", "Tekken merchandise pack"]
    }
  ];

  const specialPrizes = [
    {
      title: ["Most Innovative", "Combat System"],
      prize: "$1,500",
      extras: ["Gaming Monitor", "Special Recognition"]
    },
    {
      title: ["Best AI", "Implementation"],
      prize: "$1,500",
      extras: ["GPU Upgrade Kit", "Technical Excellence Certificate"]
    },
    {
      title: ["Best User", "Experience"],
      prize: "$1,500",
      extras: ["Premium Software Licenses", "UX Design Workshop Access"]
    }
  ];

  return (
    <PrizesSection>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        <SectionTitle variant="h2" align="center">
          Prize <span style={{ color: '#0088ff' }}>Pool</span>
        </SectionTitle>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" align="center" sx={{ 
            color: '#ffd700', 
            fontFamily: '"Tekken", sans-serif',
            mb: 4,
            textShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
            fontSize: '2.5rem'  // Added explicit font size
          }}>
            Main Tournament Prizes
          </Typography>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            {mainPrizes.map((prize, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                <PrizeCard tier={prize.tier}>
                  <Box sx={{ 
                    position: 'relative', 
                    zIndex: 1,
                    flex: '0 0 auto'
                  }}>
                    <Typography variant="h6" sx={{ 
                      color: prize.tier === 'first' ? '#ffd700' : prize.tier === 'second' ? '#c0c0c0' : '#cd7f32',
                      fontFamily: '"Tekken", sans-serif',
                      textAlign: 'center',
                      lineHeight: 1.2,
                      fontSize: '1.3rem'  // Increased from 1.1rem
                    }}>
                      {prize.title[0]}
                    </Typography>
                    <Typography variant="h6" sx={{ 
                      color: prize.tier === 'first' ? '#ffd700' : prize.tier === 'second' ? '#c0c0c0' : '#cd7f32',
                      fontFamily: '"Tekken", sans-serif',
                      textAlign: 'center',
                      fontSize: '1.3rem'  // Increased from 1.1rem
                    }}>
                      {prize.title[1]}
                    </Typography>
                  </Box>
                  <Typography variant="h4" sx={{ 
                    color: '#ff0000',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1,
                    fontSize: '2.3rem',  // Increased from 2rem
                    textShadow: '0 0 20px rgba(255, 0, 0, 0.3)'
                  }}>
                    {prize.prize}
                  </Typography>
                  <Box sx={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    {prize.extras.map((extra, i) => (
                      <Typography key={i} sx={{ 
                        color: '#ffffff',
                        textAlign: 'center',
                        mb: 0.5,
                        position: 'relative',
                        zIndex: 1,
                        fontSize: '1rem'  // Increased from 0.85rem
                      }}>
                        • {extra}
                      </Typography>
                    ))}
                  </Box>
                </PrizeCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box>
          <Typography variant="h4" align="center" sx={{ 
            color: '#0088ff', 
            fontFamily: '"Tekken", sans-serif',
            mb: 4,
            textShadow: '0 0 20px rgba(0, 136, 255, 0.3)',
            fontSize: '2.5rem'  // Added explicit font size
          }}>
            Special Category Prizes
          </Typography>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            {specialPrizes.map((prize, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                <PrizeCard>
                  <Box sx={{ 
                    position: 'relative', 
                    zIndex: 1,
                    flex: '0 0 auto'
                  }}>
                    <Typography variant="h6" sx={{ 
                      color: prize.tier === 'first' ? '#ffd700' : prize.tier === 'second' ? '#c0c0c0' : '#cd7f32',
                      fontFamily: '"Tekken", sans-serif',
                      textAlign: 'center',
                      fontSize: '1.1rem'
                    }}>
                      {prize.title[0]}
                    </Typography>
                    <Typography variant="h6" sx={{ 
                      color: prize.tier === 'first' ? '#ffd700' : prize.tier === 'second' ? '#c0c0c0' : '#cd7f32',
                      fontFamily: '"Tekken", sans-serif',
                      textAlign: 'center',
                      fontSize: '1.1rem'
                    }}>
                      {prize.title[1]}
                    </Typography>
                  </Box>
                  <Typography variant="h4" sx={{ 
                    color: '#ff0000',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1,
                    fontSize: '2rem',
                    textShadow: '0 0 20px rgba(255, 0, 0, 0.3)'
                  }}>
                    {prize.prize}
                  </Typography>
                  <Box sx={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    {prize.extras.map((extra, i) => (
                      <Typography key={i} sx={{ 
                        color: '#ffffff',
                        textAlign: 'center',
                        mb: 0.5,
                        position: 'relative',
                        zIndex: 1,
                        fontSize: '0.85rem'
                      }}>
                        • {extra}
                      </Typography>
                    ))}
                  </Box>
                </PrizeCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </PrizesSection>
  );
}

export default Prizes;