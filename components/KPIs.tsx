import { Zap, TrendingUp, ShieldCheck, Clock3, Info } from "lucide-react";

const stats = [
  {
    icon: Clock3,
    metric: "< 45 Seconds",
    label: "Average Initial AI Response Time",
    subtext: "Down from industry average of 4+ hours",
    color: "text-gold-400",
    bg: "bg-gold-500/10",
    border: "border-gold-500/30",
  },
  {
    icon: TrendingUp,
    metric: "+ 45%",
    label: "Lead-to-Appointment Rate",
    subtext: "Higher conversion into booked viewings",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/30",
  },
  {
    icon: ShieldCheck,
    metric: "99%",
    label: "Lead Leakage Reduction",
    subtext: "Zero forgotten or unhandled buyer inquiries",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
  },
  {
    icon: Zap,
    metric: "3.5x",
    label: "Agent Deal Capacity",
    subtext: "Agents spend 100% of time with qualified buyers",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
  },
];

export default function KPIs() {
  return (
    <section id="kpis" className="py-20 bg-navy-900/80 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
            <Info className="w-3.5 h-3.5 text-gold-400" />
            <span>Illustrative Benchmarks & Performance Goals</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Measurable Results for Your Real Estate Business
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Estimated performance improvements based on typical deployment benchmarks of our AI lead generation system.
          </p>
        </div>

        {/* Stats Strip Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="rounded-2xl glass-card p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300 text-center relative group"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <h3 className={`text-3xl sm:text-4xl font-extrabold font-heading mb-1 ${stat.color}`}>
                  {stat.metric}
                </h3>
                <p className="text-sm font-bold text-white mb-2">{stat.label}</p>
                <p className="text-xs text-slate-400">{stat.subtext}</p>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 text-center">
          <p className="text-[11px] text-slate-500 italic">
            * Note: Sample baseline metrics shown above are for illustrative demonstration purposes. Actual conversion figures depend on agency advertising budget, target location, and inventory availability.
          </p>
        </div>

      </div>
    </section>
  );
}
