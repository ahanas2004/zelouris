import { useState } from 'react'
import { useReveal } from '../hooks'
import { SERVICES } from '../data'
import './ServicesSection.css'

const CATS = ['All', 'Development', 'Design', 'Marketing', 'AI & Automation', 'Growth Services']

export default function ServicesSection() {
  const [filter, setFilter] = useState('All')
  useReveal([filter]) // Re-observe when filter changes
  const filtered = filter === 'All' ? SERVICES : SERVICES.filter(s => s.cat === filter)

  return (
    <section className="services-section">
      <div className="glow-blob-1" />
      <div className="section-header reveal">
        <div className="section-tag">What We Do</div>
        <h2 className="section-title">24 Services. <span>One Powerhouse</span> Agency.</h2>
        <p className="section-sub">From design to development, marketing to AI — everything you need to grow, under one roof.</p>
      </div>

      <div className="services-filters reveal" data-delay="100">
        {CATS.map(c => (
          <button key={c} className={`filter-pill${filter === c ? ' active' : ''}`} onClick={() => setFilter(c)}>
            {c}
          </button>
        ))}
      </div>

      <div className="services-grid">
        {filtered.map((s, i) => (
          <div
            className="service-card reveal"
            key={`${s.name}-${i}`}
            style={{ transitionDelay: `${(i % 8) * 55}ms` }}
          >
            <span className="service-icon">{s.icon}</span>
            <div className="service-cat">{s.cat}</div>
            <div className="service-name">{s.name}</div>
            <div className="service-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
