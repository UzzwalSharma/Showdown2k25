import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const SponsorsSection = styled(Box)({
  backgroundImage: "url('BGMI_images/pubg-mobile-june-2021-revenue.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 100%)",
  },
});

const glowYellow = '0 0 12px #FFD700, 0 0 24px #FFD700';

const SponsorCard = styled(Paper)(({ index, isVisible, position }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  padding: '2rem',
  borderRadius: '12px',
  border: '2px solid #FFD700',
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
    borderColor: '#FFEA00',
    boxShadow: glowYellow,
  },
  '&::before': {
    content: `"${index === 0 ? 'Platinum' : index === 1 ? 'Diamond' : index === 2 ? 'Gold' : 'Sponsor'}"`,
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'linear-gradient(135deg, #FFEA00, #FFD700)',
    color: '#111',
    fontWeight: 'bold',
    padding: '0.4rem 0.8rem',
    fontSize: '0.7rem',
   fontFamily: '"Oswald", sans-serif',
    clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)',
    zIndex: 2,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: glowYellow,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '60px',
    height: '60px',
    backgroundColor: '#FFD700',
    clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
    zIndex: 1,
  },
}));

const SectionTitle = styled(Typography)({
  color: '#FFD700',
  fontFamily: '"Oswald", sans-serif',
  marginBottom: '2rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: '3rem',
  textAlign: 'center',
});

const YellowText = styled('span')({
  background: 'linear-gradient(90deg, #FFEA00, #FFD700)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  fontFamily: '"Oswald", sans-serif',
});



function Sponsors() {
  const sponsors = [
    {
      name: "Unstop",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/logos/blue/Unstop-Logo-Blue-Extra-Large.jpg",
     
     
    },
    // {
    //   name: "Github",
    //   logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPk0CDiJ70gAStxkNBNzIRLJr6XI_zeiOAECxoPu67ObNCD0P5GwEQuP3kDJ7o8lp1rQc&usqp=CAU",
     
    // },
    {
      name: "Gen.xyz",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1g07-ryq2kHE2EknOFU-pfqYtvYOwC8qVNw&s",
   
    },
    {
      name: "Interview Buddy",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJrquzHwOxN0bUKnchqkQIy7QhkvzUftsDb70tbF-TbzdwohwOLaZukMkKY6CgJacQ45M&usqp=CAU",
   
    },
    {
      name: "Physicswallah",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA1ijYJKiY82YdiwN_8p-Ok7VnokZ7hmw4A6czeO_QWMrEa_aAocj0cwe5ExbO0UsLtXk&usqp=CAU",
    
    },
    
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
    }, 3500);

    return () => clearInterval(interval);
  }, [sponsors.length, direction]);

  return (
    <SponsorsSection>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        <SectionTitle variant="h2">
          Our <YellowText>Sponsors</YellowText>
        </SectionTitle>

        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            height: { xs: 'auto', md: '500px' },
            display: { xs: 'flex', md: 'block' },
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
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
                mb: { xs: 4, md: 0 },
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
                    background: 'rgba(255, 255, 255, 0.07)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    p: 2,
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
    color: '#FFEA00',
    textAlign: 'center',
    mb: 2,
    fontFamily: '"Oswald", sans-serif',
    fontSize: '1.1rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  }}
>
  {sponsor.tier}
</Typography>

<Typography
  variant="body1"
  sx={{
    color: '#fffde7',
    textAlign: 'center',
    fontSize: '1.05rem',
    fontWeight: 500,
    fontFamily: '"Oswald", sans-serif',
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
