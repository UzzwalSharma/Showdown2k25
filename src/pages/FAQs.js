import React, { useState, useRef, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import gsap from "gsap";
import { motion } from "framer-motion";

// ─── Styled Components ────────────────────────────────────

const FAQWrapper = styled(Box)({
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-image 1s ease-in-out",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.65))",
    zIndex: 1,
  },
});

const SectionTitle = styled(Typography)({
  color: "#FFA500",
  fontFamily: '"Oswald", sans-serif', 
  fontSize: "3rem",
  fontWeight: 800,
  textTransform: "uppercase",
  textAlign: "center",
  position: "relative",
  zIndex: 3,
  letterSpacing: "2px",
  marginBottom: "2rem",
  textShadow: "0 0 12px rgba(255, 165, 0, 0.8)",
  "& span": {
    color: "#ffffff",
    textShadow: "0 0 18px rgba(255, 255, 255, 0.7)",
  },
});

const StyledAccordion = styled(Accordion)({
  background: "rgba(30, 30, 30, 0.92)",
  color: "#fff",
  border: "none",
  borderRadius: 0,
  marginBottom: 0,
  position: "relative",
  zIndex: 2,
  boxShadow: "0 2px 12px rgba(255,165,0,0.12)",
  backdropFilter: "blur(2px)",
  "&:not(:last-child)": {
    borderBottom: "1px solid #FFA500",
  },
  "&:first-of-type": {
    borderTopLeftRadius: "14px",
    borderTopRightRadius: "14px",
  },
  "&:last-of-type": {
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
  },
});

const StyledSummary = styled(AccordionSummary)({
  fontWeight: 800,
  fontSize: "1.25rem",
  fontFamily: '"Oswald", "Montserrat", sans-serif', 
  color: "#FFA500",
  letterSpacing: "1px",
  background: "rgba(255,165,0,0.07)",
  borderRadius: "0",
  padding: "0.7rem 1.5rem",
  "& .MuiAccordionSummary-expandIcon": {
    color: "#fff",
    fontSize: "2rem",
    transition: "transform 0.3s",
  },
  "&.Mui-expanded": {
    background: "rgba(255,165,0,0.13)",
    color: "#fff",
    textShadow: "0 0 8px #FFA50088",
  },
});

const StyledDetails = styled(AccordionDetails)({
  background: "rgba(255,165,0,0.04)",
  color: "#fff",
  fontSize: "1.08rem",
  fontFamily: '"Oswald", "Montserrat", sans-serif', 
  borderRadius: "0",
  padding: "1.2rem 2rem 1.2rem 2rem",
  lineHeight: 1.7,
  letterSpacing: "0.5px",
  boxShadow: "none",
  borderTop: "1px solid #FFA50022",
});

const ImageWrapper = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  height: "100%",
  paddingBottom: "30px",
});

const GlowingCircle = styled(Box)({
  position: "absolute",
  width: "300px",
  height: "300px",
  background: "radial-gradient(circle, rgba(255,165,0,0.4), transparent 70%)",
  borderRadius: "50%",
  zIndex: 1,
  bottom: "-20px",
  filter: "blur(20px)",
});

const BouncingImage = styled(motion.img)({
  width: "100%",
  maxWidth: "400px",
  objectFit: "contain",
  userSelect: "none",
  pointerEvents: "none",
  borderRadius: "20px",
  position: "relative",
  zIndex: 2,
  clipPath: "inset(0px 0px 70px 0px)", 
});

const WhatsAppButton = styled(Button)({
  marginTop: "2rem",
  background: "#25D366",
  color: "#fff",
  fontWeight: 700,
  textTransform: "uppercase",
  padding: "10px 20px",
  fontFamily: '"Orbitron", sans-serif',
  "&:hover": {
    background: "#1EBE5D",
  },
  boxShadow: "0 0 12px rgba(37, 211, 102, 0.6)",
});

// ─── FAQ Data ─────────────────────────────────────────────
const faqs = [
  {
    question: "What is HackGround India 2k25?",
    answer: "HackGround India 2k25 is a 36 - Hours hybrid BGMI-themed hackathon that gives an opportunity to participants to showcase their creativity and problem-solving skills in different domains with the fun of BGMI ✨.",
    bg: "https://images.hdqwalls.com/download/pubg-retro-poster-bg-1920x1080.jpg",
  },
  {
    question: "Who can Participate?",
    answer: "Anyone passionate about gaming, coding, or design is welcome.",
    bg: "https://images.hdqwalls.com/download/pubg-limited-bg-1920x1080.jpg",
  },
  {
    question: "Can beginners participate in HackGround?",
    answer: "Yes! Ofcourse HackGround India 2k25 encourages all the beginners to give their best in the hackathon, gaining some real good experience and leveraging their skills to a new level🔥",
    bg: "http://e0.pxfuel.com/wallpapers/792/518/desktop-wallpaper-pubg-epic-pubg-game.jpg",
  },
  {
    question: "What does the prize pool mean?",
    answer: "The prize pool is the total value of rewards, like cash prizes, gadgets, or internships, that participants can win in the hackathon.",
    bg: "https://images.hdqwalls.com/download/pubg-fly-me-to-the-vroom-5k-7w-1920x1080.jpg",
  },
  {
    question: "How do I register for HackGround India 2k25?",
    answer: "You can register for the HackGround India 2k25 by going directly at the official website or through the Unstop listing, also you can register through the registration links present on the Techverse Nexus handle on different social media platforms.",
    bg: "https://wallpapers.com/images/hd/playerunknowns-battlegrounds-4k-199qn3rz37tm9ivs.jpg",
  },
];

// ─── Main Component ───────────────────────────────────────
function FAQs() {
  const bgRef = useRef();
  const [bgImage, setBgImage] = useState(faqs[0].bg);
  const [expandedIdx, setExpandedIdx] = useState(null);

  const handleAccordionChange = (idx, bg) => {
    setExpandedIdx(idx === expandedIdx ? null : idx);
    setBgImage(bg);
  };

  return (
    <FAQWrapper
      ref={bgRef}
      id="faqs"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 3, py: 12 }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          sx={{ gap: 0, maxWidth: 1080, mx: "auto" }}
        >
          <SectionTitle
            variant="h2"
            sx={{ fontFamily: '"Oswald", sans-serif' }}
          >
            Frequently Asked <span>Questions</span>
          </SectionTitle>
          <Box width={{ xs: "100%", sm: "90%", md: "85%" }} mx="auto">
            {faqs.map((faq, idx) => (
              <StyledAccordion
                key={idx}
                expanded={expandedIdx === idx}
                onChange={(_, expanded) => handleAccordionChange(idx, faq.bg)}
                sx={{ width: "100%" }}
              >
                <StyledSummary expandIcon={<ExpandMoreIcon />}>
                  {faq.question}
                </StyledSummary>
                <StyledDetails>{faq.answer}</StyledDetails>
              </StyledAccordion>
            ))}
          </Box>
          <WhatsAppButton
            variant="contained"
            startIcon={<WhatsAppIcon />}
            href="https://wa.me/919693856529?text=Hi%20team%2C%20I%20have%20a%20question%20about%20the%20hackathon!"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            More Questions,Ask Directly to Us on WhatsApp
          </WhatsAppButton>
        </Box>
      </Container>
    </FAQWrapper>
  );
}

export default FAQs;
