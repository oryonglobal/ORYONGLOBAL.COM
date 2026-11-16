import React, { useState, useEffect } from 'react';

const ROTATING_SOLUTIONS = [
  "SOFTWARE SOLUTIONS",
  "DIGITAL INNOVATIONS",
  "BUSINESS SOLUTIONS",
  "AI AUTOMATION SOLUTIONS",
  "NEXT-GEN SOLUTIONS",
];

// Append clone of the first item for seamless, infinite looping
const ITEMS = [...ROTATING_SOLUTIONS, ROTATING_SOLUTIONS[0]];
const ITEM_HEIGHT = 12; // compact height for tight, elegant lockup

export default function Logo({ size = 'default', showText = true, animated = true }) {
  const isLarge = size === 'large';
  const [index, setIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    if (!animated) return;

    const interval = setInterval(() => {
      setTransitionEnabled(true);
      setIndex((prev) => prev + 1);
    }, 2800);

    return () => clearInterval(interval);
  }, [animated]);

  // Seamless loop reset: when reaching the duplicate, reset to 0 silently
  useEffect(() => {
    if (index === ROTATING_SOLUTIONS.length) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(false);
        setIndex(0);
      }, 720); // right after 700ms slide completes

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer">
      {/* Official 3D Futuristic Technology Emblem */}
      <div className="relative flex items-center justify-center shrink-0">
        <img
          src="/images/oryon-logo.png"
          alt="Oryon Global Logo"
          className={`${
            isLarge ? "w-11 h-11 sm:w-12 sm:h-12" : "w-9 h-9 sm:w-10 sm:h-10"
          } object-contain transition-all duration-500 group-hover:scale-110 filter drop-shadow-[0_0_12px_rgba(22,200,232,0.45)]`}
          loading="eager"
        />
        {/* Ambient Glow behind symbol */}
        <div className="absolute inset-0 bg-oryon-cyan/25 blur-md rounded-full pointer-events-none -z-10 group-hover:bg-oryon-cyan/45 transition-all duration-300" />
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          {/* Company Name */}
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-heading font-extrabold text-white text-lg tracking-wider">
              ORYON
            </span>
            <span className="font-heading font-bold text-oryon-cyan text-lg tracking-widest">
              GLOBAL
            </span>
          </div>

          {/* Ultra-Smooth Continuous Vertical Sliding Carousel with tight, elegant spacing */}
          <div className="h-[12px] overflow-hidden min-w-[175px] relative mt-[1px]">
            <div
              className={`flex flex-col ${
                transitionEnabled
                  ? 'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]'
                  : 'transition-none'
              }`}
              style={{
                transform: `translateY(-${index * ITEM_HEIGHT}px)`,
              }}
            >
              {ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="h-[12px] flex items-center leading-none"
                >
                  <span className="text-[8px] sm:text-[8.5px] font-bold uppercase tracking-[0.26em] text-slate-300/80 whitespace-nowrap group-hover:text-cyan-200 transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
