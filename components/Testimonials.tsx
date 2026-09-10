import { Star, Quote, Building2 } from "lucide-react";

const testimonials = [
  {
    quote:
      "SHM Real Estate's AI engine transformed our inquiry response time from hours to under 30 seconds. We booked 34 qualified property viewings in our first week alone!",
    author: "Tariq Mahmood",
    title: "Managing Director",
    agency: "Prime Haven Properties",
    rating: 5,
    sampleTag: "Sample Client Review",
  },
  {
    quote:
      "The WhatsApp automated qualification flow filters out window shoppers seamlessly. Our agents now only spend time meeting buyers with verified budgets.",
    author: "Fatima Al-Sayed",
    title: "Head of Sales",
    agency: "Apex Realty Group",
    rating: 5,
    sampleTag: "Sample Client Review",
  },
  {
    quote:
      "Deploying the AI lead funnel for our off-plan project launch allowed us to capture and nurture over 500 buyer inquiries automatically without adding extra staff.",
    author: "Kamran Shah",
    title: "Senior Real Estate Consultant",
    agency: "Crestview Developments",
    rating: 5,
    sampleTag: "Sample Client Review",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            Client Feedback & Testimonial Placeholders
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            What Real Estate Leaders Say
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Read representative feedback from agency owners and property consultants using AI lead automation systems.
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
