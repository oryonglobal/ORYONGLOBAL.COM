import React from 'react';
import { Search, PenTool, Terminal, Rocket, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/companyData';

export default function Process() {
  const getStepIcon = (phase) => {
    switch (phase) {
      case 'Discover':
        return <Search className="w-6 h-6 text-oryon-cyan" />;
      case 'Design':
        return <PenTool className="w-6 h-6 text-oryon-cyan" />;
      case 'Develop':
        return <Terminal className="w-6 h-6 text-oryon-cyan" />;
      case 'Deliver':
        return <Rocket className="w-6 h-6 text-oryon-coral" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-oryon-cyan" />;
    }
  };

  return (
    <section className="py-8 lg:py-12 bg-oryon-darkBg relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(8,43,76,0.35),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-oryon-surface border border-oryon-border/30 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-oryon-cyan" />
            <span className="text-xs font-semibold uppercase tracking-widest text-oryon-cyan">
              OUR APPROACH
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight mb-3">
            A Structured Path to Digital Excellence
          </h2>

          <p className="text-sm sm:text-base text-oryon-grey/85 leading-relaxed">
            Every breakthrough product is founded upon discipline, transparent communication,
            and an iterative lifecycle that minimizes technical risk.
          </p>
        </div>

        {/* 4-Step Process with Connecting Lines */}
        <div className="relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-[45px] left-12 right-12 h-[2px] bg-gradient-to-r from-oryon-cyan/20 via-oryon-tech/40 to-oryon-coral/40 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="group relative flex flex-col p-6 rounded-2xl bg-oryon-surface/40 border border-oryon-border/30 hover:border-oryon-cyan/50 hover:bg-oryon-surface/70 transition-all duration-300"
              >
                {/* Step Indicator & Icon Node */}
                <div className="flex items-center justify-between mb-6">
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-oryon-deep border border-oryon-cyan/30 shadow-lg group-hover:scale-105 group-hover:border-oryon-cyan transition-all duration-300">
                    {getStepIcon(step.phase)}
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-oryon-navy text-oryon-cyan border border-oryon-cyan/40">
                      {step.number}
                    </span>
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-widest text-oryon-grey/50 group-hover:text-oryon-cyan transition-colors">
                    Step {step.number}
                  </span>
                </div>

                {/* Phase Name */}
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-oryon-cyan mb-1.5">
                  Phase {step.number} — {step.phase}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-white font-heading mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-oryon-grey/80 leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Key Points */}
                <div className="mt-auto pt-4 border-t border-white/[0.06] space-y-2">
                  {step.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-oryon-grey/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-oryon-cyan/80 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
