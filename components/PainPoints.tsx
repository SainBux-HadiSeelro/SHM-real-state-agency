import { Clock, AlertTriangle, UserX, Hourglass } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Slow Response Times Lose Buyers",
    description:
      "78% of property buyers close with the agency that responds first. Taking hours to answer inquiries means losing high-value clients to faster competitors.",
    impact: "Lost Commissions Daily",
  },
  {
    icon: AlertTriangle,
    title: "Leads Fall Through the Cracks",
    description:
      "Scattered inquiries across unorganized inboxes, missed call logs, and messy spreadsheets result in forgotten follow-ups and unhandled hot buyer inquiries.",
    impact: "Zero Follow-up Visibility",
  },
  {
    icon: UserX,
    title: "No Way to Know Who's Serious",
    description:
      "Agents waste valuable time driving around town showing luxury properties to unqualified 'window shoppers' who lack immediate buying budget.",
    impact: "Wasted Agent Hours",
  },
  {
    icon: Hourglass,
    title: "Manual Follow-up Wastes Time",
    description:
      "Manually sending property updates, reminder texts, and status check-ins distracts your team from negotiating and closing active deals.",
    impact: "Low Productivity",
  },
];

export default function PainPoints() {
  return (
    <section id="pain-points" className="py-20 bg-navy-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider">
            Traditional Real Estate Bottlenecks
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Is Your Agency Losing Leads to <span className="text-red-400">Outdated Manual Processes?</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Traditional real estate marketing relies on slow manual replies and unorganized follow-ups. Here is why most agencies miss out on lucrative property deals.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl glass-card p-6 border border-slate-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="text-[11px] font-semibold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-md border border-red-500/20">
                    {point.impact}
                  </span>
                </div>

                {/* Card Title & Text */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-200 transition-colors">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Transition Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-navy-950 via-slate-900 to-navy-950 border border-gold-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-xl">
          <div className="text-left">
            <h4 className="text-lg font-bold text-white">Ready to automate your real estate pipeline?</h4>
            <p className="text-xs text-slate-400">SHM Real Estate AI replaces slow manual routines with instant automated conversion.</p>
          </div>
          <a
            href="#how-it-works"
            className="px-6 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm shrink-0 transition-colors shadow-md"
          >
            Explore The Solution
          </a>
        </div>

      </div>
    </section>
  );
}
