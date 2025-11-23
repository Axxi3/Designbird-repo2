'use client';
import { useState } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <section className="py-3 lg:py-4 fixed top-0 z-50 max-w-6xl w-full">
        {/* Background blur overlay */}
        <div className="absolute inset-0  "></div>
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 bg-[#1a1a1a] backdrop-blur-sm border border-gray-200/80 rounded-[99px] px-4 sm:px-6 lg:px-8 shadow-lg shadow-gray-900/5">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image 
                src="https://henrybrandlabs.com/logo.png" 
                alt="Company Logo" 
                width={120}
                height={44}
                className="h-10 sm:h-11 w-auto"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-sm font-medium text-white hover:text-white/70 transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <button className="inline-flex items-center gap-2 px-6 py-2.5  text-white text-sm font-medium rounded-full transition-all duration-200 hover:scale-105">
                Get Started
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                  className="w-6 h-0.5 bg-gray-600 block mb-1.5 origin-center transition-all duration-300"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="w-6 h-0.5 bg-gray-600 block mb-1.5 transition-all duration-300"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                  className="w-6 h-0.5 bg-gray-600 block origin-center transition-all duration-300"
                />
              </motion.div>
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-4 right-4 z-50 lg:hidden"
            >
              <div className="bg-white/95 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-xl shadow-gray-900/20 overflow-hidden">
                <div className="p-6 space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block text-lg font-medium text-gray-700 hover:text-gray-900 py-2 border-b border-gray-100 last:border-b-0 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-full mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-600/25"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
