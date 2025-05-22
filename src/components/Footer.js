import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import gsap from 'gsap';

const FooterSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#0c0c0c',
  backgroundImage: 'url("/images/Gemini_Generated_Image_l8nylul8nylul8ny.png")', // Replace with your image path
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center -190px',
  color: '#ffffff',
  padding: '3rem 0',
  textAlign: 'center',
  perspective: '1000px',
  borderTop: '3px solid #ff0000',
  boxShadow: '0 -5px 20px rgba(255, 0, 0, 0.4)',
  zIndex: 1,
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.7)', // Dark overlay
    zIndex: -1,
  },
}));



const FooterTitle = styled(Typography)({
  color: '#ff0000',
  fontFamily: '"Tekken", sans-serif',
  fontSize: '2rem',
  marginBottom: '1rem',
  textShadow: '0 0 8px #ff0000',
  transform: 'rotateX(10deg)',
});

const FooterLink = styled('a')({
  color: '#ffd700',
  fontFamily: '"Tekken", sans-serif',
  fontSize: '1rem',
  marginBottom: '0.5rem',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'block',
  textAlign: 'left',
  marginLeft: 'auto',
  marginRight: 'auto',
  transition: 'transform 0.3s, text-shadow 0.3s',
  '&:hover': {
    textShadow: '0 0 10px #ffd700',
    transform: 'scale(1.1) translateZ(5px)',
  },
});

const MadeWithLove = styled(Typography)({
  marginTop: '2rem',
  fontFamily: 'sans-serif',
  fontSize: '1rem',
  color: '#ffd700',
  fontWeight: 'bolder',
  textShadow: '0 0 6px #ffdd57',
  transform: 'rotateX(10deg)',
});

function Footer() {
  const loveRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      loveRef.current,
      { scale: 0.5, opacity: 0, y: 50 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        ease: 'back.out(1.7)',
        duration: 1.5,
        delay: 0.3,
      }
    );
  }, []);

  return (
    <FooterSection>
      <Container maxWidth="lg">
        <FooterTitle variant="h6">Techken Showdown 2K25</FooterTitle>
        <Typography variant="body2" gutterBottom>
          The ultimate coding tournament inspired by the legendary Tekken fighting game series.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <IconButton href="https://twitter.com" target="_blank" sx={{ color: '#1DA1F2' }}>
            <TwitterIcon />
          </IconButton>
          <IconButton href="https://discord.com" target="_blank" sx={{ color: '#5865F2' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
              <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58..." />
            </svg>
          </IconButton>
          <IconButton href="https://www.instagram.com/tsd.2k25_hackathon?igsh=aXJ5bTBtZTRiZ2Vr&utm_source=qr" target="_blank" sx={{ color: '#9146FF' }}>
            <InstagramIcon />
          </IconButton>
          <IconButton href="https://youtube.com" target="_blank" sx={{ color: '#FF0000' }}>
            <YouTubeIcon />
          </IconButton>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#team">Team</FooterLink>
            <FooterLink href="#timeline">Timeline</FooterLink>
            <FooterLink href="#sponsors">Sponsors</FooterLink>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FooterLink href="#judging">Judging Criteria</FooterLink>
            <FooterLink href="#rules">Rules</FooterLink>
            <FooterLink href="#prizes">Prizes</FooterLink>
            <FooterLink href="#faqs">FAQs</FooterLink>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2">
              <a href="mailto:hackathon@tekken.com" style={{ color: '#ffd700', textDecoration: 'none' }}>
                hackathon@tekken.com
              </a>
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 2 }}>
          © 2025 Techken Showdown 2K25 Hackathon. All Rights Reserved.
        </Typography>
        <MadeWithLove ref={loveRef}>
          Made with ❤️ by Ujjwal Sharma & Nishchay Chaurasia
        </MadeWithLove>
      </Container>
    </FooterSection>
  );
}

export default Footer;
