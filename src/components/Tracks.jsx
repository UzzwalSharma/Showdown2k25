import React from "react";
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Container,
  Chip
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { BookOpen, Brain, Wifi, HeartPulse, Lightbulb, Leaf, User, Calendar, Star } from "lucide-react";

// PUBG-style bright yellow
const BRIGHT_YELLOW = "#FFCC00"; // PUBG yellow
const BRIGHT_YELLOW_LIGHT = "#FFF9E3";

// Pulse glow animation
const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 15px rgba(220, 231, 22, 0.92), inset 0 0 20px rgba(255, 204, 0, 0.1);
  }
  50% {
    box-shadow: 0 0 25px rgba(255, 255, 102, 0.7), inset 0 0 30px rgba(255, 255, 102, 0.2);
  }
`;

// Main container with gradient background
const GameContainer = styled(Box)({
  minHeight: "100vh",
  background: "linear-gradient(135deg, #0f172a, #1e293b, #111827)",
  padding: "4rem 2rem",
});

// Gaming card with PUBG yellow and white text
const GameCard = styled(Box)({
  position: "relative",
  background: `linear-gradient(135deg, ${BRIGHT_YELLOW}22, ${BRIGHT_YELLOW_LIGHT}33)`,
  backdropFilter: "blur(15px)",
  border: `2px solid ${BRIGHT_YELLOW}`,
  padding: "1.2rem 1rem",
  cursor: "pointer",
  overflow: "hidden",
  animation: `${pulseGlow} 4s ease-in-out infinite alternate`,
  clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
  transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  maxWidth: 350,
  margin: "0 auto",
  "&:hover": {
    transform: "translateY(-8px) scale(1.02)",
    boxShadow: `0 15px 40px ${BRIGHT_YELLOW}66, inset 0 0 25px #fff2`,
    border: `2px solid ${BRIGHT_YELLOW}`,
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "20px",
    right: "20px",
    height: "1px",
    background: `linear-gradient(90deg, transparent, ${BRIGHT_YELLOW}, transparent)`,
    zIndex: 1,
  },
});

// Corner decorative elements
const CornerClip = styled(Box)({
  position: "absolute",
  width: "24px",
  height: "24px",
  background: `linear-gradient(135deg, ${BRIGHT_YELLOW}, ${BRIGHT_YELLOW_LIGHT})`,
});

const TopRightCorner = styled(CornerClip)({
  top: 0,
  right: "20px",
  clipPath: "polygon(0 0, 100% 0, 100% 100%)",
});

const BottomLeftCorner = styled(CornerClip)({
  bottom: 0,
  left: "20px",
  clipPath: "polygon(0 0, 0 100%, 100% 100%)",
});

// Decorative lines
const DecorativeLine = styled(Box)({
  position: "absolute",
  background: `linear-gradient(to bottom, ${BRIGHT_YELLOW}, transparent)`,
});

const VerticalLine = styled(DecorativeLine)({
  width: "1px",
  height: "32px",
});

const HorizontalLine = styled(Box)({
  position: "absolute",
  height: "1px",
  width: "32px",
  background: `linear-gradient(to right, ${BRIGHT_YELLOW}, transparent)`,
});

// Mode badge with clipping
const ModeBadge = styled(Chip)({
  position: "absolute",
  top: "16px",
  left: "16px",
  backgroundColor: "rgba(255,255,255,0.7)",
  color: BRIGHT_YELLOW,
  border: `1px solid ${BRIGHT_YELLOW}`,
  fontSize: "0.7rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)",
  "& .MuiChip-label": {
    padding: "4px 12px",
  },
});

// Rank badge
const RankBadge = styled(Chip)({
  position: "absolute",
  top: "16px",
  right: "16px",
  background: `linear-gradient(135deg, ${BRIGHT_YELLOW}, ${BRIGHT_YELLOW_LIGHT})`,
  color: "#222",
  fontSize: "0.7rem",
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  boxShadow: `0 4px 15px ${BRIGHT_YELLOW}55`,
  border: "1px solid rgba(255,255,255,0.3)",
  clipPath: "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
  "& .MuiChip-label": {
    padding: "8px 16px",
  },
});

