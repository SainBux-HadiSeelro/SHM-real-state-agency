import { Magnet, MessageSquare, Bot, Target, Repeat, CalendarCheck, Briefcase, Trophy, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Attract",
    description: "Drive traffic from digital campaigns, social channels & property portals.",
    icon: Magnet,
    badge: "Traffic",
  },
  {
    number: "02",
    title: "Capture",
    description: "Instant greeting via 24/7 AI Chatbot & responsive lead forms.",
    icon: MessageSquare,
    badge: "Inbound",
  },
  {
    number: "03",
    title: "Engage",
    description: "24/7 AI conversational advisor answers property questions.",
    icon: Bot,
    badge: "AI Dialogue",
  },
  {
    number: "04",
    title: "Qualify",
    description: "AI screens budget, location, & buyer timeline in real time.",
    icon: Target,
    badge: "Intelligent Scoring",
  },
  {
    number: "05",
    title: "Nurture",
    description: "Automated multi-touch email, SMS & follow-up sequences.",
    icon: Repeat,
    badge: "Re-engagement",
  },
  {
    number: "06",
    title: "Appointment",
    description: "Auto-books property viewing calls straight into agent calendars.",
    icon: CalendarCheck,
    badge: "Viewing Scheduled",
  },
  {
    number: "07",
    title: "Opportunity",
    description: "Hot qualified lead handoff to dedicated senior agent.",
    icon: Briefcase,
    badge: "Handoff",
  },
  {
    number: "08",
    title: "Conversion",
    description: "Closed property sales & signed listing contracts.",
    icon: Trophy,
    badge: "Deal Closed",
  },
  {
    number: "09",
    title: "Analytics",
    description: "Real-time dashboard metrics on lead cost & agent closing rates.",
    icon: BarChart3,
    badge: "Insights",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-navy-950">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            Automated Lead Funnel Architecture
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            How The <span className="gold-gradient-text">AI Lead Funnel</span> Operates
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            From first ad click to closed real estate deal — here is how our automated 9-stage funnel turns raw interest into closed property transactions.
          </p>
        </div>

        {/* Desktop Step Grid (3x3 layout for clean horizontal flow) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl glass-card p-6 border border-slate-800 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group"
              >
                {/* Top Number & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold font-heading text-slate-700 group-hover:text-gold-500 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-semibold text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2.5 py-0.5 rounded-full">
                    {step.badge}
                  </span>
                </div>

                {/* Icon & Details */}
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Stage {idx + 1} of 9</span>
                  <span className="text-gold-400 font-medium group-hover:translate-x-1 transition-transform">
                    Automated &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Stepper */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="rounded-xl glass-card p-5 border border-slate-800 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0 mt-1">
                  <Icon className="w-5 h-5 text-gold-400" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gold-400 uppercase tracking-wide">
                      Stage {step.number} • {step.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
