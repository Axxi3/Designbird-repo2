import React from 'react'
import { LucideIcon } from 'lucide-react'

interface CardProps {
  icon: LucideIcon;
  heading: string;
  subheading: string;
  className?: string;
}

export default function Card({ icon: Icon, heading, subheading, className = '' }: CardProps) {
  return (
    <div className={`flex flex-col gap-4 border border-white/60 rounded-md p-6 sm:p-7 bg-[#1a1a1a]/50 ${className}`}>
      <Icon size={32} className="text-white" /> 
      <div className="flex flex-col gap-2">
        <h4 className='text-[16px] sm:text-[18px] sf font-bold text-white'>{heading}</h4>
        <p className='text-[14px] sm:text-[16px] opacity-70 text-white/70'>
          {subheading}
        </p>
      </div>
    </div>
  )
}
