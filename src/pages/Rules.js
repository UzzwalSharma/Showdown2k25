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
  backgroundImage: 'url("/images/rules.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  minHeight: "80vh",
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
    background:
      "linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 100%)",
    zIndex: 1,
  },
});

const SectionTitle = styled(Typography)({
  color: "#ff0000",
  fontFamily: '"Tekken", sans-serif',
  marginBottom: "3rem",
  textTransform: "uppercase",
  letterSpacing: "3px",
  fontSize: "3.5rem",
  position: "relative",
  zIndex: 2,
  textShadow:
    "0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000",
  userSelect: "none",
});

const RuleCard = styled(Paper)({
  position: "relative",
  background: "rgba(255, 255, 255, 0.1)", // translucent white
  backdropFilter: "blur(12px)", // glass blur effect
  WebkitBackdropFilter: "blur(12px)", // for Safari
  borderRadius: "20px",
  border: "1.5px solid rgba(255, 255, 255, 0.25)", // subtle border
  padding: "1.5rem 1.2rem",
  width: "280px",
    clipPath: "polygon(25px 0, calc(100% - 25px) 0, 100% 25px, 100% calc(100% - 25px), calc(100% - 25px) 100%, 25px 100%, 0 calc(100% - 25px), 0 25px)",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  minHeight: "250px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  boxShadow: `
    0 8px 32px 0 rgba(31, 38, 135, 0.37)
  `,
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  cursor: "pointer",
  color: "#e0e0e0",
  "&:hover": {
    transform: "translateY(-10px) scale(1.05)",
    boxShadow: `
      0 12px 40px 0 rgba(31, 38, 135, 0.6)
    `,
    borderColor: "rgba(255, 255, 255, 0.4)",
  },
});

const RuleIcon = styled(Box)({
  fontSize: "4rem",
  color: "#ffd700",
  marginBottom: "1.2rem",
  filter: "drop-shadow(0 0 8px #ffd700)",
  transition: "color 0.3s ease",
});

const RuleTitle = styled(Typography)({
  color: "#fff",
  fontWeight: 700,
  fontSize: "1.6rem",
  marginBottom: "0.8rem",
  letterSpacing: "1.5px",
  textAlign: "center",
  textShadow: "0 0 8px #ffffffaa",
  userSelect: "none",
});

const RuleText = styled(Typography)({
  color: "#ddd",
  fontSize: "1rem",
  textAlign: "center",
  lineHeight: 1.6,
});


const rules = [
  {
    icon: <GroupsIcon sx={{ fontSize: 56, color: "#ffd700" }} />,
    title: "Team Formation",
    text: "Teams can have 2-5 members. Solo participation is allowed. Cross-discipline teams are encouraged for diverse skillsets.",
  },
  {
    icon: <CodeIcon sx={{ fontSize: 56, color: "#00ffe7" }} />,
    title: "Original Code",
    text: "All code must be written during the hackathon. Use of open-source libraries is permitted, but no pre-existing projects or codebases.",
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 56, color: "#ff0000" }} />,
    title: "Time Limit",
    text: "All projects must be submitted before the deadline. Late submissions will not be considered for judging.",
  },
  {
    icon: <GavelIcon sx={{ fontSize: 56, color: "#ffd700" }} />,
    title: "Fair Play",
    text: "Plagiarism, cheating, or any form of misconduct will result in immediate disqualification. Respect all participants and judges.",
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 56, color: "#ff8800" }} />,
    title: "Demo & Presentation",
    text: "Each team must present their project to the judges. Demos should highlight gameplay, innovation, and technical achievements.",
  },
];

function Rules() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Background parallax effect
    gsap.to(sectionRef.current, {
      backgroundPosition: "center 20%",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // Animate cards fade in and upward scale
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0, scale: 0.9, rotationX: 15 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
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

    // Flicker effect on title
    const flickerTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    flickerTimeline.to(sectionRef.current.querySelector("h2"), {
      textShadow:
        "0 0 20px #ff0000, 0 0 40px #ff0000, 0 0 60px #ff0000, 0 0 80px #ff0000",
      duration: 1,
      ease: "power1.inOut",
    });
    flickerTimeline.to(sectionRef.current.querySelector("h2"), {
      textShadow:
        "0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000",
      duration: 1,
      ease: "power1.inOut",
    });

  }, []);

  return (
    <RulesSection ref={sectionRef}>
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2, py: 8 }}>
        <SectionTitle variant="h2" align="center">
          <span style={{ color: "#0088ff" }}>Rules</span> & Guidelines
        </SectionTitle>

        {/* First Level - 3 Cards */}
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 3 }}>
          {rules.slice(0, 3).map((rule, idx) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
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

        {/* Second Level - 2 Cards, centered */}
        <Grid container spacing={4} justifyContent="center">
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            sx={{ display: "flex", justifyContent: "flex-end" }}
            ref={(el) => (cardsRef.current[3] = el)}
          >
            <RuleCard>
              <RuleIcon>{rules[3].icon}</RuleIcon>
              <RuleTitle>{rules[3].title}</RuleTitle>
              <RuleText>{rules[3].text}</RuleText>
            </RuleCard>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            sx={{ display: "flex", justifyContent: "flex-start" }}
            ref={(el) => (cardsRef.current[4] = el)}
          >
            <RuleCard>
              <RuleIcon>{rules[4].icon}</RuleIcon>
              <RuleTitle>{rules[4].title}</RuleTitle>
              <RuleText>{rules[4].text}</RuleText>
            </RuleCard>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 8,
            p: 4,
            background: "rgba(0,0,0,0.85)",
            borderRadius: 3,
            border: "2px solid #ff0000",
            maxWidth: 720,
            mx: "auto",
            boxShadow: "0 0 20px #ff0000",
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
            }}
          >
            Additional Notes
          </Typography>
          <Typography
            align="center"
            sx={{ color: "#fff", fontSize: "1.1rem", lineHeight: 1.6 }}
          >
            All participants must adhere to the event&apos;s code of conduct.
            Judges&apos; decisions are final. By participating, you agree to
            allow your project to be showcased by the organizers. For any
            queries, contact the event coordinators.
          </Typography>
        </Box>
      </Container>
    </RulesSection>
  );
}

export default Rules;
