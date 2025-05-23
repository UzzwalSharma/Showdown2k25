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
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
  transition: 'all 0.8s ease',
  cursor: 'pointer',
  opacity: isVisible ? 1 : 0,
  transform: isVisible
    ? `scale(1) translateX(${position * 120}%)`
    : 'scale(0.8) translateX(-120%)',
  '&:hover': {
    transform: `scale(1.05) translateX(${position * 120}%) translateY(-10px)`,
    border: '1px solid #0088ff',
    boxShadow: '0 0 30px rgba(0, 136, 255, 0.3)',
  },
  // Top-left badge
  '&::before': {
    content: `"⭐ ${index === 0 ? 'Platinum' : index === 1 ? 'Diamond' : index === 2 ? 'Gold' : 'Sponsor'}"`,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#0088ff',
    color: '#fff',
    fontWeight: 'bold',
    padding: '0.3rem 0.7rem',
    fontSize: '0.75rem',
    fontFamily: '"Tekken", sans-serif',
    clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)',
    zIndex: 2,
  },
  // Bottom-right clipped accent
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '60px',
    height: '60px',
    backgroundColor: '#ff0000',
    clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
    zIndex: 1,
  },
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
      logo: "https://i0.wp.com/startupnews.fyi/wp-content/uploads/2024/01/Unstop-Logo.png?ssl=1",
      description: "Platform Partner",
      tier: "Platinum Sponsor"
    },
    {
      name: "NVIDIA",
      logo: "/images/nvidia.webp",
      description: "GPU Technology Partner",
      tier: "Diamond Sponsor"
    },
    {
      name: "Intel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/250px-Intel_logo_%282006-2020%29.svg.png",
      description: "Processing Power Partner",
      tier: "Gold Sponsor"
    },
    {
      name: "AWS GameTech",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2pjb1FnBCnn-Z6BL7dQ1rzqOvaAnVFDWeVg&s",
      description: "Gaming Infrastructure Partner",
      tier: "Platinum Sponsor"
    },
    {
      name: "Razer",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3oo4tEKtG8OAGNQTcSjKYvC0ilW8-5h1Kqw&s",
      description: "Venue Partner",
      tier: "Gold Sponsor"
    },
    {
      name: "Discord",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZA1OIJivenlamVPe42zVb-hKvzCv13swsFQ&s",
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

    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: { xs: 'auto', md: '500px' }, // Auto height on small devices
        display: { xs: 'flex', md: 'block' }, // Flex on small, block on md+
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4, // spacing between cards on small screens
      }}
    >
      {sponsors.map((sponsor, index) => (
        <Box
          key={index}
          sx={{
            position: { xs: 'relative', md: 'absolute' },
            width: { xs: '90%', sm: '45%', md: '28%' },
            left: { xs: 'auto', md: '36%' },
            transition: 'all 0.8s ease',
            mb: { xs: 4, md: 0 }, // margin bottom on small screens for spacing
          }}
        >
          <SponsorCard
            index={index}
            isVisible={visibleSponsors.includes(index)}
            position={visibleSponsors.indexOf(index) - 1}
          >
        <Box
  sx={{
    height: '200px',
    mb: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '4px',
    overflow: 'hidden',
    p: 2
  }}
>
  <img
    src={sponsor.logo}
    alt={sponsor.name}
    style={{
      maxHeight: '100%',
      maxWidth: '100%',
      objectFit: 'contain',
    }}
  />
</Box>

            <Typography
              variant="h6"
              sx={{
                color: '#0088ff',
                textAlign: 'center',
                mb: 2,
                fontFamily: '"Tekken", sans-serif',
              }}
            >
              {sponsor.tier}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#ffffff',
                textAlign: 'center',
                fontSize: '1.1rem',
              }}
            >
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