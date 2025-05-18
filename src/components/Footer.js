import React from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterSection = styled(Box)({
  backgroundImage: 'url("/images/footer.jpg")', // Add your footer background image here
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#ffffff',
  padding: '2rem 0',
  textAlign: 'center',
});

const FooterTitle = styled(Typography)({
  color: '#ff0000',
  fontFamily: '"Tekken", sans-serif',
  fontSize: '1.8rem',
  marginBottom: '1rem',
});

const FooterLink = styled('a')({
  color: '#ffd700',
  fontFamily: '"Tekken", sans-serif',
  fontSize: '1rem',
  marginBottom: '0.5rem',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
  display: 'block',
  textAlign: 'left', // Align text to the left
  marginLeft: 'auto', // Align links vertically
  marginRight: 'auto', // Center the links horizontally
});

function Footer() {
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
              <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58 0-.287-.011-1.244-.017-2.444-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.303-5.467-1.332-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.005-.404 1.02.005 2.048.138 3.006.404 2.292-1.552 3.298-1.23 3.298-1.23.654 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.921.43.371.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .321.218.694.824.576C20.565 21.796 24 17.298 24 12c0-6.628-5.372-12-12-12z"/>
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
            <Typography variant="body2">Nishchay Chaurasia</Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 2 }}>
          © 2025 Techken Showdown 2K25 Hackathon. All Rights Reserved.
        </Typography>
      </Container>
    </FooterSection>
  );
}

export default Footer;