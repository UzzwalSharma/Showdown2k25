import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Paper, Avatar } from '@mui/material';
import "../index.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Team section background styling
const TeamSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("/BGMI_images/gemini-wali.png")',
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundAttachment: "fixed",
  minHeight: "80vh",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 100%)",
    zIndex: 1,
  },
}));

const SectionTitle = styled(Typography)({
  color: '#ff0000',
  fontFamily: '"Tekken", sans-serif',
  marginBottom: '2rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: '3rem',
  position: 'relative',
  zIndex: 2
});

// Marquee wrapper for infinite scroll
const MarqueeTrack = styled(Box)(({ reverse }) => ({
  display: 'flex',
  gap: '2rem',
  animation: `${reverse ? 'marqueeReverse' : 'marquee'} 25s linear infinite`,
  width: 'max-content',
  padding: '2rem 0',
  '@keyframes marquee': {
    '0%': { transform: 'translateX(0%)' },
    '100%': { transform: 'translateX(-50%)' }
  },
  '@keyframes marqueeReverse': {
    '0%': { transform: 'translateX(-50%)' },
    '100%': { transform: 'translateX(0%)' }
  }
}));

const MemberCard = styled(Paper)(({ color = '#00ffe7' }) => ({
  '--border-radius': '1rem',
  '--bg-color': '#0f1923',
  '--color': color,
  borderRadius: 'var(--border-radius)',
  background: 'var(--bg-color)',
  color: '#fff',
  width: '220px',
  height: '260px',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  fontFamily: '"Poppins", sans-serif',
  zIndex: 1,
  boxShadow: `0 0 20px ${color}33`,
  transition: 'all 0.4s ease-in-out',
  clipPath: 'polygon(0 0, 92% 0, 100% 10%, 100% 100%, 8% 100%, 0 90%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '200%',
    height: '200%',
    inset: '-50%',
    zIndex: -2,
    backgroundImage: `conic-gradient(
      var(--color) 0deg,
      transparent 60deg,
      transparent 180deg,
      var(--color) 180deg,
      transparent 240deg
    )`,
    animation: 'borderSpin 5s linear infinite',
  },
  '&:hover::before': {
    animationPlayState: 'paused',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: '5px',
    background: 'var(--bg-color)',
    borderRadius: 'calc(var(--border-radius) - 5px)',
    zIndex: -1,
  },
  '&:hover .details': {
    opacity: 1,
    transform: 'translateY(0)',
  },
}));

const MemberAvatar = styled(Avatar)({
  width: 80,
  height: 80,
  marginBottom: '1rem',
  border: '3px solid #ffd700',
  boxShadow: '0 0 16px #0088ff, 0 0 8px #ff0000',
  zIndex: 2,
});

const MemberName = styled(Typography)({
  color: '#ffd700',
  fontFamily: '"Tekken", sans-serif',
  fontWeight: 700,
  fontSize: '1.3rem',
  marginBottom: '0.3rem',
  letterSpacing: '1px',
  textAlign: 'center',
  textShadow: '0 0 8px #ff0000',
  transition: 'all 0.3s ease',
});

const MemberRole = styled(Typography)({
  color: '#00ffe7',
  fontSize: '1rem',
  fontStyle: 'italic',
  textAlign: 'center',
  textShadow: '0 0 8px #0088ff',
  transition: 'all 0.3s ease',
});

const DetailsBox = styled(Box)({
  position: 'absolute',
  bottom: '1.5rem',
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'all 0.3s ease-in-out',
  textAlign: 'center',
  zIndex: 2,
});

const teamMembers = [
  { name: "Anmol Agarwal", role: "AI & Game Logic" },
  { name: "Nishant Sankar Swain", role: "Frontend Specialist" },
  { name: "Ujjwal Sharma", role: "Lead Developer" },
  { name: "Advay Anand", role: "UI/UX Designer" },
  { name: "Mahak Gupta", role: "Lead UI/UX Designer" },
  { name: "Disha Sharma", role: "PR Head" },
  { name: "Ujjwal Agarwal", role: "Sponser-Team" },
  { name: "Devansh Bhardwaj", role: "Backend-Expert" },
  { name: "Nishchay Chaurasia", role: "Lead Developer" },
  { name: "Aman Bobal", role: "Technical Team" },
];

const colors = ['#FF0000', '#0088ff', '#FF0000'];

function Team() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    gsap.to(section, {
      backgroundPositionY: '30%',
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  const renderCards = () =>
    [...teamMembers, ...teamMembers].map((member, idx) => (
      <MemberCard key={`${member.name}-${idx}`} color={colors[idx % colors.length]}>
        <MemberAvatar>
          {member.name.split(' ').map(n => n[0]).join('')}
        </MemberAvatar>
        <DetailsBox className="details">
          <MemberName>{member.name}</MemberName>
          <MemberRole>{member.role}</MemberRole>
        </DetailsBox>
      </MemberCard>
    ));

  return (
    <TeamSection ref={sectionRef}>
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, py: 8 , mb: 4 }}>
        <SectionTitle variant="h2" align="center">
          Meet the <span style={{ color: '#0088ff' }}>Team</span>
        </SectionTitle>
        <Box sx={{ overflow: 'hidden' }}>
          <MarqueeTrack>{renderCards()}</MarqueeTrack>
          <MarqueeTrack reverse>{renderCards()}</MarqueeTrack>
        </Box>
      </Container>
    </TeamSection>
  );
}

export default Team;
