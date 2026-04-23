import { Link } from 'react-router-dom'
import { SERVICES, NAV_LINKS } from '../data'

export default function Footer() {
  const services = SERVICES.slice(0, 8).map(s => s.name)

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="reveal" data-delay="0">
          <Link to="/" className="footer-logo">Zelouris<span className="logo-ai">AI</span></Link>
          <div className="footer-tagline">The world's first AI-integrated growth agency. Scaling design, development, and marketing with machine intelligence.</div>
          <div className="footer-socials" style={{ marginTop: 24 }}>
            {['𝕏', 'in', 'f', '▶', '📸'].map((s, i) => (
              <a key={i} className="social-btn" href="#" aria-label="Social Link">{s}</a>
            ))}
          </div>
        </div>

        <div className="reveal" data-delay="100">
          <div className="footer-heading">Pages</div>
          <ul className="footer-links">
            {NAV_LINKS.map(l => (
              <li key={l.path}><Link to={l.path}>{l.label}</Link></li>
            ))}
            <li><Link to="/quote">Get a Quote</Link></li>
          </ul>
        </div>

        <div className="reveal" data-delay="200">
          <div className="footer-heading">Services</div>
          <ul className="footer-links">
            {services.map(s => <li key={s}><a href="#">{s}</a></li>)}
          </ul>
        </div>

        <div className="reveal" data-delay="300">
          <div className="footer-heading">Contact</div>
          <ul className="footer-links">
            <li><a href="mailto:hello@zelouris.com">hello@zelouris.com</a></li>
            <li><a href="#">WhatsApp Us</a></li>
            <li><a href="#">Schedule a Call</a></li>
            <li><Link to="/quote" className="grad-text" style={{ fontWeight: 600, textDecoration: 'none' }}>Get a Free Quote →</Link></li>
          </ul>
          <div style={{ marginTop: 24, padding: '14px 18px', borderRadius: 16, background: 'rgba(91,110,245,0.06)', border: '1px solid rgba(91,110,245,0.12)', fontSize: 13, color: 'var(--text-secondary)' }}>
            ⏱ We reply within <strong style={{ color: 'var(--electric)' }}>24 hours</strong>
          </div>
        </div>
      </div>

      <div className="footer-bottom reveal" data-delay="400">
        <div className="footer-copy">© 2025 Zelouris. All rights reserved by Zelouris.</div>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
            <a key={l} href="#" style={{ fontSize: 12, color: 'var(--text-muted)', textDecoration: 'none', cursor: 'none' }}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
