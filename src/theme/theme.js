import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000', // Tekken's signature red
      dark: '#990000',
      light: '#FF4444',
    },
    secondary: {
      main: '#000000',
      dark: '#000000',
      light: '#333333',
    },
    background: {
      default: '#1A1A1A',
      paper: '#242424',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CCCCCC',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h2: {
      fontWeight: 600,
      textTransform: 'uppercase',
    },
  },
});

export default theme;