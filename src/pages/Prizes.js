import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";

// PUBG color scheme
const BRIGHT_YELLOW = "#FFEA00";
const BRIGHT_YELLOW_LIGHT = "#FFF9E3";

// Section background
const PrizesSection = styled(Box)({
  backgroundImage: 'url("/BGMI_images/pubg-sniper-mode-0o-1920x1080.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.95) 10%, rgba(20,20,20,0.75) 100%)",
  },
});

const PrizeCard = styled(Paper)(({ tier }) => ({
  position: "relative",
  width: "320px",
  maxWidth: "85vw",
  height: "340px",
  padding: "2rem",
  background: "rgba(255, 255, 255, 0.08)",
  borderRadius: "24px",
  backdropFilter: "blur(16px)",
  border: `1px solid ${BRIGHT_YELLOW}55`,
  boxShadow: `
    0 10px 25px rgba(0, 0, 0, 0.5),
    0 0 18px 4px ${BRIGHT_YELLOW}55,
    inset 0 -5px 10px rgba(0, 0, 0, 0.3),
    inset 0 5px 8px rgba(255, 255, 255, 0.1)
  `,
  clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  color: "#fff",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  transformStyle: "preserve-3d",
  "@media (max-width:600px)": {
    width: "98vw",
    height: "260px",
    padding: "1rem",
    borderRadius: "16px",
  },
  "&:hover": {
    transform: "translateY(-20px) scale(1.05) perspective(600px) rotateX(6deg)",
    boxShadow: `
      0 25px 45px rgba(0, 0, 0, 0.7),
      0 0 28px 8px ${BRIGHT_YELLOW}aa,
      inset 0 -10px 15px rgba(0, 0, 0, 0.4),
      inset 0 10px 12px rgba(255, 255, 255, 0.2)
    `,
    zIndex: 10,
  },
  "&::after": {
    content: tier
      ? `"${
          tier === "first"
            ? "CHAMPION"
            : tier === "second"
            ? "RUNNER-UP"
            : tier === "third"
            ? "3RD PLACE"
            : "SPECIAL"
        }"`
      : '"SPECIAL"',
    position: "absolute",
    top: 0,
    right: 0,
    background: BRIGHT_YELLOW,
    color: "#000",
    fontWeight: "bold",
    fontSize: "0.75rem",
    padding: "5px 12px",
    clipPath: "polygon(100% 0, 100% 100%, 30% 100%, 0 50%, 30% 0)",
    zIndex: 2,
    boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
    fontFamily: '"Oswald", sans-serif',
    "@media (max-width:600px)": {
      fontSize: "0.6rem",
      padding: "3px 8px",
    },
  },
  "& *": {
    zIndex: 1,
  },
}));

const SectionTitle = styled(Typography)({
  color: BRIGHT_YELLOW,
  fontFamily: '"Oswald", sans-serif',
  marginBottom: "2rem",
  textTransform: "uppercase",
  letterSpacing: "2px",
  fontSize: "3.5rem",
  textAlign: "center",
  textShadow: `0 0 12px ${BRIGHT_YELLOW}99`,
});

function Prizes() {
  const mainPrizes = [
    {
      tier: "first",
      title: ["Lone Survivor", "of HACKGROUND INDIA 2K25"],
      prize: "₹25,000",
    },
    {
      tier: "second",
      title: ["Top Fragger", "of HACKGROUND INDIA 2K25"],
      prize: "₹15,000",
    },
    {
      tier: "third",
      title: ["Free Thinking Zone", "of HACKGROUND INDIA 2K25"],
      prize: "₹10,000",
    },
  ];

  const specialPrizes = [
    {
      title: ["All-Girls Squad Challenge"],
      prize: "₹15,000",
    },
  ];

  return (
    <PrizesSection>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, py: 8 }}>
        <SectionTitle variant="h2">
          Prize <span style={{ color: "#fff" }}>Pool</span>
        </SectionTitle>

        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              color: "#fff",
              fontFamily: '"Oswald", sans-serif',
              mb: 4,
              fontSize: "2.2rem",
              textShadow: `0 0 8px ${BRIGHT_YELLOW}66`,
            }}
          >
            Main Tournament Prizes
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {mainPrizes.map((prize, index) => (
              <Grid item key={index}>
                <PrizeCard tier={prize.tier}>
                  <Box>
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{
                        color: BRIGHT_YELLOW,
                        fontFamily: '"Oswald", sans-serif',
                        fontSize: { xs: "1rem", sm: "1.25rem" },
                      }}
                    >
                      {prize.title[0]}
                    </Typography>
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{
                        color: BRIGHT_YELLOW,
                        fontFamily: '"Oswald", sans-serif',
                        fontSize: { xs: "1rem", sm: "1.25rem" }, 
                        mb: 1,
                      }}
                    >
                      {prize.title[1]}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    align="center"
                    sx={{
                      color: "#fff",
                      fontFamily: '"Oswald", sans-serif',
                      fontSize: { xs: "1.3rem", sm: "2.3rem" },
                      textShadow: `0 0 8px ${BRIGHT_YELLOW}88`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    {prize.prize}
                  </Typography>
                </PrizeCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box>
          <Typography
            variant="h4"
            align="center"
            sx={{
              color: "#fff",
              fontFamily: '"Oswald", sans-serif',
              mb: 4,
              fontSize: "2.2rem",
              textShadow: `0 0 8px ${BRIGHT_YELLOW}66`,
            }}
          >
            Special Category Prizes
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {specialPrizes.map((prize, index) => (
              <Grid item key={index}>
                <PrizeCard>
                  <Box>
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{
                        color: BRIGHT_YELLOW,
                        fontFamily: '"Oswald", sans-serif',
                        fontSize: "1.1rem",
                      }}
                    >
                      {prize.title[0]}
                    </Typography>
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        color: BRIGHT_YELLOW,
                        fontFamily: '"Oswald", sans-serif',
                        fontSize: "1.1rem",
                        mb: 1,
                      }}
                    >
                      {prize.title[1]}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    align="center"
                    sx={{
                      color: "#fff",
                      fontFamily: '"Oswald", sans-serif',
                      fontSize: "2.2rem",
                      textShadow: `0 0 8px ${BRIGHT_YELLOW}88`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    {prize.prize}
                  </Typography>
                </PrizeCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </PrizesSection>
  );
}

export default Prizes;
