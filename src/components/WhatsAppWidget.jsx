import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Send,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  Clock,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

// Inquiry topics the user can select
const INQUIRY_TOPICS = [
  { id: 'software', label: 'Custom Software Development', icon: '💻' },
  { id: 'web', label: 'Website / Web Application', icon: '🌐' },
  { id: 'mobile', label: 'Mobile App (iOS & Android)', icon: '📱' },
  { id: 'ai', label: 'AI & Intelligent Automation', icon: '🤖' },
  { id: 'cloud', label: 'Cloud Solutions & DevOps', icon: '☁️' },
  { id: 'quote', label: 'Start a Project / Get a Quote', icon: '🚀' },
  { id: 'general', label: 'General Inquiry / Consultation', icon: '💬' },
];

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(INQUIRY_TOPICS[0].label);
  const [customNotes, setCustomNotes] = useState('');
  const [clientName, setClientName] = useState('');
  const popupRef = useRef(null);

  const phoneDisplay = COMPANY_INFO.phone || '+91 96588 44199';
  const whatsappNumber = COMPANY_INFO.whatsappNumber || '919658844199';

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Construct message and send to WhatsApp
  const handleSendMessage = (e) => {
    e.preventDefault();

    const greeting = clientName.trim()
      ? `Hello Oryon Global team, my name is ${clientName.trim()}.`
      : `Hello Oryon Global team,`;

    const topicLine = `I am inquiring regarding: *${selectedTopic}*.`;
    const notesLine = customNotes.trim() ? `\nDetails: ${customNotes.trim()}` : '';
    const closing = `\nPlease connect with me. Thank you!`;

    const fullMessage = `${greeting}\n\n${topicLine}${notesLine}\n\n${closing}`;
    const encoded = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encoded}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <aside aria-label="WhatsApp Support and Inquiries" className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none font-sans" ref={popupRef}>
      {/* 1. INTERACTIVE CHAT SELECTION MODAL (Opens when clicking WhatsApp icon) */}
      {isOpen && (
        <div className="mb-4 w-[92vw] sm:w-[410px] max-h-[85vh] flex flex-col rounded-2xl bg-[#08203D] border border-emerald-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(37,211,102,0.25)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header with WhatsApp Dark Green Brand Gradient */}
          <div className="bg-gradient-to-r from-[#075E54] via-[#128C7E] to-[#25D366] p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              {/* Avatar with official Oryon Global logo and live pulse dot */}
              <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm p-1">
                <img
                  src="/images/oryon-logo.png"
                  alt="Oryon Global Emblem"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-300 border-2 border-[#075E54] rounded-full animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-heading font-bold text-white text-sm tracking-wide">
                    Oryon Global Tech Support
                  </h3>
                  <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full font-semibold">
                    Verified
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-100 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                  <span>Online now • Typically replies in 5m</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-black/20 text-white/90 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body & Topic Selection */}
          <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-oryon-grey/90">
            {/* Assistant Welcome Bubble */}
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#082342] border border-emerald-500/40 p-1 flex items-center justify-center shrink-0 shadow-sm">
                <img
                  src="/images/oryon-logo.png"
                  alt="Oryon Global"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-3.5 rounded-2xl rounded-tl-sm bg-[#0C2B50] border border-emerald-500/20 text-oryon-grey leading-relaxed shadow-sm">
                <p className="font-medium text-white mb-1">
                  Hello! 👋 Welcome to <strong className="text-oryon-cyan">Oryon Global</strong>.
                </p>
                <p className="text-xs text-oryon-grey/80">
                  What regarding do you want to message us about today? Please select your inquiry topic below:
                </p>
              </div>
            </div>

            {/* Topic Selection Grid */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-oryon-cyan mb-2">
                Select Your Requirement Topic:
              </label>
              <div className="grid grid-cols-1 gap-2 max-h-44 overflow-y-auto pr-1">
                {INQUIRY_TOPICS.map((topic) => {
                  const isSelected = selectedTopic === topic.label;
                  return (
                    <button
                      type="button"
                      key={topic.id}
                      onClick={() => setSelectedTopic(topic.label)}
                      className={`flex items-center justify-between p-2.5 rounded-xl text-left text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-gradient-to-r from-emerald-600/40 to-emerald-500/20 border border-emerald-400 text-white shadow-[0_0_15px_rgba(37,211,102,0.25)]'
                          : 'bg-[#061830] hover:bg-[#0A264A] border border-white/10 text-oryon-grey/80 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{topic.icon}</span>
                        <span>{topic.label}</span>
                      </div>
                      {isSelected ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 text-white/30 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional Sender Details */}
            <form onSubmit={handleSendMessage} className="space-y-3 pt-1">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-oryon-grey/70 mb-1">
                  Your Name / Company (Optional):
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Alex, TechCorp"
                  className="w-full px-3 py-2 rounded-lg bg-[#061830] border border-white/15 text-white placeholder-oryon-grey/40 text-xs focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-oryon-grey/70 mb-1">
                  Additional Notes (Optional):
                </label>
                <textarea
                  rows={2}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Tell us a bit about your timeline, stack, or questions..."
                  className="w-full px-3 py-2 rounded-lg bg-[#061830] border border-white/15 text-white placeholder-oryon-grey/40 text-xs focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                />
              </div>

              {/* Submit CTA button */}
              <button
                type="submit"
                className="w-full group relative flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22bf5b] hover:to-[#0f7a6e] shadow-[0_0_25px_rgba(37,211,102,0.45)] hover:shadow-[0_0_35px_rgba(37,211,102,0.65)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsAppSvg className="w-5 h-5 fill-white" />
                <span>Send via WhatsApp</span>
                <Send className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            {/* Direct Number Contact Badge */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-oryon-grey/60">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Confidential Inquiry</span>
              </span>
              <a
                href={`tel:${whatsappNumber}`}
                className="hover:text-emerald-400 transition-colors font-mono font-medium flex items-center gap-1"
              >
                <PhoneCall className="w-3 h-3 text-emerald-400" />
                <span>{phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 2. INFINITE FLOATING ATTENTION POPUP BADGE (Bounces & glows continuously) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative mb-3 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-gradient-to-r from-[#061B35]/95 via-[#0A2E50]/95 to-[#061B35]/95 border border-emerald-400/40 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.6),0_0_20px_rgba(37,211,102,0.25)] transition-all hover:scale-105 animate-whatsapp-bounce cursor-pointer group"
        >
          {/* Live pulsing green dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>

          <div className="flex flex-col text-left">
            <span className="text-[11px] font-bold text-white tracking-wide flex items-center gap-1">
              <span>Have a project? Chat with us!</span>
            </span>
            <span className="text-[9px] font-mono text-emerald-300 font-semibold tracking-wider uppercase">
              Instant WhatsApp Support
            </span>
          </div>

          {/* Small Speech Bubble Pointer Arrow */}
          <div className="absolute -bottom-1.5 right-7 w-3 h-3 bg-[#082342] border-r border-b border-emerald-400/40 rotate-45 pointer-events-none" />
        </button>
      )}

      {/* 3. INFINITE BOUNCING WHATSAPP FLOATING BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Consultation"
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.5),0_0_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.7),0_0_35px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-110 active:scale-95 animate-whatsapp-bounce cursor-pointer"
      >
        {/* Infinite Pulsing Ripple Rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-whatsapp-ring pointer-events-none" />
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/30 blur-md animate-pulse pointer-events-none" />

        {/* Icon toggle */}
        {isOpen ? (
          <X className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5] text-white transition-transform duration-300 rotate-90 group-hover:rotate-180" />
        ) : (
          <WhatsAppSvg className="w-7 h-7 sm:w-8 sm:h-8 fill-white drop-shadow-md transition-transform duration-300 group-hover:scale-110" />
        )}

        {/* Notification Counter Badge (1) */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-md border-2 border-[#041021]">
            1
          </span>
        )}
      </button>
    </aside>
  );
}

// Clean official WhatsApp SVG Icon
function WhatsAppSvg({ className = "w-6 h-6 fill-current" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
    </svg>
  );
}
