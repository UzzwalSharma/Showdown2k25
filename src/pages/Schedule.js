import React, { useEffect, useRef } from "react";

const Schedule = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Import Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Simple scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const card = entry.target;
            card.style.transform = 'scale(1) translateY(0) rotateY(0)';
            card.style.opacity = '1';
            card.style.boxShadow = `
              20px 20px 40px rgba(0,0,0,0.8),
              -20px -20px 40px rgba(40,40,40,0.3),
              inset 5px 5px 10px rgba(0,0,0,0.5),
              inset -5px -5px 10px rgba(50,50,50,0.2)
            `;
            
            // Trigger growing line animation
            setTimeout(() => {
              card.style.boxShadow += ', 0 0 20px rgba(255,153,0,0.3)';
              const line = card.querySelector('.growing-line');
              if (line) {
                line.style.animation = 'growLine 1.5s ease-out forwards';
              }
            }, index * 200 + 600);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

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

  return (
    <div style={{
      backgroundImage: 'url("https://wallpapers.com/images/hd/playerunknowns-battlegrounds-4k-199qn3rz37tm9ivs.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      width: "100%",
      position: "relative",
    }}>
      {/* Dark overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 100%)",
        zIndex: 0,
      }}></div>

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 5,
        padding: "4rem 1rem",
      }}>
        {/* Title */}
        <h2 style={{
          color: "#ff9900",
          fontFamily: '"Oswald", sans-serif',
          fontSize: "3rem",
          fontWeight: "700",
          letterSpacing: "3px",
          textAlign: "center",
          textShadow: `
            0 0 20px rgba(255,153,0,0.8),
            0 0 40px rgba(255,153,0,0.4),
            3px 3px 6px rgba(0,0,0,0.8)
          `,
          textTransform: "uppercase",
          marginBottom: "4rem",
          margin: "0 0 4rem 0",
        }}>
          Event <span style={{
            color: "#ffffff",
            textShadow: `
              0 0 20px rgba(255,255,255,0.8),
              0 0 40px rgba(255,255,255,0.3),
              3px 3px 6px rgba(0,0,0,0.8)
            `,
          }}>Timeline</span>
        </h2>

        {/* Timeline Container */}
        <div style={{
          position: "relative",
          zIndex: 2,
        }}>
          {/* Center line */}
          <div style={{
            position: "absolute",
            left: "50%",
            width: "4px",
            height: "100%",
            background: "linear-gradient(180deg, #ff9900 0%, #ffffff 100%)",
            transform: "translateX(-50%)",
          }}></div>

          {events.map(({ day, title, desc, img, side }, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                background: "linear-gradient(145deg, #1a1a1a, #0f0f0f)",
                padding: "4rem 2rem 3rem",
                position: "relative",
                width: "45%",
                minHeight: "270px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                marginLeft: side === "left" ? "2rem" : "auto",
                marginRight: side === "left" ? "auto" : "2rem",
                marginBottom: "3rem",
                borderRadius: "24px",
                border: "1px solid #333",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                overflow: "hidden",
                transform: "scale(0.8) translateY(80px) rotateY(15deg)",
                opacity: "0",
                boxShadow: "0px 0px 0px rgba(0,0,0,0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow = `
                  25px 25px 50px rgba(0,0,0,0.9),
                  -25px -25px 50px rgba(50,50,50,0.4),
                  inset 8px 8px 15px rgba(0,0,0,0.6),
                  inset -8px -8px 15px rgba(60,60,60,0.3),
                  0 0 30px #ff9900,
                  0 0 60px rgba(255,153,0,0.3)
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = `
                  20px 20px 40px rgba(0,0,0,0.8),
                  -20px -20px 40px rgba(40,40,40,0.3),
                  inset 5px 5px 10px rgba(0,0,0,0.5),
                  inset -5px -5px 10px rgba(50,50,50,0.2),
                  0 0 20px rgba(255,153,0,0.3)
                `;
              }}
            >
              {/* Background overlay */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(145deg, rgba(0,0,0,0.85), rgba(0,0,0,0.7))",
                borderRadius: "24px",
                zIndex: 1,
              }}></div>

              {/* Growing line */}
              <div 
                className="growing-line"
                style={{
                  position: "absolute",
                  top: "50%",
                  [side === "left" ? "right" : "left"]: "-2px",
                  width: "0px",
                  height: "3px",
                  background: "linear-gradient(90deg, #ff9900, #ffbb00, #ff9900)",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  boxShadow: "0 0 10px #ff9900, 0 0 20px #ff9900",
                  opacity: 0,
                }}
              ></div>

              {/* Day Label */}
              <div style={{
                width: "110px",
                height: "110px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: "-30px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 20,
                background: "linear-gradient(145deg, #1a1a1a, #0f0f0f)",
                fontFamily: '"Oswald", sans-serif',
                color: "#ff9900",
                fontWeight: "600",
                fontSize: "1.1rem",
                borderRadius: "50%",
                border: "2px solid #333",
                boxShadow: `
                  15px 15px 30px rgba(0,0,0,0.8),
                  -15px -15px 30px rgba(40,40,40,0.3),
                  inset 3px 3px 6px rgba(0,0,0,0.5),
                  inset -3px -3px 6px rgba(50,50,50,0.2),
                  0 0 20px rgba(255,153,0,0.4)
                `,
                transition: "all 0.3s ease",
                cursor: "pointer",
                textShadow: "0 0 10px rgba(255,153,0,0.5)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `
                  20px 20px 40px rgba(0,0,0,0.9),
                  -20px -20px 40px rgba(50,50,50,0.4),
                  inset 5px 5px 10px rgba(0,0,0,0.6),
                  inset -5px -5px 10px rgba(60,60,60,0.3),
                  0 0 30px rgba(255,153,0,0.6)
                `;
                e.currentTarget.style.transform = "translateX(-50%) scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `
                  15px 15px 30px rgba(0,0,0,0.8),
                  -15px -15px 30px rgba(40,40,40,0.3),
                  inset 3px 3px 6px rgba(0,0,0,0.5),
                  inset -3px -3px 6px rgba(50,50,50,0.2),
                  0 0 20px rgba(255,153,0,0.4)
                `;
                e.currentTarget.style.transform = "translateX(-50%) scale(1)";
              }}
              >
                {day}
              </div>

              {/* Content */}
              <div style={{ position: "relative", zIndex: 2 }}>
                <h4 style={{
                  color: "#ffbb00",
                  fontFamily: '"Oswald", sans-serif',
                  fontWeight: "500",
                  marginBottom: "1rem",
                  fontSize: "1.8rem",
                  textShadow: "0 0 15px rgba(255,187,0,0.6)",
                  margin: "0 0 1rem 0",
                }}>
                  {title}
                </h4>
                {desc.map((line, i) => (
                  <p
                    key={i}
                    style={{
                      color: i % 2 === 0 ? "#ffffff" : "#ff9900",
                      fontFamily: '"Oswald", sans-serif',
                      fontWeight: "400",
                      marginBottom: i === desc.length - 1 ? "0" : "0.5rem",
                      fontSize: "1rem",
                      textShadow: i % 2 === 0 
                        ? "0 0 8px rgba(255,255,255,0.3)" 
                        : "0 0 8px rgba(255,153,0,0.3)",
                      margin: i === desc.length - 1 ? "0" : "0 0 0.5rem 0",
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes growLine {
          0% {
            width: 0px;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: calc(50vw - 47%);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Schedule;