import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Shield, Cpu, Film } from 'lucide-react';
import TechBackgroundVideo from './TechBackgroundVideo';

const HEADLINE_WORDS = [
  "Technology.",
  "Digital World.",
  "Software.",
  "Innovation.",
  "AI Solutions.",
];

const HEADLINE_ITEMS = [...HEADLINE_WORDS, HEADLINE_WORDS[0]];

export default function Hero({ onExploreServices, onStartProject }) {
  const videoOptions = [
    { id: 'datacenter', name: 'Data Center', src: '/videos/it-datacenter-hero.mp4?v=3' },
    { id: 'original', name: 'Original Video', src: '/videos/desktop-original.mp4' },
    { id: 'servers', name: 'Server Racks', src: '/videos/server-racks.mp4?v=3' },
    { id: 'network', name: 'Cloud Network', src: '/videos/data-network.mp4?v=3' },
    { id: 'fiber', name: 'Fiber Optics', src: '/videos/fiber-optics.mp4?v=3' },
  ];

  const [activeVideo, setActiveVideo] = useState(videoOptions[0]);

  // Dynamic Headline carousel state
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [headlineTransition, setHeadlineTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineTransition(true);
      setHeadlineIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Seamless infinite loop reset for headline
  useEffect(() => {
    if (headlineIndex === HEADLINE_WORDS.length) {
      const timeout = setTimeout(() => {
        setHeadlineTransition(false);
        setHeadlineIndex(0);
      }, 720);

      return () => clearTimeout(timeout);
    }
  }, [headlineIndex]);

  // Animated keywords cycling for secondary banner
  const keywords = [
    'AI Automation Solutions',
    'Software Solutions',
    'Digital Innovations',
    'Business Solutions',
    'Next-Gen Solutions',
  ];

  const [keywordIndex, setKeywordIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setKeywordIndex((prev) => (prev + 1) % keywords.length);
        setFadeState(true);
      }, 350);
    }, 2800);

    return () => clearInterval(interval);
  }, [keywords.length]);

  return (
    <section id="home" className="relative isolate min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-20 lg:pt-28 lg:pb-28 overflow-hidden">
      {/* 1. Cinematic Technology Background Video & Calibrated Overlay */}
      <TechBackgroundVideo
        videoSrc={activeVideo.src}
        overlayOpacity={0.45}
        showParticles={true}
      />

      {/* 2. Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Eyebrow Badge: ORYON GLOBAL & INNOVATION • TECHNOLOGY • DIGITAL EXCELLENCE */}
        <div className="flex flex-col items-center gap-2 mb-5">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-oryon-deep/80 border border-oryon-cyan/40 backdrop-blur-md shadow-[0_0_25px_rgba(22,200,232,0.25)] transition-transform hover:scale-105 duration-300">
            <img
              src="/images/oryon-logo.png"
              alt="Oryon Global Emblem"
              className="w-5 h-5 object-contain filter drop-shadow-sm"
            />
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-white font-heading">
              ORYON GLOBAL
            </span>
          </div>

          <div className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-oryon-cyan/90 drop-shadow">
            INNOVATION • TECHNOLOGY • EXCELLENCE
          </div>
        </div>

        {/* Main Headline with Smooth Vertical Carousel on Connected Words */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.14] mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] font-heading">
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3.5">
            <span className="text-white">We Build the</span>
            
            {/* Smooth Rolling Word Ticker */}
            <span className="inline-block relative h-[1.18em] overflow-hidden align-top text-left">
              <span
                className={`flex flex-col ${
                  headlineTransition
                    ? 'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]'
                    : 'transition-none'
                }`}
                style={{
                  transform: `translateY(-${headlineIndex * 1.18}em)`,
                }}
              >
                {HEADLINE_ITEMS.map((word, i) => (
                  <span
                    key={i}
                    className="h-[1.18em] flex items-center text-transparent bg-clip-text bg-gradient-to-r from-oryon-cyan via-cyan-200 to-white whitespace-nowrap"
                  >
                    {word}
                  </span>
                ))}
              </span>
            </span>
          </div>

          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-oryon-cyan">
            You Lead the Future.
          </span>
        </h1>

        {/* Animated Keywords Tagline: Powering Your Business With ✨ AI & Automation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-2 mb-6">
          <span className="text-base sm:text-xl font-medium text-oryon-grey/90">
            Powering Your Business With
          </span>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-oryon-surface/90 border border-oryon-cyan/40 shadow-[0_0_20px_rgba(22,200,232,0.3)] backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-oryon-cyan animate-pulse" />
            <span
              className={`text-sm sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-oryon-cyan to-white transition-all duration-300 ${
                fadeState
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 -translate-y-1 scale-95'
              }`}
            >
              {keywords[keywordIndex]}
            </span>
          </div>
        </div>

        {/* Supporting Motto & Description */}
        <div className="max-w-3xl mx-auto space-y-1.5 mb-6">
          <p className="text-base sm:text-lg font-semibold text-white tracking-wide font-heading drop-shadow-md">
            Innovative software. Intelligent solutions. Limitless possibilities.
          </p>
          <p className="text-xs sm:text-sm text-oryon-grey/90 leading-relaxed font-normal text-balance drop-shadow-sm">
            Oryon Global helps businesses innovate, scale, and compete with custom
            software, intelligent automation, and modern technology solutions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-oryon-coral to-oryon-coralHover shadow-glow-coral transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(255,104,74,0.6)] active:translate-y-0"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm sm:text-base font-medium text-white/95 bg-white/[0.08] hover:bg-white/[0.16] border border-white/20 hover:border-oryon-cyan/60 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg"
          >
            <span className="group-hover:text-oryon-cyan transition-colors">Start a Project</span>
            <Sparkles className="w-4 h-4 text-oryon-cyan transition-transform group-hover:rotate-12" />
          </button>
        </div>

        {/* Subtle Enterprise Trust Indicators */}
        <div className="mt-7 pt-4 border-t border-white/15 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs text-oryon-grey/80 backdrop-blur-xs">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-oryon-cyan" />
            <span>Enterprise-Grade Security</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-oryon-border" />
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-oryon-cyan" />
            <span>Modern Scalable Architecture</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-oryon-border" />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Continuous Deployment Ready</span>
          </div>
        </div>

        {/* 3. Subtle Interactive Video Theme Selector Bar (Centered cleanly within Hero flow) */}
        <div className="mt-4 hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oryon-navy/85 border border-oryon-cyan/30 backdrop-blur-md shadow-lg">
          <Film className="w-3.5 h-3.5 text-oryon-cyan ml-1" />
          <span className="text-[10px] font-mono uppercase tracking-wider text-oryon-grey/70 mr-1">
            Cinematic Feed:
          </span>
          {videoOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveVideo(opt)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
                activeVideo.id === opt.id
                  ? 'bg-oryon-cyan text-oryon-navy font-semibold shadow-[0_0_12px_rgba(22,200,232,0.5)]'
                  : 'text-oryon-grey/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {opt.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
