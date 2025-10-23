'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
}

interface TeamSectionProps {
  className?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ className = '' }) => {

  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Rahul yadav',
      designation: 'Lead Instructor - Web Development',
      department: 'Faculty',
      image: '/hero/1.jpg',
      bio: 'Passionate educator with 8+ years in full-stack development. Specializes in React, Node.js, and modern web technologies. Dedicated to transforming students into industry-ready developers through hands-on learning.',
      linkedin: 'https://linkedin.com/in/priyanshu',
      twitter: 'https://twitter.com/priyanshu'
    },
    {
      id: '2',
      name: 'Ramesh Sharma',
      designation: 'Senior UI/UX Design Mentor',
      department: 'Faculty',
      image: '/hero/2.jpg',
      bio: 'Award-winning designer with expertise in user research, prototyping, and design systems. Mentors students in creating intuitive digital experiences using Figma, Adobe XD, and industry-standard workflows.',
      linkedin: 'https://linkedin.com/in/riddhi',
      twitter: 'https://twitter.com/riddhi'
    },
    {
      id: '3',
      name: 'Anurag Kumar Rai',
      designation: 'Visual Design & Branding Instructor',
      department: 'Faculty',
      image: '/hero/3.jpg',
      bio: 'Creative director turned educator with a passion for typography, color theory, and brand storytelling. Teaches students to craft compelling visual identities that leave lasting impressions.',
      linkedin: 'https://linkedin.com/in/anurag-kumar-rai',
      twitter: 'https://twitter.com/anuragrai'
    },
 
  ];




 

  const handleImageError = (memberId: string) => {
    setImageErrors(prev => ({ ...prev, [memberId]: true }));
  };

  return (
    <section className={`pt-6 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Background Image */}
              <div className="relative h-80 overflow-hidden">
                {!imageErrors[member.id] ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={() => handleImageError(member.id)}
                  />
                ) : (
                  /* Fallback Avatar */
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 flex items-center justify-center text-white font-bold text-4xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              {/* Basic Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.designation}</p>
              </div>

              {/* Hover Details */}
              <div className={`absolute inset-0 bg-black/90 backdrop-blur-sm transition-all duration-500 flex flex-col justify-end p-6 ${
                hoveredMember === member.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
              }`}>
                <div className="text-white space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-purple-400 font-medium">{member.designation}</p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                  <div className="flex gap-3 pt-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                      >
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                      >
                        <Twitter className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
