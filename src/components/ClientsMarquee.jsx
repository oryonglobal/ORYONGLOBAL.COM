import React, { useState } from 'react';
import {
  Globe2,
  Building2,
  CheckCircle2,
  Star,
  Quote,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const CLIENTS = [
  {
    id: 'nexa-cloud',
    companyName: 'NexaCloud Inc.',
    companyCategory: 'Cloud Infrastructure',
    countryFlag: '🇺🇸',
    countryName: 'United States',
    ceoName: 'Alexander Wright',
    ceoRole: 'CEO & Founder',
    ceoImage: '/images/clients/ceo-1.jpg',
    service: 'Enterprise Cloud Modernization',
    companyLogoColor: '#16C8E8',
    logoSvgType: 'cloud',
    rating: 5,
    tagline: 'Streamlined our multi-region cloud cluster deployment by 60%.',
  },
  {
    id: 'nordic-fin',
    companyName: 'NordicFin Digital',
    companyCategory: 'FinTech Banking',
    countryFlag: '🇸🇪',
    countryName: 'Sweden',
    ceoName: 'Henrik Lindqvist',
    ceoRole: 'Chief Executive Officer',
    ceoImage: '/images/clients/ceo-2.jpg',
    service: 'High-Frequency FinTech Architecture',
    companyLogoColor: '#38BDF8',
    logoSvgType: 'bank',
    rating: 5,
    tagline: 'Zero-latency financial data synchronization with strict ISO security.',
  },
  {
    id: 'apex-logistics',
    companyName: 'Apex Logistics Global',
    companyCategory: 'Supply Chain & Freight',
    countryFlag: '🇬🇧',
    countryName: 'United Kingdom',
    ceoName: 'Sarah Jenkins',
    ceoRole: 'CEO & Managing Director',
    ceoImage: '/images/clients/ceo-3.jpg',
    service: 'Fleet Telemetry & Tracking Platform',
    companyLogoColor: '#FF684A',
    logoSvgType: 'logistics',
    rating: 5,
    tagline: 'Unified 12,000+ fleet sensors into an intuitive real-time dispatcher.',
  },
  {
    id: 'cyber-kinetics',
    companyName: 'CyberKinetics Systems',
    companyCategory: 'Robotics & AI',
    countryFlag: '🇯🇵',
    countryName: 'Japan',
    ceoName: 'Hiroshi Tanaka',
    ceoRole: 'President & CEO',
    ceoImage: '/images/clients/ceo-4.jpg',
    service: 'Autonomous AI Workflow Engine',
    companyLogoColor: '#A855F7',
    logoSvgType: 'ai',
    rating: 5,
    tagline: 'World-class AI data extraction and predictive telemetry engineering.',
  },
  {
    id: 'vertex-horizon',
    companyName: 'Vertex Horizon Enterprises',
    companyCategory: 'Energy & Smart Cities',
    countryFlag: '🇦🇪',
    countryName: 'United Arab Emirates',
    ceoName: 'Tariq Al-Mansoor',
    ceoRole: 'Group CEO',
    ceoImage: '/images/clients/ceo-5.jpg',
    service: 'Scalable Enterprise ERP Portal',
    companyLogoColor: '#10B981',
    logoSvgType: 'energy',
    rating: 5,
    tagline: 'A seamless, resilient platform that empowered our operational scaling.',
  },
  {
    id: 'stratum-auto',
    companyName: 'Stratum Automations',
    companyCategory: 'Industrial Automation',
    countryFlag: '🇩🇪',
    countryName: 'Germany',
    ceoName: 'Elena Vogel',
    ceoRole: 'Chief Executive Officer',
    ceoImage: '/images/clients/ceo-6.jpg',
    service: 'Industry 4.0 Telemetry Sync',
    companyLogoColor: '#F59E0B',
    logoSvgType: 'industry',
    rating: 5,
    tagline: 'Exceptional code discipline and robust microservices architecture.',
  },
  {
    id: 'cloud-matrix',
    companyName: 'CloudMatrix Labs',
    companyCategory: 'Enterprise SaaS',
    countryFlag: '🇦🇺',
    countryName: 'Australia',
    ceoName: 'Liam O’Connor',
    ceoRole: 'Founder & CEO',
    ceoImage: '/images/clients/ceo-7.jpg',
    service: 'Full-Stack Custom SaaS Platform',
    companyLogoColor: '#06B6D4',
    logoSvgType: 'matrix',
    rating: 5,
    tagline: 'Turned our prototype into an enterprise-ready system in record time.',
  },
  {
    id: 'datasphere-intl',
    companyName: 'DataSphere Analytics',
    companyCategory: 'Big Data & Analytics',
    countryFlag: '🇨🇦',
    countryName: 'Canada',
    ceoName: 'Marcus Vance',
    ceoRole: 'Chief Executive Officer',
    ceoImage: '/images/clients/ceo-8.jpg',
    service: 'Distributed Data Lakehouse',
    companyLogoColor: '#EC4899',
    logoSvgType: 'data',
    rating: 5,
    tagline: 'Engineered for sub-second query performance across petabyte datasets.',
  },
];

// Duplicate items twice to ensure unbroken, continuous infinite marquee
const MARQUEE_ITEMS = [...CLIENTS, ...CLIENTS];

export default function ClientsMarquee() {
  const [imgErrors, setImgErrors] = useState({});

  const handleImageError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="clients" className="py-8 sm:py-10 bg-gradient-to-b from-[#041021] via-[#061B35] to-[#030C19] relative overflow-hidden border-y border-white/[0.06]">
      {/* Background Subtle Tech Lines */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#16c8e8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oryon-surface border border-oryon-border/30 mb-2.5 shadow-sm">
          <Globe2 className="w-3.5 h-3.5 text-oryon-cyan animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-oryon-cyan font-mono">
            GLOBAL CLIENT ECOSYSTEM
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-heading tracking-tight mb-2">
          Trusted by Enterprise Leaders Worldwide
        </h2>

        <p className="text-xs sm:text-sm text-oryon-grey/80 max-w-2xl mx-auto">
          Delivering engineering precision and mission-critical software solutions to forward-thinking 
          CEOs across North America, Europe, Asia-Pacific, and the Middle East.
        </p>
      </div>

      {/* Infinite Left Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden select-none py-2">
        {/* Left & Right Smooth Edge Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#041224] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#041224] to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee-infinite flex gap-6 px-4">
          {MARQUEE_ITEMS.map((client, index) => {
            const hasError = imgErrors[`${client.id}-${index}`];

            return (
              <div
                key={`${client.id}-${index}`}
                className="w-[320px] sm:w-[350px] shrink-0 p-5 rounded-2xl bg-gradient-to-b from-[#082343]/90 via-[#071F3B]/80 to-[#05162B]/90 border border-oryon-border/30 hover:border-oryon-cyan/60 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Card Header: Company Logo, Name, Category & Country Flag */}
                <div className="flex items-center justify-between gap-3 pb-3.5 mb-3.5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    {/* Modern Vector Company Logo Mark */}
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center p-1.5 shadow-sm border border-white/10 shrink-0"
                      style={{
                        backgroundColor: `${client.companyLogoColor}15`,
                        borderColor: `${client.companyLogoColor}40`,
                      }}
                    >
                      <CompanyLogoIcon type={client.logoSvgType} color={client.companyLogoColor} />
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white font-heading leading-snug group-hover:text-cyan-200 transition-colors">
                        {client.companyName}
                      </h4>
                      <span className="text-[10px] font-mono text-oryon-grey/60 block -mt-0.5">
                        {client.companyCategory}
                      </span>
                    </div>
                  </div>

                  {/* Country Flag & Code Badge */}
                  <div
                    className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/40 border border-white/10 text-xs shrink-0"
                    title={client.countryName}
                  >
                    <span className="text-sm leading-none">{client.countryFlag}</span>
                    <span className="text-[10px] font-mono text-oryon-grey/70 uppercase">
                      {client.countryName.split(' ')[0]}
                    </span>
                  </div>
                </div>

                {/* Scope of Work Badge */}
                <div className="mb-3 flex items-center justify-between text-[11px]">
                  <span className="px-2.5 py-0.5 rounded-full bg-oryon-surface text-oryon-cyan font-mono text-[10px] border border-oryon-cyan/20">
                    {client.service}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 stroke-none" />
                    ))}
                  </div>
                </div>

                {/* Brief Impact Note */}
                <p className="text-xs text-oryon-grey/85 leading-relaxed mb-4 italic font-normal line-clamp-2">
                  "{client.tagline}"
                </p>

                {/* Card Footer: Client CEO Profile */}
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                  <div className="flex items-center gap-2.5">
                    {/* CEO Avatar Image */}
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-oryon-cyan/40 shrink-0 bg-oryon-surface shadow-sm">
                      {!hasError ? (
                        <img
                          src={client.ceoImage}
                          alt={client.ceoName}
                          onError={() => handleImageError(`${client.id}-${index}`)}
                          className="w-full h-full object-cover filter brightness-95"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-oryon-deep text-[11px] font-bold text-oryon-cyan">
                          {client.ceoName.split(' ').map((n) => n[0]).join('')}
                        </div>
                      )}
                      {/* Active green status dot */}
                      <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-[#061830]" />
                    </div>

                    <div>
                      <h5 className="text-xs font-bold text-white leading-tight">
                        {client.ceoName}
                      </h5>
                      <span className="text-[10px] text-oryon-grey/60 font-medium block">
                        {client.ceoRole}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center mt-6">
        <span className="text-[11px] font-mono text-oryon-grey/50">
          Hover over any client card to pause marquee • Confidential agreements strictly honored
        </span>
      </div>
    </section>
  );
}

// Modern Vector Icons for Client Company Logos
function CompanyLogoIcon({ type, color = '#16C8E8' }) {
  switch (type) {
    case 'cloud':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth="2.2" stroke={color}>
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      );
    case 'bank':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth="2.2" stroke={color}>
          <polygon points="12 2 2 7 22 7" />
          <line x1="5" y1="10" x2="5" y2="17" />
          <line x1="12" y1="10" x2="12" y2="17" />
          <line x1="19" y1="10" x2="19" y2="17" />
          <line x1="2" y1="21" x2="22" y2="21" />
        </svg>
      );
    case 'logistics':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth="2.2" stroke={color}>
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth="2.2" stroke={color}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <circle cx="15" cy="15" r="2" />
          <line x1="9" y1="11" x2="15" y2="13" />
        </svg>
      );
    case 'energy':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth="2.2" stroke={color}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'industry':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth="2.2" stroke={color}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
        </svg>
      );
    case 'matrix':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth="2.2" stroke={color}>
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      );
    case 'data':
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-current" strokeWidth="2.2" stroke={color}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
  }
}
