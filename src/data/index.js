export const SERVICES = [
  { icon: "🌐", cat: "Development", name: "Website Development", desc: "Custom business, portfolio, e-commerce websites. Redesign & performance optimisation." },
  { icon: "📱", cat: "Development", name: "App Development", desc: "Mobile apps (Android/iOS), web apps, dashboards, SaaS products, API integrations." },
  { icon: "🎨", cat: "Design", name: "Logo & Branding", desc: "Logo design, brand identity, colour palette, typography, and brand guidelines." },
  { icon: "✏️", cat: "Design", name: "Graphic Design", desc: "Social media posts, banners, flyers, brochures, infographics, email templates." },
  { icon: "🖥️", cat: "Design", name: "UI/UX Design", desc: "Wireframes, high-fidelity UI screens, prototypes and interactive click-through flows." },
  { icon: "📊", cat: "Marketing", name: "Digital Marketing Strategy", desc: "Strategy & channel planning, funnel mapping, monthly performance reports." },
  { icon: "📣", cat: "Marketing", name: "Meta Ads & Ads Running", desc: "Facebook & Instagram Ads, A/B testing, Meta Pixel, conversion tracking." },
  { icon: "🔍", cat: "Marketing", name: "Google / YouTube / LinkedIn Ads", desc: "Search, Display, Shopping Ads. YouTube and LinkedIn performance marketing." },
  { icon: "🔎", cat: "Marketing", name: "SEO & Content", desc: "On-page SEO, technical SEO, content writing — copy, blogs, product descriptions." },
  { icon: "🛠️", cat: "Development", name: "Website & App Maintenance", desc: "Security updates, bug fixes, backups, hosting and domain management." },
  { icon: "⚡", cat: "AI & Automation", name: "Automation & CRM Setup", desc: "Email/SMS/WhatsApp flows, CRM setup, Google Analytics & Meta Pixel dashboards." },
  { icon: "🤖", cat: "AI & Automation", name: "AI Chatbots & Assistants", desc: "FAQ bots, lead-qualifying bots, support bots integrated with WhatsApp, forms & CRM." },
  { icon: "✨", cat: "AI & Automation", name: "AI-Enhanced Design", desc: "AI-assisted logo variants, brand-kit elements, AI-generated social creatives & ad templates." },
  { icon: "🧠", cat: "AI & Automation", name: "AI-Driven Marketing & Ads", desc: "AI ad copy, creative variants, A/B test suggestions, AI content calendar." },
  { icon: "📈", cat: "AI & Automation", name: "AI Analytics & Automation", desc: "Predictive dashboards, AI-driven workflows, auto-tagging, auto-segmentation, AI reporting." },
  { icon: "🔮", cat: "AI & Automation", name: "AI Product Features & UX", desc: "Personalised UI/UX, smart AI/NLP search, AI-assisted wireframe generation." },
  { icon: "🎬", cat: "Growth Services", name: "Short-Form Video & Reels", desc: "Video editing for Reels, TikTok, YouTube Shorts. Motion graphics, captions, sound design." },
  { icon: "📉", cat: "Growth Services", name: "Conversion Rate Optimisation", desc: "Heatmap analysis, landing page audits, A/B testing copy, layout & CTAs." },
  { icon: "📲", cat: "Growth Services", name: "Social Media Management", desc: "Full account management, AI-assisted content calendar, monthly performance reporting." },
  { icon: "💬", cat: "Growth Services", name: "WhatsApp Business Automation", desc: "Automated WhatsApp flows for leads, orders, appointments. CRM & e-commerce integration." },
  { icon: "📋", cat: "Growth Services", name: "Pitch Deck Design", desc: "Investor-ready pitch decks, data visualisation, storytelling, reusable templates." },
  { icon: "👤", cat: "Growth Services", name: "Personal Branding for Founders", desc: "LinkedIn strategy, ghostwriting, thought leadership, profile optimisation." },
  { icon: "🎙️", cat: "AI & Automation", name: "Voice AI & IVR Agents", desc: "AI phone agents for bookings, FAQs, order status. CRM & calendar integration." },
  { icon: "🛒", cat: "Growth Services", name: "E-Commerce Growth Retainer", desc: "Bundled Shopify/WooCommerce dev + SEO + Meta Ads + email automation monthly package." },
]

