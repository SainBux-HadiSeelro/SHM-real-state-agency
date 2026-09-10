import { Building, Home, Briefcase, Landmark, CheckCircle2, UserCheck, Sparkles } from "lucide-react";

export default function TargetAudience() {
  return (
    <section id="target-audience" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            Tailored Real Estate Solutions
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Designed for Both <span className="gold-gradient-text">Buyers & Sellers</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Our AI lead system identifies specific intent signals, providing personalized automated flows for both sides of the property market.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Column 1: For Property Buyers */}
          <div className="rounded-3xl glass-card border border-slate-800 hover:border-gold-500/40 p-8 space-y-6 transition-all duration-300 shadow-2xl relative group">
            <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
              <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                <Home className="w-7 h-7 text-gold-400" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-gold-400 tracking-wider">Inbound Buyer Acquisition</span>
                <h3 className="text-2xl font-bold text-white">Property Buyers</h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Attract high-budget buyers looking for residential, commercial, or off-plan real estate opportunities, filtering out unqualified inquiries before they reach your sales desk.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Residential Home Seekers</h4>
                  <p className="text-xs text-slate-400">Buyers seeking luxury villas, apartments, townhouses, and family homes with specific bedroom & budget criteria.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Commercial Investors</h4>
                  <p className="text-xs text-slate-400">Institutional & private investors acquiring office spaces, retail plazas, warehouses, and rental yield properties.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Overseas & Off-Plan Buyers</h4>
                  <p className="text-xs text-slate-400">Remote investors interested in upcoming developments, high ROI projects, and flexible payment plans.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400 italic">
              ✨ AI qualifies budget, payment method, preferred location, & purchase urgency automatically.
            </div>
          </div>

          {/* Column 2: For Property Sellers */}
          <div className="rounded-3xl glass-card border border-slate-800 hover:border-teal-500/40 p-8 space-y-6 transition-all duration-300 shadow-2xl relative group">
            <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                <Building className="w-7 h-7 text-teal-400" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-teal-400 tracking-wider">Outbound Listing Acquisition</span>
                <h3 className="text-2xl font-bold text-white">Property Sellers & Developers</h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Capture motivated sellers wanting free property valuations, listing appraisals, and rapid sale execution for individual listings or entire new developments.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Individual Property Owners</h4>
                  <p className="text-xs text-slate-400">Homeowners ready to sell their villa or apartment who request immediate listing consultation.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Real Estate Developers</h4>
                  <p className="text-xs text-slate-400">Project developers seeking rapid off-plan lead generation and launch-day buyer bookings.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Land & Commercial Plot Owners</h4>
                  <p className="text-xs text-slate-400">Sellers holding prime commercial plots, agricultural land, or industrial real estate assets.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400 italic">
              ✨ AI collects property specifications, desired asking price, listing timeline, & ownership proof.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
