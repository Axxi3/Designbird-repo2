"use client";

import { motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

export type TestimonialColumnType = Array<{
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}>;

export default function TestimonialColumn(props: {
  testimonials: TestimonialColumnType;
  className?: string;
  reverse?: boolean;
  maskGradient?: boolean;
}) {
  const { testimonials, className, reverse = false, maskGradient = true } = props;

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
      {Array.from({ length: 2 }).map((_, i) => (
        <React.Fragment key={i}>
          {testimonials.map((testimonial, index) => (
            <div
              className="p-6 sm:p-8 border border-[#ffffff0f] rounded-3xl shadow-[0_7px_14px_#00000066] bg-[#1a1a1a] max-w-xs w-full transition-all duration-300 hover:shadow-lg"
              key={`${index}-${i}`}
            >
              <div className="text-neutral-300 leading-relaxed">{testimonial.text}</div>
              <div className="flex items-center gap-3 mt-5">
                <img
                  src={testimonial.imageSrc}
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
