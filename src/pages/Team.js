import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';

const TeamSection = styled(Box)({
  backgroundImage: 'url("/images/colosseum.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
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
});

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

const MemberCard = styled(Paper)({
  background: 'linear-gradient(135deg, #0f1923 60%, #ff0000 100%)',
  border: '2px solid #0088ff',
  borderRadius: '16px',
  padding: '1.5rem 1rem',
  width: '220px',
  height: '320px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 8px 32px 0 rgba(0,136,255,0.25)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  position: 'relative',
  zIndex: 2,
  '&:hover': {
    transform: 'translateY(-10px) scale(1.04)',
    boxShadow: '0 16px 40px 0 rgba(255,0,0,0.25), 0 0 40px rgba(0,136,255,0.15)'
  }
});

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

function Team() {
  return (
    <TeamSection>
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        <SectionTitle variant="h2" align="center">
          Meet the <span style={{ color: '#0088ff' }}>Team</span>
        </SectionTitle>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, idx) => (
            <Grid item key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
              <MemberCard>
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