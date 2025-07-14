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
  boxShadow: "inset 4px 4px 8px #000, inset -4px -4px 8px #333",
  border: `2px solid ${NEON_ACCENT}`,
});

const HeaderTitle = styled(Typography)({
  fontSize: "2.8rem",
  fontWeight: 800,
  color: "#ffe100",
  textAlign: "center",
  marginBottom: "1rem",
  textTransform: "uppercase",
  textShadow: "0 0 8px #ffb300",
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
    mode: "GameDev",
    rank: "🎮 Game On",
    title: "Play & Inspire",
    desc: "Design games that are fun and meaningful — from learning to problem-solving, build experiences that engage.",
    image: "/Tracks/edtech.png", // your existing local image
  },
  {
    mode: "AI/ML",
    rank: "🤖 AI for Everything",
    title: "Smarter Solutions",
    desc: "Use AI to solve real-world problems in healthcare, education, and daily life. Let your code think and act smartly for society.",
    image: "https://st1.techlusive.in/wp-content/uploads/2024/12/bgmi-10.jpg",
  },
  {
    mode: "GreenTech",
    rank: "🌱 GreenTech & Climate Innovation",
    title: "Eco Tech Power",
    desc: "Build technology to protect the planet — from clean energy to smart farming. Help nature and people thrive together.",
    image: "https://e1.pxfuel.com/desktop-wallpaper/191/565/desktop-wallpaper-1280x1024-game-pubg-girl-2020-1280x1024-resolution-backgrounds-and-gaming-girl-pc.jpg",
  },
  {
    mode: "Cybersecurity",
    rank: "🔐 Cybersecurity & Digital Trust",
    title: "Safer Internet",
    desc: "Create tools to protect privacy, prevent online threats, and build digital trust for communities and teams.",
    image: "https://i.pinimg.com/736x/36/b9/86/36b9864914f2778db34c95abdc72fa1c.jpg",
  },
  {
    mode: "Web3",
    rank: "🔗 Web3 & Blockchain",
    title: "Decentralized Future",
    desc: "Use blockchain to build secure systems — smart contracts, digital identities, and dApps that empower users.",
    image: "https://images.moneycontrol.com/static-mcnews/2023/12/BGMI-X-Ranveer-Singh.png",
  },
 
  {
    mode: "Wildcard",
    rank: "💡 Open Innovation",
    title: "Free Thinking Zone",
    desc: "Got a bold idea that doesn't fit in a box? This is your space to innovate — assistive tech, future tools, and more.",
    image: "https://wallpapers.com/images/hd/pubg-girl-hiding-and-scouting-cxfpeumaa68nvh1h.jpg",
  },
  {
    mode: "Special",
    rank: "🎖 Women in Tech",
    title: "All-Girls Squad Challenge",
    desc: "A special prize for the best women-led team. Celebrate creativity, teamwork, and leadership in tech.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrKQQgnGVTQrbFwJd1n2DGdKtDSgqCQpVHw&s",
  },
];


export default function PUBGGamingCardsMUI() {
  return (
    <GameContainer>
      <Container maxWidth="xl">
        <HeaderTitle variant="h1">Hackground India 2K25 Tracks</HeaderTitle>
        <HeaderLine />
        <Grid container spacing={4} justifyContent="center">
          {gamingCards.map(({ mode, rank, title, desc, image }) => (
            <Grid item key={title} xs={12} sm={6} md={4}>
              <GameCard>
                <ModeBadge label={mode} />
                <RankBadge label={rank} />
                <Box
                  sx={{
                    width: "100%",
                    height: "280px",
                    borderRadius: "12px",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    border: `2px solid ${NEON_ACCENT}`,
                    boxShadow: `0 0 20px ${NEON_ACCENT}66`,
                    marginBottom: 2,
                  }}
                />
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
