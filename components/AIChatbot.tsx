"use client";

import { useState, useRef, useEffect } from "react";
import {
  Bot,
  Send,
  X,
  RotateCcw,
  Sparkles,
  Phone,
  Mail,
  Building,
  CheckCircle2,
  Calendar,
  Minimize2,
  Maximize2,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  quickReplies?: string[];
  leadCaptured?: boolean;
}

const KNOWLEDGE_BASE = {
  agencyName: "SHM Real Estate Agency",
  leadership: "Sain Bux (Managing Director & Lead Solutions Architect)",
  location: "Clifton, Karachi, Pakistan",
  contacts: {
    phone: "+92 311 3631569",
    email: "sainbuxseelro11@gmail.com",
    portfolio: "https://sainbux.vercel.app",
    github: "https://github.com/SainBux-HadiSeelro",
    linkedin: "https://www.linkedin.com/in/sain-bux-hadi-seelro",
  },
  plans: [
    {
      name: "Starter Plan",
      desc: "Ideal for boutique brokerages and solo realtors. Includes 24/7 AI Chat Widget, lead qualification, email & push alerts, and standard CRM sync.",
    },
    {
      name: "Recommended Growth Plan",
      desc: "Our most popular package. Full multi-channel AI lead engine (Web + Meta ads), advanced buyer intent scoring, automated calendar booking, and custom CRM workflows.",
    },
    {
      name: "Advanced Enterprise Plan",
      desc: "For large firms & master developers. Custom-trained AI on full property inventory, multi-agent lead routing, dedicated account manager, and 24/7 SLA monitoring.",
    },
  ],
  services: [
    "Residential Property Sales & Acquisition (Villas, Apartments, Townhouses in DHA, Clifton & Prime areas)",
    "Commercial Real Estate (Offices, Retail, High-Yield Commercial Plots)",
    "Off-Plan Project Marketing & Automated Lead Funnels",
    "24/7 Conversational AI Agent for Instant Buyer & Seller Qualification",
    "Automated Viewing Appointment Scheduling into Google / Outlook calendars",
    "Zero-Lead-Leakage CRM Integrations (Salesforce, HubSpot, Zoho, Follow Up Boss)",
  ],
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome-1",
    sender: "bot",
    text: "Hello! Welcome to SHM Real Estate. I'm your 24/7 AI Property Advisor. How can I help you today?",
    timestamp: "Just now",
    quickReplies: [
      "🏠 Looking to Buy Property",
      "🏢 Looking to Sell / List",
      "⚡ How AI Lead Engine Works",
      "💰 View Pricing Plans",
      "📞 Contact Sain Bux",
    ],
  },
];

