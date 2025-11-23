// components/hero/ServicesHero.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden bg-neutral-950">
      
      {/* --- Background Gradient Mesh --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/20 rounded-[100%] blur-[100px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[400px] bg-indigo-600/10 rounded-[100%] blur-[120px] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-transparent to-neutral-950/80" />
      </div>
      
      <div className="relative max-w-6xl mx-auto text-center z-10">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 sm:mb-8"
        >
          <span className="px-4 py-1.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-purple-300 text-sm font-medium uppercase tracking-wider shadow-lg shadow-purple-500/5">
            ✨ Premium Digital Services
          </span>
        </motion.div>

        {/* Main Heading – updated typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-[48px] font-bold text-white mb-6 leading-[1.1] tracking-tight"
        >
          Transforming Ideas Into <br className="hidden md:block" />
          <span className="inline-block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent mt-1 sm:mt-2 pb-2">
            Digital Excellence
          </span>
        </motion.h1>

        {/* Description – updated typography */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[16px] lg:text-[18px] text-gray-300 max-w-3xl mx-auto mb-10 sm:mb-14 leading-relaxed"
        >
          We offer comprehensive web development, UI/UX design, and customized digital strategies. 
          Tailored solutions that elevate your brand and drive measurable growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-none mx-auto"
        >
          <button className="group relative text-[14px] px-8 py-4 bg-white text-neutral-950 font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 w-full sm:w-auto">
            Get Started Now
            <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
          </button>
          
          <button className="group px-8 py-4 text-[14px] bg-neutral-900/50 backdrop-blur-md border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
            View Our Work
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>

    
      </div>
    </section>
  );
}
