import React, { useEffect, useState } from "react";

const SplitTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const events = [
    {
      day: "ROUND 1",
      title: "Idea Submission",
      desc: [
        "12:00 AM (01 Aug) – Mission Briefing Begins!",
        "Submit PPT – Strategy, Loadout, and Impact",
        "11:59 PM (17 Aug) – Final Zone closes!",
      ],
      img: "https://res.cloudinary.com/djer7pmxt/image/upload/v1753116012/kv_xksis4.webp",
    },
    {
      day: "ROUND 2",
      title: "Mentorship Round",
      desc: [
        "09:30 AM (23 Aug) – Mentoring Begins!",
        "Experts Guide Teams on MVP and Execution",
        "11:59 PM (24 Aug) – Mentoring Ends!",
      ],
      img: "https://res.cloudinary.com/djer7pmxt/image/upload/v1753116014/gemini_generated_finale_gc608c.webp",
    },
    {
      day: "ROUND 3",
      title: "Grand Finale",
      desc: [
        "9:30 AM (30 Aug) - Hackathon Starts!",
        "5:00 PM - Judging and Awards",
        "5:30 PM - Closing Ceremony!",
      ],
      img: "https://res.cloudinary.com/djer7pmxt/image/upload/v1753116012/pubg-blindspot-io-1920x1080_bobxnb.webp",
    },
  ];

  useEffect(() => {
    // Import Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Auto-advance timeline
    const interval = setInterval(() => {
      setIsAnimating(true);
      setActiveStep(prev => (prev + 1) % events.length);
      setTimeout(() => setIsAnimating(false), 800);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleStepClick = (index) => {
    if (index !== activeStep) {
      setIsAnimating(true);
      setActiveStep(index);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  // Responsive: hide image section on small screens
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 800);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="timeline-root">
      {/* Left Timeline Section */}
      <div className="timeline-left">
        {/* Title */}
        <h2 className="timeline-title">
          Event <span style={{ color: "#ffffff" }}>Timeline</span>
        </h2>

        {/* Timeline Container */}
        <div className="timeline-container">
          {/* Vertical Line */}
          <div className="timeline-vertical-line"></div>

          {/* Growing Line */}
          <div
            className="timeline-growing-line"
            style={{
              height: `${((activeStep + 1) / events.length) * 100}%`,
            }}
          ></div>

          {/* Timeline Steps */}
          {events.map((event, index) => (
            <div
              key={index}
              className="timeline-step"
              onClick={() => handleStepClick(index)}
            >
             

              {/* Step Content */}
              <div
                className="timeline-step-content"
                style={{
                  opacity: index <= activeStep ? 1 : 0.4,
                  transform: index === activeStep
                    ? "translateX(0) scale(1)"
                    : index < activeStep
                      ? "translateX(0) scale(0.95)"
                      : "translateX(-20px) scale(0.9)",
                }}
              >
                {/* Day Badge */}
                <div className={`timeline-day-badge${index <= activeStep ? " active" : ""}`}>
                  {event.day}
                </div>

                <h4 className={`timeline-step-title${index <= activeStep ? " active" : ""}`}>
                  {event.title}
                </h4>

                {event.desc.map((line, i) => (
                  <p
                    key={i}
                    className="timeline-step-desc"
                    style={{
                      color: index <= activeStep
                        ? (i % 2 === 0 ? "#ffffff" : "#ff9900")
                        : "#555",
                      opacity: index === activeStep ? 1 : (index < activeStep ? 0.8 : 0.5),
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Progress Dots - perfectly centered on the line */}
          <div className="timeline-dots">
            {events.map((_, index) => (
              <div
                key={index}
                className={`timeline-dot${index === activeStep ? " active" : ""}`}
                style={{
                  top: `calc(30px + ${index * 120}px)`, // 30px aligns center of dot to line
                }}
                onClick={() => handleStepClick(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Image Section (hidden on mobile) */}
      {!isMobile && (
        <div className="timeline-right">
          <div
            className="timeline-image-container"
            style={{
              transform: isAnimating ? "scale(0.95) rotateY(5deg)" : "scale(1) rotateY(0deg)",
            }}
          >
            <img
              src={events[activeStep].img}
              alt={events[activeStep].title}
              className="timeline-image"
            />
            <div className="timeline-image-overlay"></div>
            <div className="timeline-image-title">
              <h3>{events[activeStep].title}</h3>
              <p>{events[activeStep].day}</p>
            </div>
            <div
              className="timeline-image-border-glow"
              style={{
                animation: isAnimating ? "borderGlow 1s ease-in-out" : "none",
              }}
            ></div>
          </div>
          {/* Progress Indicator (bottom right) */}
          <div className="timeline-progress-indicator">
            {events.map((_, index) => (
              <div
                key={index}
                className={`timeline-progress-dot${index === activeStep ? " active" : ""}`}
                onClick={() => handleStepClick(index)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Styles */}
      <style>{`
        .timeline-root {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
          min-height: 100vh;
          display: flex;
          font-family: 'Oswald', sans-serif;
          flex-direction: row;
          width: 100vw;
          min-width: 0;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
        }
        @media (max-width: 800px) {
          .timeline-root {
            flex-direction: column;
            width: 100vw;
            min-width: 0;
            padding: 0 !important;
            align-items: stretch;
          }
        }
        .timeline-left {
          flex: 1;
          padding: 3.5rem 0;
          position: relative;
          background: linear-gradient(135deg, rgba(15,15,15,0.92) 0%, rgba(25,25,25,0.85) 100%);
          border-right: 1px solid #333;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 800px) {
          .timeline-left {
            padding: 2rem 0.2rem;
            border-right: none;
            border-bottom: 1px solid #333;
          }
        }
        .timeline-title {
          color: #ff9900;
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-align: center;
          text-shadow: 0 0 20px rgba(255,153,0,0.7), 0 0 40px rgba(255,153,0,0.3);
          text-transform: uppercase;
          margin-bottom: 2.5rem;
          margin-top: 0;
          width: 100%;
        }
        .timeline-container {
          position: relative;
          max-width: 400px;
          width: 100%;
          margin: 0 auto;
          padding-left: 2rem;
          min-height: 400px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        @media (max-width: 800px) {
          .timeline-container {
            max-width: 100%;
            width: 100%;
            padding-left: 1rem;
            min-height: 300px;
          }
        }
        .timeline-vertical-line {
          position: absolute;
          left: 20px;
          top: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(180deg, #333 0%, #555 100%);
          z-index: 1;
        }
        .timeline-growing-line {
          position: absolute;
          left: 20px;
          top: 0;
          width: 3px;
          background: linear-gradient(180deg, #ff9900 0%, #ffbb00 50%, #ff9900 100%);
          box-shadow: 0 0 15px #ff9900, 0 0 30px rgba(255,153,0,0.5);
          transition: height 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 2;
        }
        .timeline-step {
          position: relative;
          margin-bottom: 4rem;
          cursor: pointer;
          min-height: 120px;
        }
        .timeline-step-circle {
          position: absolute;
          left: 4px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(145deg, #333, #555);
          border: 3px solid #666;
          box-shadow: inset 2px 2px 4px rgba(0,0,0,0.5);
          transition: all 0.8s ease;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 600;
          color: #999;
        }
        .timeline-step-circle.active {
          background: linear-gradient(145deg, #ff9900, #ffbb00);
          border: 3px solid #fff;
          box-shadow: 0 0 20px rgba(255,153,0,0.8), 0 0 40px rgba(255,153,0,0.4), inset 2px 2px 4px rgba(255,255,255,0.3);
          color: #000;
        }
        .timeline-step-content {
          margin-left: 3rem;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .timeline-day-badge {
          display: inline-block;
          background: linear-gradient(135deg, #333, #555);
          color: #999;
          padding: 0.3rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          box-shadow: none;
          transition: all 0.8s ease;
        }
        .timeline-day-badge.active {
          background: linear-gradient(135deg, #ff9900, #ffbb00);
          color: #000;
          box-shadow: 0 0 15px rgba(255,153,0,0.3);
        }
        .timeline-step-title {
          color: #666;
          font-weight: 500;
          font-size: 1.4rem;
          margin-bottom: 0.8rem;
          margin-top: 0;
          text-shadow: none;
          transition: all 0.8s ease;
        }
        .timeline-step-title.active {
          color: #ffbb00;
          text-shadow: 0 0 10px rgba(255,187,0,0.3);
        }
        .timeline-step-desc {
          font-size: 0.9rem;
          margin-bottom: 0.4rem;
          margin-top: 0;
          text-shadow: none;
          transition: all 0.8s ease;
        }
        .timeline-dots {
          position: absolute;
          left: 20px;
          top: 30px;
          width: 3px;
          height: calc(100% - 30px);
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
        }
        .timeline-dot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #333;
          box-shadow: none;
          transition: all 0.3s ease;
          cursor: pointer;
          pointer-events: auto;
          border: 2px solid #555;
        }
        .timeline-dot.active {
          background: linear-gradient(135deg, #ff9900, #ffbb00);
          box-shadow: 0 0 15px rgba(255,153,0,0.6);
          border: 2px solid #fff;
        }
        @media (max-width: 800px) {
          .timeline-dot, .timeline-dot.active {
            width: 14px;
            height: 14px;
          }
        }
        /* Right Section (Image) */
        .timeline-right {
          flex: 1;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(25,25,25,0.8) 0%, rgba(15,15,15,0.9) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .timeline-image-container {
          width: 85%;
          height: 70%;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
          box-shadow: 20px 20px 40px rgba(0,0,0,0.8), -20px -20px 40px rgba(40,40,40,0.3), inset 5px 5px 10px rgba(0,0,0,0.5), 0 0 30px rgba(255,153,0,0.2);
          border: 2px solid #333;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .timeline-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.8s ease;
          filter: brightness(0.8) contrast(1.1);
        }
        .timeline-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(255,153,0,0.1) 100%);
          transition: all 0.8s ease;
        }
        .timeline-image-title {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%);
          padding: 2rem;
          color: #fff;
        }
        .timeline-image-title h3 {
          font-size: 1.8rem;
          font-weight: 600;
          color: #ffbb00;
          text-shadow: 0 0 15px rgba(255,187,0,0.5);
          margin: 0 0 0.5rem 0;
        }
        .timeline-image-title p {
          font-size: 1.1rem;
          color: #ff9900;
          font-weight: 500;
          text-shadow: 0 0 10px rgba(255,153,0,0.3);
          margin: 0;
        }
        .timeline-image-border-glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 22px;
          background: linear-gradient(45deg, #ff9900, #ffbb00, #ff9900, #ffbb00);
          background-size: 400% 400%;
          z-index: -1;
        }
        .timeline-progress-indicator {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          gap: 0.5rem;
        }
        .timeline-progress-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #333;
          box-shadow: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .timeline-progress-dot.active {
          background: linear-gradient(135deg, #ff9900, #ffbb00);
          box-shadow: 0 0 15px rgba(255,153,0,0.6);
        }
        @media (max-width: 800px) {
          .timeline-right {
            display: none;
          }
          .timeline-progress-indicator {
            display: none;
          }
        }
        @keyframes borderGlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default SplitTimeline;