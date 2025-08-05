import React from 'react';

import ZoomParallax from "@/components/ZoomParallax/index";
import About from '@/components/About';
import Project from '@/components/Projects/project';

import Gallery from '@/components/Gallery';


import { Testimonials } from '@/components/testimonial/TestimonialContainer';

import Courses from '@/components/Courses';
import HeroSection from '@/components/HeroSection';

export default function HomPage() {
  return (
    <div className="w-full mt-10 md:mt-0  flex flex-col items-center justify-center px-4">

      {/* Hero Section */}
      {/* <div className="h-[80vh] flex flex-col items-center justify-center max-w-5xl text-center space-y-4">
        <TextAnimate
          animation="slideUp"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-white font-medium leading-tight"
          by="word"
        >
          Welcome to Designbirds, Future of web designing
        </TextAnimate>

        <TextAnimate
          animation="slideUp"
          by="word"
          className="text-base sm:text-lg md:text-xl leading-snug text-gray-400 max-w-2xl"
        >
          We craft beautiful, AI-first websites with precision, innovation, and seamless user experience.
        </TextAnimate>
      </div> */}
      <HeroSection/>

      {/* Rest of the page */}
      <ZoomParallax />

      <div className="">
        <About/>
      </div>
        
        <Courses/>
        <Gallery/>
        
        <Project/>
        <Testimonials/>
        
     
    </div>
  );
}
