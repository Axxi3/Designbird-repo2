'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

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
    title: "Communication & Freelancing",
    emoji: "🗣",
    description: "Develop essential soft skills that enhance your employability.",
    tools: "LinkedIn, Communication platforms",
    avgSalary: "Enhances all roles",
    jobDemand: "Essential",
    link: "https://example.com/communication"
  }
];

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="flex-shrink-0 w-full sm:w-80 md:w-72 lg:w-80 xl:w-96 mx-0 sm:mx-4 cursor-pointer group">
      <motion.div
        className="
          relative 
          h-auto sm:h-72 md:h-64 lg:h-72 
          rounded-2xl 
          p-4 sm:p-6 
          shadow-xl 
          transition-all duration-300 
          group-hover:scale-105 
          bg-[#2a2a2a] 
          border border-white/10
          flex flex-col items-center text-center sm:text-left sm:items-start
        "
        whileHover={{ 
          backgroundColor: "#333333",
          borderColor: "rgba(255,255,255,0.2)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <span className="text-2xl sm:text-3xl">{course.emoji}</span>
          <h3 className="text-lg sm:text-xl font-bold text-white leading-tight text-center sm:text-left">
            {course.title}
          </h3>
        </div>

        {/* Content */}
        <div className="space-y-3 sm:space-y-4 w-full flex flex-col items-center sm:items-start">
          <p className="text-sm text-gray-300 leading-relaxed text-center sm:text-left max-w-sm sm:max-w-none">
            {course.description}
          </p>

          <div className="space-y-2 sm:space-y-3 w-full max-w-sm sm:max-w-none">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center sm:text-left">
              <h4 className="font-semibold text-sm text-white mb-1">Tools:</h4>
              <p className="text-sm text-gray-400">{course.tools}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 w-full">
              <div className="bg-white/10 border border-white/10 rounded-lg p-2 text-center sm:text-left">
                <h5 className="font-semibold text-xs text-white">Avg. Salary</h5>
                <p className="text-xs text-gray-400 leading-tight">{course.avgSalary}</p>
              </div>
              <div className="bg-white/10 border border-white/10 rounded-lg p-2 text-center sm:text-left">
                <h5 className="font-semibold text-xs text-white">Job Demand</h5>
                <p className="text-xs text-gray-400 leading-tight">{course.jobDemand}</p>
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          <a
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors mt-3 group-hover:translate-x-1 transition-transform duration-300"
          >
            Learn More
            <svg width="16" height="10" viewBox="0 0 22 12" fill="none">
              <path
                d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const Courses: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const marqueeControls = useAnimation();
  const marqueeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Triple the courses for seamless infinite scroll
  const infiniteCourses = [...courses, ...courses, ...courses];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Continuous animation loop
  const startContinuousAnimation = () => {
    if (isMobile || isHovered) return;

    const animate = () => {
      setCurrentX(prev => {
        const newX = prev - 0.05; // Adjust speed here
        if (newX <= -33.333) {
          return 0; // Reset to start for seamless loop
        }
        return newX;
      });
      
      if (!isHovered && !isMobile) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
  };

  // Start animation on mount and when hover ends
  useEffect(() => {
    if (!isMobile && !isHovered) {
      startContinuousAnimation();
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (isMobile) {
    return (
      <section className="py-12 px-4 bg-[#1a1a1a]">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Our Courses
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our comprehensive range of creative and technical courses
          </p>
        </div>

        {/* Mobile: Simple flex column layout - NO ANIMATION */}
        <div className="flex flex-col gap-6 max-w-md mx-auto">
          {courses.map((course, index) => (
            <div key={index} className="w-full">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 w-full overflow-hidden bg-[#1a1a1a]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Courses
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Choose from our comprehensive range of creative and technical courses
        </p>
      </div>

      <div 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Marquee Container */}
        <div className="flex overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex gap-0 marquee-track transition-transform duration-75 ease-linear"
            style={{ 
              width: 'max-content',
              transform: `translateX(${currentX}%)`
            }}
          >
            {infiniteCourses.map((course, index) => (
              <CourseCard
                key={`${course.title}-${index}`}
                course={course}
              />
            ))}
          </div>
        </div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#1a1a1a] to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#1a1a1a] to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
};

export default Courses;
