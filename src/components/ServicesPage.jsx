import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Sparkles, Layers, Cpu, Shield, CheckCircle2, ChevronRight } from 'lucide-react';
import Services from './Services';
import Process from './Process';

export default function ServicesPage({ onNavigateHome, onSelectService, onOpenContact }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Enterprise Technology Services | Oryon Global';
    return () => {
      document.title = 'Oryon Global | Enterprise Technology & Software Solutions';
    };
  }, []);

  return (
    <div className="pt-20 lg:pt-24 pb-12 bg-oryon-darkBg text-oryon-grey min-h-screen relative overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-oryon-tech/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-oryon-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#16c8e8_1px,transparent_1px)] [background-size:36px_36px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Breadcrumb / Back Bar */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-3">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-oryon-surface/80 hover:bg-oryon-deep border border-oryon-border/40 hover:border-oryon-cyan/60 text-sm font-semibold text-white transition-all shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 text-oryon-cyan group-hover:-translate-x-1 transition-transform" />
            <span>Back to Main Website</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-oryon-grey/60">
            <span className="cursor-pointer hover:text-white" onClick={onNavigateHome}>
              Home
            </span>
            <span>/</span>
            <span className="text-oryon-cyan font-semibold">Services & Approach (Dedicated Route)</span>
          </div>
        </div>

        {/* Services Component (Technology Solutions for a Connected World) */}
        <Services onSelectService={onSelectService} />

        {/* Approach Component (A Structured Path to Digital Excellence) */}
        <div className="mt-6 pt-6 border-t border-white/[0.08]">
          <Process />
        </div>

        {/* Bottom CTA for Services & Engineering Inquiries */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-oryon-deep via-[#0A335C] to-oryon-navy border border-oryon-cyan/30 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-oryon-cyan/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Ready to Architect Your Next Solution?
            </h3>
            <p className="text-sm sm:text-base text-oryon-grey/85 leading-relaxed">
              Connect with our enterprise engineering team to evaluate technical feasibility, estimate delivery sprints, and design custom digital architecture.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-oryon-coral to-oryon-coralHover text-white font-bold text-sm hover:shadow-glow-coral transition-all flex items-center gap-2"
              >
                <span>Initiate Technical Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigateHome}
                className="px-6 py-3.5 rounded-xl bg-black/40 hover:bg-black/60 text-white font-semibold text-sm border border-white/20 transition-all flex items-center gap-2"
              >
                <span>Return to Home Page</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
