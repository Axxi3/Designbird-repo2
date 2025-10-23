// components/hero/ServicesHero.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesHero() {
  return (
    <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto text-center z-10">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 sm:mb-6"
        >
          <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
            Our Services
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          Transforming Ideas Into
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent mt-2">
            Digital Excellence
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          We offer comprehensive web development, UI/UX design, and digital solutions 
          tailored to elevate your brand and drive measurable results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-purple-500/30 text-sm sm:text-base w-full sm:w-auto">
            Get Started
          </button>
          
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto">
            View Our Work
          </button>
        </motion.div>

        {/* Stats or Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">50+</div>
            <div className="text-xs sm:text-sm text-white/60">Projects Completed</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">100%</div>
            <div className="text-xs sm:text-sm text-white/60">Client Satisfaction</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">24/7</div>
            <div className="text-xs sm:text-sm text-white/60">Support Available</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">5+</div>
            <div className="text-xs sm:text-sm text-white/60">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
