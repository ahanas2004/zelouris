import { useReveal } from '../hooks'
import { TESTIMONIALS } from '../data'
import './Testimonials.css'

export default function Testimonials() {
  useReveal()
  return (
    <section className="testi-section">
      <div className="section-header reveal">
        <div className="section-tag">Client Love</div>
        <h2 className="section-title">What Our <span>Clients Say</span></h2>
      </div>
      <div className="testi-grid">
        {TESTIMONIALS.map((t, i) => (
          <div className="testi-card reveal-scale" key={i} style={{ transitionDelay: `${i * 120}ms` }}>
            <div className="testi-stars">⭐⭐⭐⭐⭐</div>
            <div className="testi-text">"{t.text}"</div>
            <div className="testi-author">
              <div className="testi-avatar">{t.avatar}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-company">{t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
