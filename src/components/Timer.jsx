import React from "react";
import {
  Box,
  Typography,
  Paper,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// BGMI-like background
const RegistrationWrapper = styled(Box)({
  minHeight: "50vh", // compact rectangle
  width: "100vw",
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
    background: "linear-gradient(to bottom, #0d0d0dee, #000000f5)", // dark overlay
    zIndex: 1,
  },
});

// Glowing Neo-morphic Container
const GlowingBox = styled(Paper)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(3),
  borderRadius: "20px",
  background: "linear-gradient(145deg, #0d0d0d, #1a1a1a)", // soft dark
  border: "2px solid #ff9100", // BGMI orange
  backdropFilter: "blur(10px)",
  zIndex: 2,
  width: "95%",
  maxWidth: "100vw",
  margin: "0 auto",
  boxShadow:
    "8px 8px 20px #050505, -8px -8px 20px #222222, 0 0 30px #ff910066", // neo effect
  transition: "0.3s ease",
  animation: "borderPulse 3s infinite",
  "@keyframes borderPulse": {
    "0%": { borderColor: "#ff9100", boxShadow: "0 0 25px #ff910066" },
    "50%": { borderColor: "#ffc400", boxShadow: "0 0 40px #ffea0066" },
    "100%": { borderColor: "#ff9100", boxShadow: "0 0 25px #ff910066" },
  },
}));

const ThankYouScreen = () => {
  return (
    <RegistrationWrapper>
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <GlowingBox>
          {/* Thank You Badge */}
          <Box textAlign="center" mb={2}>
            <Box
              sx={{
                display: "inline-block",
                padding: "0.5rem 1.5rem",
                background: "linear-gradient(45deg, #ff9100, #ff3d00)",
                borderRadius: "20px",
                fontSize: "0.95rem",
                fontWeight: "bold",
                color: "#fff",
                letterSpacing: "1px",
                textTransform: "uppercase",
                boxShadow: "0 0 15px #ff910088",
              }}
            >
              🎉 THANK YOU SURVIVORS
            </Box>
          </Box>

          {/* Main Title */}
          <Typography
            align="center"
            variant="h3"
            sx={{
              fontFamily: "Oswald, sans-serif",
              fontWeight: "bold",
              letterSpacing: "2px",
              color: "#fff",
              textShadow: "0 0 25px #ff9100",
              mb: 1.5,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
            }}
          >
            RESPONSES LOCKED & LOADED!
          </Typography>

          {/* Subtitle */}
          <Typography
            align="center"
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem" },
              color: "#90ee90", // BGMI green accent
              fontWeight: "bold",
              letterSpacing: "1.5px",
              mb: 2,
              textTransform: "uppercase",
              textShadow: "0 0 10px #90ee90",
            }}
          >
            Battle results will deploy soon...
          </Typography>

          {/* Mystery Box Video */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              borderRadius: "14px",
              border: "2px solid #ffc400",
              boxShadow: "inset 4px 4px 10px #0a0a0a, inset -4px -4px 10px #1c1c1c, 0 0 25px #ffc40088",
              overflow: "hidden",
              mb: 2,
            }}
          >
            <video
            src="https://res.cloudinary.com/dvmqxb8kd/video/upload/v1755654401/Mario_Kart_item_box_vakmhg.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "560px", 
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>

          {/* Closing Message */}
          <Typography
            align="center"
            sx={{
              color: "#ffc400",
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              fontWeight: "bold",
              letterSpacing: "1px",
              textShadow: "0 0 10px #ffc400",
            }}
          >
            📦 Mystery Box unlocks soon — Gear up, champions!
          </Typography>
        </GlowingBox>
      </Container>
    </RegistrationWrapper>
  );
};

export default ThankYouScreen;
