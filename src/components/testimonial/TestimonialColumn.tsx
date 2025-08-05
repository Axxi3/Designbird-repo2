"use client";

import { motion } from "framer-motion";
import React, { JSX } from "react";
import { twMerge } from "tailwind-merge";
import { StaticImageData } from "next/image";

// Type definitions
export interface TestimonialItem {
  text: string;
  imageSrc: string | StaticImageData;  // Updated to accept both types
  name: string;
  username: string;
}

export type TestimonialColumnType = TestimonialItem[];

interface TestimonialColumnProps {
  testimonials: TestimonialColumnType;
  className?: string;
  reverse?: boolean;
  maskGradient?: boolean;
}

export default function TestimonialColumn({
  testimonials,
  className,
  reverse = false,
  maskGradient = true,
}: TestimonialColumnProps): JSX.Element {
  return (
    <motion.div
      initial={{
        y: reverse ? "-50%" : "0%",
      }}
      animate={{
        y: reverse ? "0%" : "-50%",
      }}
      transition={{
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      }}
      className={twMerge(
        "flex flex-col gap-6 pb-4",
        maskGradient &&
          "[mask:linear-gradient(to_bottom,transparent,#101010_25%,#101010_75%,transparent)]",
        className
      )}
    >
      {Array.from({ length: 2 }).map((_, i: number) => (
        <React.Fragment key={i}>
          {testimonials.map((testimonial: TestimonialItem, index: number) => (
            <div
              className="p-6 sm:p-8 border border-[#ffffff0f] rounded-3xl shadow-[0_7px_14px_#00000066] bg-[#1a1a1a] max-w-xs w-full transition-all duration-300 hover:shadow-lg"
              key={`${index}-${i}`}
            >
              <div className="text-neutral-300 leading-relaxed">{testimonial.text}</div>
              <div className="flex items-center gap-3 mt-5">
                <img
                  src={typeof testimonial.imageSrc === 'string' ? testimonial.imageSrc : testimonial.imageSrc.src}
                  width={40}
                  height={40}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col gap-1">
                  <div className="font-medium tracking-tight leading-5 text-neutral-100">
                    {testimonial.name}
                  </div>
                  <div className="leading-5 tracking-tight text-neutral-500">
                    {testimonial.username}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  );
}
