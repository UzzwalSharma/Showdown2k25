import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion as m } from 'framer-motion';
import "../index.css";
const HeroBackground = styled(Box)({
  position: 'relative',
  height: '100vh',
  width: '100%',
  overflow: 'hidden',
  '&::before': {
  content: '""',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1))',
  backdropFilter: 'blur(2px)',
  zIndex: 1,
  marginTop: '0px', // Adjusted to avoid cutoff on small screens
},

});

const ContentSection = styled(Box)(({ theme }) => ({
  flex: 1.2,
  zIndex: 2,
  padding: '0 1rem',
  color: '#fff',

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    padding: 0,
  },

  '@media (max-width:400px) and (max-height:700px)': {
    textAlign: 'center',
    padding: '0 0.5rem',
  },
}));

const ImageSection = styled(Box)({
  flex: '1',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2,
  '& img': {
    width: '110%',
    height: 'auto',
    maxHeight: '650px',
    objectFit: 'contain',
    filter: 'brightness(1.2) drop-shadow(0 0 30px rgba(255, 0, 0, 0.3))',
    animation: 'breathing 4s ease-in-out infinite',
  },
  '@keyframes breathing': {
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.05)' },
  },
});

const HeroContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '80px 2rem 20px 2rem',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: '40px 1rem 20px 1rem',
  },

  '@media (max-width:400px) and (max-height:700px)': {
    padding: '60px 1rem 20px 1rem',
  },
}));

const StyledButton = styled(Button)({
  marginTop: '1rem',
  padding: '0.8rem 2rem',
  fontSize: '1.05rem',
  borderRadius: '5px',
  textTransform: 'none',
  width: '100%',
  maxWidth: '200px',
  '&.register': {
    background: 'rgba(255, 0, 0, 0.2)',
    color: '#fff',
    border: '2px solid #ff0000',
    '&:hover': {
      background: 'rgba(255, 0, 0, 0.4)',
    },
  },
  '&.learn': {
    background: 'rgba(0, 123, 255, 0.2)',
    color: '#fff',
    border: '2px solid #0088ff',
    '&:hover': {
      background: 'rgba(0, 123, 255, 0.4)',
    },
  },
});

const MotionTypography = m(Typography);
const MotionButton = m(StyledButton);



function Hero() {
  return (
    <HeroBackground>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
        src="https://motionbgs.com/media/4817/pubg-mobile.960x540.mp4" //- new video
        //src="https://res.cloudinary.com/dvmqxb8kd/video/upload/v1747932844/tvv_vabrdv.mp4" - old video
        type="video/mp4"
      />

      <HeroContent>
        {/* Text Content */}
        <ContentSection>
          <MotionTypography
            variant="h1"
            component={m.div}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem", md: "4.5rem" },
              fontWeight: 900,
              color: "#ff0000",
              mb: "0.5rem",
              fontFamily: '"Tekken", sans-serif',
              textShadow: "0 0 10px rgba(255,0,0,0.5)",
            }}
          >
            Techken
          </MotionTypography>

          <MotionTypography
            variant="h2"
            component={m.div}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
              fontWeight: 800,
              color: "#00aaff",
              mb: "0.5rem",
              fontFamily: '"Tekken", sans-serif',
              textShadow: "0 0 8px rgba(0, 136, 255, 0.5)",
            }}
          >
            Showdown 2K25
          </MotionTypography>
          <MotionTypography
            variant="h3"
            component={m.div}
            className="flicker-gold"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
              fontWeight: 700,
              color: "#ffd700",
              mb: "1.5rem",
              fontFamily: '"Tekken", sans-serif',
            }}
          >
            HACKATHON
          </MotionTypography>

          <MotionTypography
            variant="body1"
            component={m.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.3rem" },
              color: "#ffffffcc",
              maxWidth: "600px",
              mb: "2rem",
              margin: "0 auto",
              textAlign: "center",
              fontWeight: 700,
              lineHeight: 1.6,
            }}
          >
            Battle it out in the ultimate coding tournament. Show your skills,
            defeat your opponents, and claim the title of{" "}
            <strong>King of Techken Showdown 2K25</strong>!
          </MotionTypography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <MotionButton
              className="clipped-btn learn"
              component={m.button}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "#about")}
            >
              Learn More
            </MotionButton>

            <MotionButton
              className="clipped-btn register"
              component={m.button}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "https://lu.ma/7spa1ao7")}
            >
              Register Now
            </MotionButton>
          </Box>
        </ContentSection>

        {/* Image Section */}
        <ImageSection>
          <m.img
            src="BGMI_images\pubg-mobile-helmet-guy-4k-7g-removebg-preview.png"
            alt="pubg helmet guy"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </ImageSection>
      </HeroContent>
    </HeroBackground>
  );
}

