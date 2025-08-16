// import React from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Grid,
//   Paper,
//   Container,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";

// const RegistrationWrapper = styled(Box)({
//   minHeight: "100vh",
//   width: "100%",
//   backgroundImage: 'url("/BGMI_images/hero-bg.png")',
//   backgroundSize: "cover",
//   backgroundAttachment: "fixed",
//   backgroundPosition: "center",
//   position: "relative",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   overflow: "hidden",
//   padding: "2rem 1rem",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: "linear-gradient(to bottom, #000000ee, #0c0c0cf9)",
//     zIndex: 1,
//   },
// });

// const GlowingBox = styled(Paper)(({ theme }) => ({
//   position: "relative",
//   padding: theme.spacing(4),
//   borderRadius: "20px",
//   background: "rgba(20, 20, 20, 0.8)",
//   border: "2px solid #ff5500",
//   backdropFilter: "blur(15px)",
//   zIndex: 2,
//   width: "80%",
//   maxWidth: 900,
//   margin: "0 auto",
//   boxShadow: "0 0 40px #ff550044",
//   transition: "0.3s ease",
// }));

// const PulsingBadge = styled(Box)({
//   display: "inline-block",
//   padding: "0.5rem 1.5rem",
//   background: "linear-gradient(45deg, #00ff00, #00cc00)",
//   borderRadius: "25px",
//   fontSize: "0.9rem",
//   fontWeight: "bold",
//   color: "#000",
//   letterSpacing: "1px",
//   textTransform: "uppercase",
//   animation: "pulse 2s infinite",
//   boxShadow: "0 0 20px #00ff0055",
//   "@keyframes pulse": {
//     "0%": { boxShadow: "0 0 20px #00ff0055", transform: "scale(1)" },
//     "50%": { boxShadow: "0 0 30px #00ff0088", transform: "scale(1.02)" },
//     "100%": { boxShadow: "0 0 20px #00ff0055", transform: "scale(1)" },
//   },
// });

// const FeatureCard = styled(Box)({
//   border: "1px solid #ff5500",
//   padding: "1.5rem",
//   borderRadius: "12px",
//   textAlign: "center",
//   alignItems:"center",
//   background: "rgba(0,0,0,0.3)",
//   backdropFilter: "blur(5px)",
//   transition: "0.3s ease",
//   "&:hover": {
//     transform: "translateY(-5px)",
//     boxShadow: "0 10px 25px #ff550033",
//     border: "1px solid #ff7700",
//   },
// });

// const HackgroundRegistration = () => {
//   return (
//     <RegistrationWrapper>
//       <Container sx={{ position: "relative", zIndex: 2 }}>
//         <GlowingBox>
//           {/* Live Badge */}
//           <Box textAlign="center" mb={2}>
//             <PulsingBadge>🔴 LIVE NOW</PulsingBadge>
//           </Box>

//           {/* Main Title */}
//           <Typography
//             align="center"
//             variant="h2"
//             sx={{
//               fontFamily: "Oswald, sans-serif",
//               fontWeight: "bold",
//               letterSpacing: "3px",
//               color: "#fff",
//               textShadow: "0 0 20px #ff5500",
//               mb: 1,
//               fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
//             }}
//           >
//             HACKGROUND INDIA 2K25
//           </Typography>

//           {/* Subtitle */}
//           <Typography
//             align="center"
//             sx={{
//               fontSize: { xs: "1.1rem", sm: "1.3rem" },
//               color: "#ff9955",
//               fontWeight: "bold",
//               letterSpacing: "2px",
//               mb: 4,
//             }}
//           >
//             REGISTRATIONS ARE OPEN
//           </Typography>

