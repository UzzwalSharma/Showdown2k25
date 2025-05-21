import React, { useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Paper } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScheduleSection = styled(Box)({
 
   backgroundImage: 'url("/images/thunder.jpg")',
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
    background: "linear-gradient(180deg, #ff0000 0%, #0088ff 100%)",
    transform: "translateX(-50%)",
  },
});

const DayCard = styled(Paper)(({ side, bgimg }) => ({
  background: "rgba(0, 0, 0, 0.85)",
  padding: "2rem 2rem 3rem",
  borderRadius: "16px",
  border: "2px solid #ff0000",
  marginBottom: "3rem",
  position: "relative",
  width: "45%",
  // clipPath:
  // side === "left"
  //   ? "polygon(0 0, 100% 10%, 100% 90%, 0% 100%)"
  //   : "polygon(0 10%, 100% 0%, 100% 100%, 0 90%)"

  marginLeft: side === "left" ? "2rem" : "auto",
  marginRight: side === "left" ? "auto" : "2rem",
  boxShadow: "0 0 20px rgba(255, 0, 0, 0.6)",
  backgroundImage: `url(${bgimg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: "16px",
    zIndex: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 2,
  },
}));

const DayLabel = styled(Box)({
  border: "3px solid #ff0000",
  borderRadius: "50%",
  width: "90px",
  height: "90px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "-45px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 20,
  boxShadow: "0 0 20px rgba(255, 0, 0, 0.6)",
  color: "#ff0000",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
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
    img: "/day1.jpg",
    side: "left",
  },
  {
    day: "DAY 2",
    title: "Midpoint Check-in",
    desc: [
      "10:00 AM - Progress presentations",
      "12:00 PM - Workshop: Advanced combat mechanics",
      "6:00 PM - Tekken 8 exhibition match",
    ],
    img: "/Gemini_Generated_Image_3xo56m3xo56m3xo5.png",
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
    img: "/Gemini_Generated_Image_3l1niz3l1niz3l1n.png",
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
            color: "#ff0000",
            fontFamily: '"Tekken", sans-serif',
            textTransform: "uppercase",
            mb: 8,
            "& span": { color: "#0088ff" },
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
                <Typography sx={{ color: "white", fontFamily: '"Tekken", sans-serif' }}>
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
                  sx={{ color: "#ffffff",fontWeight:"bolder", mb: i === desc.length - 1 ? 0 : 1 }}
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
