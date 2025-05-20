import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = containerRef.current.querySelectorAll(".animated-word");

      // Set initial colors with stronger opacity and text shadows for readability
      words.forEach((word, i) => {
        if (i % 2 === 0) {
          word.style.color = "#ff2a2a"; // brighter red
          word.style.textShadow = "0 0 3px #000000aa"; // subtle black shadow
          word.style.filter = "drop-shadow(0 0 6px #ff2a2a)";
        } else {
          word.style.color = "rgba(0, 136, 255, 0.95)"; // stronger blue
          word.style.textShadow = "0 0 3px #000000aa"; // subtle black shadow
          word.style.filter = "drop-shadow(0 0 6px rgba(0, 136, 255, 0.95))";
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        words,
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
          rotateX: 90,
          transformOrigin: "50% 50%",
          filter: "drop-shadow(0 0 0px transparent)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1.1,
          rotateX: 0,
          ease: "back.out(1.7)",
          duration: 0.8,
          stagger: 0.12,
          filter: (i) =>
            i % 2 === 0
              ? "drop-shadow(0 0 10px #ff2a2a)"
              : "drop-shadow(0 0 10px rgba(0, 136, 255, 0.95))",
        }
      ).to(words, {
        scale: 1,
        duration: 0.5,
        stagger: 0.06,
        delay: 0.2,
        ease: "power1.out",
        filter: (i) =>
          i % 2 === 0
            ? "drop-shadow(0 0 5px #ff2a2a)"
            : "drop-shadow(0 0 5px rgba(0, 136, 255, 0.95))",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={clsx(
        "animated-title",
        containerClass,
        "select-none font-bold uppercase tracking-wider text-center"
      )}
      style={{
        fontSize: "5rem",
        lineHeight: 1.1,
        userSelect: "none",
        fontFamily: '"Tekken", sans-serif',
        letterSpacing: "0.03em", // Slightly tighter spacing to improve focus
      }}
    >
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex justify-center flex-wrap gap-4 px-8 md:gap-6"
          style={{ marginBottom: "1rem" }}
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
              style={{
                display: "inline-block",
                transformStyle: "preserve-3d",
                perspective: 500,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