export default Hero;









// import React from 'react';
// import { Box, Typography, Button, Container } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { motion as m } from 'framer-motion';

// const GlassMorphicCard = styled(Box)(({ theme }) => ({
//   position: 'relative',
//   width: '95%',
//   maxWidth: '1200px',
//   margin: '0 auto',
//   padding: '2rem',
//   background: 'rgba(17, 17, 25, 0.85)',
//   borderRadius: '25px',
//   backdropFilter: 'blur(20px)',
//   border: '1px solid rgba(255, 255, 255, 0.1)',
//   boxShadow: `
//     0 8px 32px 0 rgba(31, 38, 135, 0.37),
//     inset 0 0 30px rgba(255, 255, 255, 0.05)
//   `,
//   zIndex: 2,
//   display: 'flex',
//   flexDirection: 'row',
//   gap: '3rem',
//   alignItems: 'center',

//   [theme.breakpoints.down('md')]: {
//     flexDirection: 'column-reverse',
//     padding: '1.5rem',
//     gap: '2rem',
//   },
//   [theme.breakpoints.down('sm')]: {
//     padding: '1rem',
//     gap: '1.5rem',
//   },

//   '@media (max-width:400px) and (max-height:700px)': {
//     flexDirection: 'column',
//     padding: '1rem',
//     gap: '1rem',
//     marginTop: '20px',  // add margin to push down and avoid cutoff
//   },
// }));

// const ImageSection = styled(Box)({
//   flex: '1',
//   position: 'relative',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   '& img': {
//     width: '110%', // Increase width to enlarge the image
//     height: 'auto',
//     maxHeight: '650px', // Increase maxHeight for larger image
//     objectFit: 'contain',
//     filter: 'brightness(1.2) drop-shadow(0 0 30px rgba(255, 0, 0, 0.3))', // Increase brightness and drop shadow
//     animation: 'breathing 4s ease-in-out infinite' // Adjusted timing for breathing animation
//   },
//   '@keyframes breathing': {
//     '0%, 100%': {
//       transform: 'scale(1)',
//     },
//     '50%': {
//       transform: 'scale(1.05)', // Slightly enlarge the image
//     }
//   }
// });


// const HeroBackground = styled(Box)({
//   position: 'relative',
//   height: '100vh',
//   width: '100%',
//   overflow: 'hidden',
//   background: 'url("/images/tekken8-bg.jpg")',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))',
//     backdropFilter: 'blur(2px)',
//     zIndex: 1,
//   },
// });

// const ContentSection = styled(Box)(({ theme }) => ({
//   flex: 1.2,
//   zIndex: 2,
//   padding: '0 1rem',

//   [theme.breakpoints.down('md')]: {
//     textAlign: 'center',
//     padding: 0,
//   },

//   '@media (max-width:400px) and (max-height:700px)': {
//     textAlign: 'center',
//     padding: '0 0.5rem',
//   },
// }));

// const HeroContent = styled(Container)(({ theme }) => ({
//   position: 'relative',
//   zIndex: 2,
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'flex-start',
//   color: '#ffffff',
//   padding: '80px 2rem 20px 2rem', // increased top padding

