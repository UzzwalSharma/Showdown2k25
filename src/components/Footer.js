import React, { useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import gsap from 'gsap';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DiscordIcon from '@mui/icons-material/Chat'; // Using chat icon as placeholder for Discord


const LogoText = styled(Typography)({
  fontFamily: '"Orbitron", sans-serif',
  fontWeight: 800,
  fontSize: '1.6rem',        // smaller size
  color: '#FFD700',          // gold/yellow color
  textShadow: `
    0 0 6px #FFD700,
    0 0 12px #FFA500,
    0 0 18px #FF8C00
  `,
  userSelect: 'none',
  letterSpacing: '0.08em',
});
const FooterWrapper = styled(Box)({
  background: '#0a0a0a',
  color: '#fff',
  position: 'relative',
  zIndex: 10,
  overflow: 'hidden',
  fontFamily: '"Orbitron", sans-serif',
});

const FooterTop = styled(Box)({
  padding: '8rem 0',
  minHeight: '300px', // or height: '400px' or more depending on content
  backgroundImage: 'url("/BGMI_images/pubg-2025-cb-1920x1080.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1,
  },
});


const FooterContainer = styled(Container)({
  display: 'grid',
  gap: '80px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
  position: 'relative',
  zIndex: 2,
});

const FooterTitle = styled(Typography)({
  fontSize: '1.2rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  marginBottom: '15px',
  color: '#FFA500',
  position: 'relative',
  paddingBottom: '10px',
  width: 'max-content',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: '3px',
    width: '50%',
    backgroundColor: '#FF4500',
  },
});

const FooterText = styled(Typography)({
  fontSize: '0.95rem',
  color: '#ccc',
  lineHeight: 1.6,
  marginBottom: '1rem',
});

const FooterLink = styled('a')({
  display: 'block',
  color: '#ddd',
  marginBottom: '8px',
  fontSize: '0.95rem',
  textDecoration: 'none',
  transition: 'all 0.3s',
  '&:hover': {
    color: '#FFA500',
    transform: 'translateX(4px)',
  },
});

const SocialIcon = styled(IconButton)({
  width: 40,
  height: 40,
  background: 'rgba(255,255,255,0.08)',
  backdropFilter: 'blur(6px)',
  marginRight: '10px',
  transition: 'all 0.3s',
  borderRadius: '8px',
  '&:hover': {
    background: '#FF4500',
    transform: 'translateY(-3px)',
  },
});

const DiscordButton = styled(Button)({
  backgroundColor: '#5865F2',
  color: '#fff',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  borderRadius: '8px',
  padding: '12px 24px',
  boxShadow: '0 0 15px #5865F2',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: '#4752c4',
    boxShadow: '0 0 25px #4752c4',
    transform: 'scale(1.05)',
  },
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const FooterBottom = styled(Box)({
  background: '#111',
  textAlign: 'center',
  padding: '1rem 0',
  borderTop: '2px solid #FF4500',
  color: '#888',
  fontSize: '0.9rem',
});

function Footer() {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <FooterWrapper>
      <FooterTop>
        <FooterContainer ref={ref}>
          {/* Brand + Social */}
          <Box>
          <LogoText>
  Hackground2k25
</LogoText>

            <FooterText>
              Our success in this battleground comes from code, passion, and a team forged in fire.
            </FooterText>
            <Box>
              <SocialIcon aria-label="Twitter">
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon aria-label="Instagram">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon aria-label="YouTube">
                <YouTubeIcon />
              </SocialIcon>
            </Box>
          </Box>

          {/* Useful Links */}
          <Box>
            <FooterTitle>Useful Links</FooterTitle>
            <FooterLink href="#">Tournaments</FooterLink>
            <FooterLink href="#">Help Center</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Use</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </Box>

          {/* Contact Info */}
          <Box>
            <FooterTitle>Contact Us</FooterTitle>
            <FooterText><strong>Location:</strong> 153 Hapur Gaming Arena, Delhi NCR</FooterText>
            <FooterText>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@techken.com" style={{ color: '#FFA500' }}>
                info@techken.com
              </a>
            </FooterText>
            <FooterText><strong>Phone:</strong> +91 9876543210</FooterText>
          </Box>

          {/* Discord Join */}
          <Box>
            <FooterTitle>Join Our Discord</FooterTitle>
            <DiscordButton
              variant="contained"
              href="https://discord.gg/yourserver"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<DiscordIcon />}
            >
              Connect Now
            </DiscordButton>
          </Box>
        </FooterContainer>
      </FooterTop>

      <FooterBottom>
        <Typography>
          &copy; 2025 Hackground 2K25. All rights reserved. | Built with{' '}
          <span className="animate-pulse">💖</span> by <strong>Ujjwal & Nishchay</strong>
        </Typography>
      </FooterBottom>
    </FooterWrapper>
  );
}

export default Footer;