//           {/* Features Grid */}
//           <Grid container spacing={3} justifyContent="center" mb={4}>
//             <Grid item xs={12} sm={4}>
//               <FeatureCard>
//                 <Typography
//                   sx={{
//                     fontSize: "2rem",
//                     color: "#ff5500",
//                     mb: 1,
//                   }}
//                 >
//                   🏆
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "1rem",
//                     fontWeight: "bold",
//                     color: "#fff",
//                     mb: 0.5,
//                   }}
//                 >
//                   WINNER TAKES ALL
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "0.85rem",
//                     color: "#bbb",
//                   }}
//                 >
//                   Massive prize pool awaits
//                 </Typography>
//               </FeatureCard>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <FeatureCard>
//                 <Typography
//                   sx={{
//                     fontSize: "2rem",
//                     color: "#ff5500",
//                     mb: 1,
//                   }}
//                 >
//                   👥
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "1rem",
//                     fontWeight: "bold",
//                     color: "#fff",
//                     mb: 0.5,
//                   }}
//                 >
//                   LIMITED SLOTS
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "0.85rem",
//                     color: "#bbb",
//                   }}
//                 >
//                   Register before it's too late
//                 </Typography>
//               </FeatureCard>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <FeatureCard>
//                 <Typography
//                   sx={{
//                     fontSize: "2rem",
//                     color: "#ff5500",
//                     mb: 1,
//                   }}
//                 >
//                   🎮
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "1rem",
//                     fontWeight: "bold",
//                     color: "#fff",
//                     mb: 0.5,
//                   }}
//                 >
//                   SERVER ONLINE
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "0.85rem",
//                     color: "#bbb",
//                   }}
//                 >
//                   Ready for battle
//                 </Typography>
//               </FeatureCard>
//             </Grid>
//           </Grid>

//           {/* CTA Section */}
//           <Box textAlign="center">
//             <Button
//               variant="contained"
//               sx={{
//                 fontSize: { xs: "1.1rem", sm: "1.3rem" },
//                 fontWeight: "bold",
//                 px: { xs: 4, sm: 8 },
//                 py: { xs: 1.5, sm: 2 },
//                 borderRadius: "15px",
//                 background: "linear-gradient(45deg, #ff5500, #ff9900)",
//                 boxShadow: "0 8px 25px #ff550066",
//                 color: "#fff",
//                 letterSpacing: "2px",
//                 textTransform: "uppercase",
//                 transition: "0.3s ease",
//                 animation: "shake 0.7s infinite",
//                 "&:hover": {
//                   boxShadow: "0 12px 35px #ff550088",
//                   transform: "scale(1.05)",
//                   background: "linear-gradient(45deg, #ff6600, #ffaa00)",
//                 },
//                 "@keyframes shake": {
//                   "0%": { transform: "translateX(0)" },
//                   "20%": { transform: "translateX(-4px)" },
//                   "40%": { transform: "translateX(4px)" },
//                   "60%": { transform: "translateX(-4px)" },
//                   "80%": { transform: "translateX(4px)" },
//                   "100%": { transform: "translateX(0)" },
//                 },
//               }}
//             >
//               "THE SAFE ZONE IS NOW SHRINKING"
//             </Button>

//             <Typography
//               sx={{
//                 mt: 3,
//                 color: "#ccc",
//                 fontSize: { xs: "0.9rem", sm: "1rem" },
//                 letterSpacing: "1px",
//                 textAlign: "center",
//                 fontStyle: "italic",
//               }}
//             >
//               "The battlefield awaits. Are you ready to dominate?"
//             </Typography>

//             <Typography
//               sx={{
//                 mt: 2,
//                 color: "#888",
//                 fontSize: { xs: "0.75rem", sm: "0.85rem" },
//                 letterSpacing: "0.5px",
//                 textAlign: "center",
//               }}
//             >
//               Event Date: August 30th, 2025 • 22:50 IST
//             </Typography>
//           </Box>
//         </GlowingBox>
//       </Container>
//     </RegistrationWrapper>
//   );
// };

// export default HackgroundRegistration;




import React from "react";
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
  backgroundImage: 'url("/BGMI_images/danger-zone-bg.png")', // 🔴 Change to your danger zone image
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
    background: "linear-gradient(to bottom, #000000ee, #1a0000f9)", // dark red overlay
    zIndex: 1,
  },
});

const GlowingBox = styled(Paper)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(4),
  borderRadius: "20px",
  background: "rgba(20, 0, 0, 0.85)", // darker red tint
  border: "2px solid #ff0000",
  backdropFilter: "blur(15px)",
  zIndex: 2,
  width: "80%",
  maxWidth: 900,
  margin: "0 auto",
  boxShadow: "0 0 40px #ff000044",
  transition: "0.3s ease",
}));

