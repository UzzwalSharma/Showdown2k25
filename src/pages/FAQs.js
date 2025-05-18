import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = styled(Box)({
  backgroundImage: 'url("/images/into-the-stratosphere.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  minHeight: '60vh',
  width: '100%',
  padding: 0,
  margin: 0,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
});

const SectionTitle = styled(Typography)({
  color: '#ff0000', // Change to red
  fontFamily: '"Tekken", sans-serif',
  marginTop: 0,
  marginBottom: 0,
  paddingTop: 0,
  paddingBottom: 0,
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: '3rem', // Increased from 2.5rem
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  '& span': {
    color: '#0088ff' // Add blue color for part of the text
  }
});

const faqs = [
  {
    question: "Who can participate in the hackathon?",
    answer: "Anyone with a passion for gaming, coding, or design can participate. Students, professionals, and hobbyists are all welcome!"
  },
  {
    question: "How many members can be in a team?",
    answer: "Teams can have 2-5 members. Solo participation is also allowed."
  },
  {
    question: "Can I use existing code or assets?",
    answer: "All code must be written during the hackathon. You may use open-source libraries and assets, but no pre-existing projects."
  },
  {
    question: "What is the judging criteria?",
    answer: "Projects are judged on Technical Innovation, Combat System, AI Implementation, User Experience, and Project Completion."
  },
  {
    question: "What should I include in my demo?",
    answer: "Your demo should showcase gameplay, innovation, and technical achievements. Make it engaging and highlight your unique features."
  },
  {
    question: "Will there be mentors or support?",
    answer: "Yes, mentors from the industry will be available to guide and support you throughout the hackathon."
  },
  {
    question: "How do I submit my project?",
    answer: "Submission details will be provided during the event. Ensure your code is well-documented and follows the guidelines."
  },
  {
    question: "What are the prizes?",
    answer: "Exciting prizes await the winners! Details can be found in the Prizes section."
  }
];

function FAQs() {
  return (
    <FAQSection id="faqs">
      <Container maxWidth="md" sx={{ py: 0, my: 0, px: 0, mx: 0, textAlign: 'center' }}>
        <SectionTitle variant="h2">
          Frequently Asked <span>Questions</span>
        </SectionTitle>
        {faqs.map((faq, idx) => (
          <Accordion key={idx} sx={{ background: 'rgba(0,0,0,0.85)', color: '#fff', mb: 2, borderRadius: 2, border: '1px solid #0088ff', textAlign: 'center' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#ffd700' }} />}
              aria-controls={`faq-content-${idx}`}
              id={`faq-header-${idx}`}
              sx={{ fontWeight: 700, fontFamily: '"Arial", sans-serif', fontSize: '1.1rem', textAlign: 'center' }}
            >
              {faq.question}
            </AccordionSummary>
            <AccordionDetails sx={{ color: '#ffd700', fontSize: '1rem', background: 'rgba(0,0,0,0.7)', borderRadius: 1, textAlign: 'center' }}>
              {faq.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </FAQSection>
  );
}

export default FAQs;