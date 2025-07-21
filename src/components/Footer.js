import React, { useRef, useEffect, useState } from 'react';
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
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DiscordIcon from '@mui/icons-material/Chat';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const LogoText = styled(Typography)({
  fontFamily: '"Orbitron", sans-serif',
  fontWeight: 900,
  fontSize: '1.8rem',
  color: '#FFD700',
  textShadow: `
    0 0 6px #FFD700,
    0 0 10px #FFA500,
    0 0 16px #FF8C00
  `,
  userSelect: 'none',
  letterSpacing: '0.08em',
});

const FooterWrapper = styled(Box)({
  background: "#0e0e0e",
  color: "#fff",
  fontFamily: '"Orbitron", sans-serif',
  paddingTop: "6rem",
  paddingBottom: "3rem",
  position: "relative",
  boxShadow: "inset 4px 4px 8px #0a0a0a, inset -4px -4px 8px #141414",
  // Parallax background image
  backgroundImage:
    'url("https://res.cloudinary.com/djer7pmxt/image/upload/v1753117378/lqwhfretoqbntb9yo579_ozscjp.webp")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed", // Parallax effect
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "rgba(14,14,14,0.88)", // dark overlay for readability
    zIndex: 2,
    pointerEvents: "none",
  },
  // Ensure content is above overlay
  "> *": {
    position: "relative",
    zIndex: 3,
  },
});

const FooterContainer = styled(Container)({
  display: 'grid',
  gap: '60px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
  padding: '0 1rem',
});

const FooterTitle = styled(Typography)({
  fontSize: '1.1rem',
  fontWeight: 800,
  textTransform: 'uppercase',
  marginBottom: '1rem',
  color: '#ff7b00',
  textShadow: '0 0 6px #ff7b00',
});

const FooterText = styled(Typography)({
  fontSize: '0.95rem',
  color: '#bbb',
  lineHeight: 1.6,
  marginBottom: '0.8rem',
});

const FooterLink = styled('a')({
  fontSize: '0.95rem',
  color: '#ccc',
  display: 'block',
  marginBottom: '0.5rem',
  textDecoration: 'none',
  transition: '0.3s',
  '&:hover': {
    color: '#FFA500',
    transform: 'translateX(5px)',
  },
});

const SocialIcon = styled(IconButton)({
  width: 42,
  height: 42,
  background: 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '10px',
  marginRight: '12px',
  color: '#fff',
  transition: '0.3s ease',
  '&:hover': {
    backgroundColor: '#ff7b00',
    transform: 'translateY(-2px)',
  },
});

const DiscordButton = styled(Button)({
  marginTop: '1rem',
  backgroundColor: '#1a1a1a',
  color: '#58f267',
  fontWeight: 'bold',
  padding: '10px 22px',
  borderRadius: '10px',
  textTransform: 'uppercase',
  border: '1px solid #58f267',
  boxShadow: 'inset 0 0 8px #58f267',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: '#292929',
    boxShadow: '0 0 10px #58f267',
  },
});

const MusicToggleButton = styled(IconButton)({
  position: 'fixed',
  bottom: 30,
  right: 32,
  zIndex: 999,
  width: 56,
  height: 56,
  borderRadius: '50%',
  background: '#FFA500',
  color: '#111',
  border: '2px solid #fff',
  boxShadow: '0 4px 20px #000a',
  '&:hover': {
    background: '#FF7B00',
    color: '#fff',
    transform: 'scale(1.08)',
  },
});

const ScrollToTopButton = styled(IconButton)({
  position: 'fixed',
  bottom: 100,
  right: 32,
  zIndex: 999,
  width: 56,
  height: 56,
  borderRadius: '50%',
  background: '#ff7b00',
  color: '#fff',
  boxShadow: '0 4px 20px #000a',
  '&:hover': {
    background: '#FFA500',
    transform: 'scale(1.08)',
  },
});

const FooterBottom = styled(Box)({
  textAlign: 'center',
  paddingTop: '3rem',
  fontSize: '0.85rem',
  color: '#888',
});

function Footer() {
  const ref = useRef();
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(ref.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      musicOn ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [musicOn]);

  return (
    <>
      {/* Music & Scroll Buttons */}
      <MusicToggleButton onClick={() => setMusicOn((prev) => !prev)}>
        {musicOn ? <MusicNoteIcon /> : <VolumeOffIcon />}
      </MusicToggleButton>

      <ScrollToTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ArrowUpwardIcon />
      </ScrollToTopButton>

      <audio ref={audioRef} src="/victory-awaits-in-the-gaming-universe_astronaut-265184.mp3" loop />

      {/* Footer Content */}
      <FooterWrapper ref={ref}>
        <FooterContainer>
          {/* Brand + Socials */}
          <Box>
            <LogoText>Hackgrounds India</LogoText>
            <FooterText>
              Forged in fire. Powered by code. We are the battleground.
            </FooterText>
            <Box sx={{ marginTop: '1rem' }}>
              <a href="https://x.com/TechverseNexus" target="_blank"><SocialIcon><XIcon /></SocialIcon></a>
              <a href="https://instagram.com/techverse_nexus" target="_blank"><SocialIcon><InstagramIcon /></SocialIcon></a>
              <a href="https://linkedin.com/company/techverse-nexus/" target="_blank"><SocialIcon><LinkedInIcon /></SocialIcon></a>
            </Box>
          </Box>

          {/* Navigation */}
          <Box>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink href="#hero">Home</FooterLink>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#timeline">Timeline</FooterLink>
            <FooterLink href="#tracks">Tracks</FooterLink>
            <FooterLink href="#team">Team</FooterLink>
            <FooterLink href="#faqs">FAQs</FooterLink>
          </Box>

          {/* Contact Info */}
          <Box>
            <FooterTitle>Contact</FooterTitle>
            <FooterText><strong>Location:</strong> MS OFFICE, Delhi NCR</FooterText>
            <FooterText>
              <strong>Email:</strong>{' '}
              <a href="mailto:techversenexusofficial@gmail.com" style={{ color: '#FFA500' }}>
                techversenexusofficial@gmail.com
              </a>
            </FooterText>
            <FooterText>
              <strong>Phone:</strong> (+91) 9693856529 - Animesh<br />(+91) 6395207811 - Ujjwal
            </FooterText>
          </Box>

          {/* WhatsApp Join */}
          <Box>
            <FooterTitle>Join WhatsApp</FooterTitle>
            <DiscordButton
              href="https://chat.whatsapp.com/CHEAvZxmpRM1ermtrIhLWT?mode=r_c"
              target="_blank"
              startIcon={<DiscordIcon />}
            >
              Connect Now
            </DiscordButton>
          </Box>
        </FooterContainer>

        <FooterBottom>
          &copy; 2025 Hackgrounds India. Built with 💖 by <strong>Ujjwal, Nishchay & Aman</strong>
        </FooterBottom>
      </FooterWrapper>
    </>
  );
}

export default Footer;
