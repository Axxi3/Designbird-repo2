'use client';

import React, { useState, useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue
} from 'framer-motion';

export type Course = {
  title: string;
  emoji: string;
  description: string;
  tools: string;
  avgSalary: string;
  jobDemand: string;
  link: string;
};

export const courses: Course[] = [
  {
    title: "Graphic Design",
    emoji: "🎨",
    description: "Create stunning visual identities and brand materials that captivate audiences.",
    tools: "Photoshop, Illustrator",
    avgSalary: "₹3.5–5.5 LPA",
    jobDemand: "Steady",
    link: "https://example.com/graphic-design"
  },
  {
    title: "UI/UX Design",
    emoji: "🧠",
    description: "Design intuitive digital experiences that users love and businesses need.",
    tools: "Figma, Adobe XD",
    avgSalary: "₹6–12 LPA",
    jobDemand: "Very High",
    link: "https://example.com/ui-ux-design"
  },
  {
    title: "Video Editing",
    emoji: "🎬",
    description: "Transform raw footage into compelling stories that engage viewers.",
    tools: "Premiere Pro, CapCut",
    avgSalary: "₹3–6 LPA",
    jobDemand: "High",
    link: "https://example.com/video-editing"
  },
  {
    title: "2D Animation",
    emoji: "🎞",
    description: "Bring static designs to life with dynamic animations that capture attention.",
    tools: "After Effects",
    avgSalary: "₹4–8 LPA",
    jobDemand: "Growing",
    link: "https://example.com/2d-animation"
  },
  {
    title: "Web Development",
    emoji: "🌐",
    description: "Build responsive, functional websites that drive business growth.",
    tools: "HTML, CSS, JS",
    avgSalary: "₹5–10 LPA",
    jobDemand: "High",
    link: "https://example.com/web-development"
  },
  {
    title: "Digital Marketing",
    emoji: "📢",
    description: "Master online promotion and help businesses reach their target audience.",
    tools: "Meta Ads, Google tools",
    avgSalary: "₹4.5–9 LPA",
    jobDemand: "Very High",
    link: "https://example.com/digital-marketing"
  },
  {
    title: "Communication",
    emoji: "🗣",
    description: "Develop essential soft skills that enhance your employability.",
    tools: "LinkedIn, Communication",
    avgSalary: "Enhances all roles",
    jobDemand: "Essential",
    link: "https://example.com/communication"
  }
];

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="relative w-[280px] sm:w-[320px] md:w-[350px] flex-shrink-0 px-3 select-none">
      <div
        className="
          relative h-full
          bg-[#222] 
          border border-white/10 
          hover:border-purple-500/50
          rounded-2xl 
          p-6 
          transition-all duration-300 
          group
          hover:shadow-2xl hover:shadow-purple-500/10
          flex flex-col
        "
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl bg-white/5 p-2 rounded-lg">{course.emoji}</span>
          <h3 className="text-xl font-bold text-white leading-tight group-hover:text-purple-400 transition-colors">
            {course.title}
          </h3>
        </div>

        {/* Content */}
        <div className="flex-grow space-y-4">
          <p className="text-sm text-gray-400 leading-relaxed min-h-[60px]">
            {course.description}
          </p>

          <div className="space-y-3 pt-2 border-t border-white/5">
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Tools</p>
              <p className="text-sm text-gray-300">{course.tools}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-lg p-2.5">
                <p className="text-[10px] text-gray-500 uppercase font-semibold">Avg. Salary</p>
                <p className="text-xs font-medium text-white">{course.avgSalary}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-2.5">
                <p className="text-[10px] text-gray-500 uppercase font-semibold">Job Demand</p>
                <p className="text-xs font-medium text-green-400">{course.jobDemand}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Link */}
        <div className="mt-4 pt-4 border-t border-white/5 flex items-center text-sm font-medium text-white group-hover:text-purple-400 transition-colors">
          Learn More
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Courses: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // We duplicate courses to ensure we have enough length for the loop
  // 4 sets ensures smooth infinite scrolling even on ultra-wide screens
  const infiniteCourses = [...courses, ...courses, ...courses, ...courses];

  // Configuration
  const CARD_WIDTH = 350; // Approximate max width including padding
  const GAP = 0;
  const TOTAL_WIDTH = (CARD_WIDTH + GAP) * courses.length;

  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);



  // The animation loop
  useAnimationFrame((t, delta) => {
    if (isDragging || isHovered) return;

    // Move left by a small amount every frame (adjust 0.5 for speed)
    let xOffset = x.get() - (0.5 * (delta / 10));

    // The Infinite Loop Logic:
    // If we have scrolled past the width of the original set of courses,
    // reset the position to 0. This creates the seamless loop effect.
    if (xOffset <= -TOTAL_WIDTH) {
      xOffset = 0;
    }

    // If dragging pulled us too far right (positive), wrap to the end
    if (xOffset > 0) {
      xOffset = -TOTAL_WIDTH;
    }

    x.set(xOffset);
  });

  const onDragStart = () => {
    setIsDragging(true);
  };

  const onDragEnd = () => {
    setIsDragging(false);
  };

  // Helper to handle hover state for pausing
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <section className="py-20 sm:py-24 w-full bg-[#111] overflow-hidden flex flex-col justify-center">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Courses</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Industry-relevant skills to launch your creative career. <br className="hidden md:block" />
          <span className="text-sm text-gray-500 mt-2 block">(Drag to explore)</span>
        </p>
      </div>

      {/* Marquee Container */}
      <div
        ref={containerRef}
        className="relative w-full flex items-center"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Left Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-[#111] to-transparent pointer-events-none" />

        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -TOTAL_WIDTH * 2, right: 0 }} // Loose constraints, the loop logic handles the reset
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        // We create a seamless infinite strip
        >
          {infiniteCourses.map((course, index) => (
            <CourseCard
              key={`${course.title}-${index}`}
              course={course}
            />
          ))}
        </motion.div>

        {/* Right Fade Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-[#111] to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Courses;
