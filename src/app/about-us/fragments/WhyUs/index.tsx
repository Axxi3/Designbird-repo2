import Headers from '@/components/header'
import React from 'react'
import Card from './Card'
import { Zap, Users, Briefcase, Award } from 'lucide-react'

const features = [
  {
    icon: Zap,
    heading: "Industry-Ready Curriculum",
    subheading: "Our courses are designed with direct input from industry professionals. Learn the latest tools like Figma, React, and Adobe Creative Suite with hands-on projects that mirror real-world scenarios, not outdated theory."
  },
  {
    icon: Users,
    heading: "Small Batch, Personal Mentorship",
    subheading: "Unlike crowded classrooms with 50+ students, we maintain small batches of 10-15 students per instructor. Get personalized feedback, one-on-one portfolio reviews, and direct access to experienced designers and developers."
  },
  {
    icon: Briefcase,
    heading: "100% Job Placement Support",
    subheading: "From day one, we focus on your employability. Build a professional portfolio, prepare for interviews, and get connected with our network of hiring partners. We don't just teach—we launch careers."
  },
  {
    icon: Award,
    heading: "Learn by Doing, Not Just Watching",
    subheading: "Forget passive lectures and endless theory. Every week you'll work on real client projects, participate in design challenges, and build a portfolio that proves your skills. Graduate with 5+ projects employers actually want to see."
  }
]

export default function Whyus() {
  return (
    <div className='py-8 flex flex-col gap-5 items-center justify-center px-4'>
      <Headers
        label='Why DesignBird'
        heading="What Makes DesignBird Institute Stand Out?"
        subheading="Traditional design education is slow, expensive, and disconnected from reality. We offer practical, industry-focused training that gets you job-ready in months, not years."
      />

      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-5">
        {features.map((feature, index) => (
          <Card 
            key={index}
            icon={feature.icon}
            heading={feature.heading}
            subheading={feature.subheading}
          />
        ))}
      </div>
    </div>
  )
}
