import { Link } from 'react-router-dom'
import { useReveal } from '../hooks'
import { PRICING_TIERS } from '../data'
import './PricingSection.css'

export default function PricingSection() {
  useReveal()
  return (
    <section className="pricing-section">
      <div className="section-header reveal">
        <div className="section-tag">Pricing</div>
        <h2 className="section-title">Transparent. <span>Results-Driven.</span> Pricing.</h2>
        <p className="section-sub">No hidden fees. No long-term lock-ins on starter plans. Cancel anytime.</p>
      </div>

      <div className="pricing-grid">
        {PRICING_TIERS.map((t, i) => (
          <div
            className={`pricing-card reveal-scale${t.featured ? ' featured' : ''}`}
            key={i}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {t.featured && <div className="pricing-badge">⭐ Most Popular</div>}
            <div className="pricing-tier">{t.tier}</div>
            <div className="pricing-name">{t.name}</div>
            <div className="pricing-price">{t.price}</div>
            <div className="pricing-period">{t.period}</div>
            <div className="pricing-divider" />
            <ul className="pricing-features">
              {t.features.map((f, j) => (
                <li className="pricing-feature" key={j}>
                  <span className="pricing-check">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link
              to="/quote"
              className={t.featured ? 'btn-primary' : 'btn-secondary'}
              style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
            >
              {t.cta}
            </Link>
          </div>
        ))}
      </div>

      <p className="reveal" style={{ textAlign: 'center', marginTop: 48, color: 'var(--text-muted)', fontSize: 14 }}>
        Need a custom package?{' '}
        <Link to="/quote" className="grad-text" style={{ fontWeight: 600, textDecoration: 'none' }}>Let's talk →</Link>
      </p>
    </section>
  )
}
