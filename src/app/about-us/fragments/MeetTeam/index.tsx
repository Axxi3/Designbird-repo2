import Headers from '@/components/header'
import React from 'react'
import TeamSection from './TeamSection'

export default function MeetTeam() {
  return (
    <div className='px-4'>
         <Headers
                    label='Team'
                    heading="Meet our Creators"
                    subheading="AI solutions across industries, making innovation practical, efficient, and results-driven."
                  />
                  <TeamSection/>
    </div>
  )
}
