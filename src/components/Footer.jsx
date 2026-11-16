import React from 'react';
import { Linkedin, Instagram, Facebook, ArrowUpRight, Heart, Shield } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyData';

export default function Footer({ onOpenLegal, onSelectService, onNavigate, currentRoute = '/' }) {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="bg-[#030C19] border-t border-oryon-border/20 pt-16 pb-12 text-oryon-grey/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/[0.08]">
          {/* Column 1: Brand & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Logo size="large" />

            <p className="text-sm text-oryon-grey/85 leading-relaxed max-w-sm pt-2">
              Building digital experiences through technology, creativity, and intelligent engineering.
            </p>

            {/* Direct Contact Details */}
            <div className="pt-2 space-y-1.5 text-xs text-oryon-grey/80">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-oryon-cyan transition-colors"
              >
                <span className="text-oryon-cyan">✉</span>
                <span>{COMPANY_INFO.email}</span>
              </a>
              <a
                href="https://wa.me/919658844199"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors font-mono"
              >
                <span className="text-emerald-400">☎</span>
                <span>{COMPANY_INFO.phone} (WhatsApp & Calls)</span>
              </a>
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-oryon-cyan block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {/* Configurable social placeholders */}
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

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
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

          {/* Column 3: Services (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 font-heading">
              Services
            </h4>
            <ul className="space-y-3">
              {servicesLinks.map((srv) => (
                <li key={srv.name}>
                  <button
                    onClick={() => {
                      if (onSelectService) {
                        onSelectService(srv.target);
                        const el = document.getElementById('services');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-sm text-oryon-grey/80 hover:text-oryon-cyan transition-colors text-left flex items-center gap-1.5 group"
                  >
                    <span>{srv.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-oryon-grey/60">
          <div>
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
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
