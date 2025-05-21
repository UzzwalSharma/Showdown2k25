import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const NeonLine = styled(Box)(({ theme }) => ({
  width: '120px',
  height: '4px',
  margin: '0.5rem auto 2rem',
  borderRadius: '2px',
  backgroundImage: 'linear-gradient(90deg, #ff0000, #0088ff, #ff0000, #0088ff)',
  backgroundSize: '200% 100%',
  boxShadow: '0 0 8px #ff0000, 0 0 12px #0088ff, 0 0 20px #ff0000, 0 0 30px #0088ff',
  position: 'relative',
  overflow: 'hidden',
}));

const NeonStrikeLine = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(lineRef.current, {
        backgroundPosition: '200% 0%',
        duration: 2,
        repeat: -1,
        ease: 'linear',
        yoyo: true,
      });
      gsap.to(lineRef.current, {
        boxShadow: '0 0 20px #ff0000, 0 0 30px #0088ff, 0 0 40px #ff0000, 0 0 50px #0088ff',
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
      });
    }, lineRef);

    return () => ctx.revert();
  }, []);

  return <NeonLine ref={lineRef} />;
};

export default NeonStrikeLine;
