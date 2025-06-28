import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { keyframes } from '@emotion/react';

gsap.registerPlugin(ScrollTrigger);

const borderSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Glitch flicker keyframe animation
const glitchFlicker = keyframes`
  0%, 100% {
    text-shadow:
      2px 0 red,
      -2px 0 cyan;
    transform: translate(0, 0);
    opacity: 1;
  }
  20% {
    text-shadow:
      3px 0 red,
      -3px 0 cyan;
    transform: translate(-1px, 0);
    opacity: 0.9;
  }
  40% {
    text-shadow:
      2px 0 red,
      -2px 0 cyan;
    transform: translate(1px, 0);
    opacity: 1;
  }
  60% {
    text-shadow:
      4px 0 red,
      -4px 0 cyan;
    transform: translate(0, -1px);
    opacity: 0.8;
  }
  80% {
    text-shadow:
      2px 0 red,
      -2px 0 cyan;
    transform: translate(0, 1px);
    opacity: 1;
  }
`;

// Pulse glow animation
const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 6px #00ffe7, 0 0 20px #ff0040;
  }
  50% {
    box-shadow: 0 0 15px #00ffe7, 0 0 35px #ff0040;
  }
`;

export default function ScrollZoomVideo() {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const container = videoContainerRef.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoRef.current,
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );
    }, videoContainerRef);

    function handleMouseMove(e) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * 30;
      const rotateY = ((x / rect.width) - 0.5) * 30;

      gsap.to(container, {
        rotationX: -rotateX,
        rotationY: rotateY,
        transformPerspective: 600,
        ease: "power3.out",
        duration: 0.3,
        transformOrigin: "center",
      });
    }

    function resetRotation() {
      gsap.to(container, {
        rotationX: 0,
        rotationY: 0,
        ease: "power3.out",
        duration: 0.5,
      });
    }

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', resetRotation);

    return () => {
      ctx.revert();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', resetRotation);
    };
  }, []);

  return (
    <Box
      ref={videoContainerRef}
      sx={{
        width: "100%",
        height: "80vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 6,
        perspective: 800,
        cursor: "pointer",
        borderRadius: "1rem",
        isolation: "isolate",
        boxShadow: "0 0 20px #00ffe733",
        "&::before": {
          content: '""',
          position: "absolute",
          width: "200%",
          height: "200%",
          inset: "-50%",
          zIndex: 1,
          borderRadius: "1rem",
          backgroundImage: `conic-gradient(
            #00ffe7 0deg,
            transparent 60deg,
            transparent 180deg,
            #00ffe7 180deg,
            transparent 240deg
          )`,
          animation: `${borderSpin} 5s linear infinite`,
          pointerEvents: "none",
        },
        "&:hover::before": {
          animationPlayState: "paused",
        },
        // Fade out badge on hover
        "&:hover .tekken-hover-badge": {
          opacity: 0,
          transition: "opacity 0.5s ease",
        },
      }}
    >
      {/* Tekken-style cursed badge */}
      <Box
        className="tekken-hover-badge"
        sx={{
          position: "absolute",
          top: 12,
          left: 12,
          background: "linear-gradient(45deg, #00ffe7, #ff0040)",
          color: "#000",
          fontWeight: "900",
          fontSize: "0.9rem",
          letterSpacing: "0.1em",
          padding: "6px 16px",
          clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
          boxShadow: "0 0 8pxrgb(7, 10, 43), 0 0 15px #ff0040",
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 10,
          opacity: 1,
          animation: `${glitchFlicker} 2.5s infinite, ${pulseGlow} 3s infinite ease-in-out`,
        }}
      >
        I'M CURSED — DON'T HOVER ME!
      </Box>

      <video
        ref={videoRef}
        src="https://res.cloudinary.com/djer7pmxt/video/upload/n9ggmiantm2lpgxhb5hp.mp4" // new video
        //src="https://res.cloudinary.com/dvmqxb8kd/video/upload/v1747718863/mainvideo_-_Made_with_Clipchamp_xq5xjk.mp4" - old video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          clipPath: "polygon(0 0, 92% 0, 100% 10%, 100% 100%, 8% 100%, 0 90%)",
          borderRadius: "1rem",
          userSelect: "none",
          pointerEvents: "none",
          position: "relative",
          zIndex: 2,
        }}
      />
    </Box>
  );
}
