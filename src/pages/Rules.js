import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import GroupsIcon from '@mui/icons-material/Groups';
import CodeIcon from '@mui/icons-material/Code';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const RulesSection = styled(Box)({
  backgroundImage: 'url("/images/celebration-on-the-seine.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  minHeight: '80vh',
  width: '100%',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 100%)',
    zIndex: 1
  }
});

const SectionTitle = styled(Typography)({
  color: '#ff0000',
  fontFamily: '"Tekken", sans-serif',
  marginBottom: '2rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: '3rem',
  position: 'relative',
  zIndex: 2
});

const RuleCard = styled(Paper)({
  background: 'linear-gradient(135deg, #0f1923 60%, #ff0000 100%)',
  border: '2px solid #0088ff',
  borderRadius: '16px',
  padding: '1.2rem 0.8rem',
  width: '230px',
  minHeight: '210px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  boxShadow: '0 8px 32px 0 rgba(0,136,255,0.25)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  position: 'relative',
  zIndex: 2,
  '&:hover': {
    transform: 'translateY(-10px) scale(1.04)',
    boxShadow: '0 16px 40px 0 rgba(255,0,0,0.25), 0 0 40px rgba(0,136,255,0.15)'
  }
});

const RuleIcon = styled(Box)({
  fontSize: '3rem',
  color: '#ffd700',
  marginBottom: '1rem'
});

const RuleTitle = styled(Typography)({
  color: '#00ffe7',
  fontFamily: '"Tekken", sans-serif',
  fontWeight: 700,
  fontSize: '1.2rem',
  marginBottom: '0.5rem',
  letterSpacing: '1px',
  textAlign: 'center',
  textShadow: '0 0 8px #0088ff'
});

const RuleText = styled(Typography)({
  color: '#fff',
  fontSize: '1rem',
  textAlign: 'center'
});

const rules = [
  {
    icon: <GroupsIcon sx={{ fontSize: 48, color: '#ffd700' }} />,
    title: "Team Formation",
    text: "Teams can have 2-5 members. Solo participation is allowed. Cross-discipline teams are encouraged for diverse skillsets."
  },
  {
    icon: <CodeIcon sx={{ fontSize: 48, color: '#00ffe7' }} />,
    title: "Original Code",
    text: "All code must be written during the hackathon. Use of open-source libraries is permitted, but no pre-existing projects or codebases."
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 48, color: '#ff0000' }} />,
    title: "Time Limit",
    text: "All projects must be submitted before the deadline. Late submissions will not be considered for judging."
  },
  {
    icon: <GavelIcon sx={{ fontSize: 48, color: '#ffd700' }} />,
    title: "Fair Play",
    text: "Plagiarism, cheating, or any form of misconduct will result in immediate disqualification. Respect all participants and judges."
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 48, color: '#ff8800' }} />,
    title: "Demo & Presentation",
    text: "Each team must present their project to the judges. Demos should highlight gameplay, innovation, and technical achievements."
  }
];

function Rules() {
  return (
    <RulesSection>
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        <SectionTitle variant="h2" align="center">
          <span style={{ color: '#0088ff' }}>Rules</span> & Guidelines
        </SectionTitle>
        {/* First Level - 3 Cards */}
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 2 }}>
          {rules.slice(0, 3).map((rule, idx) => (
            <Grid item xs={12} sm={4} md={4} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
              <RuleCard>
                <RuleIcon>{rule.icon}</RuleIcon>
                <RuleTitle>{rule.title}</RuleTitle>
                <RuleText>{rule.text}</RuleText>
              </RuleCard>
            </Grid>
          ))}
        </Grid>
        {/* Second Level - 2 Cards, centered */}
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4} md={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <RuleCard>
              <RuleIcon>{rules[3].icon}</RuleIcon>
              <RuleTitle>{rules[3].title}</RuleTitle>
              <RuleText>{rules[3].text}</RuleText>
            </RuleCard>
          </Grid>
          <Grid item xs={12} sm={4} md={4} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <RuleCard>
              <RuleIcon>{rules[4].icon}</RuleIcon>
              <RuleTitle>{rules[4].title}</RuleTitle>
              <RuleText>{rules[4].text}</RuleText>
            </RuleCard>
          </Grid>
        </Grid>
        <Box sx={{ mt: 6, p: 3, background: 'rgba(0,0,0,0.7)', borderRadius: 2, border: '1px solid #ff0000', maxWidth: 700, mx: 'auto' }}>
          <Typography variant="h6" align="center" sx={{ color: '#ffd700', mb: 1 }}>
            Additional Notes
          </Typography>
          <Typography align="center" sx={{ color: '#fff', fontSize: '1rem' }}>
            All participants must adhere to the event's code of conduct. Judges' decisions are final. By participating, you agree to allow your project to be showcased by the organizers. For any queries, contact the event coordinators.
          </Typography>
        </Box>
      </Container>
    </RulesSection>
  );
}

export default Rules;