// Try this import instead
import { ReactTyped } from 'react-typed';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0"></div>
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,rgba(255,255,255,0.03)_100%)] bg-[length:50px_50px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,rgba(255,255,255,0.03)_100%)] bg-[length:50px_50px]"></div>
      </div>

      {/* Subtle Star Animations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Star 1 */}
        <div className="absolute top-20 left-1/4 animate-pulse">
          <div className="relative">
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="absolute top-0 left-0 w-1 h-1 bg-white/20 rounded-full animate-ping"></div>
          </div>
        </div>
        
        {/* Star 2 */}
        <div className="absolute top-32 right-1/3 animate-pulse" style={{animationDelay: '1s'}}>
          <div className="relative">
            <div className="w-0.5 h-0.5 bg-white/30 rounded-full"></div>
            <div className="absolute top-0 left-0 w-0.5 h-0.5 bg-white/15 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        
        {/* Star 3 */}
        <div className="absolute bottom-40 left-1/5 animate-pulse" style={{animationDelay: '2s'}}>
          <div className="relative">
            <div className="w-1 h-1 bg-white/35 rounded-full"></div>
            <div className="absolute top-0 left-0 w-1 h-1 bg-white/20 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
        
        {/* Star 4 */}
        <div className="absolute bottom-60 right-1/4 animate-pulse" style={{animationDelay: '0.5s'}}>
          <div className="relative">
            <div className="w-0.5 h-0.5 bg-white/40 rounded-full"></div>
            <div className="absolute top-0 left-0 w-0.5 h-0.5 bg-white/25 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
        
        {/* Star 5 */}
        <div className="absolute top-48 left-3/4 animate-pulse" style={{animationDelay: '1.5s'}}>
          <div className="relative">
            <div className="w-1 h-1 bg-white/30 rounded-full"></div>
            <div className="absolute top-0 left-0 w-1 h-1 bg-white/15 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
        
        {/* Star 6 */}
        <div className="absolute bottom-32 right-2/3 animate-pulse" style={{animationDelay: '2.5s'}}>
          <div className="relative">
            <div className="w-0.5 h-0.5 bg-white/35 rounded-full"></div>
            <div className="absolute top-0 left-0 w-0.5 h-0.5 bg-white/20 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-32 right-16 w-1 h-1 bg-purple-500 rounded-full animate-ping opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-60 right-12 w-1 h-1 bg-yellow-500 rounded-full animate-ping opacity-30"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-8xl mx-auto text-center space-y-6 sm:space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm border border-white/10 rounded-full text-sm text-white/80 mb-6 hover:bg-white/10 transition-all duration-300">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span>Building the Future of Design Education</span>
        </div>

        {/* Main Heading with Typewriter */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-[48px] text-white font-bold leading-[1.1] tracking-tight">
            Equipping you with digital skills in{" "} 
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
              <ReactTyped
                strings={[
                  'UI/UX Design.',
                  'Graphic Design.', 
                  'Web Development.',
                  'Digital Marketing.',
                  '2D Animation.',
                  'Video Editing.',
                  'Communication Skills.'
                ]}
                typeSpeed={100}
                backSpeed={50}
                backDelay={2000}
                loop
                showCursor={true}
                cursorChar="|"
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent"
              />
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto px-4">
          Transform your creative passion into professional success with personalized mentorship, 
          industry-ready skills, and hands-on project experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mt-10">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full backdrop-blur-sm hover:border-white/40 hover:bg-white/5 transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-2">
              View Courses
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>

        {/* Course Categories */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-12 opacity-80">
          {['UI/UX Design', 'Graphic Design', 'Web Development', 'Digital Marketing', '2D Animation', 'Video Editing'].map((course, index) => (
            <span 
              key={index}
              className="px-3 py-1.5 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-full text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300 cursor-pointer"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
