import React, { useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import GroupsIcon from "@mui/icons-material/Groups";
import CodeIcon from "@mui/icons-material/Code";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RulesSection = styled(Box)({
  backgroundImage: 'url("/BGMI_images/pubg-helmet-guy-immortality-ao-1920x1080.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(0deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 100%)",
    zIndex: 1,
  },
});

const SectionTitle = styled(Typography)({
  color: "#fff",
  fontFamily: '"Oswald", sans-serif',
  marginBottom: "3rem",
  textTransform: "uppercase",
  letterSpacing: "3px",
  fontSize: "3.5rem",
  position: "relative",
  zIndex: 2,
  textShadow: "0 0 15px #0088ff, 0 0 30px #ff0000",
  userSelect: "none",
});

const RuleCard = styled(Paper)({
  position: "relative",
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  borderRadius: "18px",
  border: "1.5px solid rgba(255, 255, 255, 0.2)",
  padding: "1.5rem 1.2rem",
  width: "280px",
  clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
  minHeight: "260px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  boxShadow: "0 10px 35px rgba(0, 0, 0, 0.7)",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  color: "#fff",
  "&:hover": {
    transform: "translateY(-12px) scale(1.04)",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.85)",
    borderColor: "rgba(255, 255, 255, 0.35)",
  },
});

const RuleIcon = styled(Box)({
  fontSize: "4rem",
  color: "#00ffe7",
  marginBottom: "1.2rem",
  filter: "drop-shadow(0 0 8px #00ffe7)",
});

const RuleTitle = styled(Typography)({
  color: "#fff",
  fontFamily: '"Oswald", sans-serif',
  fontWeight: 600,
  fontSize: "1.4rem",
  marginBottom: "0.6rem",
  textAlign: "center",
  textShadow: "0 0 6px #ffffffaa",
});

const RuleText = styled(Typography)({
  color: "#ccc",
  fontSize: "0.95rem",
  textAlign: "center",
  lineHeight: 1.6,
});

const rules = [
  {
    icon: <GroupsIcon sx={{ fontSize: 56, color: "#ffd700" }} />,
    title: "Team Formation",
    text: "Form teams of 2-5 players. Lone wolves welcome. Squad up or go solo – your call!",
  },
  {
    icon: <CodeIcon sx={{ fontSize: 56, color: "#00ffe7" }} />,
    title: "Fresh Code Only",
    text: "No pre-loaded gear! All code must be written during the hack. Open-source allowed.",
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 56, color: "#ff0000" }} />,
    title: "Time Limit",
    text: "Stick to the mission clock. Submissions close on time. Late entries get left behind!",
  },
  {
    icon: <GavelIcon sx={{ fontSize: 56, color: "#ffd700" }} />,
    title: "Fair Play",
    text: "Cheaters will be dropped instantly. Respect the battleground and your fellow warriors.",
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 56, color: "#ff8800" }} />,
    title: "Final Demo",
    text: "You’ll need to drop your best shot. Present your project like a finishing move!",
  },
];

function Rules() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.to(sectionRef.current, {
      backgroundPosition: "center 15%",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <RulesSection ref={sectionRef}>
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2, py: 10 }}>
        <SectionTitle align="center">
          <span style={{ color: "#0088ff" }}>Rules</span> & Guidelines
        </SectionTitle>

        <Grid container spacing={4} justifyContent="center" sx={{ mb: 3 }}>
          {rules.slice(0, 3).map((rule, idx) => (
            <Grid
              item
              xs={12}
              sm={4}
              key={idx}
              sx={{ display: "flex", justifyContent: "center" }}
              ref={(el) => (cardsRef.current[idx] = el)}
            >
              <RuleCard>
                <RuleIcon>{rule.icon}</RuleIcon>
                <RuleTitle>{rule.title}</RuleTitle>
                <RuleText>{rule.text}</RuleText>
              </RuleCard>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4} justifyContent="center">
          {[3, 4].map((i) => (
            <Grid
              item
              xs={12}
              sm={4}
              key={i}
              sx={{ display: "flex", justifyContent: i === 3 ? "flex-end" : "flex-start" }}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <RuleCard>
                <RuleIcon>{rules[i].icon}</RuleIcon>
                <RuleTitle>{rules[i].title}</RuleTitle>
                <RuleText>{rules[i].text}</RuleText>
              </RuleCard>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 10,
            p: 4,
            background: "rgba(0,0,0,0.85)",
            borderRadius: 3,
            border: "2px solid #ff0000",
            maxWidth: 720,
            mx: "auto",
            boxShadow: "0 0 25px #ff0000",
          }}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: "#ffd700",
              mb: 2,
              fontWeight: "bold",
              textShadow: "0 0 10px #ffd700",
              fontFamily: '"Oswald", sans-serif'
            }}
          >
            Final Call
          </Typography>
          <Typography align="center" sx={{ color: "#eee", fontSize: "1.05rem", lineHeight: 1.6 }}>
            This is your battleground. Stick to the code, respect your squad, and give it your all.
            Every byte counts. Every second matters. Game on!
          </Typography>
        </Box>
      </Container>
    </RulesSection>
  );
}

export default Rules;
