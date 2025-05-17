import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const TimelineItem = styled(Paper)({
  background: 'rgba(26, 26, 26, 0.9)',
  color: '#ffffff',
  padding: '1.5rem',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '4px',
    height: '100%',
    background: 'linear-gradient(to bottom, #ff0000, #0088ff)'
  }
});

const TournamentContainer = styled(Box)({
  backgroundImage: 'url("/images/thunder.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)',
  }
});

function Tournament() {
  const schedule = [
    {
      day: "DAY 1",
      title: "Opening Ceremony",
      events: [
        { time: "10:00 AM", description: "Welcome and rules explanation" },
        { time: "11:00 AM", description: "Team formation" },
        { time: "12:00 PM", description: "Hacking begins!" }
      ]
    },
    {
      day: "DAY 2",
      title: "Midpoint Check-in",
      events: [
        { time: "10:00 AM", description: "Progress presentations" },
        { time: "12:00 PM", description: "Workshop: Advanced combat mechanics" },
        { time: "6:00 PM", description: "Tekken 8 exhibition match" }
      ]
    },
    {
      day: "DAY 3",
      title: "Final Battles",
      events: [
        { time: "10:00 AM", description: "Submission deadline" },
        { time: "11:00 AM", description: "Project presentations" },
        { time: "2:00 PM", description: "Judging and awards" },
        { time: "4:00 PM", description: "Closing ceremony" }
      ]
    }
  ];

  return (
    <TournamentContainer>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ mt: 8, mb: 8 }}>
          <Typography variant="h2" gutterBottom sx={{ color: '#ff0000', fontFamily: '"Tekken", sans-serif' }}>
            Tournament Schedule
          </Typography>
          
          <Grid container spacing={4}>
            {schedule.map((day, index) => (
              <Grid item xs={12} key={index}>
                <TimelineItem>
                  <Typography variant="h4" gutterBottom sx={{ color: '#ffd700', fontFamily: '"Tekken", sans-serif' }}>
                    {day.title}
                  </Typography>
                  <Typography variant="h6" gutterBottom sx={{ color: '#0088ff' }}>
                    {day.day}
                  </Typography>
                  {day.events.map((event, i) => (
                    <Box key={i} sx={{ mb: 2 }}>
                      <Typography variant="subtitle1" sx={{ color: '#ff0000' }}>
                        {event.time}
                      </Typography>
                      <Typography variant="body1">
                        {event.description}
                      </Typography>
                    </Box>
                  ))}
                </TimelineItem>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </TournamentContainer>
  );
}

export default Tournament;