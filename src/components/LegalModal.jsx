import React from 'react';
import { X, Shield } from 'lucide-react';

export default function LegalModal({ type, onClose }) {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl bg-oryon-deep border border-oryon-cyan/40 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-oryon-navy/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-oryon-surface border border-oryon-border/30 text-oryon-cyan">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-heading">
                {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <p className="text-xs text-oryon-grey/60 font-mono">
                Oryon Global Technologies • Last updated: 2026
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-oryon-grey/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm text-oryon-grey/85 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                At Oryon Global, we recognize that privacy and data security are fundamental enterprise prerequisites. This Privacy Policy details our operational commitments to safeguarding corporate and individual inquiries.
              </p>
              <h4 className="text-sm font-semibold text-white pt-2">1. Data Ingestion & Purpose</h4>
              <p>
                We only collect information voluntarily transmitted through project inquiry questionnaires, architectural reviews, or direct correspondence. Information gathered is strictly utilized to evaluate technical scope, prepare feasibility assessments, and maintain professional client communications.
              </p>
              <h4 className="text-sm font-semibold text-white pt-2">2. Confidentiality & Non-Disclosure</h4>
              <p>
                Oryon Global adheres to rigorous Non-Disclosure standards. Proprietary system designs, code repositories, data models, and business logic shared with our engineering team are held under enterprise-grade encryption and restricted access controls.
              </p>
              <h4 className="text-sm font-semibold text-white pt-2">3. Third-Party Sharing</h4>
              <p>
                We do not sell, license, or distribute client contact credentials or technical briefs to any external marketing platforms or unvetted third parties.
              </p>
            </>
          ) : (
            <>
              <p>
                These Terms of Service govern your access to and interaction with the web properties and conceptual software materials published by Oryon Global.
              </p>
              <h4 className="text-sm font-semibold text-white pt-2">1. Intellectual Property</h4>
              <p>
                All original branding, architecture diagrams, user interface components, and custom illustrations displayed on this site are the intellectual property of Oryon Global, unless designated as open-source or third-party trademarks.
              </p>
              <h4 className="text-sm font-semibold text-white pt-2">2. Professional Engagement</h4>
              <p>
                Any formal software engineering, cloud management, or IT consulting engagements are governed by bespoke Master Services Agreements (MSA) and Statements of Work (SOW) executed bilaterally between authorized representatives.
              </p>
              <h4 className="text-sm font-semibold text-white pt-2">3. Disclaimer of Architectural Prototypes</h4>
              <p>
                Sample project cards and reference architectures displayed on this website serve demonstrative capabilities and do not represent warranties of specific third-party operational outcomes without tailored engineering scoping.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-oryon-navy/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-oryon-surface hover:bg-oryon-surfaceLight border border-oryon-border/30 transition-colors"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
}
