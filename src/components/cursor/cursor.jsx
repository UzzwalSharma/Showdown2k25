import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const BASE_SIZE = 40;
const PADDING = 12;

const TechkkenCursor = () => {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const $cursor = cursorRef.current;

    const moveCursor = (e) => {
      const target = e.target.closest('button, a, img, .magnetic, .trackable, .hover-target');

      if (target) {
        const rect = target.getBoundingClientRect();
        const w = rect.width + PADDING * 2;
        const h = rect.height + PADDING * 2;

        gsap.to($cursor, {
          x: rect.left - PADDING,
          y: rect.top - PADDING,
          width: w,
          height: h,
          borderColor: 'rgba(236, 107, 38, 0.7)',
          boxShadow: '0 0 12px rgba(255,255,255,0.45)',
          duration: 0.3,
          ease: 'power3.out',
        });

        setHovering(true);
      } else {
        gsap.to($cursor, {
          x: e.clientX - BASE_SIZE / 2,
          y: e.clientY - BASE_SIZE / 2,
          width: BASE_SIZE,
          height: BASE_SIZE,
          borderColor: 'rgba(255,255,255,0.2)',
          boxShadow: '0 0 6px rgba(255,255,255,0.1)',
          duration: 0.25,
          ease: 'power3.out',
        });

        setHovering(false);
      }
    };

    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      {/* Hide OS cursor */}
      <style>{`html, body { cursor: none; }`}</style>

      {/* Cursor Box */}
      <div
  ref={cursorRef}
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: BASE_SIZE,
    height: BASE_SIZE,
    pointerEvents: 'none',
    zIndex: 9999,
    borderRadius: 8,
   
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1.5px solid rgba(255, 255, 255, 0.4)',
   
    mixBlendMode: 'lighten',
    transition: 'background-color 0.2s ease-in-out',
  }}
>

        {/* Brackets Only When Hovering */}
        {hovering &&
          ['tl', 'tr', 'bl', 'br'].map((pos) => (
            <div
              key={pos}
              style={{
                position: 'absolute',
                width: 14,
                height: 14,
                border: '2px solid white',
                opacity: 0.9,
                ...(pos === 'tl' && { top: 0, left: 0, borderRight: 'none', borderBottom: 'none' }),
                ...(pos === 'tr' && { top: 0, right: 0, borderLeft: 'none', borderBottom: 'none' }),
                ...(pos === 'bl' && { bottom: 0, left: 0, borderRight: 'none', borderTop: 'none' }),
                ...(pos === 'br' && { bottom: 0, right: 0, borderLeft: 'none', borderTop: 'none' }),
              }}
            />
          ))}
      </div>
    </>
  );
};

export default TechkkenCursor;
