import { ArrowRight, Bot, CheckCircle2, ShieldCheck, Zap, PhoneCall, TrendingUp, Users } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Glows & Grids */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              <span>Next-Gen AI Property Lead Engine</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Never Miss a <br className="hidden sm:block" />
              <span className="gold-gradient-text">Property Lead</span> Again.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Transform your agency with SHM Real Estate’s AI Lead System. Automatically attract, engage, qualify, and book consultations with serious property buyers and sellers 24/7.
            </p>

            {/* Bullet Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-300 pt-1 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Instant &lt;45s AI Chat & Lead Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Automated buyer budget & intent scoring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Seamless CRM & Agent notification sync</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Zero lost leads & 3x higher conversions</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/25 flex items-center justify-center gap-2 group"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>See How It Works</span>
              </a>
            </div>

            {/* Trust Footer */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 border-t border-slate-800/60 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>100% Data Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-gold-400" />
                <span>Fast 7-Day Deployment</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bot className="w-4 h-4 text-purple-400" />
                <span>24/7 AI Automation</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Graphic / Mockup Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Outer Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/30 to-teal-500/30 rounded-3xl blur-xl opacity-70 animate-pulse-slow" />

              {/* Dashboard Card Container */}
              <div className="relative rounded-2xl glass-card border border-slate-700/60 p-5 sm:p-6 shadow-2xl shadow-black/80 space-y-6">
                
                {/* Dashboard Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Live AI Lead Stream</h3>
                      <p className="text-xs text-slate-400">SHM Agency Command Center</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Active
                  </span>
                </div>

                {/* Simulated Live Lead Alert Card 1 */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 hover:border-gold-500/40 transition-colors">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-gold-400 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" /> High-Intent Buyer
                    </span>
                    <span className="text-slate-500">2 min ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-slate-100">Luxury Villa Searcher</h4>
                      <p className="text-xs text-slate-400">Budget: $1.2M - $1.8M • DHA / Clifton</p>
                    </div>
                    <span className="px-2 py-1 rounded bg-teal-500/20 text-teal-300 text-[11px] font-semibold">
                      Qualified (94%)
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 bg-slate-950/80 p-2 rounded-lg border border-slate-800/60">
                    🤖 <span className="text-slate-300 italic">&ldquo;AI scheduled consultation call for tomorrow 4:00 PM.&rdquo;</span>
                  </div>
                </div>

                {/* Simulated Live Lead Alert Card 2 */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 hover:border-gold-500/40 transition-colors">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-purple-400 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" /> Commercial Seller
                    </span>
                    <span className="text-slate-500">8 min ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-slate-100">Commercial Plot Owner</h4>
                      <p className="text-xs text-slate-400">Timeline: Immediate Sale • Valuation requested</p>
                    </div>
                    <span className="px-2 py-1 rounded bg-gold-500/20 text-gold-300 text-[11px] font-semibold">
                      Agent Assigned
                    </span>
                  </div>
                </div>

                {/* Performance Summary Bar */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center">
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="block text-base font-bold text-white">&lt;45s</span>
                    <span className="text-[10px] text-slate-400">Response Speed</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="block text-base font-bold text-gold-400">98.4%</span>
                    <span className="text-[10px] text-slate-400">Engagement</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="block text-base font-bold text-teal-400">24/7</span>
                    <span className="text-[10px] text-slate-400">Auto Pilot</span>
                  </div>
                </div>

                {/* Quick Floating Badge */}
                <div className="absolute -bottom-5 -left-5 bg-navy-900 border border-gold-500/30 p-3 rounded-xl shadow-xl flex items-center gap-3 max-w-[220px]">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-white">Instant Lead Sync</p>
                    <p className="text-[10px] text-slate-400">AI Chat & Direct Call</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
