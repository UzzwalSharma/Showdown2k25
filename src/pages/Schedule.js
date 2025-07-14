import React, { useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Paper } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScheduleSection = styled(Box)({
  backgroundImage:
    'url("https://wallpapers.com/images/hd/playerunknowns-battlegrounds-4k-199qn3rz37tm9ivs.jpg")',
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
      "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 100%)",
    zIndex: 0,
  },
});

const TimelineContainer = styled(Box)({
  position: "relative",
  zIndex: 2,
  "&::before": {
    content: '""',
    position: "absolute",
    left: "50%",
    width: "4px",
    height: "100%",
    background: "linear-gradient(180deg, #ff9900 0%, #ffffff 100%)",
    transform: "translateX(-50%)",
  },
});

const DayCard = styled(Paper)(({ side, bgimg }) => ({
  background: "rgba(255, 255, 255, 0.05)",
  padding: "3rem 2rem 3rem",
  position: "relative",
  width: "45%",
  minHeight: 270, // Same as tracks' card :)
  display: "flex", 
  flexDirection: "column", 
  justifyContent: "space-between",
  marginLeft: side === "left" ? "2rem" : "auto",
  marginRight: side === "left" ? "auto" : "2rem",
  border: "2px solid #ff9900",
  boxShadow: `
    0 0 8px #ff9900,
    0 0 20px #ff9900,
    0 0 30px #ff9900,
    inset 0 0 10px #ff9900
  `,
  borderRadius: 0,
  clipPath:
    side === "left"
      ? "polygon(0 0, 96% 0, 100% 10%, 100% 90%, 96% 100%, 0 100%)"
      : "polygon(4% 0, 100% 0, 100% 100%, 4% 100%, 0 90%, 0 10%)",
  backgroundImage: `url(${bgimg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: `
      0 0 12px #ff9900,
      0 0 40px #ff9900,
      inset 0 0 20px #ff9900
    `,
  },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.75)",
    zIndex: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 2,
  },
}));

const DayLabel = styled(Box)({
  border: "4px solid #ff0000",
  width: "100px",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "-50px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 20,
  background: "black",
  fontFamily: '"Tekken", sans-serif',
  color: "#ff0000",
  fontWeight: "bold",
  fontSize: "1rem",
  borderRadius: "50%",
  boxShadow: `
    0 0 10px #ff0000,
    0 0 20px #ff0000,
    0 0 40px #ff0000,
    inset 0 0 10px #ff0000
  `,
});

const events = [
  {
    day: "DAY 1",
    title: "Opening Ceremony",
    desc: [
      "10:00 AM - Welcome and rules explanation",
      "11:00 AM - Team formation",
      "12:00 PM - Hacking begins!",
    ],
    img: "/BGMI_images/Gemini_Generated_Image_hackathon.png",
    side: "left",
  },
  {
    day: "DAY 2",
    title: "Midpoint Check-in",
    desc: [
      "10:00 AM - Progress presentations",
      "12:00 PM - Workshop: Advanced combat mechanics",
      "6:00 PM - BGMI exhibition match",
    ],
    img: "/BGMI_images/day2.png",
    side: "right",
  },
  {
    day: "DAY 3",
    title: "Final Battles",
    desc: [
      "10:00 AM - Submission deadline",
      "11:00 AM - Project presentations",
      "2:00 PM - Judging and awards",
      "4:00 PM - Closing ceremony",
    ],
    img: "/BGMI_images/Gemini_Generated_Image_finale.png",
    side: "left",
  },
];

const Schedule = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          { autoAlpha: 0, scale: 0.7, y: 50 },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <ScheduleSection>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 5, py: 8 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: "#ff9900",
            fontFamily: '"Press Start 2P", "Tekken", sans-serif',
            fontSize: "2.6rem",
            letterSpacing: "2px",
            textShadow: "0 0 12px #ff9900",
            textTransform: "uppercase",
            mb: 8,
            "& span": {
              color: "#ffffff",
              textShadow: "0 0 20px #ffffff",
            },
          }}
        >
          Event <span>Timeline</span>
        </Typography>

        <TimelineContainer>
          {events.map(({ day, title, desc, img, side }, index) => (
            <DayCard
              key={index}
              side={side}
              bgimg={img}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <DayLabel>
                <Typography
                  sx={{ color: "white", fontFamily: '"Tekken", sans-serif' }}
                >
                  {day}
                </Typography>
              </DayLabel>
              <Typography
                variant="h4"
                sx={{
                  color: "#ffbb00",
                  fontFamily: '"Tekken", sans-serif',
                  mb: 2,
                }}
              >
                {title}
              </Typography>
              {desc.map((line, i) => (
                <Typography
                  key={i}
                  sx={{
                    color: i % 2 === 0 ? "#ffffff" : "#ff9900",
                    fontWeight: "bolder",
                    mb: i === desc.length - 1 ? 0 : 1,
                  }}
                >
                  {line}
                </Typography>
              ))}
            </DayCard>
          ))}
        </TimelineContainer>
      </Container>
    </ScheduleSection>
  );
};

export default Schedule;
