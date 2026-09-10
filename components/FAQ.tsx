"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Who owns the property lead data collected by the AI system?",
    answer:
      "You retain 100% full ownership of all customer data, conversation transcripts, phone numbers, and contact details. We enforce strict data privacy standards, and your leads are never shared or resold.",
  },
  {
    question: "How does the WhatsApp integration work for our agents?",
    answer:
      "Our system connects directly to the official Meta WhatsApp Business API. The AI handles instant greeting, property inquiry answering, and budget screening 24/7. When a buyer is qualified or requests a human agent, the conversation is handed off smoothly to your team's WhatsApp inbox.",
  },
  {
    question: "How fast does the AI respond to inbound property leads?",
    answer:
      "The AI system responds in under 45 seconds across Website Chat, WhatsApp, Facebook Lead Ads, and Instagram DMs — ensuring zero delayed responses day or night.",
  },
  {
    question: "Can this AI system integrate with our existing real estate CRM?",
    answer:
      "Yes! We support integrations with major real estate CRMs including Salesforce, HubSpot, Zoho CRM, Follow Up Boss, and custom webhooks/Zapier workflows.",
  },
  {
    question: "What are the contract terms and setup commitments?",
    answer:
      "We offer flexible monthly and annual plans without locking you into mandatory long-term multi-year contracts. Setup takes approximately 7 business days from onboarding.",
  },
  {
    question: "What technical support and training are included?",
    answer:
      "All packages include dedicated technical onboarding, agent training sessions, ongoing system optimization, and fast email/WhatsApp support.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-navy-900/40 border-t border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Got Questions? <span className="gold-gradient-text">We Have Answers</span>
          </h2>
          <p className="text-slate-300 text-base">
            Everything you need to know about setting up SHM Real Estate&apos;s AI Auto Lead Generation Engine.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl glass-card border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-white hover:text-gold-400 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-gold-500/20 text-gold-400 border-gold-500/40" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
