import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  BookOpen,
  Brain,
  Wifi,
  HeartPulse,
  Lightbulb,
  Leaf,
} from "lucide-react";

// Hackground neomorphic colors
const NEO_BG = "#fdf6c3"; // soft yellow base
const SHADOW_LIGHT = "#fffef5";
const SHADOW_DARK = "#e6ce7f";
const ACCENT = "#FFCC00"; // Hackground Yellow
const TEXT_DARK = "#222";

// Main container
const GameContainer = styled(Box)({
  minHeight: "100vh",
  background: "linear-gradient(135deg, #fffdee, #fffad2)",
  padding: "4rem 2rem",
});

// Neomorphic card
const GameCard = styled(Box)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: NEO_BG,
  borderRadius: "20px",
  padding: "1.5rem",
  boxShadow: `
    8px 8px 16px ${SHADOW_DARK},
    -8px -8px 16px ${SHADOW_LIGHT}
  `,
  transition: "all 0.3s ease-in-out",
  maxWidth: 350,
  minHeight: 400,
  margin: "0 auto",
  "&:hover": {
    boxShadow: `
      inset 4px 4px 8px ${SHADOW_DARK},
      inset -4px -4px 8px ${SHADOW_LIGHT}
    `,
    transform: "translateY(-4px)",
  },
});

// Badges
const ModeBadge = styled(Chip)({
  position: "absolute",
  top: "16px",
  left: "16px",
  backgroundColor: "#fff6d5",
  color: ACCENT,
  borderRadius: "16px",
  fontSize: "0.7rem",
  fontWeight: 600,
});

const RankBadge = styled(Chip)({
  position: "absolute",
  top: "16px",
  right: "16px",
  backgroundColor: "#ffe880",
  color: "#222",
  borderRadius: "16px",
  fontSize: "0.7rem",
  fontWeight: 700,
});

// Neomorphic icon circle
const IconContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  margin: "2rem auto 1.5rem",
  background: NEO_BG,
  boxShadow: `
    inset 4px 4px 8px ${SHADOW_DARK},
    inset -4px -4px 8px ${SHADOW_LIGHT}
  `,
});

// Header
const HeaderTitle = styled(Typography)({
  fontSize: "2.8rem",
  fontWeight: 800,
  color: "#222",
  textAlign: "center",
  marginBottom: "2rem",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
});

const HeaderLine = styled(Box)({
  width: "80px",
  height: "4px",
  background: ACCENT,
  margin: "0 auto 3rem",
  borderRadius: "2px",
});

// Cards data
const gamingCards = [
  {
    mode: "EdTech",
    rank: "Innovator",
    title: "Education Revolution",
    desc: "Transform learning experiences with cutting-edge educational technology. Build platforms that make education accessible, engaging, and effective for all learners.",
    icon: BookOpen,
  },
  {
    mode: "AI/ML",
    rank: "Mastermind",
    title: "Artificial Intelligence Hub",
    desc: "Harness the power of machine learning and AI to solve complex problems. Create intelligent systems that can learn, adapt, and make decisions.",
    icon: Brain,
  },
  {
    mode: "IoT",
    rank: "Connector",
    title: "Internet of Things Arena",
    desc: "Connect the physical and digital worlds through smart IoT solutions. Build networks of interconnected devices that communicate seamlessly.",
    icon: Wifi,
  },
  {
    mode: "Healthcare",
    rank: "Lifesaver",
    title: "Medical Technology Zone",
    desc: "Develop healthcare solutions that save lives and improve patient outcomes. Create tools for better diagnosis, treatment, and care management.",
    icon: HeartPulse,
  },
  {
    mode: "Open Innovation",
    rank: "Pioneer",
    title: "Creative Solutions Lab",
    desc: "Think outside the box and create groundbreaking solutions for any challenge. This track welcomes innovative ideas across all domains.",
    icon: Lightbulb,
  },
  {
    mode: "Green Tech",
    rank: "Guardian",
    title: "Sustainability Command",
    desc: "Build eco-friendly technology solutions that protect our planet. Focus on renewable energy, waste reduction, and environmental conservation.",
    icon: Leaf,
  },
];

export default function PUBGGamingCardsMUI() {
  return (
    <GameContainer>
      <Container maxWidth="xl">
        <HeaderTitle variant="h1">Hackground India 2K25 Tracks</HeaderTitle>
        <HeaderLine />

        <Grid container spacing={4} justifyContent="center">
          {gamingCards.map(({ mode, rank, title, desc, icon: IconComponent }) => (
            <Grid item key={title} xs={12} sm={6} md={4}>
              <GameCard>
                {/* Badges */}
                <ModeBadge label={mode} />
                <RankBadge label={rank} />

                {/* Icon */}
                <IconContainer>
                  <IconComponent size={28} color={ACCENT} />
                </IconContainer>

                {/* Title */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: TEXT_DARK,
                    textAlign: "center",
                    marginBottom: "1rem",
                    fontSize: "1.3rem",
                    letterSpacing: "0.03em",
                  }}
                >
                  {title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#555",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  {desc}
                </Typography>
              </GameCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </GameContainer>
  );
}
