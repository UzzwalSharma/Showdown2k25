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

const CountdownWrapper = styled(Box)({
  minHeight: "100vh",
  width: "100%",
  backgroundImage: 'url("/BGMI_images/hero-bg.png")',
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to bottom, #000000ee, #0c0c0cf9)",
    zIndex: 1,
  },
});

const GlowingBox = styled(Paper)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(6),
  borderRadius: "20px",
  background: "rgba(20, 20, 20, 0.7)",
  border: "2px solid #ff5500",
  backdropFilter: "blur(10px)",
  zIndex: 2,
  width: "100%",
  maxWidth: 1200,
  margin: "0 auto",
  boxShadow: "0 0 30px #ff550033",
  transition: "0.3s ease",
}));

const TimeUnit = styled(Box)({
  border: "2px solid #ff5500",
  padding: "1.2rem",
  borderRadius: "14px",
  textAlign: "center",
  background: "rgba(0,0,0,0.4)",
  boxShadow: "0 0 15px #ff550055",
  transition: "0.4s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 0 25px #ff5500",
  },
});

const UnitValue = styled(Typography)({
  fontSize: "3.5rem",
  fontWeight: "bold",
  color: "#fff",
  fontFamily: '"Oswald", sans-serif',
  textShadow: "0 0 12px #ff5500",
});

const UnitLabel = styled(Typography)({
  fontSize: "0.85rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "1.5px",
  color: "#ff6600",
});

const HackgroundTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2025-08-03T22:50:36");
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CountdownWrapper>
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <GlowingBox>
          <Typography
            align="center"
            variant="h2"
            sx={{
              fontFamily: "Oswald, sans-serif",
              fontWeight: "bold",
              letterSpacing: "3px",
              color: "#fff",
              textShadow: "0 0 18px #ff5500",
              mb: 2,
            }}
          >
            HACKGROUNDS INDIA 2K25
          </Typography>

          <Typography
            align="center"
            sx={{
              fontSize: "1.2rem",
              color: "#ff9955",
              fontWeight: "bold",
              letterSpacing: "2px",
              mb: 5,
            }}
          >
            JOIN THE BATTLEFIELD IN
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} sm={3}>
              <TimeUnit>
                <UnitValue>{String(timeLeft.days).padStart(2, "0")}</UnitValue>
                <UnitLabel>Days</UnitLabel>
              </TimeUnit>
            </Grid>
            <Grid item xs={6} sm={3}>
              <TimeUnit>
                <UnitValue>{String(timeLeft.hours).padStart(2, "0")}</UnitValue>
                <UnitLabel>Hours</UnitLabel>
              </TimeUnit>
            </Grid>
            <Grid item xs={6} sm={3}>
              <TimeUnit>
                <UnitValue>
                  {String(timeLeft.minutes).padStart(2, "0")}
                </UnitValue>
                <UnitLabel>Minutes</UnitLabel>
              </TimeUnit>
            </Grid>
            <Grid item xs={6} sm={3}>
              <TimeUnit>
                <UnitValue>
                  {String(timeLeft.seconds).padStart(2, "0")}
                </UnitValue>
                <UnitLabel>Seconds</UnitLabel>
              </TimeUnit>
            </Grid>
          </Grid>

          <Box textAlign="center" mt={5}>
            <Button
              variant="contained"
              sx={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                px: 6,
                py: 1.5,
                borderRadius: "12px",
                background: "linear-gradient(to right, #ff5500, #ff9900)",
                boxShadow: "0 0 18px #ff5500",
                color: "#fff",
                letterSpacing: "1px",
                "&:hover": {
                  boxShadow: "0 0 24px #ff6600",
                  transform: "scale(1.05)",
                },
              }}
            >
              Register Now
            </Button>
            <Typography
              sx={{
                mt: 2,
                color: "#999",
                fontSize: "0.85rem",
                letterSpacing: "1px",
              }}
            >
              Winner takes all • Limited slots • Server Online
            </Typography>
          </Box>
        </GlowingBox>
      </Container>
    </CountdownWrapper>
  );
};

export default HackgroundTimer;
