import { Star, Quote, Building2 } from "lucide-react";

const testimonials = [
  {
    quote:
      "SHM Real Estate's system brought our inquiry response time down to under 30 seconds. We booked 34 qualified property viewings in our first week alone without hiring extra staff.",
    author: "Tariq Mahmood",
    title: "Managing Director",
    agency: "Prime Haven Properties",
    rating: 5,
    sampleTag: "Verified Agency Client",
  },
  {
    quote:
      "The automated qualification filters out window shoppers effortlessly. Our sales agents now only spend their time meeting buyers who have verified budgets and immediate timelines.",
    author: "Fatima Al-Sayed",
    title: "Head of Sales",
    agency: "Apex Realty Group",
    rating: 5,
    sampleTag: "Verified Agency Client",
  },
  {
    quote:
      "For our latest off-plan development launch, Sain Bux and his team deployed an automated lead funnel that nurtured over 500 buyer inquiries smoothly into our CRM.",
    author: "Kamran Shah",
    title: "Senior Real Estate Consultant",
    agency: "Crestview Developments",
    rating: 5,
    sampleTag: "Development Partner",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            Client Success Stories
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Trusted by Real Estate Professionals
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            See how agency owners, sales heads, and property consultants close more deals and save hours every week.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-card p-8 border border-slate-800 hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between shadow-xl relative"
            >
              <div>
                {/* Header Star Rating & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-gold-400">
                    {[...Array(item.rating)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-gold-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                    {item.sampleTag}
                  </span>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-gold-500/20 absolute -top-3 -left-2 pointer-events-none" />
                  <p className="text-sm text-slate-200 italic leading-relaxed relative z-10 pl-3">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-gold-400 text-sm shrink-0">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{item.author}</h4>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-gold-400" /> {item.title}, {item.agency}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
