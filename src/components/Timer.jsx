import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const RegistrationWrapper = styled(Box)({
  minHeight: "100vh",
  width: "100%",
  backgroundImage: 'url("/BGMI_images/danger-zone-bg.png")',
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  padding: "2rem 1rem",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to bottom, #330000ee, #1a0000f9)",
    zIndex: 1,
  },
});

const GlowingBox = styled(Paper)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(4),
  borderRadius: "20px",
  background: "rgba(30, 0, 0, 0.9)",
  border: "2px solid #ff0000",
  backdropFilter: "blur(15px)",
  zIndex: 2,
  width: "80%",
  maxWidth: 900,
  margin: "0 auto",
  boxShadow: "0 0 50px #ff000066",
  transition: "0.3s ease",
  animation: "borderPulse 2s infinite",
  "@keyframes borderPulse": {
    "0%": { borderColor: "#ff0000", boxShadow: "0 0 50px #ff000066" },
    "50%": { borderColor: "#ff4444", boxShadow: "0 0 70px #ff000088" },
    "100%": { borderColor: "#ff0000", boxShadow: "0 0 50px #ff000066" },
  },
}));

const CriticalBadge = styled(Box)({
  display: "inline-block",
  padding: "0.5rem 1.5rem",
  background: "linear-gradient(45deg, #ff0000, #990000)",
  borderRadius: "25px",
  fontSize: "0.9rem",
  fontWeight: "bold",
  color: "#fff",
  letterSpacing: "1px",
  textTransform: "uppercase",
  animation: "criticalPulse 1s infinite",
  boxShadow: "0 0 25px #ff000077",
  "@keyframes criticalPulse": {
    "0%": { 
      boxShadow: "0 0 25px #ff000077", 
      transform: "scale(1)",
      background: "linear-gradient(45deg, #ff0000, #990000)"
    },
    "50%": { 
      boxShadow: "0 0 40px #ff0000bb", 
      transform: "scale(1.08)",
      background: "linear-gradient(45deg, #ff3333, #cc0000)"
    },
    "100%": { 
      boxShadow: "0 0 25px #ff000077", 
      transform: "scale(1)",
      background: "linear-gradient(45deg, #ff0000, #990000)"
    },
  },
});

const FeatureCard = styled(Box)({
  border: "1px solid #ff3333",
  padding: "1.5rem",
  borderRadius: "12px",
  textAlign: "center",
  background: "rgba(80,0,0,0.4)",
  backdropFilter: "blur(5px)",
  transition: "0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 15px 35px #ff000044",
    border: "1px solid #ff6666",
    background: "rgba(100,0,0,0.5)",
  },
});

