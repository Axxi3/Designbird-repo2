'use client';

import { useRef } from 'react';

export default function ScrollingText() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  return (
    <main className=" flex  overflow-hidden bg-black">
      {/* Scrolling Slider Text */}
      <div className="absolute top-[calc(100vh-350px)]">
        <div ref={slider} className="relative whitespace-nowrap">
          <p
            ref={firstText}
            className=" m-0 text-white text-[230px] font-medium pr-[50px]"
          >
            Freelance Developer -
          </p>
          <p
            ref={secondText}
            className=" top-0 left-full m-0 text-white text-[230px] font-medium pr-[50px]"
          >
            Freelance Developer -
          </p>
        </div>
      </div>
    </main>
  );
}
