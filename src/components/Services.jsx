import React, { useState } from 'react';
import {
  Code,
  Globe,
  Smartphone,
  Bot,
  Cloud,
  Layout,
  Network,
  Compass,
  ArrowRight,
  CheckCircle,
  X
} from 'lucide-react';
import { SERVICES } from '../data/companyData';

export default function Services({ onSelectService }) {
  const [activeModal, setActiveModal] = useState(null);

  const getIcon = (iconName) => {
    const props = { className: "w-7 h-7 text-oryon-cyan transition-colors group-hover:text-cyan-300" };
    switch (iconName) {
      case 'Code': return <Code {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'Bot': return <Bot {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      case 'Layout': return <Layout {...props} />;
      case 'Network': return <Network {...props} />;
      case 'Compass': return <Compass {...props} />;
      default: return <Code {...props} />;
    }
  };

  return (
    <section id="services" className="py-8 lg:py-12 bg-[#061B35] relative tech-grid-pattern">
      {/* Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-oryon-tech/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-oryon-cyan/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-oryon-deep border border-oryon-border/30 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-oryon-cyan" />
            <span className="text-xs font-semibold uppercase tracking-widest text-oryon-cyan">
              OUR SERVICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight mb-3">
            Technology Solutions for a Connected World
          </h2>

          <p className="text-sm sm:text-base text-oryon-grey/85 leading-relaxed">
            From architecture to deployment, we deliver modern IT engineering and digital capabilities
            engineered for performance, high security, and effortless scalability.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-7 rounded-2xl bg-oryon-deep/70 backdrop-blur-md border border-oryon-border/30 hover:border-oryon-cyan/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_-10px_rgba(8,119,185,0.4)]"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-oryon-surface border border-oryon-border/30 group-hover:border-oryon-cyan/50 group-hover:bg-oryon-surfaceLight transition-all">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono font-medium text-oryon-grey/40 group-hover:text-oryon-cyan/80 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white font-heading mb-3 group-hover:text-cyan-200 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-oryon-grey/80 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
              </div>

              {/* Deliverables snippet */}
              <div className="pt-4 border-t border-white/[0.08]">
                <button
                  onClick={() => setActiveModal(service)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-oryon-cyan hover:text-white transition-colors group/btn py-1"
                >
                  <span className="tracking-wide uppercase text-[11px]">Learn More</span>
                  <div className="p-1 rounded-full bg-oryon-cyan/10 group-hover/btn:bg-oryon-cyan group-hover/btn:text-oryon-navy transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-oryon-deep border border-oryon-cyan/40 shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-oryon-grey/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-5">
              <div className="p-3 rounded-xl bg-oryon-surface border border-oryon-border/40">
                {getIcon(activeModal.icon)}
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-oryon-cyan">
                  {activeModal.category}
                </span>
                <h3 className="text-xl font-bold text-white font-heading">
                  {activeModal.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-oryon-grey/90 leading-relaxed mb-6">
              {activeModal.description}
            </p>

            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Core Deliverables & Standards:
            </h4>
            <ul className="space-y-2.5 mb-8">
              {activeModal.deliverables.map((del, i) => (
                <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-oryon-grey/80">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-lg text-xs font-medium text-oryon-grey/80 hover:text-white transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const s = activeModal;
                  setActiveModal(null);
                  if (onSelectService) onSelectService(s.title);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-oryon-coral to-oryon-coralHover shadow-glow-coral"
              >
                Inquire About This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
