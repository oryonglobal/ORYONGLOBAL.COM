import React, { useState } from 'react';
import {
  Code2,
  Briefcase,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  Award,
  Quote,
  Linkedin,
  Github,
  Twitter,
  Mail,
} from 'lucide-react';
import { LEADERSHIP_MEMBERS } from '../data/companyData';

export default function Leadership({ onStartProject }) {
  // Graceful fallback tracker for demo images
  const [imgErrors, setImgErrors] = useState({});

  const handleImageError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="ceo" className="py-10 lg:py-14 bg-[#041021] relative overflow-hidden">
      {/* Anchor for backward compatibility with #leadership */}
      <div id="leadership" className="absolute -top-10 left-0 pointer-events-none" />

      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-oryon-tech/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-oryon-cyan/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#16c8e8_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-oryon-surface border border-oryon-border/30 mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-oryon-cyan animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-oryon-cyan font-mono">
              CEO & EXECUTIVE LEADERSHIP
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight mb-3">
            Visionary Strategy.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-oryon-cyan via-cyan-100 to-white">
              Engineering Precision.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-oryon-grey/85 leading-relaxed text-balance">
            Meet the leadership steering Oryon Global's technological innovation, strategic expansion,
            and digital business transformation across global enterprise markets.
          </p>
        </div>

        {/* 2 Leadership Cards Grid - Compact Height with Slightly Larger Images & Socials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {LEADERSHIP_MEMBERS.map((member) => {
            const isFounder = member.id === 'founder-engineer';
            const hasError = imgErrors[member.id];

            return (
              <div
                key={member.id}
                className="group relative flex flex-col justify-between rounded-3xl bg-gradient-to-b from-oryon-deep/90 via-[#072445]/80 to-[#04152A]/95 border border-oryon-border/30 hover:border-oryon-cyan/50 p-6 sm:p-7 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-10px_rgba(8,119,185,0.35)] overflow-hidden"
              >
                {/* Decorative Ambient Corner Light */}
                <div
                  className={`absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
                    isFounder
                      ? 'bg-oryon-coral/10 group-hover:bg-oryon-coral/20'
                      : 'bg-oryon-cyan/10 group-hover:bg-oryon-cyan/20'
                  }`}
                />

                <div>
                  {/* Top Role Badge & Live Status */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border shadow-sm ${
                        isFounder
                          ? 'bg-oryon-coral/15 text-white border-oryon-coral/40'
                          : 'bg-oryon-cyan/15 text-white border-oryon-cyan/40'
                      }`}
                    >
                      {isFounder ? (
                        <Code2 className="w-3.5 h-3.5 text-oryon-coral shrink-0" />
                      ) : (
                        <Briefcase className="w-3.5 h-3.5 text-oryon-cyan shrink-0" />
                      )}
                      <span>{member.roleBadge}</span>
                    </span>

                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-[11px] font-mono text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{member.statusText}</span>
                    </span>
                  </div>

                  {/* Profile Header: Slightly Larger Image + Details */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-4">
                    {/* Demo Image (w-32 h-32 sm:w-36 sm:h-36) + Social Icons */}
                    <div className="flex flex-col items-center gap-2.5 shrink-0">
                      <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-oryon-border/60 group-hover:border-oryon-cyan transition-colors shadow-lg bg-oryon-surface">
                        {!hasError ? (
                          <img
                            src={member.image}
                            alt={member.title}
                            onError={() => handleImageError(member.id)}
                            className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          /* High-Tech Vector Fallback */
                          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-oryon-surface to-oryon-navy text-white">
                            {isFounder ? (
                              <Cpu className="w-12 h-12 text-oryon-coral" />
                            ) : (
                              <Layers className="w-12 h-12 text-oryon-cyan" />
                            )}
                            <span className="text-[10px] font-mono mt-1 text-oryon-grey/60 font-semibold uppercase">
                              Executive
                            </span>
                          </div>
                        )}
                        {/* High-tech corner accents */}
                        <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-oryon-cyan/80 pointer-events-none" />
                        <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-oryon-cyan/80 pointer-events-none" />
                      </div>

                      {/* Social Icons Strip */}
                      <div className="flex items-center gap-2">
                        {member.socials?.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.title} LinkedIn`}
                            className="p-1.5 rounded-lg bg-oryon-surface hover:bg-oryon-deep border border-white/10 hover:border-oryon-cyan text-oryon-grey/80 hover:text-white transition-all shadow-sm"
                          >
                            <Linkedin className="w-3.5 h-3.5 text-oryon-cyan" />
                          </a>
                        )}
                        {member.socials?.github && (
                          <a
                            href={member.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.title} GitHub`}
                            className="p-1.5 rounded-lg bg-oryon-surface hover:bg-oryon-deep border border-white/10 hover:border-oryon-coral text-oryon-grey/80 hover:text-white transition-all shadow-sm"
                          >
                            <Github className="w-3.5 h-3.5 text-oryon-coral" />
                          </a>
                        )}
                        {member.socials?.twitter && (
                          <a
                            href={member.socials.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.title} Twitter`}
                            className="p-1.5 rounded-lg bg-oryon-surface hover:bg-oryon-deep border border-white/10 hover:border-oryon-cyan text-oryon-grey/80 hover:text-white transition-all shadow-sm"
                          >
                            <Twitter className="w-3.5 h-3.5 text-oryon-cyan" />
                          </a>
                        )}
                        {member.socials?.email && (
                          <a
                            href={member.socials.email}
                            aria-label={`Email ${member.title}`}
                            className="p-1.5 rounded-lg bg-oryon-surface hover:bg-oryon-deep border border-white/10 hover:border-emerald-400 text-oryon-grey/80 hover:text-white transition-all shadow-sm"
                          >
                            <Mail className="w-3.5 h-3.5 text-emerald-400" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Titles, Headline & Concise Bio */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight mb-1 group-hover:text-cyan-100 transition-colors">
                        {member.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm font-semibold tracking-wide mb-2 ${
                          isFounder ? 'text-oryon-coral' : 'text-oryon-cyan'
                        }`}
                      >
                        {member.headline}
                      </p>
                      <p className="text-xs sm:text-sm text-oryon-grey/90 leading-relaxed mb-3">
                        {member.bio}
                      </p>

                      {/* Directives / Key Points Compact */}
                      <div className="space-y-1.5">
                        {member.highlights.map((point, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-oryon-grey/85">
                            <CheckCircle2
                              className={`w-3.5 h-3.5 shrink-0 ${
                                isFounder ? 'text-oryon-coral' : 'text-emerald-400'
                              }`}
                            />
                            <span className="truncate">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/[0.06] mb-3">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md bg-oryon-surface/80 text-oryon-grey/80 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Action Bar */}
                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs font-semibold text-oryon-grey/70 group-hover:text-white transition-colors">
                    {isFounder ? 'Technical Architecture Inquiry' : 'Strategic Corporate Inquiry'}
                  </span>
                  <button
                    onClick={() => {
                      if (onStartProject) {
                        onStartProject();
                      } else {
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      isFounder
                        ? 'bg-oryon-coral/15 hover:bg-oryon-coral text-white border border-oryon-coral/40 hover:border-oryon-coral shadow-sm'
                        : 'bg-oryon-cyan/15 hover:bg-oryon-cyan text-white hover:text-oryon-navy border border-oryon-cyan/40 hover:border-oryon-cyan shadow-sm'
                    }`}
                  >
                    <span>Connect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Executive CEO Desk Vision Statement */}
        <div className="mt-8 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-oryon-surface/80 via-[#072445]/60 to-oryon-surface/80 border border-oryon-cyan/20 max-w-4xl mx-auto shadow-xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-oryon-cyan/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left relative z-10">
            <div className="w-11 h-11 rounded-2xl bg-oryon-cyan/15 border border-oryon-cyan/30 flex items-center justify-center shrink-0 text-oryon-cyan shadow-sm">
              <Quote className="w-5 h-5" />
            </div>
            <div className="space-y-1 flex-1">
              <p className="text-sm sm:text-base text-white/95 italic font-sans leading-relaxed">
                "We build the technology so our clients lead the future. Every architecture we deliver is designed not just to meet today's requirements, but to scale with exponential market growth."
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-oryon-grey/75 font-mono">
                <span className="text-oryon-cyan font-semibold">From the CEO's Desk</span>
                <span>•</span>
                <span>Oryon Global Technologies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Excellence Commitment Footnote */}
        <div className="mt-5 p-3.5 rounded-2xl bg-oryon-surface/30 border border-oryon-border/20 text-center max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs text-oryon-grey/70">
          <ShieldCheck className="w-4 h-4 text-oryon-cyan shrink-0" />
          <span>
            Committed to continuous innovation, architectural scalability, and enterprise governance.
          </span>
        </div>
      </div>
    </section>
  );
}
