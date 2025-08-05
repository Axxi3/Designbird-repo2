import React, { JSX } from 'react';
import avatar1 from '../../app/assets/Avatars/avatar-1.png';
import avatar2 from "../../app/assets/Avatars/avatar-2.png";
import avatar3 from "../../app/assets/Avatars/avatar-3.png";
import avatar4 from "../../app/assets/Avatars/avatar-4.png";
import avatar5 from "../../app/assets/Avatars/avatar-5.png";
import avatar6 from "../../app/assets/Avatars/avatar-6.png";
import avatar7 from "../../app/assets/Avatars/avatar-7.png";
import avatar8 from "../../app/assets/Avatars/avatar-8.png";
import avatar9 from "../../app/assets/Avatars/avatar-9.png";

import TestimonialColumn, { TestimonialItem, TestimonialColumnType } from "./TestimonialColumn";

const testimonials: TestimonialItem[] = [
  {
    text: "Designbird gave me confidence and clarity. I started with zero knowledge, and now I freelance for 3 clients. The mentorship was incredible!",
    imageSrc: avatar1,
    name: "Rahul Ghosh",
    username: "@rahuldesigns",
  },
  {
    text: "Their mentorship style was unique. Instead of spoon-feeding, they encouraged me to explore, make mistakes, and grow. Best decision ever!",
    imageSrc: avatar2,
    name: "Mili Das",
    username: "@miliuxdesigner",
  },
  {
    text: "From classroom to company—I'm now working with a design agency, thanks to Designbird's placement help! The portfolio reviews were game-changing.",
    imageSrc: avatar3,
    name: "Sohini Roy",
    username: "@sohinikreates",
  },
  {
    text: "I switched from engineering to UI/UX design. Designbird's practical approach and real client projects made the transition smooth and successful.",
    imageSrc: avatar4,
    name: "Arjun Mehta",
    username: "@arjunux",
  },
  {
    text: "The 1-on-1 mentoring was invaluable. My mentor helped me build a portfolio that landed me my dream job at a startup. Forever grateful!",
    imageSrc: avatar5,
    name: "Priya Sharma",
    username: "@priyacreates",
  },
  {
    text: "Learning modern tools like Figma and AI integration at Designbird kept me ahead of the curve. The curriculum evolves with industry needs.",
    imageSrc: avatar6,
    name: "Vikash Singh",
    username: "@vikashvisuals",
  },
  {
    text: "Started as a college dropout, now I run my own design studio. Designbird taught me not just design, but how to think like a designer.",
    imageSrc: avatar7,
    name: "Neha Gupta",
    username: "@nehastudio",
  },
  {
    text: "The mock interviews and placement support were incredible. I felt prepared and confident when I faced real interviews. Got hired immediately!",
    imageSrc: avatar8,
    name: "Rohit Pandey",
    username: "@rohitdesigner",
  },
  {
    text: "From zero to hero in 6 months! The project-based learning with real briefs gave me actual work experience. Now I'm a full-time graphic designer.",
    imageSrc: avatar9,
    name: "Anjali Verma",
    username: "@anjaliarts",
  },
];

const firstColumn: TestimonialColumnType = testimonials.slice(0, 3);
const secondColumn: TestimonialColumnType = testimonials.slice(3, 6);
const thirdColumn: TestimonialColumnType = testimonials.slice(6, 9);

export const Testimonials = (): JSX.Element => {
  return (
    <section className="bg-[#101010] py-24 px-4">
      <div className="container">
        <div className="w-full flex justify-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-2xl">💬</span>
            <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium">
              Student Success Stories
            </span>
          </div>
        </div>

        <h2 className="text-2xl md:text-5xl md:leading-[55px] leading-[45px] font-medium mt-6 text-center text-white">
          Our students love their transformation
        </h2>

        <p className="text-neutral-400 mt-4 text-[18px] md:text-lg text-center max-w-3xl mx-auto">
          With a 4.9/5 rating and 300+ successful career transformations, 
          here&apos;s what our students say about their journey with Designbird...
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-8 mb-12">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">4.9/5</div>
            <div className="text-sm text-neutral-400">Student Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">300+</div>
            <div className="text-sm text-neutral-400">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">95%</div>
            <div className="text-sm text-neutral-400">Placement Success</div>
          </div>
        </div>

        <div className="flex flex-wrap mt-5 h-[400px] justify-center items-center gap-6 overflow-hidden">
          {/* First column - visible on all screen sizes */}
          <TestimonialColumn
            testimonials={firstColumn}
            className="flex w-full items-center justify-center sm:w-auto"
            maskGradient={false}
          />

          {/* Second column - visible on tablet (sm) and above */}
          <TestimonialColumn
            testimonials={secondColumn}
            className="hidden sm:flex lg:flex w-full sm:w-auto"
            maskGradient={false}
            reverse={true}
          />

          {/* Third column - visible only on desktop (lg) and above */}
          <TestimonialColumn
            testimonials={thirdColumn}
            className="hidden lg:flex w-full lg:w-auto"
            maskGradient={false}
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-neutral-400 mb-6">
            Ready to write your own success story?
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200 hover:transform hover:scale-105">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};
