import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import hackvideo from '../videos/hack-main.mp4';
gsap.registerPlugin(ScrollTrigger);

export default function ScrollZoomVideo() {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
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
            trigger: videoContainerRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
            // toggleActions: 'play none none none' // optional for 1-time reveal
          },
        }
      );
    }, videoContainerRef);

    return () => ctx.revert(); // Clean up on unmount
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
      }}
    >
      <video
        ref={videoRef}
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
}
