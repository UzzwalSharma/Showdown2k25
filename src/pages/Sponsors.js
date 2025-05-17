import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const SponsorsSection = styled(Box)({
  backgroundImage: 'url("/images/elegant-palace.jpg")',
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

const SponsorCard = styled(Paper)(({ index, isVisible, position }) => ({
  background: 'rgba(0, 0, 0, 0.8)',
  padding: '2rem',
  borderRadius: '8px',
  border: '1px solid #ff0000',
  height: '100%',
  transition: 'all 0.8s ease',
  cursor: 'pointer',
  opacity: isVisible ? 1 : 0,
  transform: isVisible 
    ? `scale(1) translateX(${position * 120}%)` // Increased from 100% to 120%
    : 'scale(0.8) translateX(-120%)', // Adjusted to match
  '&:hover': {
    transform: `scale(1.05) translateX(${position * 120}%) translateY(-10px)`, // Adjusted to match
    border: '1px solid #0088ff',
    boxShadow: '0 0 30px rgba(0, 136, 255, 0.3)'
  }
}));

const SectionTitle = styled(Typography)({
  color: '#ff0000',
  fontFamily: '"Tekken", sans-serif',
  marginBottom: '2rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: '3rem'
});

const BlueText = styled('span')({
  color: '#0088ff'
});

function Sponsors() {
  const sponsors = [
    {
      name: "Microsoft Azure",
      logo: "/images/microsoft.png",
      description: "Cloud Computing Partner",
      tier: "Platinum Sponsor"
    },
    {
      name: "NVIDIA",
      logo: "/images/nvidia.png",
      description: "GPU Technology Partner",
      tier: "Diamond Sponsor"
    },
    {
      name: "Intel",
      logo: "/images/intel.png",
      description: "Processing Power Partner",
      tier: "Gold Sponsor"
    },
    {
      name: "AWS GameTech",
      logo: "/images/aws.png",
      description: "Gaming Infrastructure Partner",
      tier: "Platinum Sponsor"
    },
    {
      name: "Razer",
      logo: "/images/razer.png",
      description: "Gaming Hardware Partner",
      tier: "Gold Sponsor"
    },
    {
      name: "Discord",
      logo: "/images/discord.png",
      description: "Community Platform Partner",
      tier: "Silver Sponsor"
    }
  ];

  const [visibleSponsors, setVisibleSponsors] = useState([0, 1, 2]);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSponsors(prev => {
        let next;
        if (direction === 'right') {
          next = prev.map(index => (index + 1) % sponsors.length);
          if (next.includes(sponsors.length - 1)) {
            setDirection('left');
          }
        } else {
          next = prev.map(index => (index - 1 + sponsors.length) % sponsors.length);
          if (next.includes(0)) {
            setDirection('right');
          }
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [sponsors.length, direction]);

  return (
    <SponsorsSection>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        <SectionTitle variant="h2" align="center">
          Our <BlueText>Sponsors</BlueText>
        </SectionTitle>

        <Box sx={{ 
          position: 'relative', 
          overflow: 'hidden',
          height: '500px',
          display: 'flex',
          alignItems: 'center'
        }}>
          {sponsors.map((sponsor, index) => (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                width: '28%', // Reduced from 30%
                left: '36%', // Adjusted from 35%
                transition: 'all 0.8s ease'
              }}
            >
              <SponsorCard 
                index={index} 
                isVisible={visibleSponsors.includes(index)}
                position={visibleSponsors.indexOf(index) - 1}
              >
                <Box sx={{ 
                  height: '200px', 
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <Typography variant="h4" sx={{ 
                    color: '#ff0000',
                    fontFamily: '"Tekken", sans-serif',
                    textAlign: 'center',
                    textTransform: 'uppercase'
                  }}>
                    {sponsor.name}
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ 
                  color: '#0088ff',
                  textAlign: 'center',
                  mb: 2,
                  fontFamily: '"Tekken", sans-serif'
                }}>
                  {sponsor.tier}
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: '#ffffff',
                  textAlign: 'center',
                  fontSize: '1.1rem'
                }}>
                  {sponsor.description}
                </Typography>
              </SponsorCard>
            </Box>
          ))}
        </Box>
      </Container>
    </SponsorsSection>
  );
}

export default Sponsors;