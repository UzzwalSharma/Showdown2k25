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

import { Instagram } from "@mui/icons-material";


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
      role: "Lead Organiser",
     
      avatar: "/Team/IMG-20250625-WA0285 - Maaz Anwar.jpg",
      instagram: "https://www.instagram.com/maaz.anwar",
      linkedin: "https://www.linkedin.com/in/maazanwar414",
    },
     {
      id: 2,
      name: "Ujjwal Aggarwal",
      role: "Lead Organiser",
     
      avatar: "/Team/IMG-20250415-WA0050 - Ujjwal Agarwal (2).jpg",
       instagram: "https://www.instagram.com/maaz.anwar",
      linkedin: "sarahchen",
    },
    {
      id: 3,
      name: "Animesh",
      role: "Lead Organiser",
     
      avatar: "/Team/Animesh Singh - Animesh Singh.jpg",
     
      linkedin: "https://www.linkedin.com/in/animeshsingh9693/",
       instagram: "https://www.instagram.com/maaz.anwar",
    },
    {
      id: 4,
      name: "Anmol",
      role: "Lead Organiser",
     
      avatar: "/Team/IMG-20250625-WA0285 - Maaz Anwar.jpg",
     
      linkedin: "https://www.linkedin.com/in/maazanwar414",
       instagram: "https://www.instagram.com/maaz.anwar",
    },
   
    
    {
      id: 5,
      name: "Ujjwal Sharma",
      role: "Technical Head",
     
      avatar: "/Team/WhatsApp Image 2024-07-18 at 10.12.39_30e74f22.jpg",
     
      linkedin: "sarahchen",
       instagram: "https://www.instagram.com/maaz.anwar",
    },
   
    {
      id: 6,
      name: "Umesh Kataria",
     
     role: "Sponsership head",
      avatar: "/Team/WhatsApp Image 2025-04-02 at 21.44.21_496cb671 - Umesh Kataria.jpg",
     
      linkedin: "https://www.linkedin.com/in/umeshxkataria/",
       instagram: "https://www.instagram.com/maaz.anwar",
    },
     {
      id: 7,
      name: "Harsh Gupta",
      role: "Design Head",
     
      avatar: "/Team/my picture - Harsh Gupta.jpg",
     
      linkedin: "https://www.linkedin.com/in/rahulgoyal83789",
       instagram: "https://www.instagram.com/harsh__6174__/",
    },
     {
      id: 8,
      name: "Nishcay Chaurasia",
      role: "Tech Team",
     
      avatar: "/Team/WhatsApp Image 2025-06-28 at 00.01.46_e8207855 - Nishchay Chaurasia.jpg",
     
      linkedin: "https://www.linkedin.com/in/nishchaync-83b8152b0/",
       instagram: "https://www.instagram.com/_nishchaync_/",
    },
     {
      id: 9,
      name: "Advay Anand",
      role: "Tech Team",
     
      avatar: "/Team/P1 - Advay Anand.jpg ",
     
      linkedin: "https://www.linkedin.com/in/advay-anand-a89024277/",
       instagram: "https://www.instagram.com/advay_anand_7/",
    },
     {
      id: 10,
      name: "Aman",
      role: "Tech Team",
     
      avatar: "/Team/nay-khichwa-le-cropped - Aman Bobal.jpg",
     
      linkedin: "https://www.linkedin.com/in/aman-bobal/",
       instagram: "https://www.instagram.com/stealthbeast.3xx0/",
    },
    
     {
      id: 11,
      name: "Jigisha baliyan",
      role: "Pr & outreach team",
     
      avatar: " ",
     
      linkedin: "https://www.linkedin.com/in/jigisha-baliyann/",
       instagram: "https://www.instagram.com/j.baliyann/",
    },
    
     {
      id: 11,
      name: "Keshav",
      role: "Pr & outreach team",
     
     
      avatar: "/Team/IMG_7302 - Keshav Mehta.JPG",
     
      linkedin: "https://www.linkedin.com/in/aman-bobal/",
       instagram: "https://www.instagram.com/kesh.av891?igsh=MTNmNmM0NThtMDliaw==",
    },
    
     {
      id: 12,
      name: "Rhythm",
        role: "Social Media Team",
     
     
      avatar: "/Team/IMG20250316161749 - Rhythm Arora.jpg ",
     
      linkedin: "https://www.linkedin.com/in/rhythmisloading/",
       instagram: "https://www.instagram.com/rhythmisloading/",
    },
    
     {
      id: 13,
      name: "Nitya",
        role: "Social Media Team",
     
      avatar: "/Team/IMG_20240626_113826 - Nitya Gosain.jpg",
     
      linkedin: "https://www.linkedin.com/in/nitya-gosain-42037328b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
       instagram: "https://www.instagram.com/nitya_1103?igsh=NTM0OHBvM2JjNGJi",
    },
    
     {
      id: 14,
      name: "Ankit",
      role: "Video Editor",
     
      avatar: "/Team/IMG20250208153043~2 - Ankit Kumar.jpg",
     
      linkedin: "https://www.linkedin.com/in/ankit-kumar5277/",
       instagram: "https://www.instagram.com/softwarexankit/",
    },
     {
      id: 15,
      name: "Rohit Chauhan",
      role: "Video Editor",
     
      avatar: "/Team/Snapchat-1910008162 - Rohit Chauhan.jpg",
     
      linkedin: "https://www.linkedin.com/in/rohit-chauhan-096847340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
       instagram: "https://www.instagram.com/_euphoria.us?igsh=MThpbHRtbzR3YWVxZw==",
    },
     {
      id: 15,
      name: "Akash",
      role: "Design Team",
     
      avatar: "/Team/DevopsOffice - Akash Gupta.jpg",
     
      linkedin: "https://www.linkedin.com/in/akash-gupta-718363296/",
       instagram: "https://www.instagram.com/i_am_akashit/",
    },
   
    
  ];

  const mentors = [
   
  ];

  const judges = [
   
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
    <a
      href={person.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
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
    </a>
  </Tooltip>
)}
{person.instagram && (
  <Tooltip title="Instagram">
    <a
      href={person.instagram}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", display: "inline-flex" }}
    >
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
        <Instagram sx={{ fontSize: 18 }} />
      </IconButton>
    </a>
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

  const isComingSoon = (activeTab === 1 && (!mentors.length || mentors.every(m => !m.name))) ||
                       (activeTab === 2 && (!judges.length || judges.every(j => !j.name)));

  if (isComingSoon) {
    return (
      <Box
        sx={{
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          animation: `${pulse} 2s infinite`,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#ff6200ff",
            textShadow: "0 0 10px #ec880d55",
            animation: `${glitch} 2s finite`,
          }}
        >
        Coming Soon
        </Typography>
        <Typography sx={{ color: "#aaa", mt: 1 }}>
          Stay tuned, we’re getting the best on board!
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
      {data.map((person, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={person.id}>
          <Fade in={true} timeout={800 + index * 150}>
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
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 ,ml:"2" }}>
                <Divider sx={{ width: 80, borderColor: "#ffa200ff", borderWidth: 2 }} />
                <ClippedBox sx={{ fontSize: "0.8rem" }}>LIVE</ClippedBox>
                <Divider sx={{ width: 80, borderColor: "#ffb300ff", borderWidth: 2 }} />
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
                        color: "#ff8800ff",
                      },
                    },
                    "& .MuiTabs-indicator": {
                      backgroundColor: "#ffbf00ff",
                      height: 3,
                    },
                  }}
                >
                  <Tab icon={<SportsMma />} label="TEAM" />
                  <Tab icon={<Star />} label="MENTORS" />
                  <Tab icon={<EmojiEvents />} label="JUDGES" />
                </Tabs>
              </Paper>
            </Box>
          </Fade>

          <Box sx={{ mt: 4 , ml:8 }}>{renderContent()}</Box>
        </Container>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default HackathonSections;