export const PORTFOLIO = [
  { emoji: "🏪", cat: "Web", title: "LuxeStore Redesign", desc: "E-commerce overhaul with 3x conversion improvement", bg: "linear-gradient(135deg,#e0e7ff,#f0e6ff)" },
  { emoji: "📱", cat: "App", title: "HealthTrack Mobile", desc: "iOS & Android fitness tracking app with AI insights", bg: "linear-gradient(135deg,#e0f2fe,#dbeafe)" },
  { emoji: "🎨", cat: "Branding", title: "Bloom Brand Identity", desc: "Full rebrand with guidelines, typography & palette", bg: "linear-gradient(135deg,#fce7f3,#ede9fe)" },
  { emoji: "📊", cat: "Marketing", title: "SaaS Growth Campaign", desc: "Meta + Google Ads driving 4.2x ROAS in 60 days", bg: "linear-gradient(135deg,#d1fae5,#e0e7ff)" },
  { emoji: "🤖", cat: "AI", title: "Nexbot Lead Qualifier", desc: "AI chatbot qualifying 300+ leads per month automatically", bg: "linear-gradient(135deg,#fef3c7,#fee2e2)" },
  { emoji: "🌐", cat: "Web", title: "TechVenture Dashboard", desc: "SaaS admin panel with real-time analytics", bg: "linear-gradient(135deg,#e0e7ff,#d1fae5)" },
]

export const TESTIMONIALS = [
  { stars: "★★★★★", text: "Zelouris transformed our digital presence completely. The AI-driven marketing campaign they built for us generated 5x ROI within the first month.", name: "Sarah Chen", company: "CEO, NovaTech", avatar: "👩" },
  { stars: "★★★★★", text: "The WhatsApp automation system they built handles 80% of our customer queries automatically. Absolutely game-changing for our operations.", name: "Ahmed Al-Rashid", company: "Founder, Marketi", avatar: "👨" },
  { stars: "★★★★★", text: "Best agency we've ever worked with. The website they built is stunning and our conversion rate jumped from 1.8% to 6.2% after their CRO work.", name: "Priya Sharma", company: "CMO, FlowBrand", avatar: "👩‍💼" },
]

export const PRICING_TIERS = [
  {
    tier: 'Starter', name: 'Launch', price: '₹24,999', period: '/month',
    features: ['1 Website or App', 'Logo & Basic Branding', 'Social Media Setup (2 platforms)', 'Basic SEO', 'Meta Ads Setup', '1 AI Chatbot', 'Monthly Report', 'Email Support'],
    cta: 'Get Started',
  },
  {
    tier: 'Growth', name: 'Scale', price: '₹69,999', period: '/month', featured: true,
    features: ['Everything in Starter', 'Custom Web App or E-commerce', 'Full Brand Identity', 'SEO + Content', 'Meta + Google Ads', 'WhatsApp Automation', 'AI-Driven Marketing', 'CRO Audit & Fixes', 'Priority Support', 'Weekly Reports'],
    cta: 'Most Popular',
  },
  {
    tier: 'Enterprise', name: 'Dominate', price: 'Custom', period: 'tailored to you',
    features: ['Everything in Scale', 'Unlimited Projects', 'Voice AI & IVR System', 'AI Analytics Dashboard', 'Dedicated Project Manager', 'SLA-backed Delivery', 'Quarterly Strategy Sessions', 'White-glove Onboarding', '24/7 Priority Support'],
    cta: 'Talk to Us',
  },
]

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
]
