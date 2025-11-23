'use client'
import Headers from '@/components/header'
import SelectionCard from './Card'
import React, { useRef } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const cardData = [
  {
    stepNumber: "01",
    title: "Application Submission",
    description: "Begin your creative journey by filling out our online application form. Share your background, interests in design, and what drives your passion for creativity. We review every application carefully to understand your unique story.",
    imageUrl: "/hero/project.png",
    proTip: "Pro Tip: Include links to any previous creative work or projects"
  },
  {
    stepNumber: "02", 
    title: "Portfolio Review & Interview",
    description: "Our expert faculty evaluates your creative portfolio and conducts a personal interview. This helps us understand your design thinking, artistic vision, and readiness for professional-level training in UI/UX, web development, or digital marketing.",
    imageUrl: "/hero/project.png",
    proTip: "Pro Tip: Showcase your process, not just final designs"
  },
  {
    stepNumber: "03",
    title: "Skills Assessment Test", 
    description: "Take a practical design challenge that assesses your creative problem-solving, technical aptitude, and ability to think innovatively. This helps us place you in the right course level and identify areas where you'll excel.",
    imageUrl: "/hero/project.png",
    proTip: "Pro Tip: Be authentic and show your unique approach"
  },
  {
    stepNumber: "04",
    title: "Enrollment & Orientation",
    description: "Welcome to the family! Complete your enrollment, meet fellow students and mentors, and get oriented with our curriculum, tools, and resources. Your transformation from learner to industry-ready designer begins here.",
    imageUrl: "/hero/project.png", 
    proTip: "Pro Tip: Come ready with questions and an open mind"
  }
];

export default function SelectionProcess() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-280%"]);

  return (
    <div className='px-4 pt-4 flex flex-col gap-4 items-center justify-center'>
      
      {/* Mobile Version - Simple Stack */}
      <div className="block xl:hidden">
        <Headers
          label='ADMISSION PROCESS'
          heading="How to Join Our Institute?"
          subheading="A simple, transparent 4-step journey from application to becoming part of our creative community."
        />
        
        <div className="space-y-8 mt-8">
          {cardData.map((card, index) => (
            <SelectionCard
              key={index}
              stepNumber={card.stepNumber}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              proTip={card.proTip}
            />
          ))}
        </div>
      </div>

      {/* Desktop Version - Horizontal Scroll */}
      <div ref={targetRef} className="hidden xl:block relative h-[400vh] w-full">
        <div className="sticky top-0 h-screen flex flex-col">
          
          {/* Fixed Header - Takes up portion of screen */}
          <div className="flex-shrink-0 py-8">
            <Headers
              label='ADMISSION PROCESS'
              heading="How to Join Our Institute?"
              subheading="A simple, transparent 4-step journey from application to becoming part of our creative community."
            />
          </div>
          
          {/* Scrolling Cards - Takes remaining screen space */}
          <div className="flex-1 overflow-hidden">
            <motion.div 
              style={{ x }} 
              className="h-full flex items-center min-h-0"
            >
              {cardData.map((card, index) => (
                <SelectionCard
                  key={index}
                  stepNumber={card.stepNumber}
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                  proTip={card.proTip}
                />
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>

      <Link href={"/contact"} className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
        <span className="relative z-10 flex items-center gap-2">
          Apply Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Link>
    </div>
  )
}
