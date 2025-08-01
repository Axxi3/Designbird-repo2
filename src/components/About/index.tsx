// components/MaskCursorEffect.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '@/lib/useMousePosition';
import { TextAnimate } from '../magicui/text-animate';

export default function MaskCursorEffect(){
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024 || 'ontouchstart' in window);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    const mouseMove = e => {
      if (!isMobile) {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      }
    }

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
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => {
    if (!isMobile) setCursorVariant("text");
  };
  const textLeave = () => {
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
      
      {/* Description */}
      <p 
        onMouseEnter={textEnter} 
        onMouseLeave={textLeave} 
        className="text-center text-white/60 max-w-5xl leading-relaxed
                   text-sm sm:text-base md:text-lg lg:text-xl xl:text-[26px]
                   px-2 sm:px-4 lg:px-0"
      >
        At Designbird, we believe that great design is more than aesthetics—it's strategy, impact, and a
        career. Founded in 2024 in Durgapur, West Bengal, Designbird was born out of a simple idea:
        to bridge the gap between raw creative talent and real-world industry skills.
        Over the years, we've evolved from a small classroom setup into a thriving creative institute,
        empowering hundreds of students to find their voice—and their profession—in the fast-paced
        world of design, development, and digital marketing.
      </p>

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
