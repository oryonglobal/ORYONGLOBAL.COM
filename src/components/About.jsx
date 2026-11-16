import React, { useState } from 'react';
import {
  Compass,
  Cpu,
  Sparkles,
  Handshake,
  CheckCircle2,
  Server,
  ShieldAlert,
  Activity,
  Layers,
  Terminal,
} from 'lucide-react';
import { COMPANY_INFO, ABOUT_PILLARS } from '../data/companyData';

export default function About({ onStartProject }) {
  const [activeTab, setActiveTab] = useState('cloud');

  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-oryon-cyan" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-oryon-cyan" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-oryon-cyan" />;
      case 'Handshake':
        return <Handshake className="w-5 h-5 text-oryon-cyan" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-oryon-cyan" />;
    }
  };

  return (
    <section id="about" className="py-8 lg:py-12 bg-oryon-darkBg relative overflow-hidden">
      {/* Background Ambient Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-oryon-tech/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-oryon-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Text & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-oryon-surface border border-oryon-border/30 w-fit mb-2.5">
              <span className="w-2 h-2 rounded-full bg-oryon-cyan" />
              <span className="text-xs font-semibold uppercase tracking-widest text-oryon-cyan">
                ABOUT ORYON GLOBAL
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight leading-tight mb-3">
              {COMPANY_INFO.aboutHeading}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-oryon-grey/90 leading-relaxed mb-5 font-normal">
              {COMPANY_INFO.aboutDescription}
            </p>

            {/* Detailed Company Overview Paragraph */}
            <p className="text-sm sm:text-base text-oryon-grey/75 leading-relaxed mb-10">
              As modern businesses face rapid digital shifts, off-the-shelf software often falls short. 
              We architect purpose-built enterprise platforms, robust cloud environments, and intelligent 
              automation engines designed for resilience, security, and sustained competitive advantage.
            </p>

            {/* 4 Pillars Grid (Mission, Approach, Innovation, Partnerships) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {ABOUT_PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-oryon-surface/40 border border-oryon-border/20 hover:border-oryon-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2 rounded-lg bg-oryon-deep border border-oryon-border/30">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <h3 className="text-base font-semibold text-white font-heading">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-oryon-grey/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quality & Partnership Guarantee */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-4 border-t border-white/[0.08]">
              <div className="flex items-center gap-2 text-sm text-white font-medium">
                <CheckCircle2 className="w-5 h-5 text-oryon-cyan shrink-0" />
                <span>Zero Compromise on Code Quality</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white font-medium">
                <CheckCircle2 className="w-5 h-5 text-oryon-coral shrink-0" />
                <span>Transparent Agile Collaboration</span>
              </div>
            </div>
          </div>

          {/* Right Column: Technology Visual & Architecture Topology */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-oryon-deep/90 to-oryon-navy/90 border border-oryon-border/40 shadow-2xl backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-oryon-grey/60">
                    oryon-core-topology.sys
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>SYSTEM ONLINE</span>
                </div>
              </div>

              {/* Architecture Nodes */}
              <div className="space-y-4">
                {/* Node 1: Cloud & Edge */}
                <div className="p-4 rounded-xl bg-oryon-surface/70 border border-oryon-border/40 hover:border-oryon-cyan/60 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <Server className="w-4 h-4 text-oryon-cyan" />
                      <span className="text-sm font-semibold text-white font-heading">
                        Cloud & Hybrid Infrastructure
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-oryon-cyan">99.99% Uptime</span>
                  </div>
                  <div className="w-full bg-oryon-navy h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-oryon-tech to-oryon-cyan h-full w-[94%] rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-oryon-grey/60 mt-1.5">
                    <span>Multi-Region AWS / Azure / GCP</span>
                    <span>Kubernetes Clusters</span>
                  </div>
                </div>

                {/* Node 2: Microservices & Data Streaming */}
                <div className="p-4 rounded-xl bg-oryon-surface/70 border border-oryon-border/40 hover:border-oryon-cyan/60 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-oryon-cyan" />
                      <span className="text-sm font-semibold text-white font-heading">
                        Reactive Microservices & APIs
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400">&lt;14ms Latency</span>
                  </div>
                  <div className="w-full bg-oryon-navy h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-oryon-cyan to-emerald-400 h-full w-[88%] rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-oryon-grey/60 mt-1.5">
                    <span>Event-Driven Architecture</span>
                    <span>REST / GraphQL / gRPC</span>
                  </div>
                </div>

                {/* Node 3: AI Inference Engine */}
                <div className="p-4 rounded-xl bg-oryon-surface/70 border border-oryon-border/40 hover:border-oryon-coral/60 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <Cpu className="w-4 h-4 text-oryon-coral" />
                      <span className="text-sm font-semibold text-white font-heading">
                        Intelligent AI & Automation
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-oryon-coral">Continuous Ingest</span>
                  </div>
                  <div className="w-full bg-oryon-navy h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-oryon-coral to-amber-400 h-full w-[92%] rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-oryon-grey/60 mt-1.5">
                    <span>Autonomous Workflows</span>
                    <span>Predictive Models</span>
                  </div>
                </div>

                {/* Live Console Output Box */}
                <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 font-mono text-xs text-oryon-grey/80">
                  <div className="flex items-center gap-2 text-[11px] text-oryon-cyan mb-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>oryon-deploy-agent ~ status</span>
                  </div>
                  <p className="text-[11px] text-emerald-400/90 leading-relaxed">
                    ✔ All enterprise services passing health probes<br />
                    ✔ Zero security vulnerabilities detected<br />
                    ✔ Automated failover synchronizers active
                  </p>
                </div>
              </div>

              {/* Subtle Tech Badge */}
              <div className="mt-6 text-center">
                <span className="text-[11px] font-medium text-oryon-grey/60">
                  Enterprise Technology Built For High Reliability
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
