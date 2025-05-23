import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import "../index.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const TeamSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("/images/bg2.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundAttachment: 'fixed',
  minHeight: '80vh',
  width: '100%',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 100%)',
    zIndex: 1
  }
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

const MemberCard = styled(Paper)(({ color = '#00ffe7' }) => ({
  '--border-radius': '1rem',
  '--bg-color': '#0f1923',
  '--color': color,
  borderRadius: 'var(--border-radius)',
  background: 'var(--bg-color)',
  color: '#fff',
  width: '240px',
  height: '320px',
  padding: '1.5rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  fontFamily: '"Poppins", sans-serif',
  isolation: 'isolate',
  zIndex: 1,
  boxShadow: `0 0 20px ${color}33`,

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
    transition: 'all 0.3s linear',
  },

  clipPath: 'polygon(0 0, 92% 0, 100% 10%, 100% 100%, 8% 100%, 0 90%)',
}));

const MemberAvatar = styled(Avatar)({
  width: 80,
  height: 80,
  marginBottom: '1rem',
  border: '3px solid #ffd700',
  boxShadow: '0 0 16px #0088ff, 0 0 8px #ff0000'
});

const MemberName = styled(Typography)({
  color: '#ffd700',
  fontFamily: '"Tekken", sans-serif',
  fontWeight: 700,
  fontSize: '1.3rem',
  marginBottom: '0.5rem',
  letterSpacing: '1px',
  textAlign: 'center',
  textShadow: '0 0 8px #ff0000'
});

const MemberRole = styled(Typography)({
  color: '#00ffe7',
  fontSize: '1rem',
  fontStyle: 'italic',
  marginBottom: '0.5rem',
  textAlign: 'center',
  textShadow: '0 0 8px #0088ff'
});

const teamMembers = [
  { name: "Advay Anand", role: "AI & Game Logic" },
  { name: "Nishant Sankar Swain", role: "Frontend Specialist" },
  { name: "Ujjwal Sharma", role: "Backend Architect" },
  { name: "Anmol Aggarwal", role: "UI/UX Designer" },
  { name: "Nishchay Chaurasia", role: "Lead Developer" }
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

  return (
    <TeamSection ref={sectionRef}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        <SectionTitle variant="h2" align="center">
          Meet the <span style={{ color: '#0088ff' }}>Team</span>
        </SectionTitle>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, idx) => (
            <Grid 
              item 
              key={idx} 
              xs={12} sm={6} md={4}  
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <MemberCard color={colors[idx % colors.length]}>
                <MemberAvatar>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </MemberAvatar>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
              </MemberCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </TeamSection>
  );
}

export default Team;