'use client';

import React, { JSX, useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Image from 'next/image';
import Introduction from './Introduction';
import Whyus from './Whyus';

// Type definitions
interface Dimension {
  width: number;
  height: number;
}

interface ColumnProps {
  images: string[];
  y: MotionValue<number>;
  initialTop: string;
}

const images: string[] = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg',
  '5.jpg', '6.jpg', '7.jpg', '8.jpg',
  '9.jpg', '10.jpg', '11.jpg', '12.jpg',
];

export default function Home(): JSX.Element {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState<Dimension>({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ['start end', 'end start'],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number): void => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = (): void => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    resize();
    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <main className="flex flex-col gap-10 w-full items-center justify-center">
      {/* Top Spacer */}
      <Introduction />

      {/* Gallery */}
      <div ref={galleryRef} className="h-[175vh] overflow-hidden w-full">
        <div className="relative top-[-12.5vh] h-[200vh] flex gap-[2vw] p-[2vw]">
          <Column images={[images[0], images[1], images[2]]} y={y} initialTop="-30%" />
          <Column images={[images[3], images[4], images[5]]} y={y2} initialTop="-70%" />
          <Column images={[images[6], images[7], images[8]]} y={y3} initialTop="-30%" />
          <Column images={[images[9], images[10], images[11]]} y={y4} initialTop="-60%" />
        </div>
      </div>

      {/* Bottom Spacer */}
      <Whyus />
    </main>
  );
}

const Column: React.FC<ColumnProps> = ({ images, y, initialTop }) => {
  return (
    <motion.div
      className="relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw] whitespace-nowrap"
      style={{ y, top: initialTop }}
    >
      {images.map((src: string, i: number) => (
        <div
          key={i}
          className="relative h-1/3 w-full rounded-[1vw] overflow-hidden"
        >
          <Image
            src={`/${src}`}
            alt={`Gallery image ${i + 1}`}
            fill
           
            className="object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};
