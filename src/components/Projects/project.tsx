import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Modal from "./modal/index"

export default function Project() {
  const projects = [
    { 
      title: "Students", 
      src: "students.jpg", 
      color: "#4F46E5",
      description: "Aiming to build a professional career in design, tech, or digital media"
    },
    { 
      title: "Graduates & Dropouts", 
      src: "graduates.jpg", 
      color: "#059669",
      description: "Seeking practical, job-ready skills beyond traditional education"
    },
    { 
      title: "Career Switchers", 
      src: "career.jpg", 
      color: "#DC2626",
      description: "Looking to enter creative industries from other fields"
    },
    { 
      title: "Freelancers & Entrepreneurs", 
      src: "freelancers.jpg", 
      color: "#7C3AED",
      description: "Wanting to upskill and build strong digital presence"
    }
  ];

  const [model, setModel] = useState({ active: false, index: 0 });

  return (
    <div className="flex py-12 sm:py-16 md:py-24 w-full items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col items-center justify-center">
        {/* Header for mobile */}
        <div className="text-center mb-8 md:mb-12 lg:hidden">
          <h1 className="text-2xl sm:text-3xl font-medium text-white mb-4">
            Who Should Join?
          </h1>
          <p className="text-sm sm:text-base text-white/60 max-w-lg mx-auto">
            Perfect for ambitious individuals ready to transform their creative passion
          </p>
        </div>

        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} setModal={setModel} index={index} />
        ))}
      </div>
      <Modal modal={model} projects={projects}/>
    </div>
  );
}
