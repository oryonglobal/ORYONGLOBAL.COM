import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Code2,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  Users,
  Send,
  Building2,
  ShieldCheck,
  Zap,
  Cpu,
  Laptop,
  Smartphone,
  ChevronRight,
  FileText,
  Mail,
  Phone,
  Link as LinkIcon,
  X,
  Filter,
} from 'lucide-react';

const OPEN_POSITIONS = [
  {
    id: 'fullstack-sr',
    title: 'Senior Full-Stack Engineer',
    department: 'Web Platforms & Admin Portals',
    location: 'Remote (India / US Overlap)',
    type: 'Full-Time',
    experience: '4+ Years',
    badge: 'Urgent Hiring',
    description:
      'Lead the architecture and implementation of scalable web applications and comprehensive super-admin portals for our US and international enterprise clients. Drive sub-second frontend performance and resilient backend APIs.',
    requirements: [
      'Deep mastery of React, Next.js, TypeScript, and modern state architecture.',
      'Strong backend fundamentals in Node.js, PostgreSQL, GraphQL, and Redis caching.',
      'Experience architecting multi-tenant role-based access control (RBAC) admin dashboards.',
      'Proven experience working with cloud infrastructure (AWS / GCP / Docker).',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'GraphQL', 'Docker'],
  },
  {
    id: 'mobile-lead',
    title: 'Senior Mobile App Architect',
    department: 'Mobile Engineering',
    location: 'Remote / Hybrid (India Hub)',
    type: 'Full-Time',
    experience: '3+ Years',
    badge: 'Featured Role',
    description:
      'Build consumer and enterprise mobile applications for iOS and Android. Ensure fluid 60FPS UI performance, offline data synchronization, biometric authentication, and seamless App Store & Google Play deployments.',
    requirements: [
      'Demonstrated expertise in Flutter or React Native with native bridge integration.',
      'Solid understanding of native iOS (Swift/SwiftUI) or Android (Kotlin) internals.',
      'Experience with offline-first SQLite/WatermelonDB data architecture and WebSockets.',
      'Familiarity with Apple & Google Play Store submission pipelines and guidelines.',
    ],
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'SQLite', 'WebSockets', 'Firebase'],
  },
  {
    id: 'desktop-engineer',
    title: 'Desktop Software Engineer',
    department: 'Systems & Native Applications',
    location: 'Remote / India Delivery Center',
    type: 'Full-Time',
    experience: '3+ Years',
    badge: 'Specialized',
    description:
      'Engineer cross-platform desktop applications and background daemon services for Windows, macOS (Universal Silicon), and Linux. Implement local hardware communication, secure local databases, and high-performance computation engines.',
    requirements: [
      'Strong hands-on experience with Tauri, Electron, or native C# / .NET / C++ desktop tools.',
      'Understanding of OS-specific packaging (MSIX, .exe, macOS .dmg notarization, Linux .deb/AppImage).',
      'Knowledge of system-level I/O, serial devices, local SQLite optimizations, and auto-updaters.',
      'Passion for low memory footprint and rock-solid offline reliability.',
    ],
    techStack: ['Tauri', 'Rust', 'C# / .NET', 'Electron', 'C++', 'macOS Cocoa', 'SQLite Native'],
  },
  {
    id: 'cloud-ai-engineer',
    title: 'AI & Cloud Infrastructure Specialist',
    department: 'AI & Cloud Systems',
    location: 'Remote (Flexible)',
    type: 'Full-Time',
    experience: '3+ Years',
    badge: 'R&D Labs',
    description:
      'Join our R&D incubation team to design, stress-test, and deploy autonomous LLM agent frameworks, vector retrieval pipelines, microservice telemetry, and secure cloud orchestration for global enterprise workloads.',
    requirements: [
      'Hands-on experience building production Python/FastAPI microservices and AI agent chaining.',
      'Familiarity with vector databases (Qdrant, Pinecone, pgvector) and hybrid search.',
      'Strong command of Kubernetes, Docker, Terraform, and CI/CD automation pipelines.',
      'Awareness of SOC-2 and HIPAA zero-retention private data boundaries.',
    ],
    techStack: ['Python', 'FastAPI', 'Kubernetes', 'Docker', 'AWS', 'Qdrant', 'Terraform'],
  },
  {
    id: 'uiux-product-designer',
    title: 'Senior UI/UX Product Designer',
    department: 'Product & Design Systems',
    location: 'Remote',
    type: 'Full-Time',
    experience: '3+ Years',
    badge: 'Creative Tech',
    description:
      'Design clean, intuitive, and modern interfaces for complex enterprise software, dynamic customer portals, and dense super-admin dashboards. Turn intricate technical specifications into effortless user workflows.',
    requirements: [
      'Extensive portfolio demonstrating complex dashboard design and web/mobile apps.',
      'Expertise in Figma, modern design systems, reusable component tokens, and prototyping.',
      'Deep empathy for user workflows, accessibility standards, and responsive interfaces.',
      'Ability to collaborate directly with senior engineers and translate design into code-ready assets.',
    ],
    techStack: ['Figma', 'Design Systems', 'Interactive Prototyping', 'Design Tokens', 'Tailwind Guidelines'],
  },
];

