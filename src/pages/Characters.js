import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Characters() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Character Roster
        </Typography>
        <Typography variant="body1" gutterBottom>
          Coming soon: Meet the fighters of Tekken 8
        </Typography>
      </Box>
    </Container>
  );
}

export default Characters;