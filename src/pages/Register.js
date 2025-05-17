import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const RegisterSection = styled(Box)({
  backgroundImage: 'url("/images/cyber-arena.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', // Added for parallax effect
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
    background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 100%)',
  }
});

function Register() {
  return (
    <RegisterSection>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, pt: 16 }}>  {/* Increased padding-top */}
        <Typography variant="h2" sx={{ color: '#ffffff', mb: 4 }}>
          Register for the Tournament
        </Typography>
        {/* Add your registration form here */}
      </Container>
    </RegisterSection>
  );
}

export default Register;