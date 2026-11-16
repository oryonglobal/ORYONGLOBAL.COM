import React, { useEffect, useState } from 'react';
import {
  Cpu,
  Layers,
  Activity,
  Shield,
  Sparkles,
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Terminal,
  CheckCircle2,
  Lock,
  Zap,
  Boxes,
  Database,
  ExternalLink,
  Server,
  Cloud,
  ChevronRight,
} from 'lucide-react';
import InHouseProjects from './InHouseProjects';

export default function InHouseLabsPage({ onNavigateHome, onOpenContact }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Oryon Labs | Proprietary Enterprise Software Platforms';
    return () => {
      document.title = 'Oryon Global | Enterprise Technology & Software Solutions';
    };
  }, []);

  return (
    <div className="pt-20 lg:pt-24 pb-12 bg-oryon-darkBg text-oryon-grey min-h-screen relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-oryon-cyan/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-oryon-tech/15 rounded-full blur-[160px] pointer-events-none" />
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
            <span className="text-oryon-cyan font-semibold">Oryon Labs (Dedicated Route)</span>
          </div>
        </div>

        {/* Labs Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-oryon-surface border border-oryon-cyan/30 mb-3 shadow-[0_0_25px_rgba(22,200,232,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-oryon-cyan animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-oryon-cyan font-mono">
              ORYON LABS • RESEARCH & DEVELOPMENT INCUBATOR
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight mb-3 leading-tight">
            Next-Generation Platforms.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-oryon-cyan via-cyan-100 to-white">
              Engineered In-House.
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-oryon-grey/85 leading-relaxed text-balance mb-6">
            Beyond engineering bespoke software for global clients, our dedicated internal R&D division
            invents, stress-tests, and operates high-performance proprietary systems across autonomous
            AI, cloud observability, zero-trust cybersecurity, and real-time edge sync.
          </p>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-oryon-surface/60 border border-white/5 backdrop-blur-sm text-left">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-heading">
                4
              </span>
              <span className="text-xs text-oryon-cyan font-mono font-semibold uppercase tracking-wider">
                Proprietary Platforms
              </span>
              <p className="text-[11px] text-oryon-grey/60 mt-1">100% in-house architecture</p>
            </div>

            <div className="p-4 rounded-2xl bg-oryon-surface/60 border border-white/5 backdrop-blur-sm text-left">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-heading">
                &lt; 1.8ms
              </span>
              <span className="text-xs text-emerald-400 font-mono font-semibold uppercase tracking-wider">
                Telemetry Latency
              </span>
              <p className="text-[11px] text-oryon-grey/60 mt-1">Kernel-level eBPF pipelines</p>
            </div>

            <div className="p-4 rounded-2xl bg-oryon-surface/60 border border-white/5 backdrop-blur-sm text-left">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-heading">
                99.99%
              </span>
              <span className="text-xs text-oryon-cyan font-mono font-semibold uppercase tracking-wider">
                Engine Reliability
              </span>
              <p className="text-[11px] text-oryon-grey/60 mt-1">Production tested scale</p>
            </div>

            <div className="p-4 rounded-2xl bg-oryon-surface/60 border border-white/5 backdrop-blur-sm text-left">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Zero
              </span>
              <span className="text-xs text-purple-400 font-mono font-semibold uppercase tracking-wider">
                Vendor Lock-In
              </span>
              <p className="text-[11px] text-oryon-grey/60 mt-1">Self-hosted & Sovereign</p>
            </div>
          </div>
        </div>

        {/* The In-House Projects Showcase Component */}
        <InHouseProjects onStartProject={onOpenContact} isStandalonePage={true} />

        {/* Innovation Architecture Pillars */}
        <div className="mt-20 pt-16 border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-oryon-cyan block mb-2">
              WHY ORYON LABS MATTERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              How In-House R&D Accelerates Client Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-oryon-surface/40 border border-oryon-border/30 hover:border-oryon-cyan/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-oryon-cyan/15 text-oryon-cyan flex items-center justify-center mb-5 border border-oryon-cyan/30">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-heading">
                Field-Tested Battle Hardening
              </h3>
              <p className="text-sm text-oryon-grey/80 leading-relaxed">
                Before deploying any pattern to our enterprise clients, every component is rigorously
                stress-tested inside our own live production platforms.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-oryon-surface/40 border border-oryon-border/30 hover:border-oryon-cyan/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-5 border border-blue-500/30">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-heading">
                3x Accelerated Time to Market
              </h3>
              <p className="text-sm text-oryon-grey/80 leading-relaxed">
                Clients leverage pre-engineered modules, proven authentication schemes, and high-speed
                data pipes rather than reinventing foundational wheels from zero.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-oryon-surface/40 border border-oryon-border/30 hover:border-oryon-cyan/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-5 border border-purple-500/30">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-heading">
                Private Cloud & Enterprise Licensing
              </h3>
              <p className="text-sm text-oryon-grey/80 leading-relaxed">
                Need autonomous AI or real-time sync inside your own VPC or air-gapped on-premise
                data center? We provide turnkey enterprise licensing and dedicated implementation.
              </p>
            </div>
          </div>
        </div>

        {/* Private Access Inquiry Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-oryon-deep via-[#0A335C] to-oryon-navy border border-oryon-cyan/40 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-1/3 w-64 h-64 bg-oryon-cyan/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Interested in Deploying Oryon Labs Platforms?
            </h3>
            <p className="text-sm sm:text-base text-oryon-grey/85 leading-relaxed">
              Schedule a private architecture demonstration with our engineering leads or request
              sandboxed API access for your enterprise team.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-oryon-cyan to-oryon-tech text-oryon-navy font-bold text-sm hover:shadow-[0_0_25px_rgba(22,200,232,0.4)] transition-all flex items-center gap-2"
              >
                <span>Request Enterprise Sandbox</span>
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
