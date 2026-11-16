import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronRight, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenContact, onNavigate, currentRoute = '/' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', route: '/' },
    { name: 'About Us', href: '/about', id: 'about', route: '/about' },
    { name: 'Services', href: '/services', id: 'services', route: '/services' },
    { name: 'Our Work', href: '/our-work', id: 'projects', route: '/our-work' },
    { name: 'In-House Labs', href: '/in-house-labs', id: 'inhouse-projects', route: '/in-house-labs' },
    { name: 'Careers', href: '/careers', id: 'careers', route: '/careers' },
    { name: 'Contact', href: '#contact', id: 'contact', route: '/' },
  ];

  // Scroll detection for transparent to blurred dark background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section only on home page
      if (currentRoute === '/') {
        const sections = ['home', 'capabilities', 'ceo', 'leadership', 'clients', 'contact'];
        const scrollPos = window.scrollY + 200;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentRoute]);

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // If clicking a dedicated route (/services, /our-work, /in-house-labs)
    if (link.route !== '/') {
      if (onNavigate) {
        onNavigate(link.route);
      } else {
        window.history.pushState({}, '', link.route);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      return;
    }

    // Navigating to a section on the home page
    if (currentRoute !== '/') {
      if (onNavigate) {
        onNavigate('/', link.href);
      } else {
        window.history.pushState({}, '', '/' + link.href);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    } else {
      setActiveSection(link.id);
      const target = document.querySelector(link.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else if (link.href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (currentRoute !== '/') {
      if (onNavigate) onNavigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isLinkActive = (link) => {
    if (link.route !== '/') {
      return currentRoute === link.route;
    }
    return currentRoute === '/' && activeSection === link.id;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#061B35]/90 backdrop-blur-md border-b border-oryon-border/30 shadow-lg py-3.5'
          : 'bg-transparent py-5 lg:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-oryon-cyan rounded-lg cursor-pointer"
          >
            <Logo />
          </a>

          {/* Center/Right Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-all duration-200 rounded-md cursor-pointer ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-oryon-grey/85 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-oryon-cyan to-oryon-tech rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right-side CTA: "Let's Talk" */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-oryon-coral to-oryon-coralHover hover:shadow-glow-coral transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-oryon-coral hover:bg-oryon-coralHover transition-colors"
            >
              <span>Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="p-2 rounded-lg text-white hover:text-oryon-cyan hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-oryon-cyan"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-full transition-all duration-300 ease-in-out border-b border-oryon-border/30 bg-[#061B35]/95 backdrop-blur-xl shadow-2xl ${
          mobileMenuOpen ? 'opacity-100 visible max-h-[85vh]' : 'opacity-0 invisible max-h-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="px-6 py-6 space-y-3">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-oryon-deep text-white border-l-4 border-oryon-cyan font-semibold'
                    : 'text-oryon-grey/90 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-oryon-cyan' : 'text-oryon-grey/40'}`} />
              </a>
            );
          })}

          <div className="pt-4 border-t border-oryon-border/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-oryon-coral to-oryon-coralHover shadow-glow-coral flex items-center justify-center gap-2"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
