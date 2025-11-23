"use client"

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  RefObject,
} from "react"
import { motion, useAnimationFrame, useAnimate, stagger } from "framer-motion"


// --- Utility Helper ---
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

// --- 1. The Hook (Fixed Type Definition) ---
const useMousePositionRef = (
  containerRef?: RefObject<HTMLElement | null>
) => {
  const positionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (x: number, y: number) => {
      if (containerRef && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const relativeX = x - (rect.left + rect.width / 2)
        const relativeY = y - (rect.top + rect.height / 2)
        positionRef.current = { x: relativeX, y: relativeY }
      } else {
        positionRef.current = { x, y }
      }
    }

    const handleMouseMove = (ev: MouseEvent) => {
      updatePosition(ev.clientX, ev.clientY)
    }

    const handleTouchMove = (ev: TouchEvent) => {
      if (ev.touches.length > 0) {
        const touch = ev.touches[0]
        updatePosition(touch.clientX, touch.clientY)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [containerRef])

  return positionRef
}

// --- 2. Floating Logic ---

interface FloatingContextType {
  registerElement: (id: string, element: HTMLDivElement, depth: number) => void
  unregisterElement: (id: string) => void
}

const FloatingContext = createContext<FloatingContextType | null>(null)

interface FloatingProps {
  children: ReactNode
  className?: string
  sensitivity?: number
  easingFactor?: number
}

const Floating = ({
  children,
  className,
  sensitivity = 1,
  easingFactor = 0.05,
  ...props
}: FloatingProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const elementsMap = useRef(
    new Map<
      string,
      {
        element: HTMLDivElement
        depth: number
        currentPosition: { x: number; y: number }
      }
    >()
  )
  const mousePositionRef = useMousePositionRef(containerRef)

  const registerElement = useCallback(
    (id: string, element: HTMLDivElement, depth: number) => {
      elementsMap.current.set(id, {
        element,
        depth,
        currentPosition: { x: 0, y: 0 },
      })
    },
    []
  )

  const unregisterElement = useCallback((id: string) => {
    elementsMap.current.delete(id)
  }, [])

  useAnimationFrame(() => {
    if (!containerRef.current) return

    elementsMap.current.forEach((data) => {
      const strength = (data.depth * sensitivity) / 20
      const newTargetX = mousePositionRef.current.x * strength
      const newTargetY = mousePositionRef.current.y * strength
      const dx = newTargetX - data.currentPosition.x
      const dy = newTargetY - data.currentPosition.y

      data.currentPosition.x += dx * easingFactor
      data.currentPosition.y += dy * easingFactor

      data.element.style.transform = `translate3d(${data.currentPosition.x}px, ${data.currentPosition.y}px, 0)`
    })
  })

  return (
    <FloatingContext.Provider value={{ registerElement, unregisterElement }}>
      <div
        ref={containerRef}
        className={cn("absolute top-0 left-0 w-full h-full", className)}
        {...props}
      >
        {children}
      </div>
    </FloatingContext.Provider>
  )
}

interface FloatingElementProps {
  children: ReactNode
  className?: string
  depth?: number
}

const FloatingElement = ({
  children,
  className,
  depth = 1,
}: FloatingElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const idRef = useRef(Math.random().toString(36).substring(7))
  const context = useContext(FloatingContext)

  useEffect(() => {
    if (!elementRef.current || !context) return
    const nonNullDepth = depth ?? 0.01
    const id = idRef.current
    context.registerElement(id, elementRef.current, nonNullDepth)
    return () => context.unregisterElement(id)
  }, [depth, context])

  return (
    <div
      ref={elementRef}
      className={cn("absolute will-change-transform", className)}
    >
      {children}
    </div>
  )
}

// --- 3. Main Component ---

const exampleImages = [
  {
    url: "https://images.unsplash.com/photo-1727341554370-80e0fe9ad082?q=80&w=2276&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1640680608781-2e4199dd1579?q=80&w=3087&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1726083085160-feeb4e1e5b00?q=80&w=3024&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?q=80&w=2838&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1624344965199-ed40391d20f2?q=80&w=2960&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1689553079282-45df1b35741b?q=80&w=3087&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1721968317938-cf8c60fccd1a?q=80&w=2728&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1677338354108-223e807fb1bd?q=80&w=3087&auto=format&fit=crop",
  },
]

const GraphicDesignHero = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("img", { opacity: [0, 1], scale: [0.8, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [animate])

  return (
    <div
      className="flex w-full min-h-[100dvh] flex-col justify-center items-center overflow-hidden relative py-10 md:py-0"
      ref={scope}
    >
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 px-4">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm border border-white/10 rounded-full text-sm text-white/80 mb-6 hover:bg-white/10 transition-all duration-300">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span>Who We Are</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-[29px] md:text-[38px] text-white font-bold leading-[1.1] tracking-tight">
            Shaping the Next Generation of Creative Professionals
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-300 max-w-4xl mx-auto px-4">
          We are a forward-thinking Designing Institute dedicated to transforming creativity into real-world careers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mt-10">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
            <span className="relative z-10 text-[14px]">Discover Our Mission</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full backdrop-blur-sm hover:border-white/40 hover:bg-white/5 transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-2 text-[14px]">
              Learn About Us
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>

        {/* Core Values / Focus Areas */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-12 opacity-80">
          {[
            'Creative Excellence',
            'Industry Mentorship',
            'Hands-on Learning',
            'Career Development',
            'Modern Tools & Techniques',
            'Real-World Projects'
          ].map((item, index) => (
            <span
              key={index}
              className="px-3 py-1.5 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-full text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300 cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Floating container */}
      <Floating sensitivity={-1} className="absolute inset-0 h-full w-full pointer-events-none">

        {/* Top Left - Visible mainly on desktop */}
        <FloatingElement depth={0.5} className="hidden md:block md:top-[8%] md:left-[11%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[0].url}
            className="w-32 h-32 object-cover rounded-2xl shadow-2xl rotate-[-6deg]"
          />
        </FloatingElement>

        {/* Top Leftish - Mobile Adjusted */}
        <FloatingElement depth={1} className="top-[2%] -left-[10%] md:top-[10%] md:left-[32%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[1].url}
            className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-2xl shadow-2xl rotate-[4deg] opacity-60 md:opacity-100"
          />
        </FloatingElement>

        {/* Top Right - Mobile Adjusted */}
        <FloatingElement depth={2} className="top-[5%] -right-[5%] md:top-[5%] md:left-[53%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[2].url}
            className="w-24 h-32 md:w-52 md:h-64 object-cover rounded-2xl shadow-2xl rotate-[-3deg] opacity-60 md:opacity-100"
          />
        </FloatingElement>

        {/* Top Far Right */}
        <FloatingElement depth={1} className="hidden md:block md:top-[0%] md:left-[83%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[3].url}
            className="w-44 h-44 object-cover rounded-2xl shadow-2xl rotate-[8deg]"
          />
        </FloatingElement>

        {/* Bottom Left */}
        <FloatingElement depth={1} className="bottom-[5%] -left-[5%] md:top-[40%] md:left-[2%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[4].url}
            className="w-24 h-24 md:w-48 md:h-48 object-cover rounded-2xl shadow-2xl rotate-[-5deg] opacity-50 md:opacity-100"
          />
        </FloatingElement>

        {/* Bottom Right - Lowered for mobile */}
        <FloatingElement depth={2} className="bottom-[2%] -right-[5%] md:top-[70%] md:left-[77%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[7].url}
            className="w-28 h-28 md:w-48 md:h-64 object-cover rounded-2xl shadow-2xl rotate-[6deg] opacity-60 md:opacity-100"
          />
        </FloatingElement>

        {/* Large Foreground Element - Hidden on Mobile to prevent text blocking */}
        <FloatingElement depth={4} className="hidden md:block md:top-[73%] md:left-[15%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[5].url}
            className="w-64 h-80 object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
          />
        </FloatingElement>

        {/* Bottom Center - Mobile Adjusted */}
        <FloatingElement depth={1} className="bottom-[-5%] left-[30%] md:top-[80%] md:left-[50%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[6].url}
            className="w-24 h-24 md:w-40 md:h-40 object-cover rounded-2xl shadow-2xl rotate-[-8deg] opacity-40 md:opacity-100"
          />
        </FloatingElement>

      </Floating>
    </div>
  )
}

export default GraphicDesignHero
