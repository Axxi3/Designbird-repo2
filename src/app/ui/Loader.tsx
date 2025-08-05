"use client";

import { useState, useEffect } from 'react';

interface LanguageLoaderProps {
  onLoadingComplete: () => void;
}

const languages = [
  { text: "Hello", lang: "English" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "నమస్కారం", lang: "Telugu" },
  { text: "வணக்கம்", lang: "Tamil" },
  { text: "Hola", lang: "Spanish" },
  { text: "Bonjour", lang: "French" },
  { text: "Hallo", lang: "German" },
  { text: "Ciao", lang: "Italian" },
 
];


export default function LanguageLoader({ onLoadingComplete }: LanguageLoaderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev < languages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          // Start the slide up animation after a brief delay
          setTimeout(() => {
            setIsSliding(true);
            // Complete loading after slide animation
            setTimeout(() => {
              onLoadingComplete();
            }, 700);
          }, 500);
          return prev;
        }
      });
    }, 150); // Change language every 800ms

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed  inset-0 bg-white flex items-center justify-center z-50 transition-transform duration-1000 ease-in-out ${
        isSliding ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="text-center">
        <div className="relative h-16 flex items-center justify-center">
          <span
            className="text-black text-[40px] font-light tracking-wide"
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
            }}
          >
            {languages[currentIndex]?.text}
          </span>
        </div>
        
        
        
        {/* Progress indicator */}
        <div className="mt-6 w-48 h-1 bg-black-700 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-white rounded-full transition-all duration-300 ease-out"
            style={{ width: `${((currentIndex + 1) / languages.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}