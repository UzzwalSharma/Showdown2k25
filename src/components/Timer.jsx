import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const flicker = keyframes`
  0% { opacity: 1; }
  45% { opacity: 0.6; }
  55% { opacity: 0.9; }
  70% { opacity: 0.4; }
  100% { opacity: 1; }
`;

const TechkenCountdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: '100',
      hours: '100',
      minutes: '100',
      seconds: '100',
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #000000, #1a1a1a)',
        border: '4px solid #ff0000',
        boxShadow: '0 0 25px rgba(255, 0, 0, 0.8)',
        borderRadius: '20px',
        p: { xs: 4, md: 6 },
        textAlign: 'center',
        color: '#fff',
        animation: `${flicker} 2.5s infinite`,
        fontFamily: '"Tekken", sans-serif',
        maxWidth: '900px',
        width: '100%',
        mx: 'auto',
        mt: 8,
      }}
    >
        
      <Typography variant="h3" sx={{ mb: 4, fontSize: { xs: '2rem', md: '3rem' } }}>
        ⏳ Countdown to Showdown
      </Typography>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: 4,
        }}
      >
        {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => {
          const value = Object.values(timeLeft)[index];
          return (
            <Box key={label} sx={{ textAlign: 'center' }}>
              <Typography variant="h2" sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                color: '#ff0000',
                textShadow: '0 0 10px rgba(255,0,0,0.7)',
              }}>
                {value}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#ccc', fontSize: '1.1rem' }}>
                {label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default TechkenCountdown;
