import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExpertiseCards from './components/ExpertiseCards';
import SoftwareEcosystem from './components/SoftwareEcosystem';
import Leadership from './components/Leadership';
import ClientsMarquee from './components/ClientsMarquee';
import WhyChooseUs from './components/WhyChooseUs';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import WhatsAppWidget from './components/WhatsAppWidget';
import InHouseLabsPage from './components/InHouseLabsPage';
import ServicesPage from './components/ServicesPage';
import OurWorkPage from './components/OurWorkPage';
import AboutPage from './components/AboutPage';
import CareersPage from './components/CareersPage';

export default function App() {
  const [legalModalType, setLegalModalType] = useState(null);
  const [preselectedService, setPreselectedService] = useState('');

  // Route state supporting /, /about, /services, /our-work, /in-house-labs, and /careers
  const getRouteFromLocation = () => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path.includes('careers') || hash.includes('careers') || path.includes('career') || hash.includes('career')) {
      return '/careers';
    }
    if (path.includes('in-house-labs') || hash.includes('in-house') || hash.includes('inhouse-projects')) {
      return '/in-house-labs';
    }
    if (path.includes('about') || hash.includes('about')) {
      return '/about';
    }
    if (path.includes('services') || hash.includes('services') || path.includes('approach')) {
      return '/services';
    }
    if (path.includes('our-work') || path.includes('projects') || hash.includes('projects') || hash.includes('our-work')) {
      return '/our-work';
    }
    return '/';
  };

  const [currentRoute, setCurrentRoute] = useState(getRouteFromLocation);

  // Synchronize route with browser history (back/forward buttons)
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(getRouteFromLocation());
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (route, targetHash = '') => {
    if (
      route === '/in-house-labs' ||
      route === '/services' ||
      route === '/our-work' ||
      route === '/about' ||
      route === '/careers'
    ) {
      window.history.pushState({}, '', route);
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState({}, '', '/' + (targetHash ? targetHash : ''));
      setCurrentRoute('/');
      if (targetHash) {
        setTimeout(() => {
          const el = document.querySelector(targetHash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const scrollToContact = () => {
    if (currentRoute !== '/') {
      navigateTo('/', '#contact');
      return;
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    navigateTo('/services');
  };

  const handleSelectService = (serviceName) => {
    setPreselectedService(serviceName);
    scrollToContact();
  };

  return (
    <div className="relative min-h-screen bg-oryon-darkBg text-oryon-grey font-sans selection:bg-oryon-cyan selection:text-oryon-navy">
      {/* Sticky Enterprise Navigation Bar */}
      <Navbar
        onOpenContact={scrollToContact}
        onNavigate={navigateTo}
        currentRoute={currentRoute}
      />

      <main>
        {currentRoute === '/careers' ? (
          /* Dedicated Route: Careers & Engineering Opportunities */
          <CareersPage
            onNavigateHome={() => navigateTo('/')}
            onOpenContact={scrollToContact}
          />
        ) : currentRoute === '/about' ? (
          /* Dedicated Route: About Oryon Global Page */
          <AboutPage
            onNavigateHome={() => navigateTo('/')}
            onOpenContact={scrollToContact}
          />
        ) : currentRoute === '/services' ? (
          /* Dedicated Route: Technology Services & Our Approach Page */
          <ServicesPage
            onNavigateHome={() => navigateTo('/')}
            onSelectService={handleSelectService}
            onOpenContact={scrollToContact}
          />
        ) : currentRoute === '/our-work' ? (
          /* Dedicated Route: Solutions Designed to Make an Impact (Projects) */
          <OurWorkPage
            onNavigateHome={() => navigateTo('/')}
            onOpenContact={scrollToContact}
          />
        ) : currentRoute === '/in-house-labs' ? (
          /* Dedicated Route: In-House Labs & Proprietary Platforms Page */
          <InHouseLabsPage
            onNavigateHome={() => navigateTo('/')}
            onOpenContact={scrollToContact}
          />
        ) : (
          /* Streamlined Home Page: About, Services, Approach, Projects & Labs on dedicated routes */
          <>
            {/* Main Hero Section with Technology Background Video */}
            <Hero
              onExploreServices={() => navigateTo('/services')}
              onStartProject={scrollToContact}
            />

            {/* Trust & Expertise Cards (Navigates directly to dedicated /services route) */}
            <ExpertiseCards
              onSelectExpertise={() => navigateTo('/services')}
            />

            {/* Full-Spectrum Software Capabilities & Global Footprint (Web, Mobile, Desktop, India-US Delivery) */}
            <SoftwareEcosystem
              onStartProject={scrollToContact}
            />

            {/* Why Choose Oryon Global & Domain Expertise */}
            <WhyChooseUs
              onStartProject={scrollToContact}
              onNavigateCareers={() => navigateTo('/careers')}
            />

            {/* Call to Action Section */}
            <CTASection
              onOpenContact={scrollToContact}
            />

            {/* Executive Leadership: CEO & Founder Section */}
            <Leadership
              onStartProject={scrollToContact}
            />

            {/* Global Clients Infinite Marquee Loop (Positioned after CEO & Founder section) */}
            <ClientsMarquee />

            {/* Contact & Project Inquiry Form */}
            <Contact
              preselectedService={preselectedService}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onSelectService={handleSelectService}
        onNavigate={navigateTo}
        currentRoute={currentRoute}
      />

      {/* Privacy Policy & Terms Modal */}
      {legalModalType && (
        <LegalModal
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      )}

      {/* Floating WhatsApp Interactive Inquiries & Support */}
      <WhatsAppWidget />
    </div>
  );
}
