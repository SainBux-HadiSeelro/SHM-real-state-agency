"use client";

import { useState } from "react";
import { Phone, Mail, User, Send, CheckCircle2, MessageSquare, AlertCircle, Building2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Buyer Leads Automation",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message details are required";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-navy-950 relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            Schedule Your Strategy Session
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Transform Your Agency&apos;s <span className="gold-gradient-text">Lead Pipeline</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Ready to deploy your 24/7 AI lead engine? Fill out the form below or contact our executive team directly.
          </p>
        </div>

        {/* 2 Column Form & Info Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl glass-card p-8 border border-slate-800 space-y-8 shadow-2xl">
              
              <div>
                <span className="text-xs font-bold uppercase text-gold-400 tracking-wider block mb-1">
                  Official Contact Representatives
                </span>
                <h3 className="text-2xl font-bold text-white">SHM Real Estate Agency</h3>
                <p className="text-xs text-slate-400 mt-1">
                  AI Lead Generation & Property Automation Services
                </p>
              </div>

              <div className="space-y-6">
                
                {/* Executive Name & Attention */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-400">Managing Director</h4>
                    <p className="text-base font-bold text-white">Sain Bux</p>
                    <span className="inline-block mt-1 text-[11px] font-semibold text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                      Lead Solutions Architect • Clifton, Karachi
                    </span>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-400">Direct Phone Numbers</h4>
                    <div className="space-y-1 mt-1">
                      <a href="tel:+922135872400" className="block text-sm font-semibold text-white hover:text-gold-400 transition-colors">
                        +92 (21) 3587-2400
                      </a>
                      <a href="tel:+923008294560" className="block text-sm font-semibold text-white hover:text-gold-400 transition-colors">
                        +92 (300) 829-4560
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Address & Portfolio */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold text-slate-400">Official Email & Web</h4>
                    <a href="mailto:sainbuxseelro11@gmail.com" className="text-sm font-semibold text-white hover:text-gold-400 transition-colors block mt-1">
                      sainbuxseelro11@gmail.com
                    </a>
                    <a
                      href="https://sainbux.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gold-400 hover:underline block mt-0.5"
                    >
                      sainbux.vercel.app ↗
                    </a>
                  </div>
                </div>

              </div>

              <div className="p-4 rounded-xl bg-navy-950 border border-gold-500/20 text-xs text-slate-300 leading-relaxed">
                🚀 <strong className="text-gold-400">Fast-Track Onboarding:</strong> Inquiries submitted below are routed directly to Sain Bux and our property implementation team for immediate review.
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-card p-8 border border-slate-800 shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Submitted Successfully!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-gold-400">{formData.name}</strong>. Managing Director Sain Bux and our senior real estate team have received your request and will contact you shortly on <span className="text-slate-100">{formData.phone}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        interest: "Buyer Leads Automation",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-2">Book Your Consultation</h3>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tariq Khan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-gold-500"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Direct Phone / Mobile Number <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+92 3XX XXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.phone ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-gold-500"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="tariq@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-gold-500"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Primary Interest Select */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Primary System Focus
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      <option value="Buyer Leads Automation">Property Buyer Leads Automation</option>
                      <option value="Seller Listing Acquisition">Seller Listing & Valuation Funnel</option>
                      <option value="Full Agency Turnkey Package">Full Turnkey Agency AI Package</option>
                      <option value="Enterprise & Developer Launch">Enterprise / Off-Plan Project Launch</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Tell us about your agency & goals <span className="text-gold-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share your target property locations, current monthly lead volume, or preferred CRM..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.message ? "border-red-500 focus:border-red-500" : "border-slate-800 focus:border-gold-500"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 transition-all shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <span>Submit Strategy Request</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
