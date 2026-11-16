import React, { useState } from 'react';
import {
  Globe,
  Monitor,
  Smartphone,
  LayoutDashboard,
  TrendingUp,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Server,
  Code2,
  Compass,
  Clock,
  MapPin,
  Flag,
  Sparkles,
  Zap,
  Users,
  HardDrive,
  ExternalLink,
  X,
  Send,
  MessageSquare,
  Mail,
  Check,
  Plus,
} from 'lucide-react';

const PLATFORMS = [
  {
    id: 'web-admin',
    title: 'Web & Dynamic Admin Portals',
    shortName: 'Web & Admin Portals',
    subtitle: 'Large-scale, small & agile dynamic web platforms with full-featured super-admin dashboards.',
    icon: LayoutDashboard,
    badge: 'Web & Enterprise Portals',
    description:
      'We engineer modern, dynamic web applications ranging from high-conversion startup portals to distributed multi-tenant enterprise web ecosystems. Every solution comes equipped with a custom-engineered Admin Dashboard featuring role-based access, live telemetry, and automated operational workflows.',
    capabilities: [
      {
        title: 'Dynamic Super-Admin Portals',
        desc: 'Role-Based Access Control (RBAC), user permissions, audit logs, and granular tenant management.',
      },
      {
        title: 'Real-Time Operational Analytics',
        desc: 'Interactive live telemetry, revenue tracking, transaction queues, and automated reporting.',
      },
      {
        title: 'Scale Flexibility (Small to Enterprise)',
        desc: 'Architected for rapid lightweight MVPs through to distributed cloud architectures handling millions of requests.',
      },
      {
        title: 'High-Converting Frontends',
        desc: 'Sub-second load times, SEO-optimized SSR/SSG, accessible UI/UX, and responsive layouts across all devices.',
      },
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'GraphQL', 'Redis', 'Docker'],
    deliverables: ['Custom Web App', 'Super-Admin Console', 'REST / GraphQL APIs', 'Cloud CI/CD Pipeline'],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps (iOS & Android)',
    shortName: 'Mobile Apps (iOS & Android)',
    subtitle: 'Native and hybrid mobile applications built for fluid 60FPS speed and enterprise scale.',
    icon: Smartphone,
    badge: 'iOS & Android Native / Hybrid',
    description:
      'From customer-facing consumer apps to enterprise field utilities, we build robust iOS and Android applications. Designed with offline-first architectures, biometric security, real-time push engines, and seamless deployment to Apple App Store and Google Play Store.',
    capabilities: [
      {
        title: 'Native iOS & Android Deployment',
        desc: 'Optimized Swift / SwiftUI for iOS and Kotlin / Jetpack Compose for Android with native OS performance.',
      },
      {
        title: 'Cross-Platform Unified Codebases',
        desc: 'High-performance React Native and Flutter solutions that reduce time-to-market by 40% with unified logic.',
      },
      {
        title: 'Offline Sync & Real-Time Engines',
        desc: 'Local SQLite/WatermelonDB storage with conflict-free background data synchronization and WebSockets.',
      },
      {
        title: 'Store Compliance & In-App Purchases',
        desc: 'Turnkey submission support, Apple Pay, Google Pay, biometric FaceID/Fingerprint auth, and push systems.',
      },
    ],
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'SQLite', 'WebSockets', 'GraphQL'],
    deliverables: ['iOS App (.ipa)', 'Android App (.apk / .aab)', 'Push Notification Backend', 'Store Submission'],
  },
  {
    id: 'desktop-software',
    title: 'Desktop Software (Windows, Mac, Linux)',
    shortName: 'Desktop Software (Win, Mac, Linux)',
    subtitle: 'Native cross-platform desktop applications engineered for high performance and offline reliability.',
    icon: Monitor,
    badge: 'Windows • macOS • Linux',
    description:
      'When your business demands system-level hardware access, high-compute throughput, offline isolation, or dedicated local software, we build native desktop applications supporting Windows (x64 / ARM), macOS (Universal Apple Silicon & Intel), and Linux distributions.',
    capabilities: [
      {
        title: 'Windows Native Applications',
        desc: 'MSIX, EXE installers with .NET, C#, C++, or lightweight Electron/Tauri wrappers optimized for Windows 10/11.',
      },
      {
        title: 'macOS Apple Silicon & Intel',
        desc: 'Notarized DMG installers engineered for macOS Sonoma & Sequoia, leveraging Cocoa, Metal, and native M-series Silicon.',
      },
      {
        title: 'Linux Packages & Enterprise Daemons',
        desc: 'Debian (.deb), RPM, Snap, and AppImage packages with systemd background service management.',
      },
      {
        title: 'Hardware & Local Device Integration',
        desc: 'Direct serial port, BLE, local camera, POS peripheral, barcode scanners, and custom USB driver communication.',
      },
    ],
    techStack: ['Tauri', 'Rust', 'C# / .NET', 'Electron', 'C++', 'Swift / Cocoa', 'Qt', 'SQLite Native'],
    deliverables: ['Windows Installer (.exe / .msix)', 'macOS Notarized .dmg', 'Linux .deb / AppImage', 'Auto-Updater'],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Sales Growth',
    shortName: 'Digital Marketing & Sales',
    subtitle: 'High-ROI digital growth strategies, performance ad funnels, and automated sales engines.',
    icon: TrendingUp,
    badge: 'Brand Growth & Revenue',
    description:
      'We combine data-driven performance marketing with modern automation to help businesses attract high-intent leads, dominate search engines, and maximize revenue. From paid ads management to AI-powered sales funnels, we scale your customer acquisition.',
    capabilities: [
      {
        title: 'Paid Ads Management',
        desc: 'High-ROI campaigns across Google Search, Meta (Facebook & Instagram), and LinkedIn Ads.',
      },
      {
        title: 'Technical SEO & Content Strategy',
        desc: 'Keyword ranking, technical audits, on-page optimization, and authority-building content marketing.',
      },
      {
        title: 'Lead Generation Funnels',
        desc: 'High-converting landing pages, CRM integration, automated email nurture sequences, and inbound sales pipelines.',
      },
      {
        title: 'AI Marketing Automation',
        desc: 'AI-driven copy testing, behavioral triggers, conversion rate telemetry, and automated audience segmentation.',
      },
    ],
    techStack: ['Google Ads', 'Meta Ads', 'Google Analytics 4', 'SEMrush', 'HubSpot', 'Zapier', 'OpenAI AI', 'Klaviyo'],
    deliverables: ['Performance Ad Campaigns', 'Technical SEO Strategy', 'Automated Lead Pipeline', 'Monthly Analytics Telemetry'],
  },
];

