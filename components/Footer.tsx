import { Building2, Sparkles, Phone, Mail, User, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-slate-800 text-slate-400 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-gold-600 to-gold-400 p-[1px]">
                <div className="w-full h-full bg-navy-950 rounded-[11px] flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-gold-400" />
                </div>
              </div>
              <span className="font-heading text-xl font-bold text-white">
                SHM <span className="text-gold-400 font-sans text-base">Real Estate</span>
              </span>
            </a>

            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              SHM Real Estate Agency provides an advanced AI Auto Lead Generation & Qualification System designed to capture, screen, and convert high-intent property buyers & sellers 24/7.
            </p>

            <div className="pt-2 text-[11px] text-gold-400 font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Next-Generation Property Automation
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase text-white tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#pain-points" className="hover:text-gold-400 transition-colors">Pain Points</a></li>
              <li><a href="#how-it-works" className="hover:text-gold-400 transition-colors">How It Works</a></li>
              <li><a href="#features" className="hover:text-gold-400 transition-colors">Key Features</a></li>
              <li><a href="#target-audience" className="hover:text-gold-400 transition-colors">Who It&apos;s For</a></li>
              <li><a href="#pricing" className="hover:text-gold-400 transition-colors">Pricing Packages</a></li>
            </ul>
          </div>

          {/* Col 4: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase text-white tracking-wider">Target Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#target-audience" className="hover:text-gold-400 transition-colors">Residential Buyers</a></li>
              <li><a href="#target-audience" className="hover:text-gold-400 transition-colors">Commercial Investors</a></li>
              <li><a href="#target-audience" className="hover:text-gold-400 transition-colors">Off-Plan Projects</a></li>
              <li><a href="#target-audience" className="hover:text-gold-400 transition-colors">Property Seller Listings</a></li>
              <li><a href="#faq" className="hover:text-gold-400 transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Col 5: Executive Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase text-white tracking-wider">Executive Leadership</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="font-semibold text-white">Sain Bux</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span className="text-[11px] text-teal-400">Managing Director • Clifton, Karachi</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <a href="tel:+923113631569" className="hover:text-gold-400 transition-colors">
                  +92 311 3631569
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <a href="mailto:sainbuxseelro11@gmail.com" className="hover:text-gold-400 transition-colors">
                  sainbuxseelro11@gmail.com
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://sainbux.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-gold-400 hover:underline"
                >
                  <span>sainbux.vercel.app</span>
                  <span>↗</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} SHM Real Estate Agency. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            <a
              href="#hero"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-gold-400 hover:border-gold-500/40 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
