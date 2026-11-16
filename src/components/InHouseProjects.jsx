import React, { useState } from 'react';
import {
  Sparkles,
  Layers,
  Cpu,
  Shield,
  Activity,
  ArrowUpRight,
  ExternalLink,
  Code2,
  CheckCircle2,
  Terminal,
  Zap,
  Boxes,
  Database,
  Lock,
} from 'lucide-react';

const IN_HOUSE_PROJECTS = [
  {
    id: 'oryon-flow-ai',
    name: 'OryonFlow AI',
    tagline: 'Autonomous Multi-Agent Workflow Engine',
    category: 'Artificial Intelligence',
    versionBadge: 'Production Live • v2.8',
    statusColor: 'emerald',
    icon: Cpu,
    accentGrad: 'from-cyan-500 to-blue-600',
    description:
      'High-throughput LLM workflow framework chaining autonomous agents, complex reasoning, and automated document extraction.',
    architecturePoints: [
      'Multi-model dynamic LLM routing & orchestration',
      'Vector memory with sub-50ms hybrid retrieval',
      'SOC-2 compliant zero-retention private boundaries',
    ],
    techStack: ['Python', 'FastAPI', 'Rust Core', 'Qdrant', 'React UI'],
    metrics: { label: 'Daily Operations', value: '500,000+' },
  },
  {
    id: 'nexus-cloud-telemetry',
    name: 'NexusCloud Telemetry',
    tagline: 'Zero-Overhead Microservice Observability Suite',
    category: 'Cloud & Infrastructure',
    versionBadge: 'Enterprise Core • v1.6',
    statusColor: 'cyan',
    icon: Activity,
    accentGrad: 'from-blue-500 to-indigo-600',
    description:
      'Lightweight eBPF telemetry daemon delivering distributed trace correlation, Kubernetes health tracking, and automated anomaly root-cause detection.',
    architecturePoints: [
      'Kernel-level eBPF packet capture with zero app changes',
      'Sub-2ms trace aggregation using high-throughput ClickHouse',
      'AI predictive anomaly alerts before customer impact',
    ],
    techStack: ['Go', 'eBPF', 'ClickHouse', 'Kubernetes', 'TypeScript'],
    metrics: { label: 'Trace Latency', value: '< 1.8ms' },
  },
  {
    id: 'auth-shield-core',
    name: 'AuthShield Core',
    tagline: 'Passwordless Biometric Identity & Compliance Engine',
    category: 'Security & IAM',
    versionBadge: 'Enterprise Preview • v3.1',
    statusColor: 'coral',
    icon: Lock,
    accentGrad: 'from-orange-500 to-red-600',
    description:
      'Plug-and-play biometric authentication gateway with FIDO2 WebAuthn standards, zero-trust token lifecycle, and compliance audit trails.',
    architecturePoints: [
      'Passwordless FaceID & TouchID WebAuthn hardware passkeys',
      'HSM session token rotation with zero-trust perimeter',
      'Continuous biometric & IP anomaly risk scoring',
    ],
    techStack: ['TypeScript', 'Node.js', 'WebAuthn', 'PostgreSQL', 'Redis'],
    metrics: { label: 'Credential Risk', value: '0% (FIDO2)' },
  },
  {
    id: 'pulse-sync-engine',
    name: 'PulseSync Mobile Engine',
    tagline: 'Conflict-Free Offline-First Data Synchronization',
    category: 'Mobile Infrastructure',
    versionBadge: 'Open Core Library',
    statusColor: 'amber',
    icon: Zap,
    accentGrad: 'from-amber-500 to-emerald-500',
    description:
      'State synchronization engine for mobile and edge apps with CRDT delta syncing, bi-directional sync, and instant rollback.',
    architecturePoints: [
      'State-based CRDT delta synchronization saving bandwidth',
      'Local encrypted SQLite cache with instant 60FPS UI updates',
      'Cross-platform bindings for Swift, Kotlin & React Native',
    ],
    techStack: ['Kotlin', 'Swift', 'CRDTs', 'SQLite', 'GraphQL'],
    metrics: { label: 'Local Sync Speed', value: '< 8ms' },
  },
];

