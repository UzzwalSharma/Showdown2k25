import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import { Typography } from '@mui/material';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'absolute', // ✅ Make it overlay hero
  top: 0,
  left: 0,
  right: 0,
  background: '#1c1c22',
  boxShadow: 'none',
  padding: '0 2rem',
  clipPath:
    'polygon(0 0, 100% 0, 100% 90%, 95% 90%, 94% 100%, 6% 100%, 5% 90%, 0 90%)',
  zIndex: 1300,
}));


const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '2.5rem',
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
    transition: '0.3s ease',
    '&:hover': {
      color: '#ff7b00',
    },
  },
}));

const Logo = styled('img')({
  height: '40px',
});

const SearchBox = styled(IconButton)({
  color: '#fff',
  padding: '0.5rem',
  '&:hover': {
    color: '#ff7b00',
  },
});

const Divider = styled('div')({
  width: '2px',
  height: '28px',
  backgroundColor: '#2a1d24',
  margin: '0 1rem',
});

const LoginBtn = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#2c2e35',
  color: '#fff',
  fontWeight: 700,
  textTransform: 'uppercase',
  borderLeft: '3px solid orange',
  padding: '8px 16px',
  gap: '0.5rem',
  fontSize: '12px',
  '&:hover': {
    backgroundColor: '#3a3c45',
    color: '#ff7b00',
  },
});

const GameXNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <StyledAppBar position="static">
      <Toolbar disableGutters sx={{ justifyContent: 'space-between', alignItems: 'center', height: '120px' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
         <Typography
  variant="h5"
  sx={{
    fontFamily: '"Orbitron", sans-serif',
    fontWeight: 900,
    fontSize: '1.8rem',
    background: 'linear-gradient(to right, #ff0000, #ffaa00)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 8px rgba(255, 0, 0, 0.6), 0 0 12px rgba(255, 165, 0, 0.4)',
    letterSpacing: '2px',
    ml: 2,
  }}
>
  HackGround 2K25
</Typography>

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

        {/* Right Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SearchBox>
            <SearchIcon />
          </SearchBox>
          <Divider />
          <LoginBtn startIcon={<LoginIcon />}>Log-in</LoginBtn>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default GameXNavbar;
