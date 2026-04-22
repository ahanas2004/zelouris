import { useState } from 'react'
import { useReveal } from '../hooks'
import { PORTFOLIO } from '../data'
import './PortfolioSection.css'

const CATS = ['All', 'Web', 'App', 'Branding', 'Marketing', 'AI']

export default function PortfolioSection() {
  const [filter, setFilter] = useState('All')
  useReveal([filter]) // Re-observe when filter changes
  const filtered = filter === 'All' ? PORTFOLIO : PORTFOLIO.filter(p => p.cat === filter)

  return (
    <section className="portfolio-section">
      <div className="section-header reveal">
        <div className="section-tag">Our Work</div>
        <h2 className="section-title">Built to <span>Impress</span></h2>
        <p className="section-sub">A selection of projects that delivered real, measurable results for our clients.</p>
      </div>

      <div className="portfolio-filters reveal" data-delay="100">
        {CATS.map(c => (
          <button key={c} className={`filter-pill${filter === c ? ' active' : ''}`} onClick={() => setFilter(c)}>
            {c}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filtered.map((p, i) => (
          <div className="portfolio-card reveal-scale" key={i} style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
            <div className="portfolio-img" style={{ background: p.bg }}>
              <span style={{ fontSize: 72 }}>{p.emoji}</span>
              <div className="portfolio-overlay">
                <span className="portfolio-view">View Project ↗</span>
              </div>
            </div>
            <div className="portfolio-info">
              <div className="portfolio-cat">{p.cat}</div>
              <div className="portfolio-title">{p.title}</div>
              <div className="portfolio-desc">{p.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
