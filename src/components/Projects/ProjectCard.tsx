'use client';
import React, { JSX } from 'react';

// Type definitions
interface Modal {
  active: boolean;
  index: number;
}

interface ProjectCardProps {
  index: number;
  title: string;
  setModal: (modal: Modal) => void;
}

export default function ProjectCard({ index, title, setModal }: ProjectCardProps): JSX.Element {
  const descriptions: string[] = [
    "Aiming to build a professional career in design, tech, or digital media",
    "Seeking practical, job-ready skills beyond traditional education", 
    "Looking to enter creative industries from other fields",
    "Wanting to upskill and build strong digital presence"
  ];

  return (
    <div
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className="
        flex flex-col sm:flex-row w-full justify-between items-start sm:items-center
        sm:px-8 md:px-16 
        py-6 sm:py-8 md:py-[50px] 
        border-t border-[#c9c9c9] 
        cursor-pointer transition-all duration-200 
        hover:opacity-50 hover:bg-white/5 group
        last:border-b gap-4 sm:gap-6
      "
    >
      <h2
        className="
          text-2xl sm:text-3xl md:text-4xl lg:text-[60px] 
          text-white m-0 font-normal 
          transition-all duration-400 
          group-hover:-translate-x-[10px]
          leading-tight
        "
      >
        {title}
      </h2>
      <p
        className="
          transition-all text-white/60 duration-400 font-light 
          group-hover:translate-x-[10px]
          text-sm sm:text-base md:text-lg
          max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
          text-left sm:text-right
          leading-relaxed
        "
      >
        {descriptions[index]}
      </p>
    </div>
  );
}