const DangerBadge = styled(Box)({
  display: "inline-block",
  padding: "0.5rem 1.5rem",
  background: "linear-gradient(45deg, #ff0000, #cc0000)",
  borderRadius: "25px",
  fontSize: "0.9rem",
  fontWeight: "bold",
  color: "#fff",
  letterSpacing: "1px",
  textTransform: "uppercase",
  animation: "pulse 1.5s infinite",
  boxShadow: "0 0 20px #ff000055",
  "@keyframes pulse": {
    "0%": { boxShadow: "0 0 20px #ff000055", transform: "scale(1)" },
    "50%": { boxShadow: "0 0 35px #ff0000aa", transform: "scale(1.05)" },
    "100%": { boxShadow: "0 0 20px #ff000055", transform: "scale(1)" },
  },
});

const FeatureCard = styled(Box)({
  border: "1px solid #ff0000",
  padding: "1.5rem",
  borderRadius: "12px",
  textAlign: "center",
  background: "rgba(50,0,0,0.3)",
  backdropFilter: "blur(5px)",
  transition: "0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 25px #ff000033",
    border: "1px solid #ff3333",
  },
});

const HackgroundRegistration = () => {
  return (
    <RegistrationWrapper>
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <GlowingBox>
          {/* Danger Badge */}
          <Box textAlign="center" mb={2}>
            <DangerBadge>⚠️ DANGER ZONE</DangerBadge>
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
              textShadow: "0 0 25px #ff0000",
              mb: 1,
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
            }}
          >
            HACKGROUND INDIA 2K25
          </Typography>

          {/* Subtitle */}
          <Typography
            align="center"
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.3rem" },
              color: "#ff4444",
              fontWeight: "bold",
              letterSpacing: "2px",
              mb: 4,
            }}
          >
            SUBMISSIONS CLOSING SOON
          </Typography>

          {/* Features Grid */}
          <Grid container spacing={3} justifyContent="center" mb={4}>
            <Grid item xs={12} sm={4}>
              <FeatureCard>
                <Typography sx={{ fontSize: "2rem", color: "#ff4444", mb: 1 }}>
                  ⏳
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#fff",
                    mb: 0.5,
                  }}
                >
                  FINAL HOURS
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "#bbb" }}>
                  Don’t miss the deadline
                </Typography>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FeatureCard>
                <Typography sx={{ fontSize: "2rem", color: "#ff4444", mb: 1 }}>
                  🚨
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#fff",
                    mb: 0.5,
                  }}
                >
                  LIMITED SUBMISSIONS
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "#bbb" }}>
                  The zone is shrinking fast
                </Typography>
              </FeatureCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FeatureCard>
                <Typography sx={{ fontSize: "2rem", color: "#ff4444", mb: 1 }}>
                  🔒
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#fff",
                    mb: 0.5,
                  }}
                >
                  GATE CLOSING
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "#bbb" }}>
                  Secure your spot now
                </Typography>
              </FeatureCard>
            </Grid>
          </Grid>

          {/* CTA Section */}
          <Box textAlign="center">
            <Button
              variant="contained"
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.3rem" },
                fontWeight: "bold",
                px: { xs: 4, sm: 8 },
                py: { xs: 1.5, sm: 2 },
                borderRadius: "15px",
                background: "linear-gradient(45deg, #ff0000, #cc0000)",
                boxShadow: "0 8px 25px #ff000066",
                color: "#fff",
                letterSpacing: "2px",
                textTransform: "uppercase",
                transition: "0.3s ease",
                animation: "shake 0.8s infinite",
                "&:hover": {
                  boxShadow: "0 12px 35px #ff000088",
                  transform: "scale(1.05)",
                  background: "linear-gradient(45deg, #ff2222, #dd0000)",
                },
                "@keyframes shake": {
                  "0%": { transform: "translateX(0)" },
                  "20%": { transform: "translateX(-4px)" },
                  "40%": { transform: "translateX(4px)" },
                  "60%": { transform: "translateX(-4px)" },
                  "80%": { transform: "translateX(4px)" },
                  "100%": { transform: "translateX(0)" },
                },
              }}
            >
              SUBMISSIONS CLOSING SOON
            </Button>

            <Typography
              sx={{
                mt: 3,
                color: "#ff6666",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                letterSpacing: "1px",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              "The danger zone is closing in. Secure your survival!"
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "#aaa",
                fontSize: { xs: "0.75rem", sm: "0.85rem" },
                letterSpacing: "0.5px",
                textAlign: "center",
              }}
            >
              Submission Deadline: August 25th, 2025 • 23:59 IST
            </Typography>
          </Box>
        </GlowingBox>
      </Container>
    </RegistrationWrapper>
  );
};

export default HackgroundRegistration;
