"use client";

import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 mt-2 sm:mt-3 md:mt-5 relative">
            <div className="w-full max-w-7xl mx-auto relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="sticky top-5 sm:top-8 md:top-12 lg:top-16 xl:top-36">
                    
                    {/* Steve Jobs Quote Section */}
                    <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                        <blockquote className="relative">
                            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-white/90 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-4 sm:mb-6 max-w-4xl mx-auto px-2 sm:px-4">
                                "The ones who are crazy enough to think they can change the world are the ones who do."
                            </div>
                            <cite className="text-sm sm:text-base md:text-lg text-white/60 font-medium not-italic">
                                — Steve Jobs
                            </cite>
                        </blockquote>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <span className="text-orange-500 block font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl px-2 sm:px-4">
                            Wonder what you can create with us?
                        </span>
                    </div>
                </div>
                <div className="h-[60vh] sm:h-[100vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
