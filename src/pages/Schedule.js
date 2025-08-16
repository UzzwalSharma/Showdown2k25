import React, { useEffect, useState, useRef } from "react";

const PremiumTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Refs for GSAP animations
  const timelineRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const stepsRef = useRef([]);
  const dotsRef = useRef([]);
  const growingLineRef = useRef(null);
  const particlesRef = useRef([]);

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
      color: "#ff9900",
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
      color: "#ff9900",
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
      color: "#ff9900",
    },
  ];

  // Load GSAP
  useEffect(() => {
    const loadGSAP = async () => {
      // Load GSAP from CDN
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      script.async = true;
      document.head.appendChild(script);

      // Load fonts
      // const fontLink = document.createElement('link');
      // fontLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap';
      // fontLink.rel = 'stylesheet';
      // document.head.appendChild(fontLink);

      return new Promise((resolve) => {
        script.onload = resolve;
      });
    };

    loadGSAP().then(() => {
      if (window.gsap) {
        initGSAPAnimations();
      }
    });

    // Mobile detection
    const checkMobile = () => setIsMobile(window.innerWidth < 800);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const initGSAPAnimations = () => {
    const { gsap } = window;
    
    // Set initial states
    gsap.set(stepsRef.current, { opacity: 0, x: -50 });
    gsap.set(titleRef.current, { opacity: 0, y: -50 });
    gsap.set(imageRef.current, { scale: 0, rotationY: -90 });

    // Entrance animations
    const tl = gsap.timeline();
    
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    })
    .to(stepsRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    }, "-=0.8")
    .to(imageRef.current, {
      scale: 1,
      rotationY: 0,
      duration: 1,
      ease: "back.out(1.7)",
    }, "-=0.4");

    // Initial step activation
    activateStep(0, false);

    // Auto-advance with GSAP
    gsap.delayedCall(4, () => {
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep = (currentStep + 1) % events.length;
        setActiveStep(currentStep);
        activateStep(currentStep);
      }, 5000);
      
      // Store interval for cleanup
      timelineRef.current.autoInterval = interval;
    });

    // Particle system
    createParticles();
  };

  const createParticles = () => {
    if (!window.gsap || isMobile) return;
    
    const { gsap } = window;
    const particles = [];
    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: radial-gradient(circle, #ff9500, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
      `;
      
      document.body.appendChild(particle);
      particles.push(particle);
      
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random() * 0.5,
      });
      
      gsap.to(particle, {
        y: "-=100",
        x: `+=${Math.random() * 100 - 50}`,
        opacity: 0,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        repeatDelay: Math.random() * 2,
        ease: "power1.out",
      });
    }
    
    particlesRef.current = particles;
  };

  const activateStep = (index, animate = true) => {
    if (!window.gsap) return;
    
    const { gsap } = window;
    const currentEvent = events[index];
    
    // Animate growing line
    gsap.to(growingLineRef.current, {
      height: `${((index + 1) / events.length) * 100}%`,
      duration: animate ? 1.2 : 0,
      ease: "power2.inOut",
    });

    // Animate dots
    dotsRef.current.forEach((dot, i) => {
      if (i === index) {
        gsap.to(dot, {
          scale: 1.3,
          backgroundColor: currentEvent.color,
          boxShadow: `0 0 20px ${currentEvent.color}`,
          duration: 0.6,
          ease: "back.out(1.7)",
        });
      } else if (i < index) {
        gsap.to(dot, {
          scale: 1,
          backgroundColor: "#666",
          boxShadow: "none",
          duration: 0.4,
        });
      } else {
        gsap.to(dot, {
          scale: 0.8,
          backgroundColor: "#333",
          boxShadow: "none",
          duration: 0.4,
        });
      }
    });

    // Animate step content
    stepsRef.current.forEach((step, i) => {
      const isActive = i === index;
      const isPast = i < index;
      
      gsap.to(step, {
        opacity: isActive ? 1 : (isPast ? 0.7 : 0.4),
        x: isActive ? 0 : (isPast ? 0 : -20),
        scale: isActive ? 1 : 0.95,
        duration: 0.8,
        ease: "power2.out",
      });
    });

    // Animate image with 3D effect
    if (!isMobile && imageRef.current) {
      const tl = gsap.timeline();
      
      tl.to(imageRef.current, {
        rotationY: animate ? 15 : 0,
        scale: 0.9,
        duration: animate ? 0.4 : 0,
        ease: "power2.inOut",
      })
      .to(imageRef.current, {
        rotationY: 0,
        scale: 1,
        duration: animate ? 0.6 : 0,
        ease: "back.out(1.2)",
      });

      // Color-coded glow effect
      gsap.to(".timeline-image-border-glow", {
        background: `linear-gradient(45deg, ${currentEvent.color}, #ffffff, ${currentEvent.color})`,
        duration: 0.8,
      });
    }
  };

  const handleStepClick = (index) => {
    if (index === activeStep || isAnimating) return;
    
    // Clear auto-advance interval when user interacts
    if (timelineRef.current?.autoInterval) {
      clearInterval(timelineRef.current.autoInterval);
    }
    
    setIsAnimating(true);
    setActiveStep(index);
    activateStep(index);
    
    setTimeout(() => setIsAnimating(false), 1000);
  };

  // Mouse parallax effect
  useEffect(() => {
    if (!window.gsap || isMobile) return;
    
    const { gsap } = window;
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;
      
      gsap.to(imageRef.current, {
        rotationY: xPos * 0.5,
        rotationX: -yPos * 0.3,
        duration: 1,
        ease: "power2.out",
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  return (
    <div className="timeline-root" ref={timelineRef}>
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      {/* Left Timeline Section */}
      <div className="timeline-left">
        <h2 className="timeline-title" ref={titleRef}>
          Event <span className="title-highlight">Timeline</span>
        </h2>

        <div className="timeline-container">
          <div className="timeline-vertical-line"></div>
          <div className="timeline-growing-line" ref={growingLineRef}></div>

          {events.map((event, index) => (
            <div
              key={index}
              ref={el => stepsRef.current[index] = el}
              className="timeline-step"
              onClick={() => handleStepClick(index)}
            >
              <div className="timeline-step-content">
                <div className={`timeline-day-badge${index === activeStep ? " active" : ""}`}
                     style={{ '--accent-color': event.color }}>
                  {event.day}
                </div>
                <h4 className={`timeline-step-title${index === activeStep ? " active" : ""}`}
                    style={{ '--accent-color': event.color }}>
                  {event.title}
                </h4>
                {event.desc.map((line, i) => (
                  <p key={i} className="timeline-step-desc">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="timeline-dots">
            {events.map((event, index) => (
              <div
                key={index}
                ref={el => dotsRef.current[index] = el}
                className={`timeline-dot${index === activeStep ? " active" : ""}`}
                style={{ 
                  top: `calc(30px + ${index * 120}px)`,
                  '--accent-color': event.color 
                }}
                onClick={() => handleStepClick(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      {!isMobile && (
        <div className="timeline-right">
          <div className="timeline-image-container" ref={imageRef}>
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
            <div className="timeline-image-border-glow"></div>
          </div>
          
          <div className="timeline-progress-indicator">
            {events.map((event, index) => (
              <div
                key={index}
                className={`timeline-progress-dot${index === activeStep ? " active" : ""}`}
                style={{ '--accent-color': event.color }}
                onClick={() => handleStepClick(index)}
              />
            ))}
          </div>
        </div>
      )}

      <style>{`
        .particle {
          position: fixed !important;
          pointer-events: none !important;
          z-index: 1 !important;
        }
        
        .timeline-root {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
          min-height: 100vh;
          display: flex;
          font-family: 'Rajdhani', sans-serif;
          position: relative;
          overflow: hidden;
          width: 100vw;
          justify-content: center;
          align-items: center;
        }
        
        .animated-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(255, 153, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 187, 0, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 153, 0, 0.05) 0%, transparent 50%);
          animation: bgShift 20s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }
        
        @keyframes bgShift {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(1deg) scale(1.05); }
        }
        
        @media (max-width: 800px) {
          .timeline-root {
            flex-direction: column;
            align-items: stretch;
          }
        }
        
        .timeline-left {
          flex: 1;
          padding: 3.5rem 2rem;
          position: relative;
          background: rgba(15, 15, 15, 0.8);
          backdrop-filter: blur(10px);
          border-right: 1px solid rgba(255, 149, 0, 0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
        
        @media (max-width: 800px) {
          .timeline-left {
            padding: 2rem 1rem;
            border-right: none;
            border-bottom: 1px solid rgba(255, 149, 0, 0.2);
          }
        }
        
        .timeline-title {
          font-family: 'Orbitron', monospace;
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: 3px;
          text-align: center;
          text-transform: uppercase;
          margin: 0 0 3rem 0;
          color: #ff9900;
          text-shadow: 0 0 20px rgba(255,153,0,0.7), 0 0 40px rgba(255,153,0,0.3);
          position: relative;
        }
        
        .timeline-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ff9900, #ffbb00);
          border-radius: 2px;
        }
        
        .title-highlight {
          color: #ffffff !important;
        }
        
        .timeline-container {
          position: relative;
          max-width: 450px;
          width: 100%;
          margin: 0 auto;
          padding-left: 2rem;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .timeline-vertical-line {
          position: absolute;
          left: 20px;
          top: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #333 0%, #555 50%, #333 100%);
          border-radius: 2px;
          z-index: 1;
        }
        
        .timeline-growing-line {
          position: absolute;
          left: 20px;
          top: 0;
          width: 4px;
          background: linear-gradient(180deg, #ff9900 0%, #ffbb00 50%, #ff9900 100%);
          box-shadow: 
            0 0 20px rgba(255, 153, 0, 0.8),
            0 0 40px rgba(255, 153, 0, 0.4);
          border-radius: 2px;
          z-index: 2;
        }
        
        .timeline-step {
          position: relative;
          margin-bottom: 4rem;
          cursor: pointer;
          min-height: 120px;
          transition: transform 0.3s ease;
        }
        
        .timeline-step:hover {
          transform: translateX(5px);
        }
        
        .timeline-step-content {
          margin-left: 3rem;
          padding: 1rem;
          border-radius: 15px;
          background: rgba(25, 25, 25, 0.6);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .timeline-step:hover .timeline-step-content {
          background: rgba(35, 35, 35, 0.8);
          border-color: rgba(255, 153, 0, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        
        .timeline-day-badge {
          display: inline-block;
          background: linear-gradient(135deg, #333, #555);
          color: #999;
          padding: 0.4rem 1.2rem;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
          transition: all 0.6s ease;
          border: 2px solid transparent;
        }
        
        .timeline-day-badge.active {
          background: linear-gradient(135deg, var(--accent-color, #ff9900), #ffffff);
          color: #000;
          border-color: var(--accent-color, #ff9900);
          box-shadow: 0 0 20px rgba(255, 153, 0, 0.4);
          transform: scale(1.05);
        }
        
        .timeline-step-title {
          color: #999;
          font-weight: 600;
          font-size: 1.5rem;
          margin: 0 0 1rem 0;
          transition: all 0.6s ease;
          font-family: 'Orbitron', monospace;
        }
        
        .timeline-step-title.active {
          color: var(--accent-color, #ff9900);
          text-shadow: 0 0 15px rgba(255, 153, 0, 0.5);
          transform: translateX(10px);
        }
        
        .timeline-step-desc {
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
          color: #ccc;
          line-height: 1.6;
          transition: color 0.3s ease;
        }
        
        .timeline-dots {
          position: absolute;
          left: 20px;
          top: 30px;
          width: 4px;
          height: calc(100% - 30px);
        }
        
        .timeline-dot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #333;
          border: 3px solid #555;
          cursor: pointer;
          transition: all 0.4s ease;
          z-index: 3;
        }
        
        .timeline-dot:hover {
          transform: translateX(-50%) scale(1.2);
        }
        
        .timeline-dot.active {
          background: var(--accent-color, #ff9900);
          border-color: #ffffff;
          box-shadow: 
            0 0 20px var(--accent-color, #ff9900),
            0 0 40px rgba(255, 153, 0, 0.3);
        }
        
        /* Right Section */
        .timeline-right {
          flex: 1;
          position: relative;
          background: rgba(25, 25, 25, 0.6);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
        
        .timeline-image-container {
          width: 85%;
          height: 75%;
          border-radius: 25px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
          box-shadow: 
            25px 25px 50px rgba(0, 0, 0, 0.9),
            -25px -25px 50px rgba(50, 50, 50, 0.1),
            inset 5px 5px 15px rgba(0, 0, 0, 0.5);
          border: 2px solid rgba(255, 153, 0, 0.3);
          transform-style: preserve-3d;
          transition: all 0.6s ease;
        }
        
        .timeline-image-container:hover {
          box-shadow: 
            30px 30px 60px rgba(0, 0, 0, 1),
            -30px -30px 60px rgba(60, 60, 60, 0.15),
            0 0 50px rgba(255, 153, 0, 0.2);
        }
        
        .timeline-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.9) contrast(1.2) saturate(1.1);
          transition: all 0.6s ease;
        }
        
        .timeline-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(255, 153, 0, 0.1) 50%,
            rgba(0, 0, 0, 0.4) 100%
          );
        }
        
        .timeline-image-title {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(0, 0, 0, 0.7) 40%,
            rgba(0, 0, 0, 0.95) 100%
          );
          padding: 2.5rem;
          color: #fff;
        }
        
        .timeline-image-title h3 {
          font-family: 'Orbitron', monospace;
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 0.8rem 0;
          background: linear-gradient(45deg, #ffffff, #ff9900);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 20px rgba(255, 153, 0, 0.5);
        }
        
        .timeline-image-title p {
          font-size: 1.2rem;
          color: #ff9900;
          font-weight: 500;
          margin: 0;
          text-shadow: 0 0 10px rgba(255, 153, 0, 0.3);
        }
        
        .timeline-image-border-glow {
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border-radius: 28px;
          background: linear-gradient(45deg, #ff9900, #ffffff, #ff9900);
          background-size: 300% 300%;
          z-index: -1;
          animation: borderGlow 3s ease-in-out infinite;
        }
        
        .timeline-progress-indicator {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          gap: 0.8rem;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 25px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .timeline-progress-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #333;
          cursor: pointer;
          transition: all 0.4s ease;
          border: 2px solid #555;
        }
        
        .timeline-progress-dot:hover {
          transform: scale(1.3);
        }
        
        .timeline-progress-dot.active {
          background: var(--accent-color, #ff9900);
          border-color: #ffffff;
          box-shadow: 0 0 15px var(--accent-color, #ff9900);
        }
        
        @keyframes borderGlow {
          0%, 100% { 
            background-position: 0% 50%;
            opacity: 0.8;
          }
          50% { 
            background-position: 100% 50%;
            opacity: 1;
          }
        }
        
        @media (max-width: 800px) {
          .timeline-right {
            display: none;
          }
          
          .timeline-title {
            font-size: 2rem;
          }
          
          .timeline-container {
            padding-left: 1rem;
          }
          
          .timeline-step-content {
            margin-left: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PremiumTimeline;