const HackgroundRegistration = () => {
  // Countdown timer logic for end of today
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const deadline = new Date();
    deadline.setHours(23, 59, 59, 999); // End of today
    
    const timer = setInterval(() => {
      const now = new Date();
      const diff = deadline - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft("ZONE CLOSED!");
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft(`${hours}H : ${minutes}M : ${seconds}S`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <RegistrationWrapper>
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <GlowingBox>
          {/* Critical Badge */}
          <Box textAlign="center" mb={2}>
            <CriticalBadge>🚨 FINAL ZONE - CLOSING TODAY</CriticalBadge>
          </Box>

          {/* Main Title */}
          <Typography
            align="center"
            variant="h2"
            sx={{
              fontFamily: "Oswald, sans-serif",
              fontWeight: "bold",
              letterSpacing: "3px",
              color: "#fff",
              textShadow: "0 0 30px #ff0000",
              mb: 1,
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
            }}
          >
            HACKGROUND INDIA 2K25
          </Typography>

          {/* Critical Alert */}
          <Typography
            align="center"
            sx={{
              fontSize: { xs: "1.3rem", sm: "1.6rem" },
              color: "#ff2222",
              fontWeight: "bold",
              letterSpacing: "2px",
              mb: 2,
              textTransform: "uppercase",
              textShadow: "0 0 15px #ff0000",
            }}
          >
            ⚡ LAST HOURS TO SURVIVE ⚡
          </Typography>

          {/* Final Countdown */}
          <Typography
            align="center"
            sx={{
              fontSize: { xs: "2rem", sm: "2.8rem" },
              fontWeight: "bold",
              color: "#fff",
              textShadow: "0 0 20px #ff0000",
              mb: 1,
              fontFamily: "monospace",
            }}
          >
            {timeLeft}
          </Typography>

          <Typography
            align="center"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1.1rem" },
              color: "#ff6666",
              fontWeight: "bold",
              letterSpacing: "1px",
              mb: 4,
              textTransform: "uppercase",
            }}
          >
            Until the playzone closes forever
          </Typography>

          {/* Features Grid */}
          <Grid container spacing={3} justifyContent="center" mb={4}>
            <Grid item xs={12} sm={4}>
              <FeatureCard>
                <Typography sx={{ fontSize: "2rem", color: "#ff2222", mb: 1 }}>
                  💀
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#fff",
                    mb: 0.5,
                  }}
                >
                  FINAL CIRCLE
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "#bbb" }}>
                  No second chances left
                </Typography>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FeatureCard>
                <Typography sx={{ fontSize: "2rem", color: "#ff2222", mb: 1 }}>
                  ⚡
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#fff",
                    mb: 0.5,
                  }}
                >
                  BLUE ZONE INCOMING
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "#bbb" }}>
                  Move now or get eliminated
                </Typography>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FeatureCard>
                <Typography sx={{ fontSize: "2rem", color: "#ff2222", mb: 1 }}>
                  🎯
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#fff",
                    mb: 0.5,
                  }}
                >
                  LAST MAN STANDING
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "#bbb" }}>
                  Submit before elimination
                </Typography>
              </FeatureCard>
            </Grid>
          </Grid>

          {/* CTA Section */}
          <Box textAlign="center">
            <Button
              variant="contained"
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
                fontWeight: "bold",
                px: { xs: 4, sm: 8 },
                py: { xs: 1.8, sm: 2.5 },
                borderRadius: "15px",
                background: "linear-gradient(45deg, #ff0000, #990000)",
                boxShadow: "0 10px 30px #ff000088",
                color: "#fff",
                letterSpacing: "2px",
                textTransform: "uppercase",
                transition: "0.3s ease",
                animation: "urgentShake 0.6s infinite",
                "&:hover": {
                  boxShadow: "0 15px 45px #ff0000aa",
                  transform: "scale(1.08)",
                  background: "linear-gradient(45deg, #ff3333, #cc0000)",
                },
                "@keyframes urgentShake": {
                  "0%": { transform: "translateX(0)" },
                  "15%": { transform: "translateX(-6px)" },
                  "30%": { transform: "translateX(6px)" },
                  "45%": { transform: "translateX(-6px)" },
                  "60%": { transform: "translateX(6px)" },
                  "75%": { transform: "translateX(-3px)" },
                  "90%": { transform: "translateX(3px)" },
                  "100%": { transform: "translateX(0)" },
                },
              }}
            >
              🚨 SUBMIT PPT NOW - FINAL CALL 🚨
            </Button>

            <Typography
              sx={{
                mt: 3,
                color: "#ff4444",
                fontSize: { xs: "1rem", sm: "1.2rem" },
                letterSpacing: "1px",
                textAlign: "center",
                fontStyle: "italic",
                fontWeight: "bold",
                textShadow: "0 0 10px #ff0000",
              }}
            >
              "Enemy Spotted! The zone is closing - MOVE TO SURVIVE!"
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "#ff6666",
                fontSize: { xs: "0.85rem", sm: "1rem" },
                letterSpacing: "1px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              🔥 FINAL DEADLINE: TODAY • 23:59 IST 🔥
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color: "#999",
                fontSize: { xs: "0.75rem", sm: "0.85rem" },
                letterSpacing: "0.5px",
                textAlign: "center",
              }}
            >
              "Winner Winner Chicken Dinner awaits the last survivors"
            </Typography>
          </Box>
        </GlowingBox>
      </Container>
    </RegistrationWrapper>
  );
};

export default HackgroundRegistration;