const PERKS = [
  {
    icon: Laptop,
    title: 'High-Impact Global Projects',
    desc: 'Work directly on mission-critical platforms for leading US, European, and Indian enterprise clients.',
  },
  {
    icon: Zap,
    title: 'Zero Bureaucracy, High Autonomy',
    desc: 'We value working code and architectural elegance over endless meetings. Senior developers lead projects directly.',
  },
  {
    icon: Users,
    title: 'Elite Engineering Team',
    desc: 'Surround yourself with senior architects and talented peers who share your obsession with craft and clean code.',
  },
  {
    icon: Cpu,
    title: 'Cutting-Edge Tech Stack',
    desc: 'No legacy dead-ends. We build with Next.js, React, Swift, Rust, Tauri, Flutter, Python, and cloud-native systems.',
  },
  {
    icon: Clock,
    title: 'Flexible Remote Culture',
    desc: 'We focus on output and milestones, not clocked desk hours. Work from where you do your best thinking.',
  },
  {
    icon: ShieldCheck,
    title: 'Competitive Compensation & Growth',
    desc: 'Industry-leading compensation packages with regular milestone reviews, hardware stipends, and rapid promotion paths.',
  },
];

const INTERVIEW_STAGES = [
  {
    step: '01',
    title: 'Intro & Architectural Chat',
    duration: '30 Mins',
    desc: 'Casual conversation with our technical lead to discuss your previous projects, technical passions, and alignment.',
  },
  {
    step: '02',
    title: 'Real-World Systems Challenge',
    duration: '60 Mins',
    desc: 'Practical, real-world architectural discussion. No arbitrary algorithmic puzzles — we review genuine production problems.',
  },
  {
    step: '03',
    title: 'Culture & Offer Rollout',
    duration: '30 Mins',
    desc: 'Discuss role expectations, compensation, start date, and onboarding. Rapid decision turnaround within 48 hours.',
  },
];

