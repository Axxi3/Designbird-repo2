'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function index({ modal, projects }) {
  const { active, index } = modal;

  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    if (!modalContainer.current || !cursor.current || !cursorLabel.current) return;

    // Setup GSAP quickSet functions
    const xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    });

    const xMoveCursor = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    });
    const yMoveCursor = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    });

    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.45,
      ease: 'power3',
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'top', {
      duration: 0.45,
      ease: 'power3',
    });

    const moveHandler = (e) => {
      if (!active) return;
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    };

    window.addEventListener('mousemove', moveHandler);
    return () => window.removeEventListener('mousemove', moveHandler);
  }, [active]);

  return (
    <>
      {/* Modal Image Container */}
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
        className="h-[350px] w-[400px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center z-20"
      >
        <div
          style={{ top: index * -100 + '%' }}
          className="absolute w-full h-full transition-[top] duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)]"
        >
          {projects.map((project, i) => (
            <div
              key={`modal_${i}`}
              className="h-full w-full flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <Image
                src={`/${project.src}`}
                width={300}
                height={0}
                alt="project"
                className="h-auto w-auto"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Custom Cursor */}
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
        className="w-[80px] h-[80px] rounded-full bg-[#455ce9] text-white absolute z-30 flex items-center justify-center text-sm font-light pointer-events-none"
      />

      {/* Cursor Label */}
      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
        className="w-[80px] h-[80px] rounded-full bg-transparent text-white absolute z-30 flex items-center justify-center text-sm font-light pointer-events-none"
      >
        View
      </motion.div>
    </>
  );
}
