import { Check, Sparkles, Shield, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "Essential AI Lead Automation",
    description: "Perfect for boutique brokerages and independent real estate agents getting started with automated lead capture.",
    highlighted: false,
    badge: null,
    features: [
      "Website AI Chat Widget Setup",
      "Basic WhatsApp Auto-Responder",
      "Lead Qualification (up to 3 questions)",
      "Email & Mobile Push Notifications",
      "Standard CRM Handoff",
      "Weekly Performance Summary",
    ],
    ctaText: "Contact for Pricing",
    buttonVariant: "secondary",
  },
  {
    name: "Recommended",
    tagline: "Complete AI Growth Engine",
    description: "The complete automated funnel built for growing real estate agencies looking to scale appointments rapidly.",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Official WhatsApp Business API Integration",
      "Multi-Channel Lead Capture (Web + Meta Ads)",
      "Advanced Buyer & Seller AI Intent Scoring",
      "Automated Appointment & Viewing Scheduler",
      "Multi-Touch WhatsApp & Email Drip Sequences",
      "Real-Time Agent Push Alerts",
      "Custom CRM Pipeline Integration",
      "Priority 7-Day Onboarding Support",
    ],
    ctaText: "Contact for Pricing",
    buttonVariant: "primary",
  },
  {
    name: "Advanced",
    tagline: "Enterprise & Project Developers",
    description: "Custom AI engine customized for large real estate firms, master developers, and high-volume project launches.",
    highlighted: false,
    badge: "Enterprise Grade",
    features: [
      "Unlimited Multi-Channel Lead Engines",
      "Custom Trained AI Model for Project Inventories",
      "Multi-Agent Call & Booking Routing Rules",
      "Custom API & Enterprise CRM Integrations",
      "Dedicated Account Manager & Strategy Lead",
      "SLA Guarantee & 24/7 Technical Monitoring",
    ],
    ctaText: "Contact for Pricing",
    buttonVariant: "secondary",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-navy-900/60 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            Flexible Package Options
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Tailored <span className="gold-gradient-text">Pricing Packages</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Transparent packages designed to scale with your property portfolio. Contact our team to request a customized quote.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlighted
                  ? "bg-gradient-to-b from-navy-900 via-slate-900 to-navy-900 border-2 border-gold-500 shadow-2xl shadow-gold-500/10 lg:-translate-y-3"
                  : "glass-card border border-slate-800 hover:border-slate-700 shadow-xl"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold text-xs shadow-md tracking-wider flex items-center gap-1.5 uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="border-b border-slate-800 pb-6 mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-xs font-semibold text-gold-400 uppercase tracking-wide mb-3">
                    {plan.tagline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    What&apos;s Included:
                  </span>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.highlighted ? "bg-gold-500/20 text-gold-400" : "bg-teal-500/20 text-teal-400"
                      }`}>
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="#contact"
                  className={`w-full py-3.5 rounded-xl font-bold text-sm text-center block transition-all shadow-md ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-navy-950 shadow-gold-500/20"
                      : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
