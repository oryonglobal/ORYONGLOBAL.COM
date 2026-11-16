import React from 'react';
import { Code2, TrendingUp, Boxes, ArrowRight } from 'lucide-react';
import { TRUST_CARDS } from '../data/companyData';

export default function ExpertiseCards({ onSelectExpertise }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-oryon-cyan" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-oryon-cyan" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-oryon-cyan" />;
      default:
        return <Code2 className="w-5 h-5 text-oryon-cyan" />;
    }
  };

  return (
    <section className="relative z-20 pt-6 sm:pt-8 pb-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Prominent Heading */}
      <div className="text-center mb-4 sm:mb-5">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-heading tracking-tight drop-shadow-md">
          Technology Expertise That Moves Your Business Forward
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-oryon-cyan to-oryon-coral mx-auto mt-1.5 rounded-full" />
      </div>

      {/* 3 Professional Service Cards - Decreased Height */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 items-stretch">
        {TRUST_CARDS.map((card, idx) => (
          <div
            key={card.id}
            onClick={() => onSelectExpertise && onSelectExpertise(card.id)}
            className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl glass-panel glass-panel-hover border border-oryon-border/30 hover:border-oryon-cyan/60 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg"
          >
            {/* Ambient Background Gradient Accent */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-oryon-tech/10 rounded-full blur-2xl group-hover:bg-oryon-cyan/20 transition-all duration-500 pointer-events-none" />

            <div>
              {/* Header with Icon and Badge */}
              <div className="flex items-center justify-between mb-2.5">
                <div className="p-2 rounded-lg bg-oryon-surface border border-oryon-border/40 shadow-inner group-hover:border-oryon-cyan/50 group-hover:shadow-[0_0_12px_rgba(22,200,232,0.3)] transition-all duration-300">
                  {getIcon(card.icon)}
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono font-semibold uppercase tracking-wider text-oryon-cyan px-2 py-0.5 rounded-full bg-oryon-navy/80 border border-oryon-cyan/20 shrink-0">
                  {card.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 font-heading group-hover:text-cyan-100 transition-colors leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-oryon-grey/85 text-[11px] sm:text-xs leading-relaxed mb-3 font-normal">
                {card.description}
              </p>

              {/* Feature Points */}
              <ul className="space-y-1 mb-3.5">
                {card.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-oryon-grey/80 leading-tight">
                    <span className="w-1.5 h-1.5 rounded-full bg-oryon-cyan mt-1 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Action with Orange Accent Arrow */}
            <div className="pt-2.5 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-oryon-grey/70 group-hover:text-white transition-colors">
                Learn Capabilities
              </span>
              <div className="p-1.5 rounded-full bg-oryon-coral/10 group-hover:bg-oryon-coral text-oryon-coral group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
