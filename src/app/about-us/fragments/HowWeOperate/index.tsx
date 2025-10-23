import Headers from '@/components/header'
import React from 'react'
import { CardsContainer } from './CardsContainer'

export default function HowWeOpeate() {
  return (
    <div className='flex flex-col pt-6 gap-6 items-center justify-center w-full px-4'>
      <Headers
              label='Journey'
              heading="How we operate"
              subheading="AI solutions across industries, making innovation practical, efficient, and results-driven."
            />

            <CardsContainer/>
    </div>
  )
}
