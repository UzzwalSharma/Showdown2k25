import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const TechkkenCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [confettiParticles, setConfettiParticles] = useState([]);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e) => {
      const colors = ['#ff1c1c', '#007bff', '#ff1744', '#2979ff']; // Tekken reds & blues
      let newParticles = [];

      for (let i = 0; i < 25; i++) {
        newParticles.push({
          id: Math.random(),
          x: e.clientX,
          y: e.clientY,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      setConfettiParticles(newParticles);

      // Animate confetti with GSAP
      newParticles.forEach((p) => {
        const elem = document.getElementById(`confetti-${p.id}`);
        if (elem) {
          gsap.set(elem, {
            transformPerspective: 600,
            transformOrigin: '50% 50%',
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            opacity: 1,
          });

          gsap.to(elem, {
            duration: 1.5,
            x: (Math.random() - 0.5) * 300,
            y: (Math.random() - 1) * 300,
            z: (Math.random() - 0.5) * 200,
            scale: 0.2 + Math.random() * 0.6,
            rotationX: Math.random() * 720,
            rotationY: Math.random() * 720,
            rotationZ: Math.random() * 720,
            opacity: 0,
            ease: 'power3.out',
            onComplete: () => {
              setConfettiParticles((particles) =>
                particles.filter((pt) => pt.id !== p.id)
              );
            },
          });
        }
      });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const size = 40;
  const lineThickness = 3;

  return (
    <>
      {/* Hide default cursor */}
      <style>{`body, html { cursor: none; }`}</style>

      {/* Sniper Scope Cursor */}
      <svg
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          mixBlendMode: 'screen',
          userSelect: 'none',
          filter: 'drop-shadow(0 0 8px #ff1744) drop-shadow(0 0 8px #2979ff)',
        }}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Red vertical lines */}
        <line
          x1={size / 2}
          y1={0}
          x2={size / 2}
          y2={size / 3}
          stroke="#ff1744"
          strokeWidth={lineThickness}
        />
        <line
          x1={size / 2}
          y1={(size * 2) / 3}
          x2={size / 2}
          y2={size}
          stroke="#ff1744"
          strokeWidth={lineThickness}
        />

        {/* Blue horizontal lines */}
        <line
          x1={0}
          y1={size / 2}
          x2={size / 3}
          y2={size / 2}
          stroke="#2979ff"
          strokeWidth={lineThickness}
        />
        <line
          x1={(size * 2) / 3}
          y1={size / 2}
          x2={size}
          y2={size / 2}
          stroke="#2979ff"
          strokeWidth={lineThickness}
        />

        {/* Center dot */}
        <circle cx={size / 2} cy={size / 2} r={4} fill="#ff1744" />
      </svg>

      {/* Confetti particles */}
      {confettiParticles.map(({ id, x, y, color }) => (
        <div
          key={id}
          id={`confetti-${id}`}
          style={{
            position: 'fixed',
            top: y,
            left: x,
            width: 10,
            height: 10,
            backgroundColor: color,
            boxShadow: `0 0 6px ${color}`,
            borderRadius: 2,
            pointerEvents: 'none',
            opacity: 1,
            zIndex: 10000,
            transformStyle: 'preserve-3d',
          }}
        />
      ))}
    </>
  );
};

export default TechkkenCursor;
