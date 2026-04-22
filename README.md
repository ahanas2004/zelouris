# Zelouris — AI-Powered Creative Agency Website

A full React + Vite project with proper file structure, separate pages, and component-level CSS.

## Tech Stack

- **React 18** — UI library
- **Vite** — build tool & dev server
- **React Router v6** — client-side routing (separate URL per page)
- **Component-scoped CSS** — each component has its own `.css` file

## Project Structure

```
zelouris/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              # App entry point
    ├── App.jsx               # Router + layout shell
    ├── data/
    │   └── index.js          # All site content (services, portfolio, etc.)
    ├── hooks/
    │   └── index.js          # useCounter, useReveal, useTilt
    ├── styles/
    │   └── global.css        # Global variables, resets, shared classes
    ├── pages/                # One file per route
    │   ├── Home.jsx          → /
    │   ├── Services.jsx      → /services
    │   ├── About.jsx         → /about
    │   ├── Portfolio.jsx     → /portfolio
    │   ├── Pricing.jsx       → /pricing
    │   ├── Blog.jsx          → /blog
    │   ├── Contact.jsx       → /contact
    │   └── Quote.jsx         → /quote
    └── components/           # Reusable UI pieces
        ├── Cursor.jsx
        ├── Nav.jsx
        ├── Footer.jsx
        ├── CTABanner.jsx + .css
        ├── Hero.jsx + .css
        ├── ServicesSection.jsx + .css
        ├── WhyUs.jsx + .css
        ├── Testimonials.jsx + .css
        ├── AboutSection.jsx + .css
        ├── PortfolioSection.jsx + .css
        ├── PricingSection.jsx + .css
        ├── BlogSection.jsx + .css
        ├── ContactSection.jsx + .css
        └── QuoteSection.jsx + .css
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Pages & Routes

| Route        | Page        | Description                              |
|--------------|-------------|------------------------------------------|
| `/`          | Home        | Hero, Services preview, Why Us, Testimonials, CTA |
| `/services`  | Services    | Full filterable services grid            |
| `/about`     | About       | Team, values, agency story               |
| `/portfolio` | Portfolio   | Filterable project showcase              |
| `/pricing`   | Pricing     | 3-tier pricing cards                     |
| `/blog`      | Blog        | Blog post cards                          |
| `/contact`   | Contact     | Contact form + info                      |
| `/quote`     | Quote       | 3-step quote request wizard              |

## Customisation

- **Content** — Edit `src/data/index.js` to update services, portfolio, testimonials, blog posts, and pricing.
- **Colors** — Edit CSS variables in `src/styles/global.css` under `:root`.
- **Fonts** — Change the Google Fonts import in `index.html` and update `--font-display`, `--font-body`, `--font-mono` in global CSS.
- **New pages** — Add a file to `src/pages/`, add a `<Route>` in `App.jsx`, and a link entry in `src/data/index.js` → `NAV_LINKS`.
