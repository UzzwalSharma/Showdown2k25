import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { keyframes } from '@emotion/react'; // For defining CSS animation

gsap.registerPlugin(ScrollTrigger);

// Define the spinning keyframe animation
const borderSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export default function ScrollZoomVideo() {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const container = videoContainerRef.current;

    // Scroll zoom animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoRef.current,
        {
          scale: 1.2,
          opacity: 0,
        },
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

    // Mousemove tilt animation
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
        width: '100%',
        height: '80vh',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: 6,
        perspective: 800,
        cursor: 'pointer',
        borderRadius: '1rem',
        isolation: 'isolate',
        boxShadow: '0 0 20px #00ffe733',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '200%',
          height: '200%',
          inset: '-50%',
          zIndex: 1,
          borderRadius: '1rem',
          backgroundImage: `conic-gradient(
            #00ffe7 0deg,
            transparent 60deg,
            transparent 180deg,
            #00ffe7 180deg,
            transparent 240deg
          )`,
          animation: `${borderSpin} 5s linear infinite`,
          pointerEvents: 'none',
        },
        '&:hover::before': {
          animationPlayState: 'paused',
        },
      }}
    >
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dvmqxb8kd/video/upload/v1747718863/mainvideo_-_Made_with_Clipchamp_xq5xjk.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          clipPath: 'polygon(0 0, 92% 0, 100% 10%, 100% 100%, 8% 100%, 0 90%)',
          borderRadius: '1rem',
          userSelect: 'none',
          pointerEvents: 'none',
          position: 'relative',
          zIndex: 2,
        }}
      />
    </Box>
  );
}
