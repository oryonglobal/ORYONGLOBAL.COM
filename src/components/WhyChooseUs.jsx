import React from 'react';
import {
  Target,
  Layers,
  GitBranch,
  Users,
  ShieldCheck,
  Headphones,
  Check,
  Building2,
  Stethoscope,
  Landmark,
  ShoppingCart,
  Truck,
  Cpu,
  ArrowRight,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/companyData';

export default function WhyChooseUs({ onStartProject, onNavigateCareers }) {
  const getIcon = (iconName) => {
    const props = { className: "w-6 h-6 text-oryon-coral" };
    switch (iconName) {
      case 'Target': return <Target {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      case 'Users': return <Users {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Headphones': return <Headphones {...props} />;
      default: return <Check {...props} />;
    }
  };

  const industries = [
    { name: "FinTech & Financial Services", icon: Landmark, desc: "Secure transaction pipelines, compliance automation, and portfolio analytics." },
    { name: "Healthcare & Life Sciences", icon: Stethoscope, desc: "HIPAA-ready clinical systems, diagnostic workflows, and telemetry sync." },
    { name: "Logistics & Supply Chain", icon: Truck, desc: "Geospatial fleet routing, automated dispatching, and inventory visibility." },
    { name: "Retail & E-Commerce", icon: ShoppingCart, desc: "High-concurrency storefronts, omnichannel cart engines, and personalization." },
    { name: "Enterprise SaaS", icon: Building2, desc: "Multi-tenant platforms, subscription tiering, and microservice architectures." },
    { name: "Smart Automation & Robotics", icon: Cpu, desc: "Edge device ingestion, telemetry ingestion, and autonomous task processing." },
  ];

  return (
    <div className="bg-oryon-darkBg relative overflow-hidden">
      {/* WHY CHOOSE US SECTION */}
      <section className="py-10 lg:py-14 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-oryon-surface border border-oryon-border/30 mb-3">
              <span className="w-2 h-2 rounded-full bg-oryon-coral" />
              <span className="text-xs font-semibold uppercase tracking-widest text-oryon-coral">
                THE ORYON ADVANTAGE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight mb-3">
              Engineering Disciplines That Drive Results
            </h2>

            <p className="text-sm sm:text-base text-oryon-grey/85 leading-relaxed">
              We eliminate technical debt before it starts. Our engineering culture focuses on 
              longevity, security, and measurable business outcomes.
            </p>
          </div>

          {/* 6 Core Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-oryon-surface/40 border border-oryon-border/30 hover:border-oryon-coral/50 hover:bg-oryon-surface/70 transition-all duration-300"
              >
                <div className="p-3.5 rounded-xl bg-oryon-deep border border-oryon-border/40 w-fit mb-6 group-hover:scale-105 transition-transform">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-amber-100 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-oryon-grey/80 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION (Supports #industries anchor) */}
      <section id="industries" className="py-10 lg:py-12 bg-oryon-deep/40 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oryon-surface border border-oryon-border/30 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-oryon-cyan" />
              <span className="text-xs font-semibold uppercase tracking-widest text-oryon-cyan">
                DOMAIN EXPERTISE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-heading tracking-tight mb-2">
              Industries We Empower
            </h2>
            <p className="text-xs sm:text-sm text-oryon-grey/80">
              Deep vertical awareness integrated into every software architecture we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => {
              const IndIcon = ind.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-oryon-navy/70 border border-oryon-border/30 hover:border-oryon-cyan/40 transition-all"
                >
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="p-2.5 rounded-lg bg-oryon-deep border border-oryon-border/30 text-oryon-cyan">
                      <IndIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-white font-heading">
                      {ind.name}
                    </h3>
                  </div>
                  <p className="text-xs text-oryon-grey/75 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAREERS SNIPPET (Links to dedicated /careers route) */}
      <section className="py-10 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-oryon-deep to-oryon-surface border border-oryon-border/40">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-oryon-cyan mb-2 block">
              JOIN OUR TALENT NETWORK
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-3">
              Build Meaningful Technology With Oryon Global
            </h3>
            <p className="text-xs sm:text-sm text-oryon-grey/85 max-w-2xl mx-auto mb-5">
              We are constantly seeking brilliant software engineers, mobile architects, and UI/UX designers 
              passionate about solving challenging technical problems for global enterprise clients.
            </p>
            <button
              onClick={onNavigateCareers}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-oryon-cyan/20 hover:bg-oryon-cyan/30 text-oryon-cyan border border-oryon-cyan/40 transition-colors"
            >
              <span>Explore Open Positions (Dedicated Route)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
