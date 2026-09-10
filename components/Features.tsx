import { Bot, Target, MessageSquareCode, CalendarCheck2, LayoutDashboard, LineChart, Check } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Multi-Channel AI Lead Capture",
    description:
      "Captures property inquiries instantly from your website, WhatsApp, Instagram, Facebook Ads, and property portal listings in real time.",
    bullets: [
      "24/7 Web Chat Widget",
      "Official WhatsApp Business API integration",
      "Direct Meta / Facebook Lead Form sync",
    ],
    highlight: "Zero Delayed Replies",
  },
  {
    icon: Target,
    title: "AI Qualification & Intent Scoring",
    description:
      "Smart conversational AI asks buyers key questions to determine buying timeline, payment preferences (cash vs bank finance), and verified budget.",
    bullets: [
      "Buyer vs Seller intent classification",
      "Property type & location matching",
      "Budget verification & readiness score",
    ],
    highlight: "High Accuracy",
  },
  {
    icon: MessageSquareCode,
    title: "Automated Follow-Up Sequences",
    description:
      "Multi-channel drip campaigns ensure cold leads are re-engaged automatically through personalized WhatsApp messages and email updates.",
    bullets: [
      "Automated WhatsApp voice & text notes",
      "Missed lead recovery campaigns",
      "New property alerts sent automatically",
    ],
    highlight: "3x Higher Retention",
  },
  {
    icon: CalendarCheck2,
    title: "Automated Appointment Scheduling",
    description:
      "Allows qualified buyers to book property viewings directly onto your agents' Google or Outlook calendars without back-and-forth calls.",
    bullets: [
      "Agent availability auto-sync",
      "Instant SMS & WhatsApp reminders",
      "No-show reduction workflows",
    ],
    highlight: "Hands-Free Booking",
  },
  {
    icon: LayoutDashboard,
    title: "Real Estate CRM & Pipeline",
    description:
      "A unified dashboard tracking every buyer & seller stage from initial inquiry to final contract signing with real-time agent notifications.",
    bullets: [
      "Instant push & WhatsApp agent alerts",
      "Lead stage drag-and-drop board",
      "Seamless integration with major CRMs",
    ],
    highlight: "Unified Hub",
  },
  {
    icon: LineChart,
    title: "Analytics Dashboard & KPI Reporting",
    description:
      "Clear visual reports tracking cost per qualified lead, agent response speed, pipeline value, and campaign ROI.",
    bullets: [
      "Real-time lead response timing audit",
      "Channel conversion comparison",
      "Exportable executive reports",
    ],
    highlight: "Full Transparency",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-navy-900/40 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            Engineered For Real Estate Dominance
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Core Features of the <span className="teal-gradient-text">AI Lead Engine</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Everything your real estate agency needs to capture, screen, and convert high-intent buyers and sellers automatically.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl glass-card p-7 border border-slate-800 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-colors">
                      <Icon className="w-7 h-7 text-gold-400" />
                    </div>
                    <span className="text-[11px] font-semibold text-gold-400 bg-gold-500/10 border border-gold-500/20 px-2.5 py-1 rounded-md">
                      {feature.highlight}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Bullets List */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {feature.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
