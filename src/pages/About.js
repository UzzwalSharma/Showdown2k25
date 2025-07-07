import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion as m } from 'framer-motion';

const AboutSection = styled(Box)({
  position: 'relative',
  width: '100%',
  paddingTop: '120px',
  paddingBottom: '80px',
  zIndex: 1,
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url("/heronewimg.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.85,
    zIndex: -2,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9))',
    zIndex: -1,
  },
});

const FlexContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '60px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
    textAlign: 'center',
    gap: '30px',
  },
}));

const ContentWrapper = styled(m(Box))({
  background: '#1e1e2e',
  color: '#fff',
  padding: '40px 30px',
  borderRadius: '0',
  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
  flex: 1,
  clipPath: 'polygon(0 0, 94% 0, 100% 10%, 100% 100%, 6% 100%, 0 90%)',
  border: '2px solid #ff6600',
  transition: '0.4s ease-in-out',
  '&:hover': {
    boxShadow: `
      0 0 12px #ff6600,
      0 0 25px #ff6600
    `,
  },
});

const Subtitle = styled(Typography)({
  color: '#ff6600',
  fontFamily: 'Oswald, sans-serif',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  marginBottom: '12px',
});

const Title = styled(Typography)({
  fontFamily: 'Oswald, sans-serif',
  fontSize: '2rem',
  fontWeight: 700,
  lineHeight: 1.3,
  textTransform: 'uppercase',
  marginBottom: '16px',
  '& strong': {
    color: '#ff6600',
  },
});

const Paragraph = styled(Typography)({
  color: '#d3d3d3',
  fontSize: '1rem',
  lineHeight: 1.7,
  letterSpacing: '0.5px',
  marginBottom: '16px',
});

const BottomText = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#d3d3d3',
  fontSize: '1rem',
  letterSpacing: '0.5px',
  justifyContent: 'flex-start',
});

const Icon = styled('ion-icon')({
  color: '#ff6600',
  fontSize: '25px',
});

const SideImage = styled(m('img'))({
  width: '100%',
  maxWidth: '480px',
  height: 'auto',
  borderRadius: '0',
  clipPath: 'polygon(6% 0, 100% 0, 100% 90%, 94% 100%, 0 100%, 0 10%)',
  boxShadow: '0 0 20px rgba(255, 102, 0, 0.4)',
  transition: '0.3s ease',
  '&:hover': {
    boxShadow: '0 0 40px rgba(255, 102, 0, 0.6)',
  },
});

export default function About() {
  return (
    <AboutSection id="about">
      <Container maxWidth="lg">
        <FlexContent>
          {/* Text Content */}
          <ContentWrapper
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Subtitle>HackGrounds India 2K25</Subtitle>
            <Title>
              The Ultimate <strong>Code Clash</strong>
            </Title>
            <Paragraph>
              Join the battleground where logic meets lightning speed. Two rounds — Online & Showdown — one winner. Gear up for the fiercest coding war of the year.
            </Paragraph>
            <BottomText>
              <Icon name="arrow-forward-circle-outline" />
              <span>Code. Conquer. Celebrate.</span>
            </BottomText>
          </ContentWrapper>

          {/* Image Content */}
          <SideImage
            src="/images/Gemini_Generated_Image_dsomg6dsomg6dsom.png"
            alt="HackGround Warrior"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </FlexContent>
      </Container>
    </AboutSection>
  );
}
