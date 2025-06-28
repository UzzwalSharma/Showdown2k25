import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const PrizesSection = styled(Box)({
  backgroundImage: 'url("/BGMI_images/pubg-sniper-mode-0o-1920x1080.jpg")',
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
  position: 'relative',
  width: '320px',
  height: '340px',
  padding: '2rem',
  background: 'rgba(255, 255, 255, 0.08)',
  borderRadius: '24px',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: `
    /* Soft ambient shadow */
    0 8px 15px rgba(0, 0, 0, 0.4),
    /* Colored glow based on tier */
    0 0 15px 3px ${tier === 'first' ? '#ffd700cc' : tier === 'second' ? '#c0c0c0cc' : tier === 'third' ? '#cd7f32cc' : '#ff0000cc'},
    /* Inner shadow for depth */
    inset 0 -5px 10px rgba(0, 0, 0, 0.3),
    inset 0 5px 8px rgba(255, 255, 255, 0.15)
  `,
  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  color: '#fff',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
  transformStyle: 'preserve-3d',

  '&:hover': {
    transform: 'translateY(-20px) scale(1.05) perspective(600px) rotateX(8deg)',
    boxShadow: `
      0 25px 40px rgba(0, 0, 0, 0.7),
      0 0 25px 8px ${tier === 'first' ? '#ffd700bb' : tier === 'second' ? '#c0c0c0bb' : tier === 'third' ? '#cd7f32bb' : '#ff0000bb'},
      inset 0 -10px 15px rgba(0, 0, 0, 0.45),
      inset 0 10px 12px rgba(255, 255, 255, 0.2)
    `,
    zIndex: 10,
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: tier === 'first'
      ? 'radial-gradient(circle, #ffd70033, transparent 60%)'
      : tier === 'second'
      ? 'radial-gradient(circle, #c0c0c033, transparent 60%)'
      : tier === 'third'
      ? 'radial-gradient(circle, #cd7f3233, transparent 60%)'
      : 'radial-gradient(circle, #ff000033, transparent 60%)',
    animation: 'rotateLight 6s linear infinite',
    zIndex: 0,
    filter: 'blur(40px)',
  },

  '&::after': {
    content: tier
      ? `"${tier === 'first' ? 'CHAMPION' : tier === 'second' ? 'RUNNER-UP' : tier === 'third' ? '3RD PLACE' : 'SPECIAL'}"`
      : '"SPECIAL"',
    position: 'absolute',
    top: 0,
    right: 0,
    background: tier === 'first'
      ? '#ffd700'
      : tier === 'second'
      ? '#c0c0c0'
      : tier === 'third'
      ? '#cd7f32'
      : '#0088ff',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '0.75rem',
    padding: '5px 12px',
    clipPath: 'polygon(100% 0, 100% 100%, 30% 100%, 0 50%, 30% 0)',
    zIndex: 2,
    boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
    textShadow: '0 0 3px rgba(255,255,255,0.6)',
  },

  '& *': {
    zIndex: 1,
  },

  '@keyframes rotateLight': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
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