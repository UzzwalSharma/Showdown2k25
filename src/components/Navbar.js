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
  Typography,

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
  height: '65px',
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
       <Box sx={{ display: 'flex', alignItems: 'center' }}>
  <Logo
    src="/main_logo-removebg-preview.png"
    alt="GameX Logo"
    style={{ height: isMobile ? '60px' : '120px' }}
  />
</Box>

{isMobile && (
  <IconButton
    sx={{ color: '#fff', ml: 'auto' }} // pushes to the right
    onClick={toggleDrawer(!drawerOpen)}
  >
    {drawerOpen ? <CloseIcon /> : <MenuIcon />}
  </IconButton>
)}


        {/* Nav Links */}
        {!isMobile && (
          <NavLinks style={{mt:"2px",}}>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#timeline">Timeline</a>
            <a href="#tracks">Tracks</a>
            <a href="#prizes">Rewards</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#team">Team</a>
            <a href="#faqs">FAQs</a>

          </NavLinks>
        )}

          {/* Right Buttons */}
      <Box
  sx={{
    display: {
      xs: 'none', 
      sm: 'flex', // visible from sm and above
    },
    alignItems: 'center',
    gap: 2,
  }}
>
  <LoginBtn
  startIcon={<LoginIcon />}
  href="#footer"
  sx={{
    mt: 2,
    width: '100%',
    justifyContent: 'center',
    fontSize: '14px',
    padding: '10px',
  }}
>
  Contact
</LoginBtn>

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
      zIndex: 1400,
    },
  }}
>
  {/* Drawer Content Wrapper */}
  <Box sx={{ px: 2, pt: 4 }}>
    <Typography
      variant="h6"
      sx={{
        fontFamily: 'Orbitron',
        fontWeight: 700,
        color: '#ff7b00',
        mb: 2,
        textAlign: 'center',
        borderBottom: '1px solid #ff7b00',
        pb: 1,
      }}
    >
      MENU
    </Typography>

    <List>
      {['Home', 'About', 'Timeline', 'Tracks', 'Rewards', 'Sponsors', 'Team', 'FAQs'].map((text, i) => (
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
              },
            }}
          />
        </ListItem>
      ))}
    </List>

    <LoginBtn
      startIcon={<LoginIcon />}
      href="#footer"
      sx={{
        mt: 3,
        width: '100%',
        justifyContent: 'center',
        fontSize: '14px',
        padding: '10px',
      }}
    >
      Contact
    </LoginBtn>
  </Box>
</Drawer>




    </>
  );
};

export default GameXNavbar;
