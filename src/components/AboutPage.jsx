import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  Award,
  Globe,
  Cpu,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Users,
} from 'lucide-react';
import About from './About';

export default function AboutPage({ onNavigateHome, onOpenContact }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'About Us | Oryon Global - Enterprise IT & Software Solutions';
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
            <span className="text-oryon-cyan font-semibold">About Us (Dedicated Route)</span>
          </div>
        </div>

        {/* About Page Hero Strip */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-oryon-surface border border-oryon-cyan/30 mb-3 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-oryon-cyan animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-oryon-cyan font-mono">
              WHO WE ARE • ORYON GLOBAL
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight mb-3 leading-tight">
            Architecting Resilient{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-oryon-cyan via-cyan-100 to-white">
              Digital Foundations.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-oryon-grey/85 leading-relaxed text-balance max-w-3xl mx-auto">
            We are an enterprise technology company engineering bespoke software, resilient cloud
            architectures, and proprietary AI platforms that help global businesses outpace competitive disruption.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10">
            <div className="p-4 rounded-2xl bg-oryon-surface/50 border border-white/5 backdrop-blur-sm text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-heading">
                99.99%
              </span>
              <span className="text-xs text-oryon-cyan font-mono uppercase tracking-wider font-semibold">
                Architecture SLA
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-oryon-surface/50 border border-white/5 backdrop-blur-sm text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400 font-heading">
                Zero
              </span>
              <span className="text-xs text-emerald-400 font-mono uppercase tracking-wider font-semibold">
                Tech Debt Policy
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-oryon-surface/50 border border-white/5 backdrop-blur-sm text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Global
              </span>
              <span className="text-xs text-oryon-cyan font-mono uppercase tracking-wider font-semibold">
                Client Reach
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-oryon-surface/50 border border-white/5 backdrop-blur-sm text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-purple-400 font-heading">
                100%
              </span>
              <span className="text-xs text-purple-400 font-mono uppercase tracking-wider font-semibold">
                In-House Code
              </span>
            </div>
          </div>
        </div>

        {/* The Core About Component */}
        <div className="bg-[#05162D]/60 rounded-3xl border border-oryon-border/30 p-6 sm:p-10 shadow-xl backdrop-blur-sm">
          <About onStartProject={onOpenContact} />
        </div>

        {/* Corporate Philosophy Grid */}
        <div className="mt-16 pt-12 border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-oryon-cyan block mb-2">
              OUR ENGINEERING PRINCIPLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              How We Create Enduring Value
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-oryon-surface/40 border border-oryon-border/30 hover:border-oryon-cyan/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-oryon-cyan/15 text-oryon-cyan flex items-center justify-center mb-4 border border-oryon-cyan/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 font-heading">
                Engineering Discipline
              </h3>
              <p className="text-xs sm:text-sm text-oryon-grey/80 leading-relaxed">
                We believe that clean architecture, comprehensive automated testing, and strict security perimeters are non-negotiable.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-oryon-surface/40 border border-oryon-border/30 hover:border-oryon-cyan/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/30">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 font-heading">
                Technology for Commercial Growth
              </h3>
              <p className="text-xs sm:text-sm text-oryon-grey/80 leading-relaxed">
                We reject engineering complexity for its own sake. Every feature and database query is aligned with business metrics and ROI.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-oryon-surface/40 border border-oryon-border/30 hover:border-oryon-cyan/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-coral-500/15 text-oryon-coral flex items-center justify-center mb-4 border border-oryon-coral/30">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 font-heading">
                Enduring Tech Alliances
              </h3>
              <p className="text-xs sm:text-sm text-oryon-grey/80 leading-relaxed">
                We act as long-term technology allies to founders and enterprise leaders, guiding architecture as teams and traffic multiply.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA for Direct Collaboration */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-oryon-deep via-[#0A335C] to-oryon-navy border border-oryon-cyan/30 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-oryon-cyan/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Partner with Oryon Global Today
            </h3>
            <p className="text-sm sm:text-base text-oryon-grey/85 leading-relaxed">
              Whether you need to architect a new software platform or modernize an existing enterprise system, our engineering team is ready.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-oryon-coral to-oryon-coralHover text-white font-bold text-sm hover:shadow-glow-coral transition-all flex items-center gap-2"
              >
                <span>Schedule Executive Discussion</span>
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
