import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export default function CTASection({ onOpenContact }) {
  return (
    <section className="relative py-10 lg:py-14 overflow-hidden">
      {/* Dynamic Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-oryon-deep via-[#0A335C] to-oryon-navy pointer-events-none" />

      {/* Ambient Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-oryon-cyan/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-oryon-tech/30 rounded-full blur-[140px] pointer-events-none" />

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#16c8e8_1px,transparent_1px),linear-gradient(to_bottom,#16c8e8_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-3">
          <Sparkles className="w-4 h-4 text-oryon-cyan" />
          <span className="text-xs font-semibold uppercase tracking-widest text-white">
            START YOUR TRANSFORMATION
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight mb-3 leading-tight">
          Have an Idea? Let's Build It Together.
        </h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-oryon-grey/90 leading-relaxed mb-6">
          Tell us about your business goals and discover how Oryon Global
          can help turn your ideas into digital solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-oryon-coral to-oryon-coralHover shadow-glow-coral transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(255,104,74,0.6)] active:translate-y-0"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-oryon-cyan" />
            <span>Direct Inquiry Form</span>
          </a>
        </div>
      </div>
    </section>
  );
}
