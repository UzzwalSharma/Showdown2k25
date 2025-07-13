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

const DARK_BG = "#0a0a0a";
const NEOMORPH_CARD = "#1a1a1a";
const NEON_ACCENT = "#ffa200ff";
const SHADOW_LIGHT = "#2e2e2e";
const SHADOW_DARK = "#000000";
const TEXT_COLOR = "#f5f5f5";
const BRIGHT_YELLOW = "#ffde00";

const GameContainer = styled(Box)({
  minHeight: "100vh",
  background: `linear-gradient(135deg, ${DARK_BG}, #111111)`,
  padding: "4rem 2rem",
});

const GameCard = styled(Box)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: NEOMORPH_CARD,
  borderRadius: "20px",
  padding: "1.5rem",
  boxShadow: `
    8px 8px 16px ${SHADOW_DARK},
    -8px -8px 16px ${SHADOW_LIGHT}
  `,
  transition: "all 0.3s ease-in-out",
  maxWidth: 360,
  minHeight: 400,
  margin: "0 auto",
  border: "1px solid #222",
  "&:hover": {
    boxShadow: `0 0 20px ${NEON_ACCENT}, inset 2px 2px 8px #111, inset -2px -2px 8px #222`,
    transform: "translateY(-6px)",
  },
});

const ModeBadge = styled(Chip)({
  position: "absolute",
  top: "16px",
  left: "16px",
  backgroundColor: "#0f0f0f",
  color: NEON_ACCENT,
  fontSize: "0.7rem",
  border: `1px solid ${NEON_ACCENT}`,
  fontWeight: 600,
});

const RankBadge = styled(Chip)({
  position: "absolute",
  top: "16px",
  right: "16px",
  backgroundColor: "#1f1f1f",
  color: "#ffd700",
  fontSize: "0.7rem",
  border: "1px solid #ffda44",
  fontWeight: 600,
});

const IconContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  margin: "2rem auto 1.5rem",
  background: "#111",
  boxShadow: `inset 4px 4px 8px #000, inset -4px -4px 8px #333`,
  border: `2px solid ${NEON_ACCENT}`,
});

const HeaderTitle = styled(Typography)({
  fontSize: "2.8rem",
  fontWeight: 800,
  color: "#ffe100",
  textAlign: "center",
  marginBottom: "1rem",
  textTransform: "uppercase",
  textShadow: `0 0 8px #ffb300`,
});

const HeaderLine = styled(Box)({
  width: "80px",
  height: "3px",
  background: "#ffe100",
  margin: "0 auto 3rem",
  borderRadius: "2px",
  boxShadow: "0 0 12px #ffe100",
});

const gamingCards = [
  {
    mode: "EdTech",
    rank: "Innovator",
    title: "Education Revolution",
    desc: "Transform learning experiences with cutting-edge educational technology. Build platforms that make education accessible, engaging, and effective for all learners.",
    teams: "50+ Teams",
    duration: "48 Hours",
    difficulty: "Advanced",
    icon: BookOpen,
  },
  {
    mode: "AI/ML",
    rank: "Mastermind",
    title: "Artificial Intelligence Hub",
    desc: "Harness the power of machine learning and AI to solve complex problems. Create intelligent systems that can learn, adapt, and make decisions.",
    teams: "75+ Teams",
    duration: "48 Hours",
    difficulty: "Expert",
    icon: Brain,
  },
  {
    mode: "IoT",
    rank: "Connector",
    title: "Internet of Things Arena",
    desc: "Connect the physical and digital worlds through smart IoT solutions. Build networks of interconnected devices that communicate seamlessly.",
    teams: "40+ Teams",
    duration: "48 Hours",
    difficulty: "Intermediate",
    icon: Wifi,
  },
  {
    mode: "Healthcare",
    rank: "Lifesaver",
    title: "Medical Technology Zone",
    desc: "Develop healthcare solutions that save lives and improve patient outcomes. Create tools for better diagnosis, treatment, and care management.",
    teams: "60+ Teams",
    duration: "48 Hours",
    difficulty: "Advanced",
    icon: HeartPulse,
  },
  {
    mode: "Open Innovation",
    rank: "Pioneer",
    title: "Creative Solutions Lab",
    desc: "Think outside the box and create groundbreaking solutions for any challenge. This track welcomes innovative ideas across all domains.",
    teams: "100+ Teams",
    duration: "48 Hours",
    difficulty: "Open",
    icon: Lightbulb,
  },
  {
    mode: "Green Tech",
    rank: "Guardian",
    title: "Sustainability Command",
    desc: "Build eco-friendly technology solutions that protect our planet. Focus on renewable energy, waste reduction, and environmental conservation.",
    teams: "35+ Teams",
    duration: "48 Hours",
    difficulty: "Advanced",
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
          {gamingCards.map(({ mode, rank, title, desc, teams, duration, difficulty, icon: IconComponent }) => (
            <Grid item key={title} xs={12} sm={6} md={4}>
              <GameCard>
                <ModeBadge label={mode} />
                <RankBadge label={rank} />

                {/* Icon */}
                <IconContainer>
                  <IconComponent size={28} color={BRIGHT_YELLOW} style={{ position: "relative", zIndex: 10 }} />
                </IconContainer>

                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#fff",
                    textAlign: "center",
                    marginBottom: "1rem",
                    letterSpacing: "0.03em",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#aaa",
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
