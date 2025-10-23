'use client'
import React from 'react'
import Whyus from './fragments/WhyUs'

import MeetTeam from './fragments/MeetTeam'
import SelectionProcess from './fragments/SelectionProcess'
import { Testimonials } from '@/components/testimonial/TestimonialContainer'
import HeroSection from '@/components/HeroSection'

export default function page() {
  return (
    <div className='w-full '>
      <HeroSection/>
      <Whyus/>
   

<MeetTeam/>
<SelectionProcess/>
<Testimonials/>

    </div>
  )
}
