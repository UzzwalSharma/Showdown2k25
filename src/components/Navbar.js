import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,

} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';

const StyledAppBar = styled(AppBar)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  background: '#1c1c22',
  boxShadow: '0 0 12px #ff7b00',
  padding: '0 2rem',
  clipPath:
    'polygon(0 0, 100% 0, 100% 85%, 97% 85%, 95% 100%, 5% 100%, 3% 85%, 0 85%)',
  borderBottom: '2px solid #ff7b00',
  zIndex: 1300,
}));

const NavLinks = styled(Box)(() => ({
  display: 'flex',
  gap: '2rem',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  fontFamily: '"Orbitron", sans-serif',
  fontWeight: 700,
  textTransform: 'uppercase',
  fontSize: '14px',
  color: '#ffffff',
  '& a': {
    color: '#ffffff',
    textDecoration: 'none',
    position: 'relative',
    transition: '0.3s ease',
    padding: '4px 8px',
    '&:hover': {
      color: '#ff7b00',
      textShadow: '0 0 8px #ff7b00',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '2px',
      width: '100%',
      background: 'linear-gradient(90deg, #ff7b00, #ff4500)',
      transform: 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform 0.3s ease',
    },
    '&:hover::after': {
      transform: 'scaleX(1)',
    },
  },
}));

const Logo = styled('img')({
  height: '45px',
  filter: 'drop-shadow(0 0 4px #ff7b00)',
});

const LoginBtn = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#2c2e35',
  color: '#fff',
  fontWeight: 700,
  textTransform: 'uppercase',
  borderLeft: '3px solid #ff7b00',
  padding: '8px 16px',
  gap: '0.5rem',
  fontSize: '12px',
  transition: '0.3s ease',
  boxShadow: '0 0 8px #ff7b0055',
  '&:hover': {
    backgroundColor: '#3a3c45',
    color: '#ff7b00',
    boxShadow: '0 0 12px #ff7b00',
  },
});

const GameXNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => setDrawerOpen(open);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <StyledAppBar position="static">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            height: { xs: '80px', md: '120px' },
            px: { xs: 2, md: 4 },
          }}
        >
          {/* Logo + Menu Icon */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Logo src="/images/main logo.jpg" alt="GameX Logo" style={{ height: '40px' }} />
            {isMobile && (
              <IconButton sx={{ color: '#fff' }} onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>

        {/* Nav Links */}
        {!isMobile && (
          <NavLinks>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#tournament">Tournament</a>
            <a href="#team">Team</a>
            <a href="#gears">Gears</a>
            <a href="#contact">Contact</a>
          </NavLinks>
        )}

          {/* Right Buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LoginBtn startIcon={<LoginIcon />}>Contact</LoginBtn>
          </Box>
        </Toolbar>
      </StyledAppBar>

      {/* Mobile Drawer */}
   <Drawer
  anchor="right"
  open={drawerOpen}
  onClose={() => setDrawerOpen(false)}
  disableEnforceFocus
  disableAutoFocus
  PaperProps={{
    sx: {
      backgroundColor: '#1c1c22',
      width: '70vw',
      maxWidth: 300,
      paddingTop: '1rem',
      paddingX: '1rem',
      zIndex: 1400,
    },
  }}
>
  {/* Close Icon */}
  <Box display="flex" justifyContent="flex-end">
    <IconButton
      onClick={() => setDrawerOpen(false)}
      sx={{
        color: '#fff',
        mb: 1,
        backgroundColor: '#2a2a2f',
        '&:hover': {
          backgroundColor: '#3a3c45',
          color: '#ff7b00',
        },
      }}
    >
      <CloseIcon />
    </IconButton>
  </Box>

  {/* Menu Links */}
  <List>
    {['Home', 'About', 'Our Team', 'Tracks'].map((text, i) => (
      <ListItem
        button
        key={i}
        component="a"
        href={`#${text.toLowerCase().replace(/\s/g, '')}`}
        onClick={() => setDrawerOpen(false)}
        sx={{
          py: 1.5,
          px: 2,
          '&:hover': {
            backgroundColor: '#2a2a2f',
            borderRadius: '8px',
          },
        }}
      >
        <ListItemText
          primary={text}
          primaryTypographyProps={{
            sx: {
              color: '#fff',
              fontWeight: 600,
              textTransform: 'uppercase',
              fontFamily: 'Orbitron',
              fontSize: '1rem',
              '&:hover': {
                color: '#ff7b00',
                textShadow: '0 0 8px #ff7b00',
              },
            },
          }}
        />
      </ListItem>
    ))}
  </List>
</Drawer>


    </>
  );
};

export default GameXNavbar;
