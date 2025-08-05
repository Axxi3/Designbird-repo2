// components/WhyUs.tsx
'use client';

import React, { JSX } from 'react';
import Tag from './Tag';

/* ---------- 1.  Types ---------- */

export interface Feature {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;          // URL string
  imageAlt: string;
  reverse: boolean;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

/* ---------- 2.  Static data ---------- */

const features: Feature[] = [
  {
    id: 1,
    tag: 'Practical',
    title: 'Project-Based Learning with Real Briefs',
    description:
      "We don't just teach software—we nurture creative thinking and problem-solving. Our students work on real client briefs, build portfolios, and gain hands-on experience that matters in the industry.",
    image:
      'https://finflow.uicore.co/cryptocurrency-trading/wp-content/uploads/sites/11/2023/02/Cryptocurrency-Why-Image-1.webp',
    imageAlt:
      'Students working on real design projects and portfolio development',
    reverse: false,
  },
  {
    id: 2,
    tag: 'Mentorship',
    title: '1-on-1 Expert Guidance & Career Support',
    description:
      'With over 300+ students mentored and a 4.9/5 rating, our experienced professionals provide personalized guidance, portfolio reviews, mock interviews, and placement support through trusted industry partners.',
    image:
      'https://finflow.uicore.co/cryptocurrency-trading/wp-content/uploads/sites/11/2023/02/Cryptocurrency-Why-Image-3.webp',
    imageAlt: 'One-on-one mentorship session between instructor and student',
    reverse: true,
  },
  {
    id: 3,
    tag: 'Industry-Ready',
    title: 'Latest Tools & Evolving Curriculum',
    description:
      'From Figma and Adobe XD to AI tools like Midjourney and ChatGPT—we continuously update our curriculum to match industry standards. Our students graduate job-ready with cutting-edge skills.',
    image:
      'https://finflow.uicore.co/cryptocurrency-trading/wp-content/uploads/sites/11/2023/02/Cryptocurrency-Why-Image-2.webp',
    imageAlt:
      'Modern design tools and software interface showing latest industry technologies',
    reverse: false,
  },
];

/* ---------- 3.  Presentational components ---------- */

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ): void => {
    (e.target as HTMLImageElement).src = '/fallback-image.png';
  };

  return (
    <div
      className={`
        flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8
        px-4 py-6 md:py-10 w-full feature-section
      `}
    >
      {/* Image */}
      <div
        className={`
          p-6 md:p-14 bg-[#1a1a1a] rounded-[10px] w-full max-w-sm md:max-w-none
          md:w-[450px] md:h-[350px] flex-shrink-0
          ${feature.reverse ? 'order-1 md:order-2' : ''}
        `}
      >
        <img
          src={feature.image}
          alt={feature.imageAlt}
          className="w-full h-full object-contain transition-opacity duration-300 hover:opacity-90"
          loading={index === 0 ? 'eager' : 'lazy'}
          onError={handleImageError}
        />
      </div>

      {/* Text */}
      <div
        className={`
          flex flex-col items-start justify-center gap-3 md:gap-4 max-w-xl
          ${feature.reverse ? 'order-2 md:order-1 md:px-8' : ''}
        `}
      >
        <Tag>{feature.tag}</Tag>
        <h3 className="text-xl md:text-3xl font-medium leading-tight">
          {feature.title}
        </h3>
        <p className="text-sm md:text-lg text-white/60 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

/* ---------- 4.  Section wrapper ---------- */

export default function WhyUs(): JSX.Element {
  return (
    <div className="flex flex-col items-center bg-[linear-gradient(180deg,_#101010_0%,_#1a1a1a_100%)] text-white min-h-screen rounded-tl-[60px] rounded-tr-[60px] w-full">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex flex-col items-center pt-8 sm:pt-12 lg:pt-16">
          <Tag className="mb-2">Why Designbird?</Tag>
          <div className="max-w-4xl flex flex-col items-center gap-3 md:gap-2 pb-8">
            <h1 className="text-2xl md:text-[40px] text-center font-medium leading-tight px-4">
              Why Designbird Stands Out?
            </h1>
            <p className="text-sm md:text-[18px] text-center text-white/60 leading-relaxed px-4">
              Transforming creative passion into professional careers through
              personalized education, expert mentorship, and industry-ready
              skills since 2024.
            </p>
          </div>
        </header>

        {/* Feature list */}
        <section
          aria-labelledby="features-heading"
          className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-12 pb-8 sm:pb-12 scroll-smooth"
        >
          <h2 id="features-heading" className="sr-only">
            Designbird Key Features
          </h2>

          {features.map((feature, idx) => (
            <FeatureCard key={feature.id} feature={feature} index={idx} />
          ))}
        </section>

        {/* Stats */}
        <section className="flex flex-col items-center gap-6 pb-12">
          <div className="text-center mb-8">
            <Tag className="mb-4">Our Impact</Tag>
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Numbers That Speak
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {[
              { stat: '300+', label: 'Students Trained' },
              { stat: '4.9/5', label: 'Student Rating' },
              { stat: '6+', label: 'Course Specializations' },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="text-center p-6 bg-[#1a1a1a] rounded-lg"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat}
                </div>
                <p className="text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
