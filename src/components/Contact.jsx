import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Info,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';

export default function Contact({ preselectedService = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    companyName: '',
    phoneNumber: '',
    serviceRequired: preselectedService || 'Custom Software Development',
    projectBudget: '$25,000 - $50,000',
    projectDetails: '',
    honeypot: '', // anti-bot field
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  // Validate fields
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please provide a valid corporate email address.';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required.';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select a primary service.';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please share a brief summary of your project requirements.';
    } else if (formData.projectDetails.trim().length < 20) {
      newErrors.projectDetails = 'Please provide at least 20 characters describing your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot for bots
    if (formData.honeypot) {
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus('submitting');

    try {
      // Check if backend API URL is configured via Vite env
      const apiUrl = import.meta.env?.VITE_CONTACT_API_URL;

      if (apiUrl) {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(`Server returned status ${response.status}`);
        }

        setStatus('success');
        setStatusMessage(
          'Thank you. Your project inquiry has been securely delivered to the Oryon Global solutions team.'
        );
      } else {
        // Backend not configured - transparent notice per prompt requirements
        await new Promise((resolve) => setTimeout(resolve, 900));
        setStatus('success');
        setStatusMessage(
          'Inquiry validated successfully! Note: Live backend endpoint (VITE_CONTACT_API_URL) is currently unconfigured; this submission was captured in client-side demonstration mode.'
        );
      }
    } catch (err) {
      setStatus('error');
      setStatusMessage(
        err.message || 'An error occurred while transmitting your request. Please try again or email us directly.'
      );
    }
  };

  return (
    <section id="contact" className="py-10 lg:py-14 bg-oryon-darkBg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-oryon-surface border border-oryon-border/30 mb-3">
            <span className="w-2 h-2 rounded-full bg-oryon-coral" />
            <span className="text-xs font-semibold uppercase tracking-widest text-oryon-coral">
              LET'S COLLABORATE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight mb-3">
            Start Your Project With Oryon Global
          </h2>

          <p className="text-sm sm:text-base text-oryon-grey/85 leading-relaxed">
            Schedule an architecture consultation or request a custom proposal tailored to your technical specifications.
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Contact Details & Architectural Guarantee */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-4">
                Direct Communication With Senior Engineers
              </h3>
              <p className="text-sm text-oryon-grey/80 leading-relaxed mb-8">
                We believe in direct alignment from day one. When you contact Oryon Global,
                your requirements are reviewed directly by technical architects who evaluate feasibility,
                timeline, and scalable stack design.
              </p>

              {/* Contact Meta Details (Configurable Placeholders) */}
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-oryon-surface border border-oryon-border/30 text-oryon-cyan shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-oryon-grey/60 uppercase">Business Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="block text-sm font-semibold text-white hover:text-oryon-cyan transition-colors mt-0.5"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <span className="text-[11px] text-oryon-grey/50">Confidential NDA protected</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-oryon-surface border border-oryon-border/30 text-oryon-cyan shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-oryon-grey/60 uppercase">Telephone / WhatsApp</span>
                    <a
                      href={`tel:+919658844199`}
                      className="block text-sm font-semibold text-white hover:text-oryon-cyan transition-colors mt-0.5 font-mono"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-[11px] text-emerald-400">Available on WhatsApp & Phone</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-oryon-surface border border-oryon-border/30 text-oryon-cyan shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-oryon-grey/60 uppercase">Technology Center</span>
                    <p className="text-sm font-semibold text-white mt-0.5">{COMPANY_INFO.address}</p>
                    <span className="text-[11px] text-oryon-grey/50">Global Delivery Operations</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-oryon-surface border border-oryon-border/30 text-oryon-cyan shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-oryon-grey/60 uppercase">Operational Hours</span>
                    <p className="text-sm font-semibold text-white mt-0.5">{COMPANY_INFO.businessHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & NDA Badge */}
            <div className="p-5 rounded-xl bg-oryon-deep/50 border border-oryon-border/30 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
              <p className="text-xs text-oryon-grey/75 leading-relaxed">
                All inquiries are covered under a bilateral non-disclosure agreement. Your project details and intellectual property remain 100% confidential.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-oryon-deep/70 border border-oryon-border/40 shadow-2xl backdrop-blur-xl">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Honeypot field for anti-spam */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Row 1: Full Name & Business Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-white mb-2">
                      Full Name <span className="text-oryon-coral">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Alex Mercer"
                      className={`w-full px-4 py-3 rounded-xl bg-oryon-surface border ${
                        errors.fullName ? 'border-red-400 focus:ring-red-400' : 'border-oryon-border/40 focus:border-oryon-cyan'
                      } text-white placeholder-oryon-grey/40 text-sm focus:outline-none focus:ring-1 focus:ring-oryon-cyan transition-all`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="businessEmail" className="block text-xs font-semibold uppercase tracking-wider text-white mb-2">
                      Business Email <span className="text-oryon-coral">*</span>
                    </label>
                    <input
                      id="businessEmail"
                      type="email"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={handleChange}
                      placeholder="alex@enterprise.com"
                      className={`w-full px-4 py-3 rounded-xl bg-oryon-surface border ${
                        errors.businessEmail ? 'border-red-400 focus:ring-red-400' : 'border-oryon-border/40 focus:border-oryon-cyan'
                      } text-white placeholder-oryon-grey/40 text-sm focus:outline-none focus:ring-1 focus:ring-oryon-cyan transition-all`}
                    />
                    {errors.businessEmail && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.businessEmail}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Company Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="companyName" className="block text-xs font-semibold uppercase tracking-wider text-white mb-2">
                      Company Name <span className="text-oryon-coral">*</span>
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Acme Corporation"
                      className={`w-full px-4 py-3 rounded-xl bg-oryon-surface border ${
                        errors.companyName ? 'border-red-400 focus:ring-red-400' : 'border-oryon-border/40 focus:border-oryon-cyan'
                      } text-white placeholder-oryon-grey/40 text-sm focus:outline-none focus:ring-1 focus:ring-oryon-cyan transition-all`}
                    />
                    {errors.companyName && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-xs font-semibold uppercase tracking-wider text-white mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-oryon-surface border border-oryon-border/40 text-white placeholder-oryon-grey/40 text-sm focus:outline-none focus:border-oryon-cyan focus:ring-1 focus:ring-oryon-cyan transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Service Required & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="serviceRequired" className="block text-xs font-semibold uppercase tracking-wider text-white mb-2">
                      Service Required <span className="text-oryon-coral">*</span>
                    </label>
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-oryon-surface border border-oryon-border/40 text-white text-sm focus:outline-none focus:border-oryon-cyan focus:ring-1 focus:ring-oryon-cyan transition-all"
                    >
                      {SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.title} className="bg-oryon-navy text-white">
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="projectBudget" className="block text-xs font-semibold uppercase tracking-wider text-white mb-2">
                      Project Budget Range (Optional)
                    </label>
                    <select
                      id="projectBudget"
                      name="projectBudget"
                      value={formData.projectBudget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-oryon-surface border border-oryon-border/40 text-white text-sm focus:outline-none focus:border-oryon-cyan focus:ring-1 focus:ring-oryon-cyan transition-all"
                    >
                      <option value="Under $25,000" className="bg-oryon-navy text-white">Under $25,000</option>
                      <option value="$25,000 - $50,000" className="bg-oryon-navy text-white">$25,000 - $50,000</option>
                      <option value="$50,000 - $100,000" className="bg-oryon-navy text-white">$50,000 - $100,000</option>
                      <option value="$100,000+" className="bg-oryon-navy text-white">$100,000+</option>
                      <option value="Undetermined / Advisory" className="bg-oryon-navy text-white">Undetermined / Advisory</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="block text-xs font-semibold uppercase tracking-wider text-white mb-2">
                    Project Details <span className="text-oryon-coral">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Tell us about your objectives, current architecture, anticipated scale, or timeline..."
                    className={`w-full px-4 py-3 rounded-xl bg-oryon-surface border ${
                      errors.projectDetails ? 'border-red-400 focus:ring-red-400' : 'border-oryon-border/40 focus:border-oryon-cyan'
                    } text-white placeholder-oryon-grey/40 text-sm focus:outline-none focus:ring-1 focus:ring-oryon-cyan transition-all`}
                  />
                  {errors.projectDetails && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.projectDetails}
                    </p>
                  )}
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 px-8 rounded-xl font-semibold text-white bg-gradient-to-r from-oryon-coral to-oryon-coralHover shadow-glow-coral hover:shadow-[0_0_30px_rgba(255,104,74,0.5)] transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {/* Transparent architecture notice */}
                <div className="pt-2 text-center flex items-center justify-center gap-1.5 text-[11px] text-oryon-grey/50">
                  <Info className="w-3.5 h-3.5" />
                  <span>Configurable endpoint ready • Form validation enabled</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
