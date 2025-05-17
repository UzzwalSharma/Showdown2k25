import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Paper } from '@mui/material';

const ScheduleSection = styled(Box)({
  backgroundImage: 'url("/images/thunder.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
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

const TimelineContainer = styled(Box)({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    width: '2px',
    height: '100%',
    background: 'linear-gradient(180deg, #ff0000 0%, #0088ff 100%)',
  }
});

const DayCard = styled(Paper)({
  background: 'rgba(0, 0, 0, 0.8)',
  padding: '1.5rem',
  borderRadius: '8px',
  border: '1px solid #ff0000',
  marginBottom: '2rem',
  position: 'relative',
  width: '45%',
  paddingTop: '3rem', // Added padding for label
  '&.left': {
    marginRight: 'auto',
    marginLeft: '2rem', // Added margin for spacing
  },
  '&.right': {
    marginLeft: 'auto',
    marginRight: '2rem', // Added margin for spacing
  }
});

const DayLabel = styled(Box)({
  background: '#000000',
  border: '2px solid #ff0000',
  borderRadius: '50%',
  width: '80px',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '-40px', // Position above the card
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 2,
  boxShadow: '0 0 15px rgba(255, 0, 0, 0.3)' // Added glow effect
});

function Schedule() {
  return (
    <ScheduleSection>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 4 }}>
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ 
            color: '#ff0000',
            fontFamily: '"Tekken", sans-serif',
            textTransform: 'uppercase',
            mb: 6,
            '& span': { color: '#0088ff' }
          }}
        >
          Event <span>Timeline</span>
        </Typography>

        <TimelineContainer>
          <DayCard className="left">
            <DayLabel>
              <Typography sx={{ color: '#ff0000', fontFamily: '"Tekken", sans-serif' }}>
                DAY 1
              </Typography>
            </DayLabel>
            <Typography variant="h4" sx={{ color: '#ffbb00', fontFamily: '"Tekken", sans-serif', mb: 2 }}>
              Opening Ceremony
            </Typography>
            <Typography sx={{ color: '#ffffff', mb: 1 }}>10:00 AM - Welcome and rules explanation</Typography>
            <Typography sx={{ color: '#ffffff', mb: 1 }}>11:00 AM - Team formation</Typography>
            <Typography sx={{ color: '#ffffff' }}>12:00 PM - Hacking begins!</Typography>
          </DayCard>

          <DayCard className="right">
            <DayLabel>
              <Typography sx={{ color: '#ff0000', fontFamily: '"Tekken", sans-serif' }}>
                DAY 2
              </Typography>
            </DayLabel>
            <Typography variant="h4" sx={{ color: '#ffbb00', fontFamily: '"Tekken", sans-serif', mb: 2 }}>
              Midpoint Check-in
            </Typography>
            <Typography sx={{ color: '#ffffff', mb: 1 }}>10:00 AM - Progress presentations</Typography>
            <Typography sx={{ color: '#ffffff', mb: 1 }}>12:00 PM - Workshop: Advanced combat mechanics</Typography>
            <Typography sx={{ color: '#ffffff' }}>6:00 PM - Tekken 8 exhibition match</Typography>
          </DayCard>

          <DayCard className="left">
            <DayLabel>
              <Typography sx={{ color: '#ff0000', fontFamily: '"Tekken", sans-serif' }}>
                DAY 3
              </Typography>
            </DayLabel>
            <Typography variant="h4" sx={{ color: '#ffbb00', fontFamily: '"Tekken", sans-serif', mb: 2 }}>
              Final Battles
            </Typography>
            <Typography sx={{ color: '#ffffff', mb: 1 }}>10:00 AM - Submission deadline</Typography>
            <Typography sx={{ color: '#ffffff', mb: 1 }}>11:00 AM - Project presentations</Typography>
            <Typography sx={{ color: '#ffffff', mb: 1 }}>2:00 PM - Judging and awards</Typography>
            <Typography sx={{ color: '#ffffff' }}>4:00 PM - Closing ceremony</Typography>
          </DayCard>
        </TimelineContainer>
      </Container>
    </ScheduleSection>
  );
}

export default Schedule;