export default function CareersPage({ onNavigateHome, onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedJobForModal, setSelectedJobForModal] = useState(null);

  // Application form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolioUrl: '',
    resumeLink: '',
    coverNote: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Careers & Open Positions | Oryon Global Technologies';
    return () => {
      document.title = 'Oryon Global | Enterprise Technology & Software Solutions';
    };
  }, []);

  const categories = ['All', 'Web Platforms', 'Mobile Engineering', 'Systems & Native Applications', 'AI & Cloud Systems', 'Product & Design Systems'];

  const filteredJobs =
    selectedCategory === 'All'
      ? OPEN_POSITIONS
      : OPEN_POSITIONS.filter((j) => j.department.toLowerCase().includes(selectedCategory.toLowerCase()));

  const handleOpenApply = (job) => {
    setSelectedJobForModal(job);
    setFormData((prev) => ({
      ...prev,
      position: job ? `${job.title} (${job.department})` : 'General Engineering Application',
    }));
    // Smooth scroll to application form if preferred, or modal
    const formEl = document.getElementById('application-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    setFormSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <div className="pt-20 lg:pt-24 pb-12 bg-oryon-darkBg text-oryon-grey min-h-screen relative overflow-hidden">
      {/* Background Ambience */}
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
            <span className="text-oryon-cyan font-semibold">Careers (Dedicated Route)</span>
          </div>
        </div>

        {/* Careers Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-oryon-surface border border-oryon-cyan/30 mb-3 shadow-[0_0_25px_rgba(22,200,232,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-oryon-cyan animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-oryon-cyan font-mono">
              JOIN OUR ENGINEERING TEAM • CAREERS AT ORYON GLOBAL
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight mb-3 leading-tight">
            Build World-Class Systems.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-oryon-cyan via-cyan-100 to-white">
              Work With Global Leaders.
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-oryon-grey/85 leading-relaxed text-balance max-w-3xl mx-auto mb-6">
            We are engineering mission-critical software, enterprise web applications, cross-platform mobile apps,
            and cloud systems for leading organizations across the United States, Europe, and India.
            Join a culture driven by technical autonomy, code craftsmanship, and zero red tape.
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-oryon-surface/60 border border-white/5 backdrop-blur-sm text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-heading">
                65%+
              </span>
              <span className="text-xs text-oryon-cyan font-mono font-semibold uppercase tracking-wider">
                US & Global Client Work
              </span>
              <p className="text-[11px] text-oryon-grey/60 mt-0.5">High-impact visibility</p>
            </div>

            <div className="p-4 rounded-2xl bg-oryon-surface/60 border border-white/5 backdrop-blur-sm text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-heading">
                100%
              </span>
              <span className="text-xs text-emerald-400 font-mono font-semibold uppercase tracking-wider">
                Engineering-Led
              </span>
              <p className="text-[11px] text-oryon-grey/60 mt-0.5">Direct architect mentorship</p>
            </div>

            <div className="p-4 rounded-2xl bg-oryon-surface/60 border border-white/5 backdrop-blur-sm text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Flexible
              </span>
              <span className="text-xs text-oryon-cyan font-mono font-semibold uppercase tracking-wider">
                Remote & Hybrid
              </span>
              <p className="text-[11px] text-oryon-grey/60 mt-0.5">Work where you thrive</p>
            </div>

            <div className="p-4 rounded-2xl bg-oryon-surface/60 border border-white/5 backdrop-blur-sm text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white font-heading">
                48 Hrs
              </span>
              <span className="text-xs text-oryon-coral font-mono font-semibold uppercase tracking-wider">
                Fast Offer Turnaround
              </span>
              <p className="text-[11px] text-oryon-grey/60 mt-0.5">No endless interview loops</p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* WHY WORK AT ORYON GLOBAL (PERKS & CULTURE) */}
        {/* ========================================================= */}
        <div className="my-10 p-6 sm:p-8 rounded-3xl bg-oryon-deep/40 border border-white/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Why Engineers Choose Oryon Global
            </h2>
            <p className="text-xs sm:text-sm text-oryon-grey/80 mt-1">
              An engineering culture designed by developers, for developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PERKS.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-oryon-surface/70 border border-oryon-border/30 hover:border-oryon-cyan/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-oryon-deep border border-oryon-border/40 flex items-center justify-center text-oryon-cyan mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white font-heading mb-1.5 group-hover:text-cyan-100 transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-xs text-oryon-grey/80 leading-relaxed">{perk.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* OPEN POSITIONS DIRECTORY */}
        {/* ========================================================= */}
        <div id="open-roles" className="mt-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oryon-surface border border-oryon-border/30 mb-2">
                <Briefcase className="w-3.5 h-3.5 text-oryon-coral" />
                <span className="text-xs font-semibold uppercase tracking-widest text-oryon-coral font-mono">
                  ACTIVE OPPORTUNITIES
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Open Engineering Roles
              </h2>
              <p className="text-xs sm:text-sm text-oryon-grey/80">
                Explore our current openings across web, mobile, desktop, and AI systems.
              </p>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-oryon-cyan text-oryon-navy font-semibold shadow-sm'
                      : 'bg-oryon-surface/60 text-oryon-grey/75 hover:text-white border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards Grid */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-2xl bg-oryon-surface/60 border border-oryon-border/30 hover:border-oryon-cyan/50 hover:bg-oryon-surface/90 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Job Meta & Details */}
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-oryon-cyan/15 text-oryon-cyan text-[11px] font-mono font-semibold uppercase tracking-wider border border-oryon-cyan/30">
                        {job.badge}
                      </span>
                      <span className="text-xs text-oryon-grey/70">•</span>
                      <span className="text-xs text-oryon-grey/80 font-mono">{job.department}</span>
                      <span className="text-xs text-oryon-grey/70">•</span>
                      <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                      <span className="text-xs text-oryon-grey/70">•</span>
                      <span className="text-xs text-oryon-grey/80 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {job.experience}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading group-hover:text-cyan-100 transition-colors">
                      {job.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-oryon-grey/85 leading-relaxed max-w-3xl">
                      {job.description}
                    </p>

                    {/* Requirements Bullets */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-oryon-grey/75">
                          <CheckCircle2 className="w-3.5 h-3.5 text-oryon-cyan shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      <span className="text-[11px] font-mono text-oryon-grey/60 mr-1">Stack:</span>
                      {job.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] text-oryon-cyan font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="lg:border-l lg:border-white/[0.08] lg:pl-6 shrink-0 flex flex-col justify-center">
                    <button
                      onClick={() => handleOpenApply(job)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-oryon-coral to-oryon-coralHover text-white text-xs sm:text-sm font-bold shadow-glow-coral hover:shadow-[0_0_25px_rgba(255,104,74,0.5)] transition-all group-hover:scale-105"
                    >
                      <span>Apply For This Role</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="text-[11px] text-oryon-grey/50 text-center mt-2 font-mono">
                      Fast-track review within 48h
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* TRANSPARENT 3-STAGE INTERVIEW PROCESS */}
        {/* ========================================================= */}
        <div className="my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-oryon-surface/70 to-oryon-deep/40 border border-oryon-cyan/20">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-oryon-cyan mb-1.5 block">
              OUR HIRING COMMITMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              A Respectful, 3-Stage Interview Process
            </h2>
            <p className="text-xs sm:text-sm text-oryon-grey/80 mt-1">
              We respect your time. No multi-month wait times, no automated rejection bots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {INTERVIEW_STAGES.map((stage, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-oryon-navy/80 border border-white/5 relative"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-oryon-cyan/40 font-mono">{stage.step}</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-oryon-deep text-oryon-cyan border border-oryon-cyan/20">
                    {stage.duration}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white font-heading mb-1.5">{stage.title}</h3>
                <p className="text-xs text-oryon-grey/80 leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* DIRECT CANDIDATE APPLICATION FORM */}
        {/* ========================================================= */}
        <div
          id="application-form"
          className="my-10 p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-oryon-surface/90 via-oryon-deep/70 to-oryon-surface/90 border border-oryon-cyan/30 shadow-2xl relative overflow-hidden"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oryon-surface border border-oryon-cyan/30 mb-2">
                <Send className="w-3.5 h-3.5 text-oryon-cyan" />
                <span className="text-xs font-semibold uppercase tracking-widest text-oryon-cyan font-mono">
                  APPLICATION DISPATCH
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Submit Your Application Directly to Engineering
              </h2>
              <p className="text-xs sm:text-sm text-oryon-grey/80 mt-1">
                Applying for an open role or general inquiry? Your profile is reviewed directly by our senior technical leads.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-oryon-deep/90 border border-emerald-400/40 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  Application Received!
                </h3>
                <p className="text-sm text-oryon-grey/90 max-w-lg mx-auto">
                  Thank you for applying to Oryon Global Technologies. Our engineering leads will review your portfolio and reach out via email within 48 business hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        position: '',
                        experience: '',
                        portfolioUrl: '',
                        resumeLink: '',
                        coverNote: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-oryon-surface hover:bg-oryon-deep text-xs font-semibold text-white border border-white/20 transition-all"
                  >
                    Submit Another Profile
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-oryon-grey/80 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-oryon-darkBg/90 border border-oryon-border/40 focus:border-oryon-cyan focus:outline-none text-sm text-white placeholder-oryon-grey/40"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-oryon-grey/80 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-oryon-darkBg/90 border border-oryon-border/40 focus:border-oryon-cyan focus:outline-none text-sm text-white placeholder-oryon-grey/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-oryon-grey/80 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210 / +1 (555)..."
                      className="w-full px-4 py-3 rounded-xl bg-oryon-darkBg/90 border border-oryon-border/40 focus:border-oryon-cyan focus:outline-none text-sm text-white placeholder-oryon-grey/40"
                    />
                  </div>

                  {/* Target Role */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-oryon-grey/80 mb-1.5">
                      Target Role / Domain *
                    </label>
                    <input
                      type="text"
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="e.g. Senior Full-Stack Engineer"
                      className="w-full px-4 py-3 rounded-xl bg-oryon-darkBg/90 border border-oryon-border/40 focus:border-oryon-cyan focus:outline-none text-sm text-white placeholder-oryon-grey/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Years of Experience */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-oryon-grey/80 mb-1.5">
                      Years of Experience
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-oryon-darkBg/90 border border-oryon-border/40 focus:border-oryon-cyan focus:outline-none text-sm text-white"
                    >
                      <option value="">Select Experience Level</option>
                      <option value="1-2 years">1 - 2 Years</option>
                      <option value="3-5 years">3 - 5 Years</option>
                      <option value="5-8 years">5 - 8 Years</option>
                      <option value="8+ years">8+ Years (Lead / Principal)</option>
                    </select>
                  </div>

                  {/* GitHub / Portfolio / LinkedIn */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-oryon-grey/80 mb-1.5">
                      LinkedIn / GitHub / Portfolio URL *
                    </label>
                    <input
                      type="url"
                      name="portfolioUrl"
                      required
                      value={formData.portfolioUrl}
                      onChange={handleInputChange}
                      placeholder="https://github.com/yourhandle or linkedin.com/in/..."
                      className="w-full px-4 py-3 rounded-xl bg-oryon-darkBg/90 border border-oryon-border/40 focus:border-oryon-cyan focus:outline-none text-sm text-white placeholder-oryon-grey/40"
                    />
                  </div>
                </div>

                {/* Resume Link */}
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase text-oryon-grey/80 mb-1.5">
                    Resume / CV Link (Google Drive / Dropbox / Notion / PDF Link) *
                  </label>
                  <input
                    type="url"
                    name="resumeLink"
                    required
                    value={formData.resumeLink}
                    onChange={handleInputChange}
                    placeholder="https://drive.google.com/... (ensure view permissions are public)"
                    className="w-full px-4 py-3 rounded-xl bg-oryon-darkBg/90 border border-oryon-border/40 focus:border-oryon-cyan focus:outline-none text-sm text-white placeholder-oryon-grey/40"
                  />
                </div>

                {/* Cover Note / What excites you */}
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase text-oryon-grey/80 mb-1.5">
                    Brief Note (Key Technical Achievements & What You Love Building)
                  </label>
                  <textarea
                    rows={3}
                    name="coverNote"
                    value={formData.coverNote}
                    onChange={handleInputChange}
                    placeholder="Tell us about the hardest bug you squashed, your favorite stack, or projects you're proud of..."
                    className="w-full px-4 py-3 rounded-xl bg-oryon-darkBg/90 border border-oryon-border/40 focus:border-oryon-cyan focus:outline-none text-sm text-white placeholder-oryon-grey/40 resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-oryon-cyan via-oryon-tech to-oryon-coral shadow-[0_0_25px_rgba(22,200,232,0.3)] hover:shadow-[0_0_35px_rgba(22,200,232,0.5)] transition-all duration-300 disabled:opacity-50"
                  >
                    {formSubmitting ? (
                      <span>Transmitting Profile to Leads...</span>
                    ) : (
                      <>
                        <span>Submit Application Directly</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-oryon-grey/60 text-center mt-2.5">
                    Or email your resume directly to{' '}
                    <a
                      href="mailto:official@oryonglobal.com?subject=Engineering%20Career%20Application"
                      className="text-oryon-cyan underline hover:text-cyan-300"
                    >
                      official@oryonglobal.com
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Navigation CTA */}
        <div className="mt-8 p-6 rounded-2xl bg-oryon-surface/40 border border-white/5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-white font-heading">
              Looking to hire our engineering team for your project instead?
            </h4>
            <p className="text-xs text-oryon-grey/75">
              Explore how Oryon Global delivers bespoke software and digital platforms.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-oryon-coral to-oryon-coralHover text-white text-xs font-bold shadow-sm"
            >
              Start Client Inquiry
            </button>
            <button
              onClick={onNavigateHome}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/15"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
