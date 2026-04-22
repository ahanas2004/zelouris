import { useRef } from 'react'
import { useReveal, useTilt } from '../hooks'
import './WhyUs.css'

const FEATURES = [
  { icon: '🧠', title: 'AI in Everything We Do', desc: 'Every service we offer is enhanced with AI — faster output, smarter strategy, better results.' },
  { icon: '⚡', title: 'Full-Stack Under One Roof', desc: 'Design, dev, marketing, automation — one team, one strategy, no vendor juggling.' },
  { icon: '📊', title: 'Results, Not Just Deliverables', desc: "We tie every project to measurable outcomes. Traffic, conversions, and revenue — that's what we track." },
  { icon: '🌍', title: 'Built for Global Markets', desc: "We've delivered for clients across 12+ countries with deep understanding of regional nuance." },
]

export default function WhyUs() {
  useReveal()
  const ref = useRef(null)
  useTilt(ref, { intensity: 5, scale: 1.02 })

  return (
    <section className="why-section">
      <div className="section-header reveal">
        <div className="section-tag">Why Zelouris</div>
        <h2 className="section-title">The Agency Built<br />for <span>the AI Era</span></h2>
      </div>

      <div className="why-grid">
        <div className="why-visual reveal-left" ref={ref}>
          <div className="why-card-3d wc1">
            <div className="wcard-num">200+</div>
            <div className="wcard-label">Projects Delivered</div>
          </div>
          <div className="why-card-3d wc2">
            <div className="wcard-num">4.2x</div>
            <div className="wcard-label">Avg. ROAS</div>
          </div>
          <div className="why-card-3d wc3">
            <div className="wcard-num">98%</div>
            <div className="wcard-label">Satisfaction</div>
          </div>
          <div className="why-card-3d wc4">
            <div className="wcard-num">12+</div>
            <div className="wcard-label">Countries Served</div>
          </div>
        </div>

        <div className="why-features reveal-right">
          {FEATURES.map((f, i) => (
            <div className="why-feature" key={i} style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="why-feature-icon">{f.icon}</div>
              <div>
                <div className="why-feature-title">{f.title}</div>
                <div className="why-feature-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