const REGIONS = [
  {
    id: 'usa',
    country: 'United States & North America',
    share: '65%+ of Enterprise Portfolio',
    flag: '🇺🇸',
    title: 'Primary Enterprise Client Base in the USA',
    summary:
      'The majority of our enterprise engagements originate from forward-thinking CEOs, CTOs, and product leaders across the United States — spanning Silicon Valley, New York, Texas, Washington, and Chicago.',
    highlights: [
      'Dedicated 4 to 8 hours daily US time zone overlap (EST / CST / PST).',
      'Direct Slack/Teams channels with senior architects — no intermediate account managers.',
      'Silicon Valley caliber architecture at highly optimized engineering cost efficiency.',
      'Strict US-compliant IP assignment, bilateral NDAs, and SOC-2 standard confidentiality.',
    ],
    keySectors: ['SaaS & Cloud Platforms', 'FinTech & Wealth Management', 'HealthTech & HIPAA', 'AI Automation'],
  },
  {
    id: 'india',
    country: 'India & Asia-Pacific',
    share: 'Engineering Headquarters & Domestic Innovators',
    flag: '🇮🇳',
    title: 'Engineering Core with Deep Domestic Footprint',
    summary:
      'Proudly headquartered in India with senior engineering delivery centers. We partner with Indian enterprise innovators, fast-scaling unicorns, and high-growth startups across Bangalore, Mumbai, Delhi-NCR, Hyderabad, and Pune.',
    highlights: [
      'Elite senior engineering talent recruited from premier technical institutions.',
      'Rapid physical and digital sprint alignment across Indian business hours (IST).',
      'Deep expertise in domestic digital public infrastructure (UPI, Aadhaar, GSTN APIs).',
      'Seamless dual-currency (INR & USD) invoicing with transparent milestone pricing.',
    ],
    keySectors: ['Enterprise ERP & Supply Chain', 'High-Growth Tech Startups', 'Logistics & Quick Commerce', 'EdTech & B2B'],
  },
  {
    id: 'europe',
    country: 'Europe, UK & Middle East',
    share: 'Global Expansion Footprint',
    flag: '🌍',
    title: 'Strategic Delivery Across EMEA Markets',
    summary:
      'Serving international corporations across the United Kingdom, Germany, the Netherlands, alongside cutting-edge enterprises in the United Arab Emirates (Dubai / Abu Dhabi) and Saudi Arabia.',
    highlights: [
      'Full GDPR compliance, localized data residency, and zero-retention architecture.',
      'Natural London (GMT) & Dubai (GST) time zone synergy for same-day delivery reviews.',
      'Cross-border digital contract protection with multi-currency remittance support.',
      'Custom multilingual UI and multi-currency payment checkout integration.',
    ],
    keySectors: ['European FinTech & Banking', 'GCC Real Estate & Smart Portals', 'Cross-Border Logistics', 'B2B Marketplaces'],
  },
];

