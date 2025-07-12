import React, { useState } from "react";
import {
  Box,
  Card,
  Tooltip,
  Typography,
  Avatar,
  IconButton,
  Tabs,
  Tab,
  Grid,
  Container,
  Paper,
  Divider,
  Fade,
  Grow,
  ThemeProvider,
  createTheme,
  styled,
  keyframes,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Email,
  EmojiEvents,
  Star,
  SportsMma,
} from "@mui/icons-material";

const gameTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ff8800", dark: "#cc4400", light: "#ffaa33" },
    secondary: { main: "#ffffff", dark: "#e0e0e0", light: "#ffffff" },
    background: { default: "#0a0a0a", paper: "#1a1a1a" },
    text: { primary: "#ffffff", secondary: "#f0f0f0" },
  },
  typography: {
    fontFamily: '"Oswald", "Roboto", sans-serif',
    h1: { fontWeight: 700, letterSpacing: "0.1em" },
    h6: { fontWeight: 600, letterSpacing: "0.05em" },
  },
});



const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
`;

const glitch = keyframes`
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-2px); }
  40% { transform: translateX(2px); }
  60% { transform: translateX(-1px); }
  80% { transform: translateX(1px); }
`;

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  backgroundImage: `
    linear-gradient(
      rgba(10,10,10,0.9),
      rgba(10,10,10,0.95)
    ),
    url("https://c4.wallpaperflare.com/wallpaper/256/240/14/pubg-wallpaper-preview.jpg")
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed", // 🔥 This creates the parallax scroll effect
  position: "relative",
  zIndex: 0,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      radial-gradient(circle at 25% 25%, #00ff88 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, #ff6b35 0%, transparent 50%)
    `,
    opacity: 0.03,
    pointerEvents: "none",
    zIndex: 1,
  },
}));


const GlassCard = styled(Card)({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "20px",
  position: "relative",
  overflow: "hidden",
  "&::before": {
  background: "linear-gradient(135deg, rgba(255,85,0,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)",
},
"&:hover": {
  boxShadow: "0 25px 50px rgba(255,85,0,0.2)",
  border: "1px solid rgba(255,85,0,0.3)",
},

  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
});

const ClippedBox = styled(Box)({
  background: "linear-gradient(135deg, #fff200, #ffffff)",
  clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 100%, 15px 100%)",
  padding: "4px 16px",
  fontSize: "0.75rem",
  fontWeight: 700,
  color: "#000",
  letterSpacing: "0.1em",
});


const HackathonSections = () => {
  const [activeTab, setActiveTab] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Maaz Anwar",
      role: "Full Stack Developer",
      rank: "CONQUEROR",
      avatar: "/Team/IMG-20250625-WA0285 - Maaz Anwar.jpg",
      github: "alexj",
      linkedin: "alexjohnson",
    },
    {
      id: 2,
      name: "Rahul",
      role: "UI/UX Designer",
      rank: "ACE",
      avatar: "/Team/Screenshot_2024-12-07-08-50-44-783_com.miui.gallery - Rahul.png",
      github: "sarahc",
      linkedin: "sarahchen",
    },
    {
      id: 4,
      name: "Ujjwal Sharma",
      role: "Full stack developer",
      rank: "ACE",
      avatar: "/Team/WhatsApp Image 2024-07-18 at 10.12.39_30e74f22.jpg",
      github: "sarahc",
      linkedin: "sarahchen",
    },
    {
      id: 5,
      name: "Ujjwal Aggarwal",
      role: "Full stack developer",
      rank: "ACE",
      avatar: "/Team/IMG-20250415-WA0050 - Ujjwal Agarwal (2).jpg",
      github: "sarahc",
      linkedin: "sarahchen",
    },
    {
      id: 3,
      name: "Umesh Kataria",
      role: "Backend Developer",
      rank: "CROWN",
      avatar: "/Team/WhatsApp Image 2025-04-02 at 21.44.21_496cb671 - Umesh Kataria.jpg",
      github: "mikero",
      linkedin: "mikerodriguez",
    },
  ];

  const mentors = [
    {
      id: 1,
      name: "Dr. Emily Watson",
      role: "AI/ML Engineering",
      rank: "LEGEND",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      email: "emily@techcorp.com",
    },
    {
      id: 2,
      name: "John Park",
      role: "Product Management",
      rank: "LEGEND",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      email: "john@startuphub.com",
    },
  ];

  const judges = [
    {
      id: 1,
      name: "Lisa Chang",
      role: "CTO",
      rank: "COMMANDER",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      email: "lisa@innovatetech.com",
    },
    {
      id: 2,
      name: "Robert Kim",
      role: "Venture Partner",
      rank: "COMMANDER",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      email: "robert@futurevc.com",
    },
  ];

  const PersonCard = ({ person }) => (
    <Grow in={true} timeout={700}>
      <GlassCard sx={{ p: 3, textAlign: "center" }}>
        <Box position="relative" display="flex" justifyContent="center" mb={2}>
          <Avatar
            src={person.avatar}
            alt={person.name}
            sx={{
              width: 100,
              height: 100,
              border: "3px solid #ff5500",
                boxShadow: "0 0 20px rgba(255,85,0,0.5)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 8,
              right: "calc(50% - 50px)",
              width: 12,
              height: 12,
             bgcolor: "#ff5500",
              borderRadius: "50%",
              animation: `${pulse} 2s infinite`,
            }}
          />
        </Box>

        <Typography variant="h6" sx={{ color: "#00ff88", mb: 1, animation: `${glitch} 3s infinite` }}>
          {person.name}
        </Typography>

        <ClippedBox sx={{ display: "inline-block", mb: 2 }}>
          {person.role}
        </ClippedBox>

        <Box display="flex" justifyContent="center" gap={1}>
          {person.github && (
            <Tooltip title="GitHub">
              <IconButton
                sx={{
                  bgcolor: "rgba(0,255,136,0.1)",
                  border: "1px solid rgba(0,255,136,0.3)",
                  color: "#00ff88",
                  "&:hover": {
                    bgcolor: "#00ff88",
                    color: "#000",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <GitHub sx={{ fontSize: 18 }} />
              </IconButton>
            </Tooltip>
          )}
          {person.linkedin && (
            <Tooltip title="LinkedIn">
              <IconButton
                sx={{
                  bgcolor: "rgba(0,255,136,0.1)",
                  border: "1px solid rgba(0,255,136,0.3)",
                  color: "#00ff88",
                  "&:hover": {
                    bgcolor: "#00ff88",
                    color: "#000",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <LinkedIn sx={{ fontSize: 18 }} />
              </IconButton>
            </Tooltip>
          )}
          {person.email && (
            <Tooltip title="Email">
              <IconButton
                sx={{
                  bgcolor: "rgba(0,255,136,0.1)",
                  border: "1px solid rgba(0,255,136,0.3)",
                  color: "#00ff88",
                  "&:hover": {
                    bgcolor: "#00ff88",
                    color: "#000",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Email sx={{ fontSize: 18 }} />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </GlassCard>
    </Grow>
  );

  const renderContent = () => {
    const data = [teamMembers, mentors, judges][activeTab];
    return (
      <Grid container spacing={3}>
        {data.map((person, index) => (
          <Grid item xs={12} md={6} lg={4} key={person.id}>
            <Fade in={true} timeout={800 + index * 200}>
              <div>
                <PersonCard person={person} />
              </div>
            </Fade>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <ThemeProvider theme={gameTheme}>
      <StyledContainer maxWidth={false} sx={{ py: 4, px: 2 }}>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Fade in={true} timeout={1000}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem" },
                      color: "#f0e744df",
                  fontFamily: '"Oswald", sans-serif',
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  mb: 1,
                  textShadow: "0 0 20px rgba(0,255,136,0.5)",
                  animation: `${glitch} 4s infinite`,
                }}
              >
                MEET THE TEAM
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#ff6b35",
                  fontFamily: '"Oswald", sans-serif',
                  letterSpacing: "0.1em",
                  mb: 2,
                  textShadow: "0 0 10px rgba(255,107,53,0.5)",
                }}
              >
                HACKGROUND INDIA 2K25
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                <Divider sx={{ width: 80, borderColor: "#00ff88", borderWidth: 2 }} />
                <ClippedBox sx={{ fontSize: "0.8rem" }}>LIVE</ClippedBox>
                <Divider sx={{ width: 80, borderColor: "#00ff88", borderWidth: 2 }} />
              </Box>
            </Box>
          </Fade>

          <Fade in={true} timeout={1200}>
            <Box sx={{ mb: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Tabs
                  value={activeTab}
                  onChange={(e, v) => setActiveTab(v)}
                  centered
                  sx={{
                    "& .MuiTab-root": {
                      color: "#cccccc",
                      fontFamily: '"Oswald", sans-serif',
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      "&.Mui-selected": {
                        color: "#00ff88",
                      },
                    },
                    "& .MuiTabs-indicator": {
                      backgroundColor: "#00ff88",
                      height: 3,
                    },
                  }}
                >
                  <Tab icon={<SportsMma />} label="SQUAD" />
                  <Tab icon={<Star />} label="COMMANDERS" />
                  <Tab icon={<EmojiEvents />} label="GENERALS" />
                </Tabs>
              </Paper>
            </Box>
          </Fade>

          <Box sx={{ mt: 4 }}>{renderContent()}</Box>
        </Container>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default HackathonSections;