function generateResponse(userText: string): { reply: string; quickReplies?: string[]; leadCaptured?: boolean } {
  const query = userText.toLowerCase().trim();

  // Contact / Phone / Email / Sain Bux queries
  if (
    query.includes("sain") ||
    query.includes("bux") ||
    query.includes("founder") ||
    query.includes("director") ||
    query.includes("owner") ||
    query.includes("ceo") ||
    query.includes("shabeer") ||
    query.includes("shakeel") ||
    query.includes("contact") ||
    query.includes("phone") ||
    query.includes("number") ||
    query.includes("email") ||
    query.includes("call") ||
    query.includes("address") ||
    query.includes("location") ||
    query.includes("office")
  ) {
    return {
      reply: `You can reach our leadership team directly:\n\n👤 **Executive:** Sain Bux (Managing Director & Lead Solutions Architect)\n📍 **Office:** Clifton, Karachi, Pakistan\n📞 **Phone:** ${KNOWLEDGE_BASE.contacts.phone}\n✉️ **Email:** ${KNOWLEDGE_BASE.contacts.email}\n🌐 **Portfolio:** [sainbux.vercel.app](${KNOWLEDGE_BASE.contacts.portfolio})\n\nWould you like me to take your contact number so Sain Bux or our property team can call you directly?`,
      quickReplies: ["Yes, schedule a call", "Tell me about Pricing", "Explore Properties"],
    };
  }

  // Pricing / Plans / Cost queries
  if (
    query.includes("price") ||
    query.includes("pricing") ||
    query.includes("cost") ||
    query.includes("package") ||
    query.includes("plan") ||
    query.includes("charges") ||
    query.includes("fee") ||
    query.includes("rate") ||
    query.includes("kitne") ||
    query.includes("pese")
  ) {
    return {
      reply: `We offer 3 straightforward packages tailored to real estate businesses:\n\n1. **Starter Plan:** Essential 24/7 AI web chat widget, standard lead qualification, email & push alerts, weekly reports.\n\n2. **Recommended Plan (Most Popular):** Multi-channel capture, advanced intent scoring, auto-scheduler for viewings, CRM sync, 7-day deployment.\n\n3. **Advanced Enterprise:** Custom trained AI on your full inventory, multi-agent routing rules, custom API integrations, SLA guarantee.\n\nWould you like to get a customized quote for your brokerage?`,
      quickReplies: ["Get Custom Quote", "How does setup work?", "Talk to Sain Bux"],
    };
  }

  // Buying Property
  if (
    query.includes("buy") ||
    query.includes("purchase") ||
    query.includes("kharid") ||
    query.includes("house") ||
    query.includes("flat") ||
    query.includes("apartment") ||
    query.includes("villa") ||
    query.includes("plot") ||
    query.includes("ghar")
  ) {
    return {
      reply: `Excellent! We have prime residential and commercial options across Clifton, DHA, and high-growth sectors.\n\nTo match you with the right properties, could you share:\n1. Your preferred location (e.g. Clifton, DHA, Bahria)\n2. Property type (Villa, Apartment, Commercial)\n3. Estimated budget range?`,
      quickReplies: ["Under $500k / 5 Crore", "$500k - $1M / 10 Crore+", "Luxury Villa", "Commercial Plot"],
    };
  }

  // Selling Property
  if (
    query.includes("sell") ||
    query.includes("list") ||
    query.includes("bechna") ||
    query.includes("bech") ||
    query.includes("valuation") ||
    query.includes("rent out")
  ) {
    return {
      reply: `We can help you market and sell your property quickly to pre-verified, qualified buyers.\n\nOur AI engine screens buyer finances beforehand, so you only spend time on serious offers.\n\nPlease share your property location and size, or leave your phone number for an immediate valuation!`,
      quickReplies: ["Share Property Details", "Book Valuation Call", "Contact Sain Bux"],
    };
  }

  // How AI Lead Engine Works / Features
  if (
    query.includes("how it works") ||
    query.includes("ai lead") ||
    query.includes("engine") ||
    query.includes("feature") ||
    query.includes("kaam kaise") ||
    query.includes("system") ||
    query.includes("demo")
  ) {
    return {
      reply: `Here is how our AI Lead Generation System powers your agency:\n\n1. **Instant Response (<45s):** Never lose an inbound lead on your website, social ads, or portals.\n2. **Smart Qualification:** Asks budget, timeline, and financing readiness.\n3. **Automated Scheduling:** Books viewing appointments right onto your agents' calendars.\n4. **100% Data Ownership:** All leads and client data belong entirely to you with zero sharing.\n\nSetup takes only 7 days from onboarding.`,
      quickReplies: ["Book Free Demo", "See Pricing Plans", "Contact Sain Bux"],
    };
  }

  // Urdu / Roman Urdu greeting or common phrases
  if (
    query.includes("salam") ||
    query.includes("salaam") ||
    query.includes("assalam") ||
    query.includes("hello") ||
    query.includes("hi") ||
    query.includes("hey") ||
    query.includes("kese ho") ||
    query.includes("kaise ho") ||
    query.includes("kia haal")
  ) {
    return {
      reply: `Wa Alaikum Assalam! Welcome to SHM Real Estate. Main aapki kya madad kar sakta hoon? Aap property buy/sell kerna chahte hain ya hamare AI Lead System ki details janna chahte hain?`,
      quickReplies: ["Property Buy karni hai", "Property Sell karni hai", "AI System ki details", "Pricing Packages"],
    };
  }

  // Phone number or email detection (Lead Capture)
  const phoneRegex = /(?:\+?92|0)?\s?3\d{2}\s?\d{7}|\b\d{10,12}\b|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  if (phoneRegex.test(userText)) {
    return {
      reply: `Thank you! I have recorded your contact details securely. 🎯\n\nOur Managing Director Sain Bux and the SHM Real Estate consultation desk have been alerted. An executive will reach out to you shortly with full details.\n\nIs there anything specific about your budget or property preferences you'd like us to prepare before calling?`,
      leadCaptured: true,
      quickReplies: ["Schedule for Tomorrow", "Send details via Email", "Discuss Pricing First"],
    };
  }

  // Fallback engaging response
  return {
    reply: `Thank you for reaching out! At SHM Real Estate, we specialize in premium property acquisition (residential & commercial) and automated AI client engagement.\n\nWhether you're looking to buy/sell property, or want to deploy our AI Lead System for your agency, I'm here to assist. What would you like to explore?`,
    quickReplies: [
      "🏠 Buy a Property",
      "🏢 Sell a Property",
      "💰 View Pricing Plans",
      "📞 Contact Sain Bux",
    ],
  };
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Realistic human response delay
    setTimeout(() => {
      const { reply, quickReplies, leadCaptured } = generateResponse(text);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        quickReplies,
        leadCaptured,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Property Assistant"
          className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-navy-950 px-4 py-3.5 rounded-full shadow-2xl shadow-gold-500/30 hover:shadow-gold-500/50 transition-all duration-300 hover:scale-105 active:scale-95 border border-gold-300"
        >
          <div className="relative">
            <Bot className="w-6 h-6 text-navy-950 animate-bounce-subtle" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
          <div className="text-left hidden sm:block pr-1">
            <span className="block font-bold text-xs uppercase tracking-wider text-navy-950 leading-none">
              AI Property Advisor
            </span>
            <span className="text-[10px] font-medium text-navy-900/80">Online • Instant Answers</span>
          </div>
        </button>
      )}

      {/* Chat Window Modal */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 flex flex-col shadow-2xl overflow-hidden border border-slate-700/80 bg-navy-950 text-slate-100 ${
            isExpanded
              ? "bottom-4 right-4 left-4 top-4 sm:left-auto sm:top-auto sm:w-[560px] sm:h-[700px] rounded-3xl"
              : "bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[85vh] rounded-3xl"
          }`}
        >
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-gold-500 to-amber-300 p-[1px] flex items-center justify-center shadow-md">
                  <div className="w-full h-full bg-navy-950 rounded-[11px] flex items-center justify-center">
                    <Bot className="w-5 h-5 text-gold-400" />
                  </div>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-navy-950"></span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
                  SHM AI Advisor
                  <span className="text-[10px] font-normal px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/20">
                    Live
                  </span>
                </h3>
                <p className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-gold-400" /> Executive Desk: Sain Bux
                </p>
              </div>
            </div>

            {/* Header Controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Restart conversation"
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Restart chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? "Collapse" : "Expand"}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors hidden sm:block"
                aria-label="Toggle size"
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="px-4 py-2 bg-gold-500/10 border-b border-gold-500/20 text-[11px] text-gold-300 flex items-center justify-between">
            <span className="truncate">Ask anything about properties, pricing, or our AI engine.</span>
            <span className="text-[10px] uppercase font-bold text-emerald-400 flex items-center gap-1 shrink-0 ml-2">
              ● Ready
            </span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-navy-950/70">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-medium rounded-tr-xs shadow-md"
                      : "bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-xs shadow-md"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
                <span className="text-[10px] text-slate-500 mt-1 px-1">{msg.timestamp}</span>

                {/* Quick Reply Chips if provided */}
                {msg.quickReplies && msg.quickReplies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                    {msg.quickReplies.map((reply, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(reply)}
                        className="text-xs px-3 py-1.5 rounded-full bg-slate-900 hover:bg-gold-500/10 text-slate-300 hover:text-gold-400 border border-slate-800 hover:border-gold-500/30 transition-all text-left flex items-center gap-1"
                      >
                        <span>{reply}</span>
                        <ChevronRight className="w-3 h-3 opacity-60" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs px-3 py-2 bg-slate-900/80 rounded-2xl border border-slate-800 w-fit">
                <Bot className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
                <span>Advisor is typing...</span>
                <span className="flex gap-1 ml-1">
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce"></span>
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Footer / Input Area */}
          <div className="p-3 bg-navy-900/90 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask in English or Urdu / share phone number..."
                className="flex-1 bg-slate-950 border border-slate-800 focus:border-gold-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 disabled:opacity-40 disabled:cursor-not-allowed text-navy-950 font-semibold transition-all shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="flex items-center justify-between pt-2 px-1 text-[10px] text-slate-500">
              <span>Managed by Sain Bux • Clifton, Karachi</span>
              <span className="text-gold-400/80">SHM Real Estate AI</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
