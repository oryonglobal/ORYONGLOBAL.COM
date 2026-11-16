import React, { useState } from 'react';
import { ExternalLink, Layers, Sparkles, Code2, Tag } from 'lucide-react';
import { PROJECTS_DATA } from '../data/companyData';

export default function Projects({ onStartProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Enterprise Software',
    'Web Applications',
    'AI Solutions',
    'Mobile Applications',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-8 lg:py-12 bg-[#061B35] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-oryon-deep border border-oryon-border/30 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-oryon-cyan" />
            <span className="text-xs font-semibold uppercase tracking-widest text-oryon-cyan">
              OUR WORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight mb-3">
            Solutions Designed to Make an Impact
          </h2>

          <p className="text-sm sm:text-base text-oryon-grey/85 leading-relaxed">
            Explore architectural blueprints and sample engineering implementations representing our 
            capability across high-scale enterprise ecosystems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-oryon-cyan text-oryon-navy font-semibold shadow-glow-cyan'
                  : 'bg-oryon-deep/70 text-oryon-grey/80 hover:text-white hover:bg-oryon-deep border border-oryon-border/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-oryon-deep/60 border border-oryon-border/30 hover:border-oryon-cyan/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Card Banner / Diagram Preview */}
              <div className="relative h-48 bg-gradient-to-br from-oryon-surface to-oryon-navy p-6 flex flex-col justify-between border-b border-white/[0.08] overflow-hidden">
                {/* Tech Blueprint Grid in Background */}
                <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#16c8e8_1px,transparent_1px),linear-gradient(to_bottom,#16c8e8_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-black/40 text-oryon-cyan border border-oryon-cyan/30">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    Sample Model
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/70 mb-1">
                    <Code2 className="w-3.5 h-3.5 text-oryon-cyan" />
                    <span>Reference Architecture</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-200 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-oryon-grey/85 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-oryon-grey/75">
                        <span className="w-1 h-1 rounded-full bg-oryon-cyan" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="pt-4 border-t border-white/[0.08]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-oryon-surface/80 text-oryon-grey/75 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onStartProject}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 hover:text-oryon-cyan border border-white/10 transition-colors"
                  >
                    <span>Request Similar Solution</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-oryon-grey/50 max-w-xl mx-auto">
            All projects displayed above represent conceptual system architectures and sample capabilities
            curated by Oryon Global. Client confidentiality agreements are strictly honored.
          </p>
        </div>
      </div>
    </section>
  );
}