export default function SoftwareEcosystem({ onStartProject }) {
  // Top 4 options: active tab state
  const [activeTab, setActiveTab] = useState('web-admin');
  const [activeRegion, setActiveRegion] = useState('usa');

  // Interactive tech stacks per platform (client can toggle or add custom tech)
  const [customTechMap, setCustomTechMap] = useState(() => {
    const initial = {};
    PLATFORMS.forEach((p) => {
      initial[p.id] = [...p.techStack];
    });
    return initial;
  });

  const [activeSelectedTechs, setActiveSelectedTechs] = useState(() => {
    const initial = {};
    PLATFORMS.forEach((p) => {
      initial[p.id] = [...p.techStack];
    });
    return initial;
  });

  const [customTechInput, setCustomTechInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Client modal form state
  const [clientForm, setClientForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
  });

  const currentPlatform = PLATFORMS.find((p) => p.id === activeTab) || PLATFORMS[0];
  const currentRegion = REGIONS.find((r) => r.id === activeRegion) || REGIONS[0];

  const currentPlatformTechs = customTechMap[activeTab] || currentPlatform.techStack;
  const currentSelectedTechs = activeSelectedTechs[activeTab] || currentPlatformTechs;

  // Toggle tech selection
  const handleToggleTech = (tech) => {
    setActiveSelectedTechs((prev) => {
      const list = prev[activeTab] || [];
      if (list.includes(tech)) {
        return { ...prev, [activeTab]: list.filter((t) => t !== tech) };
      } else {
        return { ...prev, [activeTab]: [...list, tech] };
      }
    });
  };

  // Add custom tech to active platform
  const handleAddCustomTech = (e) => {
    e.preventDefault();
    if (!customTechInput.trim()) return;
    const trimmed = customTechInput.trim();

    setCustomTechMap((prev) => {
      const list = prev[activeTab] || [];
      if (!list.includes(trimmed)) {
        return { ...prev, [activeTab]: [...list, trimmed] };
      }
      return prev;
    });

    setActiveSelectedTechs((prev) => {
      const list = prev[activeTab] || [];
      if (!list.includes(trimmed)) {
        return { ...prev, [activeTab]: [...list, trimmed] };
      }
      return prev;
    });

    setCustomTechInput('');
  };

  // Submit client specification
  const handleSubmitSpecification = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dossier = {
      platform: currentPlatform.title,
      badge: currentPlatform.badge,
      techStack: currentSelectedTechs,
      client: { ...clientForm },
      submittedAt: new Date().toLocaleString(),
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(dossier);
    }, 600);
  };

  const getWhatsAppMessage = (data) => {
    if (!data) return '';
    const text = `*New Project Requirement - Oryon Global Website*\n\n` +
      `*Client Name:* ${data.client.name}\n` +
      `*Company:* ${data.client.company || 'Not Specified'}\n` +
      `*Work Email:* ${data.client.email}\n` +
      `*Phone/WhatsApp:* ${data.client.phone}\n\n` +
      `*Required Domain:* ${data.platform}\n\n` +
      `*Configured Tech Stack (${data.techStack.length}):*\n` +
      data.techStack.join(', ') + `\n\n` +
      (data.client.notes ? `*Custom Notes / Requirements:*\n${data.client.notes}\n\n` : '') +
      `*Submission Date:* ${data.submittedAt}`;
    return encodeURIComponent(text);
  };

  return (
    <section id="capabilities" className="py-10 lg:py-14 bg-[#030C19] relative overflow-hidden border-t border-white/[0.06]">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-oryon-tech/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-oryon-cyan/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#16c8e8_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================= */}
        {/* PART 1: FULL-SPECTRUM SOFTWARE ENGINEERING CAPABILITIES */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oryon-surface border border-oryon-cyan/30 mb-2.5 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-oryon-cyan animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-oryon-cyan font-mono">
              FULL-SPECTRUM SOFTWARE ENGINEERING
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight mb-3">
            What We Build.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-oryon-cyan via-cyan-100 to-white">
              Every Screen. Every Platform.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-oryon-grey/85 leading-relaxed text-balance">
            Whether you need a dynamic web app with a custom super-admin portal, high-performance iOS and Android apps,
            native software for Windows, Mac, and Linux, or high-ROI digital marketing — we deliver end-to-end architectures that scale.
          </p>
        </div>

        {/* ========================================================= */}
        {/* TOP 4 SELECTION TABS (CLEAN HORIZONTAL PILLS AS PREVIOUSLY SET) */}
        {/* ========================================================= */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8">
          {PLATFORMS.map((platform) => {
            const Icon = platform.icon;
            const isActive = activeTab === platform.id;
            return (
              <button
                key={platform.id}
                onClick={() => setActiveTab(platform.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-oryon-tech to-oryon-deep text-white border border-oryon-cyan/60 shadow-[0_0_20px_rgba(22,200,232,0.25)]'
                    : 'bg-oryon-surface/60 text-oryon-grey/75 hover:text-white hover:bg-oryon-surface border border-oryon-border/30'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-oryon-cyan' : 'text-oryon-grey/60'}`} />
                <span>{platform.title}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* ACTIVE PLATFORM SHOWCASE CARD (AS PREVIOUSLY SET) */}
        {/* ========================================================= */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-oryon-surface/70 via-oryon-deep/40 to-[#041021]/80 border border-oryon-cyan/30 shadow-2xl backdrop-blur-md relative overflow-hidden mb-12 sm:mb-14">
          <div className="absolute top-0 right-0 w-80 h-80 bg-oryon-cyan/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left 7 Columns: Core Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-oryon-cyan/15 text-oryon-cyan border border-oryon-cyan/30">
                  {currentPlatform.badge}
                </span>
                <span className="text-xs text-oryon-grey/70">Production Turnkey Engineering</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                {currentPlatform.title}
              </h3>

              <p className="text-sm sm:text-base text-oryon-grey/85 leading-relaxed">
                {currentPlatform.description}
              </p>

              {/* 4 Feature Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {currentPlatform.capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-oryon-navy/70 border border-white/5 hover:border-oryon-cyan/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-oryon-cyan shrink-0" />
                      <h4 className="text-sm font-bold text-white font-heading">{cap.title}</h4>
                    </div>
                    <p className="text-xs text-oryon-grey/75 leading-relaxed pl-6">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Deliverables, Interactive Tech Stack & Action */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-l lg:border-white/[0.08] lg:pl-8">
              {/* Deliverables Box */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <HardDrive className="w-4 h-4 text-oryon-coral" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                    Production Deliverables
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {currentPlatform.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 rounded-lg bg-oryon-surface/80 border border-oryon-border/30 text-xs text-white font-medium flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-oryon-coral" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Technologies Chips (Clickable to Edit/Toggle + Add Custom Tech) */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-oryon-cyan" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                      Core Technologies
                    </span>
                  </div>
                  <span className="text-[10px] text-oryon-grey/60 font-mono">
                    Click to edit tech stack
                  </span>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {currentPlatformTechs.map((tech, i) => {
                    const isSelected = currentSelectedTechs.includes(tech);
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleToggleTech(tech)}
                        className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all border ${
                          isSelected
                            ? 'bg-oryon-cyan/20 border-oryon-cyan text-white shadow-sm'
                            : 'bg-white/5 border-white/10 text-oryon-grey/50 line-through opacity-50 hover:opacity-80'
                        }`}
                        title={isSelected ? 'Click to deselect' : 'Click to select'}
                      >
                        {tech}
                      </button>
                    );
                  })}
                </div>

                {/* Custom Tech Stack Input */}
                <form onSubmit={handleAddCustomTech} className="flex gap-1.5">
                  <input
                    type="text"
                    value={customTechInput}
                    onChange={(e) => setCustomTechInput(e.target.value)}
                    placeholder="+ Add custom tech (e.g. Python, AWS...)"
                    className="flex-1 px-3 py-1.5 rounded-lg bg-oryon-darkBg/90 border border-white/10 text-xs text-white placeholder-oryon-grey/40 focus:border-oryon-cyan focus:outline-none font-mono"
                  />
                  <button
                    type="submit"
                    disabled={!customTechInput.trim()}
                    className="px-3 py-1.5 rounded-lg bg-oryon-surface hover:bg-oryon-deep text-xs font-mono text-oryon-cyan border border-oryon-cyan/30 disabled:opacity-40"
                  >
                    + Add
                  </button>
                </form>
              </div>

              {/* Action Box */}
              <div className="p-4 rounded-2xl bg-oryon-deep/70 border border-oryon-cyan/20 space-y-3">
                <div className="flex items-center justify-between text-xs text-oryon-grey/80">
                  <span>Architecture & Delivery Estimate:</span>
                  <span className="text-white font-semibold font-mono">24 – 48 Hours</span>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-oryon-coral to-oryon-coralHover text-white text-xs sm:text-sm font-bold shadow-glow-coral hover:shadow-[0_0_25px_rgba(255,104,74,0.5)] transition-all"
                >
                  <span>Scope Your {currentPlatform.shortName.split(' ')[0]} Project &rarr;</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE SCOPE & SUBMISSION MODAL */}
        {/* ========================================================= */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-[#04182E] border border-oryon-cyan/40 shadow-2xl overflow-y-auto max-h-[90vh]">
              {/* Close Button */}
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setSubmittedData(null);
                }}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-oryon-grey/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {submittedData ? (
                /* Success & Transmission Confirmation */
                <div className="space-y-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading">
                      Requirements Captured Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-oryon-grey/80 mt-1 max-w-md mx-auto">
                      Our architecture leads have received your selected domain and customized tech stack.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-xl bg-oryon-surface text-left text-xs space-y-2 border border-white/5">
                    <div>
                      <span className="text-oryon-grey/60 font-mono uppercase text-[10px] block">Domain:</span>
                      <span className="text-white font-bold">{submittedData.platform}</span>
                    </div>
                    <div>
                      <span className="text-oryon-grey/60 font-mono uppercase text-[10px] block">Configured Tech Stack:</span>
                      <span className="text-oryon-cyan font-mono">{submittedData.techStack.join(', ')}</span>
                    </div>
                    <div>
                      <span className="text-oryon-grey/60 font-mono uppercase text-[10px] block">Client:</span>
                      <span className="text-white font-semibold">{submittedData.client.name} ({submittedData.client.phone})</span>
                    </div>
                  </div>

                  {/* Transmission Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={`https://wa.me/919658844199?text=${getWhatsAppMessage(submittedData)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold shadow-lg transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send to WhatsApp (+91 96588 44199)</span>
                    </a>

                    <a
                      href={`mailto:official@oryonglobal.com?subject=${encodeURIComponent(`Project Scope: ${submittedData.platform} - ${submittedData.client.name}`)}&body=${getWhatsAppMessage(submittedData)}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-oryon-surface hover:bg-oryon-deep text-white text-xs sm:text-sm font-semibold border border-white/20 transition-all"
                    >
                      <Mail className="w-4 h-4 text-oryon-cyan" />
                      <span>Send via Email</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Submission Form */
                <form onSubmit={handleSubmitSpecification} className="space-y-4 text-left">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oryon-surface border border-oryon-cyan/30 mb-2">
                      <Send className="w-3.5 h-3.5 text-oryon-cyan" />
                      <span className="text-xs font-semibold uppercase tracking-widest text-oryon-cyan font-mono">
                        PROJECT SPECIFICATION
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                      Submit Your {currentPlatform.shortName} Requirements
                    </h3>
                    <p className="text-xs text-oryon-grey/80 mt-1">
                      Our engineers evaluate your requirements and return a detailed architectural blueprint within 24–48 hours.
                    </p>
                  </div>

                  {/* Configured Tech Stack Summary in Modal */}
                  <div className="p-3.5 rounded-xl bg-oryon-surface border border-white/5">
                    <span className="text-[11px] font-mono text-oryon-grey/70 block mb-1.5 uppercase">
                      Selected Tech Stack ({currentSelectedTechs.length} technologies):
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {currentSelectedTechs.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-oryon-cyan font-mono text-[11px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono text-oryon-grey/80 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={clientForm.name}
                        onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-oryon-darkBg/90 border border-white/10 focus:border-oryon-cyan focus:outline-none text-xs text-white placeholder-oryon-grey/40"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-oryon-grey/80 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={clientForm.email}
                        onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-oryon-darkBg/90 border border-white/10 focus:border-oryon-cyan focus:outline-none text-xs text-white placeholder-oryon-grey/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono text-oryon-grey/80 mb-1">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={clientForm.phone}
                        onChange={(e) => setClientForm({ ...clientForm, phone: e.target.value })}
                        placeholder="+1 (555)... or +91..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-oryon-darkBg/90 border border-white/10 focus:border-oryon-cyan focus:outline-none text-xs text-white placeholder-oryon-grey/40"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-oryon-grey/80 mb-1">
                        Company / Project Name
                      </label>
                      <input
                        type="text"
                        value={clientForm.company}
                        onChange={(e) => setClientForm({ ...clientForm, company: e.target.value })}
                        placeholder="e.g. Acme Labs"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-oryon-darkBg/90 border border-white/10 focus:border-oryon-cyan focus:outline-none text-xs text-white placeholder-oryon-grey/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-oryon-grey/80 mb-1">
                      Project Goals, Specific Features or Target Launch
                    </label>
                    <textarea
                      rows={3}
                      value={clientForm.notes}
                      onChange={(e) => setClientForm({ ...clientForm, notes: e.target.value })}
                      placeholder="Briefly describe what you're building, target user count, or any specific requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-oryon-darkBg/90 border border-white/10 focus:border-oryon-cyan focus:outline-none text-xs text-white placeholder-oryon-grey/40 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-oryon-coral to-oryon-coralHover text-white text-xs sm:text-sm font-bold shadow-glow-coral hover:shadow-[0_0_25px_rgba(255,104,74,0.6)] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Specification...</span>
                    ) : (
                      <>
                        <span>Submit Project Specification</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PART 2: GLOBAL CLIENT FOOTPRINT & INDIAN ENGINEERING CORE */}
        {/* ========================================================= */}
        <div className="mt-12 sm:mt-16 pt-10 border-t border-white/[0.08]">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oryon-surface border border-oryon-border/30 mb-2.5 shadow-sm">
              <Globe className="w-3.5 h-3.5 text-oryon-cyan animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-oryon-cyan font-mono">
                GLOBAL FOOTPRINT • INDIAN ENGINEERING POWERHOUSE
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-heading tracking-tight mb-3">
              Headquartered in India.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-oryon-cyan via-cyan-100 to-white">
                Trusted Across the USA & Worldwide.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-oryon-grey/85 leading-relaxed max-w-2xl mx-auto">
              We leverage top-tier Indian software architects to build mission-critical digital systems.
              Over 65% of our client base is in the United States, alongside high-growth enterprises in India,
              Europe, and the Middle East.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-oryon-surface/50 border border-white/5 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-heading">
                65%+
              </span>
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-oryon-cyan">
                US & North America Clients
              </span>
              <p className="text-[11px] text-oryon-grey/60 mt-1">Silicon Valley, NY, TX, WA</p>
            </div>

            <div className="p-4 rounded-2xl bg-oryon-surface/50 border border-white/5 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-heading">
                100%
              </span>
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-emerald-400">
                Indian Engineering Bench
              </span>
              <p className="text-[11px] text-oryon-grey/60 mt-1">Senior architects & developers</p>
            </div>

            <div className="p-4 rounded-2xl bg-oryon-surface/50 border border-white/5 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-heading">
                4-8 Hrs
              </span>
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-oryon-cyan">
                Daily US Time Zone Overlap
              </span>
              <p className="text-[11px] text-oryon-grey/60 mt-1">Direct EST / PST alignment</p>
            </div>

            <div className="p-4 rounded-2xl bg-oryon-surface/50 border border-white/5 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Zero
              </span>
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-oryon-coral">
                IP Compromise
              </span>
              <p className="text-[11px] text-oryon-grey/60 mt-1">US-grade legal NDA & ownership</p>
            </div>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {REGIONS.map((reg) => (
              <button
                key={reg.id}
                onClick={() => setActiveRegion(reg.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeRegion === reg.id
                    ? 'bg-oryon-deep text-white border border-oryon-cyan/50 shadow-sm'
                    : 'bg-oryon-surface/40 text-oryon-grey/70 hover:text-white border border-white/5'
                }`}
              >
                <span>{reg.flag}</span>
                <span>{reg.country}</span>
              </button>
            ))}
          </div>

          {/* Active Region Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-oryon-surface/60 border border-oryon-border/30 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/[0.06]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{currentRegion.flag}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                    {currentRegion.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-oryon-grey/80">{currentRegion.summary}</p>
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-oryon-navy border border-oryon-cyan/30 text-xs font-mono font-semibold text-oryon-cyan shrink-0">
                {currentRegion.share}
              </div>
            </div>

            {/* Highlights & Key Sectors */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-white font-mono block">
                  Delivery Guarantees & Operational Model:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentRegion.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-oryon-grey/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-oryon-cyan mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-4 space-y-2 md:border-l md:border-white/[0.06] md:pl-6">
                <span className="text-xs font-bold uppercase tracking-wider text-white font-mono block">
                  Active Verticals in Region:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentRegion.keySectors.map((sector, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/90"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
