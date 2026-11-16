import React, { useState } from 'react';
import {
  Linkedin,
  Instagram,
  Facebook,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Sparkles,
} from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyData';

export default function Footer({ onOpenLegal, onSelectService, onNavigate, currentRoute = '/' }) {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 4000);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home', route: '/' },
    { name: 'About Us', href: '/about', route: '/about' },
    { name: 'CEO & Leadership', href: '#ceo', route: '/' },
    { name: 'Services & Approach', href: '/services', route: '/services' },
    { name: 'Our Work', href: '/our-work', route: '/our-work' },
    { name: 'In-House Labs', href: '/in-house-labs', route: '/in-house-labs' },
    { name: 'Careers', href: '/careers', route: '/careers' },
    { name: 'Contact', href: '#contact', route: '/' },
  ];

  const servicesLinks = [
    { name: 'Software Development', target: 'Custom Software Development' },
    { name: 'Web Development', target: 'Web Application Development' },
    { name: 'Mobile Apps', target: 'Mobile App Development' },
    { name: 'AI & Automation', target: 'AI & Intelligent Automation' },
    { name: 'Cloud Solutions', target: 'Cloud Computing' },
    { name: 'IT Consulting', target: 'IT Consulting' },
  ];

  const industriesLinks = [
    { name: 'FinTech & Banking', target: 'Enterprise IT Solutions' },
    { name: 'Healthcare & Life Sciences', target: 'Custom Software Development' },
    { name: 'Logistics & Supply Chain', target: 'Web Application Development' },
    { name: 'Retail & E-Commerce', target: 'Mobile App Development' },
    { name: 'Enterprise SaaS', target: 'Cloud Computing' },
    { name: 'AI & Intelligent Systems', target: 'AI & Intelligent Automation' },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    if (link.route && link.route !== '/') {
      if (onNavigate) {
        onNavigate(link.route);
      } else {
        window.history.pushState({}, '', link.route);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      return;
    }

    if (currentRoute !== '/') {
      if (onNavigate) {
        onNavigate('/', link.href);
      } else {
        window.history.pushState({}, '', '/' + link.href);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    } else {
      const target = document.querySelector(link.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else if (link.href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleServiceClick = (targetName) => {
    if (onSelectService) {
      onSelectService(targetName);
      if (currentRoute !== '/') {
        if (onNavigate) {
          onNavigate('/', '#services');
        } else {
          window.history.pushState({}, '', '/#services');
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
      } else {
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      if (onNavigate) onNavigate('/services');
    }
  };

  return (
    <footer className="bg-[#030C19] border-t border-oryon-border/20 pt-16 pb-12 text-oryon-grey/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1: Newsletter & Technology Digest Subscription */}
        <div className="pb-12 mb-12 border-b border-white/[0.08]">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-oryon-surface/90 via-oryon-deep/80 to-oryon-surface/90 border border-oryon-border/40 shadow-xl backdrop-blur-sm flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oryon-cyan/10 border border-oryon-cyan/30 text-oryon-cyan text-xs font-mono uppercase tracking-wider mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-oryon-cyan animate-pulse" />
                ENGINEERING DIGEST
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight">
                Stay Ahead With Oryon Tech Insights
              </h3>
              <p className="text-xs sm:text-sm text-oryon-grey/80 mt-1 leading-relaxed">
                Bi-weekly updates on software architecture, AI automation, and scalable cloud systems. No spam, ever.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md w-full">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your corporate email..."
                  required
                  className="w-full sm:w-72 px-4 py-2.5 rounded-xl bg-oryon-deep border border-oryon-border/50 text-white placeholder-oryon-grey/50 text-xs sm:text-sm focus:outline-none focus:border-oryon-cyan transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-oryon-cyan to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-oryon-cyan/25 shrink-0 flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
              {isSubscribed && (
                <div className="text-xs text-emerald-400 flex items-center gap-1.5 mt-2 animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed successfully! You will receive our next edition.</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Row 2: Main Footer Navigation Grid (5 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/[0.08]">
          {/* Column 1: Brand & Description (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <Logo size="large" />

            <p className="text-sm text-oryon-grey/85 leading-relaxed max-w-sm pt-2">
              Building digital experiences through technology, creativity, and intelligent engineering.
            </p>

            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-oryon-cyan block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-xl bg-oryon-surface hover:bg-oryon-surfaceLight border border-oryon-border/30 hover:border-oryon-cyan/50 text-oryon-grey hover:text-white transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2.5 rounded-xl bg-oryon-surface hover:bg-oryon-surfaceLight border border-oryon-border/30 hover:border-oryon-cyan/50 text-oryon-grey hover:text-white transition-all duration-200"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2.5 rounded-xl bg-oryon-surface hover:bg-oryon-surfaceLight border border-oryon-border/30 hover:border-oryon-cyan/50 text-oryon-grey hover:text-white transition-all duration-200"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="text-sm text-oryon-grey/80 hover:text-oryon-cyan transition-colors flex items-center gap-1.5 group cursor-pointer"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 font-heading">
              Services
            </h4>
            <ul className="space-y-3">
              {servicesLinks.map((srv) => (
                <li key={srv.name}>
                  <button
                    onClick={() => handleServiceClick(srv.target)}
                    className="text-sm text-oryon-grey/80 hover:text-oryon-cyan transition-colors text-left flex items-center gap-1.5 group"
                  >
                    <span>{srv.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Industries (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 font-heading">
              Industries
            </h4>
            <ul className="space-y-3">
              {industriesLinks.map((ind) => (
                <li key={ind.name}>
                  <button
                    onClick={() => handleServiceClick(ind.target)}
                    className="text-sm text-oryon-grey/80 hover:text-oryon-cyan transition-colors text-left flex items-center gap-1.5 group"
                  >
                    <span>{ind.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 font-heading">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-oryon-surface border border-oryon-border/30 text-oryon-cyan shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-oryon-grey/60 uppercase block">Phone / WhatsApp</span>
                  <a
                    href="https://wa.me/919658844199"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors font-mono block mt-0.5"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <span className="text-[11px] text-emerald-400">WhatsApp & Direct Calls</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-oryon-surface border border-oryon-border/30 text-oryon-cyan shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-oryon-grey/60 uppercase block">Email</span>
                  <a
                    href="mailto:official@oryonglobal.com"
                    className="text-sm font-semibold text-white hover:text-oryon-cyan transition-colors break-all block mt-0.5"
                  >
                    official@oryonglobal.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-oryon-surface border border-oryon-border/30 text-oryon-cyan shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-oryon-grey/60 uppercase block">Address</span>
                  <p className="text-sm text-oryon-grey/85 leading-relaxed mt-0.5">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 3: Enterprise Trust & Standards Strip */}
        <div className="py-6 border-b border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-oryon-grey/80">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-oryon-surface border border-white/5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-white block text-[11px]">Bilateral NDA</span>
              <span className="text-[10px] text-oryon-grey/60">100% IP & Data Protection</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-oryon-surface border border-white/5 text-oryon-cyan">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-white block text-[11px]">99.9% Uptime SLA</span>
              <span className="text-[10px] text-oryon-grey/60">Enterprise Availability</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-oryon-surface border border-white/5 text-blue-400">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-white block text-[11px]">24/7 Global Delivery</span>
              <span className="text-[10px] text-oryon-grey/60">Cross-Timezone Operations</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-oryon-surface border border-white/5 text-oryon-coral">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-white block text-[11px]">Modern Tech Stack</span>
              <span className="text-[10px] text-oryon-grey/60">Cloud-Native & AI-Ready</span>
            </div>
          </div>
        </div>

        {/* Row 4: Bottom Bar (Legal, Status & Copyright) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-oryon-grey/60">
          <div className="flex items-center gap-3">
            <span>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-white/20">•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
