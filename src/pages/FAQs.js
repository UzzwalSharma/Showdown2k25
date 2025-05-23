import React, { useState, useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import gsap from 'gsap';

const FAQSection = styled(Box)({
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
  textAlign: 'center',
  transition: 'background-image 1s ease-in-out'
});

const SectionTitle = styled(Typography)({
  color: '#ff0000',
  fontFamily: '"Tekken", sans-serif',
  marginTop: 0,
  marginBottom: 0,
  paddingTop: 0,
  paddingBottom: 0,
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: '3rem',
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  '& span': {
    color: '#0088ff'
  }
});

const faqs = [
  {
    question: "Who can participate in the hackathon?",
    answer: "Anyone with a passion for gaming, coding, or design can participate...",
    bg: "https://c4.wallpaperflare.com/wallpaper/234/719/610/tekken-7-wallpaper-preview.jpg"
  },
  {
    question: "How many members can be in a team?",
    answer: "Teams can have 2-5 members. Solo participation is also allowed.",
    bg: "/images/Gemini_Generated_Image_f35c7sf35c7sf35c.png"
  },
  {
    question: "Can I use existing code or assets?",
    answer: "All code must be written during the hackathon...",
    bg: "/images/thunder.jpg"
  },
  {
    question: "What is the judging criteria?",
    answer: "Projects are judged on Technical Innovation...",
    bg: "/images/into-the-stratosphere.jpg"
  },
  {
    question: "What should I include in my demo?",
    answer: "Your demo should showcase gameplay, innovation...",
    bg: "/images/Gemini_Generated_Image_f35c7sf35c7sf35c.png"
  },
  {
    question: "Will there be mentors or support?",
    answer: "Yes, mentors from the industry will be available...",
    bg: "/images/Gemini_Generated_Image_l8nylul8nylul8ny.png"
  },
  {
    question: "How do I submit my project?",
    answer: "Submission details will be provided during the event...",
    bg: "/images/thunder.jpg"
  },
  {
    question: "What are the prizes?",
    answer: "Exciting prizes await the winners! Details can be found in the Prizes section.",
    bg: "https://media.eventhubs.com/images/2023/11/01_ted14.jpg"
  }
];

function FAQs() {
  const bgRef = useRef();
  const [bgImage, setBgImage] = useState(faqs[0].bg);

  const handleAccordionChange = (bg) => {
    // Animate transition with GSAP
    gsap.to(bgRef.current, {
      duration: 0.8,
      opacity: 0,
      onComplete: () => {
        setBgImage(bg);
        gsap.to(bgRef.current, { duration: 0.8, opacity: 1 });
      }
    });
  };

  return (
    <FAQSection ref={bgRef} id="faqs" style={{ backgroundImage: `url(${bgImage})` }}>
      <Container maxWidth="md" sx={{ py: 0, my: 0, px: 0, mx: 0, textAlign: 'center' }}>
        <SectionTitle variant="h2">
          Frequently Asked <span>Questions</span>
        </SectionTitle>
        {faqs.map((faq, idx) => (
          <Accordion
            key={idx}
            onChange={(_, expanded) => expanded && handleAccordionChange(faq.bg)}
            sx={{
              background: 'rgba(0,0,0,0.85)',
              color: '#fff',
              mb: 2,
              borderRadius: 2,
              border: '1px solid #0088ff',
              textAlign: 'center'
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#ffd700' }} />}
              aria-controls={`faq-content-${idx}`}
              id={`faq-header-${idx}`}
              sx={{ fontWeight: 700, fontFamily: '"Arial", sans-serif', fontSize: '1.1rem' }}
            >
              {faq.question}
            </AccordionSummary>
            <AccordionDetails sx={{ color: '#ffd700', fontSize: '1rem', background: 'rgba(0,0,0,0.7)', borderRadius: 1 }}>
              {faq.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </FAQSection>
  );
}

export default FAQs;
