import React, { useState } from 'react';
import {
  Box,AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'linear-gradient(90deg, #000000 0%, #1a1a1a 100%)',
  padding: '0.5rem 1rem',
  borderBottom: '2px solid #ff0000',
  height: '60px'
}));

const NavButton = styled(Button)({
  color: '#FFFFFF',
  fontFamily: '"Tekken", sans-serif',
  fontSize: '0.9rem',
  padding: '6px 12px',
  height: '36px',
  margin: '0 4px',
  '&:hover': {
    backgroundColor: 'rgba(255, 0, 0, 0.2)'
  }
});

const NavLinks = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
});

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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setDrawerOpen(false); // Close drawer on selection
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Team', id: 'team' },
    { label: 'Timeline', id: 'timeline' },
    { label: 'Sponsors', id: 'sponsors' },
    { label: 'Judging Criteria', id: 'judging' },
    { label: 'Rules', id: 'rules' },
    { label: 'Prizes', id: 'prizes' },
    { label: 'FAQs', id: 'faqs', special: true }
  ];

  return (
    <>
      <AppBar position="fixed">
        <StyledToolbar>
          <Logo onClick={() => scrollToSection('home')}>
            <span className="techken">Techken</span>
            <span className="showdown">Showdown 2K25</span>
          </Logo>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                 <Box
    sx={{
      display: 'flex',
      justifyContent: 'flex-end',
      p: 2,
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      backgroundColor: '#000', // or your drawer bg color
    }}
  >
    <IconButton onClick={() => setDrawerOpen(false)} aria-label="close drawer" sx={{ color: '#ff0000' }}>
      <CloseIcon fontSize="large" />
    </IconButton>
  </Box>
               <List sx={{ width: 250 }}>
  {navItems.map(({ label, id, special }) => (
    <ListItem
      button
      key={id}
      onClick={() => {
        scrollToSection(id);
        setDrawerOpen(false); // close drawer on click
      }}
      sx={{
        backgroundColor: special ? '#ff0000' : 'inherit',
        color: special ? '#fff' : '#00ccff',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: '#001f33',
          boxShadow: '0 0 10px #00ccff, 0 0 20px #00ccff',
          transform: 'scale(1.03)',
        },
      }}
    >
      <ListItemText
        primary={label}
        primaryTypographyProps={{
          sx: {
            color: special ? '#fff' : '#ff0000',
            fontFamily: '"Tekken", sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
          },
        }}
      />
    </ListItem>
  ))}
</List>

              </Drawer>
            </>
          ) : (
            <NavLinks>
              {navItems.map(({ label, id, special }) => (
                <NavButton
                  key={id}
                  onClick={() => scrollToSection(id)}
                  sx={special && {
                    backgroundColor: '#ff0000',
                    '&:hover': { backgroundColor: '#cc0000' }
                  }}
                >
                  {label}
                </NavButton>
              ))}
            </NavLinks>
          )}
        </StyledToolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
