import { Search, Compass, Sliders, Cpu, ShieldCheck, Rocket, LineChart, Headphones } from "lucide-react";

const processSteps = [
  {
    step: "01",
    name: "Discovery",
    desc: "Audit your current lead sources & target buyer profiles.",
    icon: Search,
  },
  {
    step: "02",
    name: "Strategy",
    desc: "Design custom AI prompt scripts & qualifying rules.",
    icon: Compass,
  },
  {
    step: "03",
    name: "Setup",
    desc: "Configure WhatsApp Business API & lead capture widgets.",
    icon: Sliders,
  },
  {
    step: "04",
    name: "Integration",
    desc: "Connect AI funnel with your existing CRM & agent tools.",
    icon: Cpu,
  },
  {
    step: "05",
    name: "Testing",
    desc: "Run end-to-end simulation of buyer & seller scenarios.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    name: "Launch",
    desc: "Go live with automated 24/7 AI lead capture.",
    icon: Rocket,
  },
  {
    step: "07",
    name: "Optimization",
    desc: "Fine-tune AI scoring & conversation flow based on real data.",
    icon: LineChart,
  },
  {
    step: "08",
    name: "Ongoing Support",
    desc: "Dedicated technical assistance & regular performance audits.",
    icon: Headphones,
  },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            7-Day Rapid Deployment Roadmap
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Implementation <span className="gold-gradient-text">Timeline</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We handle the heavy technical setup so your agency can begin receiving qualified, booked property appointments within 7 business days.
          </p>
        </div>

        {/* 8-Stage Timeline Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl glass-card p-6 border border-slate-800 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg group flex flex-col justify-between"
              >
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-lg bg-gold-500/10 text-gold-400 font-bold text-xs flex items-center justify-center border border-gold-500/30">
                    {item.step}
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                    Phase {idx + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors mb-3">
                    <Icon className="w-5 h-5 text-slate-300 group-hover:text-gold-400 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Status Bar */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Seamless Execution</span>
                  <span className="text-emerald-400">✓ Turnkey</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