// Icon container with clipping
const IconContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  background: `linear-gradient(135deg, ${BRIGHT_YELLOW}55, #fff8)`,
  border: `2px solid ${BRIGHT_YELLOW}`,
  margin: "2rem auto 1.5rem",
  position: "relative",
  overflow: "hidden",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, rgba(255,255,255,0.2), transparent)",
    clipPath: "polygon(0 0, 70% 0, 100% 30%, 100% 100%, 30% 100%, 0 70%)",
  },
});

// Stats container
const StatsContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1.5rem",
});

const StatItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  color: BRIGHT_YELLOW,
  fontSize: "0.75rem",
  fontWeight: 600,
});

// Action button with clipping
const ActionButton = styled(Button)({
  width: "100%",
  padding: "12px 24px",
  background: `linear-gradient(135deg, ${BRIGHT_YELLOW}, ${BRIGHT_YELLOW_LIGHT})`,
  color: "#222",
  fontWeight: 800,
  fontSize: "0.9rem",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  border: "2px solid transparent",
  clipPath: "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: `linear-gradient(135deg, ${BRIGHT_YELLOW_LIGHT}, ${BRIGHT_YELLOW})`,
    transform: "translateY(-2px)",
    boxShadow: `0 8px 20px ${BRIGHT_YELLOW}55`,
    border: `2px solid ${BRIGHT_YELLOW}`,
  },
});

// Header styling
const HeaderTitle = styled(Typography)({
  fontSize: "3.5rem",
  fontWeight: 900,
  color: "white",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  textAlign: "center",
  marginBottom: "2rem",
  textShadow: `0 0 20px ${BRIGHT_YELLOW}55`,
});

const HeaderLine = styled(Box)({
  width: "96px",
  height: "4px",
  background: `linear-gradient(90deg, ${BRIGHT_YELLOW}, ${BRIGHT_YELLOW_LIGHT})`,
  margin: "0 auto 3rem",
  borderRadius: "2px",
});

// Gaming cards data
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
        {/* Header */}
        <HeaderTitle variant="h1">
          Hackground 2k25 Tracks
        </HeaderTitle>
        <HeaderLine />

        {/* Cards Grid */}
        <Grid container spacing={4} justifyContent="center">
          {gamingCards.map(({ mode, rank, title, desc, teams, duration, difficulty, icon: IconComponent }) => (
            <Grid item key={title} xs={12} sm={6} md={4}>
              <GameCard>
                {/* Corner decorations */}
                <TopRightCorner />
                <BottomLeftCorner />
                
                {/* Decorative lines */}
                <VerticalLine sx={{ top: 0, right: "20px" }} />
                <VerticalLine sx={{ bottom: 0, left: "20px" }} />
                <HorizontalLine sx={{ top: "20px", right: 0 }} />
                <HorizontalLine sx={{ bottom: "20px", left: 0 }} />

                {/* Badges */}
                <ModeBadge label={mode} />
                <RankBadge label={rank} />

                {/* Icon */}
                <IconContainer>
                  <IconComponent size={28} color={BRIGHT_YELLOW} style={{ position: "relative", zIndex: 10 }} />
                </IconContainer>

                {/* Title */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: "white",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    textAlign: "center",
                    marginBottom: "1rem",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: BRIGHT_YELLOW,
                    },
                  }}
                >
                  {title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                    fontWeight: 500,
                    marginBottom: "1.5rem",
                  }}
                >
                  {desc}
                </Typography>

                {/* Stats */}
                <StatsContainer>
                  <StatItem>
                    <User size={12} />
                    <Typography variant="caption">{teams}</Typography>
                  </StatItem>
                  <StatItem>
                    <Calendar size={12} />
                    <Typography variant="caption">{duration}</Typography>
                  </StatItem>
                  <StatItem>
                    <Star size={12} />
                    <Typography variant="caption">{difficulty}</Typography>
                  </StatItem>
                </StatsContainer>

                {/* Action Button */}
                <ActionButton>
                  Join Track
                </ActionButton>

                {/* Hover glow effect */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(135deg, ${BRIGHT_YELLOW}11, #fff2)`,
                    clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    opacity: 0,
                    transition: "opacity 0.5s ease",
                    pointerEvents: "none",
                    ".MuiBox-root:hover &": {
                      opacity: 1,
                    },
                  }}
                />
              </GameCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </GameContainer>
  );
}