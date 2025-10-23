// components/MaskCursorEffect.tsx
'use client';

import React, { JSX, useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface MousePosition {
  x: number;
  y: number;
}

type CursorVariant = "default" | "text";

export default function MaskCursorEffect(): JSX.Element {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobile(window.innerWidth <= 1024 || 'ontouchstart' in window);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    const mouseMove = (e: MouseEvent): void => {
      if (!isMobile) {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", mouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener('resize', checkIfMobile);
    }
  }, [isMobile]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference" as const
    }
  };

  const textEnter = (): void => {
    if (!isMobile) setCursorVariant("text");
  };
  
  const textLeave = (): void => {
    if (!isMobile) setCursorVariant("default");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      
      {/* Title */}
      <h1 
        onMouseEnter={textEnter} 
        onMouseLeave={textLeave}   
        className="title text-white text-center mb-6 sm:mb-8 lg:mb-12
                   text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                   font-bold leading-tight tracking-tight"
      >
        About Us
      </h1>
      
      {/* Description with scroll reveal */}
      <ScrollRevealText 
        textEnter={textEnter}
        textLeave={textLeave}
      />

      {/* Cursor Effect - Only show on desktop */}
      {!isMobile && (
        <motion.div
          className="cursor fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-50"
          variants={variants}
          animate={cursorVariant}
          transition={{
            type: "tween",
            ease: "backOut",
            duration: 0.5
          }}
        />
      )}
    </div>
  );
}

// Separate component for scroll reveal text
function ScrollRevealText({ textEnter, textLeave }: { textEnter: () => void; textLeave: () => void }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"]
  });

  const paragraphText = `At Designbird, we believe that great design is more than aesthetics—it's strategy, impact, and a career. Founded in 2024 in Durgapur, West Bengal, Designbird was born out of a simple idea: to bridge the gap between raw creative talent and real-world industry skills. Over the years, we've evolved from a small classroom setup into a thriving creative institute, empowering hundreds of students to find their voice—and their profession—in the fast-paced world of design, development, and digital marketing.`;
  
  const words = paragraphText.split(" ");

  return (
    <p 
      ref={containerRef}
      onMouseEnter={textEnter} 
      onMouseLeave={textLeave} 
      className="text-center max-w-5xl leading-relaxed
                 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[26px]
                 px-2 sm:px-4 lg:px-0"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        return (
          <Word 
            key={i} 
            range={[start, end]} 
            progress={scrollYProgress}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

// Word component with scroll-based opacity
interface WordProps {
  children: string;
  range: number[];
  progress: MotionValue<number>;
}

const Word: React.FC<WordProps> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  
  return (
    <span className="relative inline-block mr-[0.25em] mt-[0.25em]">
      <span className="absolute opacity-20 text-white">{children}</span>
      <motion.span
        style={{ opacity }}
        className="text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};
