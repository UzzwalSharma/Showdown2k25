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
  fontFamily: '"Orbitron", sans-serif',
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
  background: "rgba(30, 30, 30, 0.85)",
  color: "#ffffff",
  border: "2px solid #FFA500",
  borderRadius: "14px",
  marginBottom: "1.8rem",
  position: "relative",
  zIndex: 2,
  boxShadow: "0 0 20px rgba(255,165,0,0.3)",
  backdropFilter: "blur(4px)",
});

const StyledSummary = styled(AccordionSummary)({
  fontWeight: 700,
  fontSize: "1.1rem",
  fontFamily: '"Orbitron", sans-serif',
  color: "#fff",
  "& .MuiAccordionSummary-expandIcon": {
    color: "#FFA500",
  },
});

const StyledDetails = styled(AccordionDetails)({
  background: "rgba(255,165,0,0.08)",
  color: "#ffffff",
  fontSize: "1rem",
  borderRadius: "8px",
  padding: "1rem 1.5rem",
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
  clipPath: "inset(0px 0px 70px 0px)", // ← increased cut from bottom
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
    question: "Who can participate?",
    answer: "Anyone passionate about gaming, coding, or design is welcome.",
    bg: "https://wallpapers.com/images/hd/playerunknowns-battlegrounds-4k-199qn3rz37tm9ivs.jpg",
  },
  {
    question: "How many in one team?",
    answer: "Teams can have 2–5 members. Solo warriors are welcome too.",
    bg: "http://e0.pxfuel.com/wallpapers/792/518/desktop-wallpaper-pubg-epic-pubg-game.jpg",
  },
  {
    question: "Can I use templates?",
    answer: "Core logic must be original. UI assets or game kits are allowed.",
    bg: "https://e1.pxfuel.com/desktop-wallpaper/339/470/desktop-wallpaper-pubg-2020-games-backgrounds-pubg-mobile-2020.jpg",
  },
  {
    question: "How to contact the team?",
    answer: "Reach out to us directly on WhatsApp for any quick help!",
    bg: "https://wallpapers.com/images/hd/pubg-squad-halloweek-bonfire-pfgdtashviw7drua.jpg",
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
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 3, py: 12 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Side PUBG Character */}
          <Grid item xs={12} md={5} textAlign="center">
            <ImageWrapper>
              <GlowingCircle />
              <BouncingImage
                src="/images/Gemini_Generated_Image_dcblb5dcblb5dcbl.png"
                initial={{ y: 0 }}
                animate={{
                  y: [0, -20, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
            </ImageWrapper>
          </Grid>

          {/* Right Side FAQs */}
          <Grid item xs={12} md={7}>
            <SectionTitle variant="h2">
              Frequently Asked <span>Questions</span>
            </SectionTitle>
            {faqs.map((faq, idx) => (
              <StyledAccordion
                key={idx}
                expanded={expandedIdx === idx}
                onChange={(_, expanded) => handleAccordionChange(idx, faq.bg)}
              >
                <StyledSummary expandIcon={<ExpandMoreIcon />}>
                  {faq.question}
                </StyledSummary>
                <StyledDetails>{faq.answer}</StyledDetails>
              </StyledAccordion>
            ))}

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
          </Grid>
        </Grid>
      </Container>
    </FAQWrapper>
  );
}

export default FAQs;
