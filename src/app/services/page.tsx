'use client'
import Courses from '@/components/Courses'
import React from 'react'
import HeroSection from './fragments/Hero'
import Project from '@/components/Projects/project'
import { Testimonials } from '@/components/testimonial/TestimonialContainer'

export default function page() {
  return (
    <div className='w-full'>
      <HeroSection/>
      <Courses/>
      <Project/>
      <Testimonials/>
    </div>
  )
}
