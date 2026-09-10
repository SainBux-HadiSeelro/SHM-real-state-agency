# Website Build Prompt — SHM Real Estate | AI Lead Generation System

Copy the section below (between the lines) and paste it as your first message into your AI coding tool (Claude Code, Cursor, v0, opencode, etc).

---

## PROMPT TO PASTE

Build a modern, professional, conversion-focused single-page marketing website for a real estate company called **SHM Real Estate Agency**. The site's core purpose is to promote their **AI-Powered Auto Leads Generation System** — a service that helps them attract, capture, qualify, nurture and convert property leads automatically.

### Tech stack
- **Next.js (App Router, latest stable version) + React + TypeScript**
- **Tailwind CSS** for styling
- Use the `next/image` component for any images/placeholders
- Structure as a proper Next.js project: `app/page.tsx` as the main landing page, break sections into reusable components under `components/` (e.g. `Hero.tsx`, `Features.tsx`, `Pricing.tsx`, `Faq.tsx`, `ContactForm.tsx`, `Footer.tsx`, `Navbar.tsx`)
- Fully responsive (mobile-first): must look great on phone, tablet, and desktop.
- Fast-loading, clean code, use Next.js best practices (server components by default, `"use client"` only where interactivity is needed — accordion, mobile menu, form).

### Visual style
- Real estate + tech feel: trustworthy, premium, modern.
- Color palette: deep navy/charcoal + gold or teal accent (real estate = trust + premium), white/light background sections alternating with dark sections.
- Good typography: a strong serif or modern sans for headings, clean sans-serif for body.
- Use subtle animations on scroll (fade-in / slide-up) for sections.
- Icons for feature lists (use a free icon set like lucide/feather via CDN or inline SVG).
- Include a sticky top navbar with logo text "SHM Real Estate" + nav links + a "Get a Free Consultation" CTA button.

### Pages / Sections (single-page site with anchor navigation)

1. **Hero Section**
   - Big headline: something like "Never Miss a Property Lead Again"
   - Subheadline explaining the AI auto lead generation system in one sentence.
   - Primary CTA button: "Book a Free Demo" and secondary CTA "See How It Works"
   - Hero image/illustration area (use a placeholder gradient or a real-estate related stock-style graphic — I will replace image later).

2. **Problem / Pain Points Section**
   - 3-4 cards: "Slow response times lose buyers", "Leads fall through the cracks", "No way to know who's serious", "Manual follow-up wastes agent time"

3. **How It Works (The Funnel)**
   - Visual step flow: Attract → Capture → Engage → Qualify → Nurture → Appointment → Sales Opportunity → Conversion → Analytics
   - Show as a horizontal stepper on desktop, vertical stepper on mobile.

4. **Key Features Section** (grid of feature cards)
   - AI Lead Capture (Website, WhatsApp, Social Media)
   - AI Lead Qualification & Scoring (buyer/seller, budget, location, timeline)
   - Automated Follow-Up (WhatsApp + Email sequences, reminders, missed-lead recovery)
   - Appointment Generation
   - CRM & Pipeline Tracking
   - Analytics Dashboard & KPI Reporting

5. **Who It's For**
   - Two columns: Buyers (residential, commercial, investors, first-time, luxury) and Sellers (owners, investors, developers, land)

6. **KPIs / Results Section**
   - A stats strip with placeholder numbers (e.g. "Faster response time", "Higher lead-to-appointment rate", "Reduced lead leakage") — clearly labeled as illustrative, not guaranteed, since real numbers aren't finalized yet.

7. **Process / Implementation Timeline**
   - Simple horizontal timeline: Discovery → Strategy → Setup → Integration → Testing → Launch → Optimization → Ongoing Support

8. **Pricing / Packages Section**
   - 3 pricing cards side by side: "Starter", "Recommended" (highlighted/featured), "Advanced"
   - Each card: short description, feature bullet list, "Contact for Pricing" button (no live payment needed).

9. **Testimonials / Case Study placeholder**
   - 2-3 testimonial cards with placeholder quotes and names (clearly marked as sample/placeholder text).

10. **FAQ Section**
    - Accordion-style FAQ with 5-6 common questions (Data ownership, WhatsApp integration, how fast leads respond, CRM used, contract terms, support hours).

11. **Contact / CTA Section**
    - A contact form: Name, Phone, Email, Message, Submit button (frontend only — form doesn't need a working backend yet, just show a success message on submit via JS, or wire to a simple mailto/formspree placeholder).
    - Contact details block: Shabbeer Hussain, phone numbers +923223557534 / +923333435515, email acmenetwork@gmail.com, Attention: Mr. Shakeel.

12. **Footer**
    - Logo, short tagline, quick links, social icons (placeholder links), copyright line.

### Functional requirements
- Smooth scroll navigation from navbar to sections.
- Mobile hamburger menu.
- FAQ accordion should expand/collapse on click.
- Pricing cards: highlight the "Recommended" plan visually (border/scale/badge saying "Most Popular").
- Contact form: basic client-side validation (required fields, valid email format) + show a success message on submit.
- Add a floating WhatsApp chat button (bottom-right corner) linking to a WhatsApp number (use +923223557534 as placeholder, wa.me link).

### Deliverable
- A complete, ready-to-run Next.js project (App Router, TypeScript, Tailwind) that I can start locally with `npm install && npm run dev`.
- Clean, well-organized component files so I can easily edit text, colors, and images later.
- Use placeholder text clearly where real content/numbers are not yet finalized.
- Include a `README.md` with setup instructions.

---

## Before pasting the prompt
If the tool doesn't scaffold the project itself, run this first in your terminal to create a fresh Next.js app, then run the tool inside this folder:

```
npx create-next-app@latest shm-website --typescript --tailwind --app --eslint
cd shm-website
```

Answer the setup prompts with defaults (Yes to Tailwind, App Router, etc). Then open your AI coding tool inside this `shm-website` folder and paste the prompt below.

## Notes for me to fill in before/while using this prompt
- Replace placeholder stats/testimonials with real numbers once available.
- Replace hero image and any stock graphics with actual branded images/logo.
- Decide real form backend (Formspree, Google Forms, or custom API) before going live.