//   [theme.breakpoints.down('md')]: {
//     alignItems: 'center',
//     textAlign: 'center',
//     padding: '40px 1rem 20px 1rem',
//   },

//   '@media (max-width:400px) and (max-height:700px)': {
//     padding: '60px 1rem 20px 1rem', // add extra top padding on small screens
//   },
// }));

// const StyledButton = styled(Button)({
//   marginTop: '1rem',
//   padding: '0.8rem 2rem',
//   fontSize: '1.05rem',
//   borderRadius: '5px',
//   textTransform: 'none',
//   width: '100%',
//   maxWidth: '200px',
//   '&.register': {
//     background: 'rgba(255, 0, 0, 0.2)',
//     color: '#fff',
//     border: '2px solid #ff0000',
//     '&:hover': {
//       background: 'rgba(255, 0, 0, 0.4)',
//     },
//   },
//   '&.learn': {
//     background: 'rgba(0, 123, 255, 0.2)',
//     color: '#fff',
//     border: '2px solid #0088ff',
//     '&:hover': {
//       background: 'rgba(0, 123, 255, 0.4)',
//     },
//   },
// });

// const MotionTypography = m(Typography);
// const MotionButton = m(StyledButton);

// function Hero() {
//   return (
//     <HeroBackground>
//       <HeroContent>
//         <GlassMorphicCard>
//           {/* Text Content first, so image will be below on column */}
//           <ContentSection>
//             <MotionTypography
//               variant="h1"
//               component={m.div}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               sx={{
//                 fontSize: { xs: '2rem', sm: '2.5rem', md: '4rem' },
//                 fontWeight: 800,
//                 color: '#ff0000',
//                 mb: '0.5rem',
//                 fontFamily: '"Tekken", sans-serif',
//               }}
//             >
//               Techken
//             </MotionTypography>

//             <MotionTypography
//               variant="h2"
//               component={m.div}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               sx={{
//                 fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3.5rem' },
//                 fontWeight: 700,
//                 color: '#0088ff',
//                 mb: '0.5rem',
//                 fontFamily: '"Tekken", sans-serif',
//               }}
//             >
//               Showdown 2K25
//             </MotionTypography>

//             <MotionTypography
//               variant="h3"
//               component={m.div}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               sx={{
//                 fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2.5rem' },
//                 fontWeight: 600,
//                 color: '#ffd700',
//                 mb: '1.5rem',
//                 fontFamily: '"Tekken", sans-serif',
//               }}
//             >
//               HACKATHON
//             </MotionTypography>

//             <MotionTypography
//               variant="body1"
//               component={m.div}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               sx={{
//                 fontSize: { xs: '0.95rem', sm: '1rem', md: '1.2rem' },
//                 maxWidth: '600px',
//                 mb: '1.5rem',
//                 margin: '0 auto',
//               }}
//             >
//               Battle it out in the ultimate coding tournament. Show your skills, defeat your
//               opponents, and claim the King of Techken Showdown 2K25 title!
//             </MotionTypography>

//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: { xs: 'column', sm: 'row' },
//                 gap: 2,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 width: '100%',
//               }}
//             >
//               <MotionButton
//                 className="learn"
//                 component={m.button}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 0.8 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => (window.location.href = '#about')}
//               >
//                 Learn More
//               </MotionButton>

//               <MotionButton
//                 className="register"
//                 component={m.button}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 1.0 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                onClick={() => window.location.href = 'https://lu.ma/7spa1ao7'}

//               >
//                 Register Now
//               </MotionButton>
//             </Box>
//           </ContentSection>

//           {/* Image Section */}
//         <ImageSection>
//             <m.img
//               src="/images/FrontImage.jpg"
//               alt="Tekken Character"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             />
//           </ImageSection>
//         </GlassMorphicCard>
//       </HeroContent>
//     </HeroBackground>
//   );
// }

// export default Hero;


