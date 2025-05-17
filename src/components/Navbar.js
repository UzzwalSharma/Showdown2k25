import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'linear-gradient(90deg, #000000 0%, #1a1a1a 100%)',
  padding: '0.5rem 2rem',
  borderBottom: '2px solid #ff0000',
  height: '60px'
});

const NavButton = styled(Button)({
  color: '#FFFFFF',
  fontFamily: '"Tekken", sans-serif',
  fontSize: '0.9rem', // Reduced from 1rem
  padding: '6px 12px', // Reduced horizontal padding
  height: '36px',
  margin: '0 4px', // Added margin for spacing
  '&:hover': {
    backgroundColor: 'rgba(255, 0, 0, 0.2)'
  }
});

const NavLinks = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem' // Reduced from 1rem or 2rem for more compact spacing
});

// Add the missing Logo component definition
const Logo = styled('div')({
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& .techken': {
        color: '#ff0000',
        fontSize: '1.8rem',
        fontFamily: '"Tekken", sans-serif',
        fontWeight: 'bold',
        lineHeight: 1
    },
    '& .showdown': {
        color: '#0088ff',
        fontSize: '1.2rem',
        fontFamily: '"Tekken", sans-serif'
    }
});

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <Logo onClick={() => scrollToSection('home')}>
          <span className="techken">Techken</span>
          <span className="showdown">Showdown 2K25</span>
        </Logo>
        <NavLinks>
          <NavButton onClick={() => scrollToSection('about')}>About</NavButton>
          <NavButton onClick={() => scrollToSection('team')}>Team</NavButton>
          <NavButton onClick={() => scrollToSection('timeline')}>Timeline</NavButton>
          <NavButton onClick={() => scrollToSection('sponsors')}>Sponsors</NavButton>
          <NavButton onClick={() => scrollToSection('judging')}>Judging Criteria</NavButton>
          <NavButton onClick={() => scrollToSection('rules')}>Rules</NavButton>
          <NavButton onClick={() => scrollToSection('prizes')}>Prizes</NavButton>
          <NavButton 
            onClick={() => scrollToSection('faqs')}
            sx={{
              backgroundColor: '#ff0000',
              '&:hover': {
                backgroundColor: '#cc0000'
              },
              height: '36px'
            }}
          >
            FAQs
          </NavButton>
        </NavLinks>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;