export default function InHouseProjects({ onStartProject, isStandalonePage = false }) {
  const [selectedProject, setSelectedProject] = useState(IN_HOUSE_PROJECTS[0]);

  return (
    <section
      id="inhouse-projects"
      className={`${isStandalonePage ? 'py-4 sm:py-6' : 'py-10 lg:py-14 bg-[#030C19]'} relative overflow-hidden`}
    >
      {/* Background Lighting & Grid Accents (only when not standalone) */}
      {!isStandalonePage && (
        <>
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-oryon-tech/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-1/4 left-0 w-[550px] h-[550px] bg-oryon-cyan/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#16c8e8_1px,transparent_1px),linear-gradient(to_bottom,#16c8e8_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (rendered with subtitle if standalone, or full on home) */}
        {!isStandalonePage ? (
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oryon-surface border border-oryon-cyan/30 mb-2.5 shadow-sm">
              <Boxes className="w-3.5 h-3.5 text-oryon-cyan animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-oryon-cyan font-mono">
                ORYON LABS • PROPRIETARY PRODUCTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight mb-3">
              In-House Projects & Platforms
            </h2>

            <p className="text-sm sm:text-base text-oryon-grey/85 leading-relaxed text-balance">
              Beyond engineering custom software for our clients, our internal R&D incubator builds,
              deploys, and maintains proprietary platforms that accelerate digital transformation.
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-6">
            <div className="flex items-center gap-2.5">
              <Boxes className="w-5 h-5 text-oryon-cyan" />
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Proprietary Production Platforms
              </h2>
            </div>
            <span className="text-xs font-mono text-oryon-cyan hidden sm:inline-block">
              Continuous In-House Deployment
            </span>
          </div>
        )}

        {/* 4 In-House Projects Grid - Compact Height like CEO Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {IN_HOUSE_PROJECTS.map((proj) => {
            const IconComponent = proj.icon;

            return (
              <div
                key={proj.id}
                className="group relative flex flex-col justify-between rounded-3xl bg-gradient-to-b from-oryon-deep/90 via-[#072445]/80 to-[#04152A]/95 border border-oryon-border/30 hover:border-oryon-cyan/50 p-6 sm:p-7 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-10px_rgba(8,119,185,0.35)] overflow-hidden"
              >
                {/* Decorative Ambient Corner Light */}
                <div className="absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl pointer-events-none bg-oryon-cyan/10 group-hover:bg-oryon-cyan/20 transition-all duration-500" />

                <div>
                  {/* Top Category Badge & Live Version Status */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border shadow-sm bg-oryon-cyan/15 text-white border-oryon-cyan/40">
                      <Boxes className="w-3.5 h-3.5 text-oryon-cyan shrink-0" />
                      <span>{proj.category}</span>
                    </span>

                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-[11px] font-mono text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{proj.versionBadge}</span>
                    </span>
                  </div>

                  {/* Profile Header: Tech Emblem (matching CEO image size) + Details */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-4">
                    {/* Visual Tech Emblem (w-32 h-32 sm:w-36 sm:h-36) + Metric Pill */}
                    <div className="flex flex-col items-center gap-2.5 shrink-0">
                      <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-oryon-border/60 group-hover:border-oryon-cyan transition-colors shadow-lg bg-gradient-to-br from-[#061B35] via-[#082B4C] to-[#041224] flex flex-col items-center justify-center p-3">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${proj.accentGrad} flex items-center justify-center shadow-lg mb-2 text-white group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <span className="text-[10px] font-mono uppercase font-bold text-oryon-cyan tracking-wider">
                          Oryon Labs IP
                        </span>
                        {/* High-tech corner accents */}
                        <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-oryon-cyan/80 pointer-events-none" />
                        <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-oryon-cyan/80 pointer-events-none" />
                      </div>

                      {/* Performance Metric Pill */}
                      <div className="px-2.5 py-1 rounded-lg bg-oryon-surface border border-white/10 text-[11px] font-mono text-oryon-grey/90 shadow-sm flex items-center gap-1.5">
                        <span className="text-oryon-cyan font-semibold">{proj.metrics.label}:</span>
                        <span className="text-white font-bold">{proj.metrics.value}</span>
                      </div>
                    </div>

                    {/* Titles, Tagline & Concise Description */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight mb-1 group-hover:text-cyan-100 transition-colors">
                        {proj.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold tracking-wide text-oryon-cyan mb-2">
                        {proj.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-oryon-grey/90 leading-relaxed mb-3">
                        {proj.description}
                      </p>

                      {/* Capabilities Compact */}
                      <div className="space-y-1.5">
                        {proj.architecturePoints.map((point, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-oryon-grey/85">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/[0.06] mb-3">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md bg-oryon-surface/80 text-oryon-grey/80 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs font-semibold text-oryon-grey/70 group-hover:text-white transition-colors">
                    Enterprise Sandbox & Private VPC
                  </span>
                  <button
                    onClick={() => {
                      setSelectedProject(proj);
                      if (onStartProject) {
                        onStartProject();
                      } else {
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all bg-oryon-cyan/15 hover:bg-oryon-cyan text-white hover:text-oryon-navy border border-oryon-cyan/40 hover:border-oryon-cyan shadow-sm"
                  >
                    <span>Request Access</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Labs Guarantee Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-oryon-deep/80 via-[#0A2E50]/80 to-oryon-deep/80 border border-oryon-border/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-oryon-surface border border-oryon-border/40 text-oryon-cyan shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-heading">
                Interested in License or Enterprise Deployment of an In-House Platform?
              </h4>
              <p className="text-xs sm:text-sm text-oryon-grey/80 mt-0.5">
                All Oryon Labs platforms can be self-hosted on your cloud cluster with private tenant isolation.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              if (onStartProject) {
                onStartProject();
              } else {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="shrink-0 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-oryon-coral hover:bg-oryon-coralHover shadow-glow-coral transition-all"
          >
            Inquire About Oryon Labs
          </button>
        </div>
      </div>
    </section>
  );
}
