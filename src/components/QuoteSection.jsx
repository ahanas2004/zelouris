import { useState } from 'react'
import { useReveal } from '../hooks'
import './QuoteSection.css'

export default function QuoteSection() {
  useReveal()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <section className="quote-section">
        <div className="quote-container reveal-scale" style={{ textAlign: 'center', padding: '100px 40px' }}>
          <div style={{ fontSize: 80, marginBottom: 24 }}>✨</div>
          <h2 className="section-title">Message <span>Received!</span></h2>
          <p className="section-sub">Our AI-systems are processing your request. One of our human experts will be in touch within 24 hours.</p>
          <button onClick={() => setSent(false)} className="btn-secondary" style={{ marginTop: 32 }}>Send Another Message</button>
        </div>
      </section>
    )
  }

  return (
    <section className="quote-section">
      <div className="quote-container reveal-scale">
        <div className="quote-info">
          <div className="section-tag">Estimate Your Project</div>
          <h2>Let's Build Your <span>Next Big Thing</span></h2>
          <p>Tell us about your vision. Whether it's a world-class website, a complex AI integration, or a full-scale brand launch — we're ready to scale with you.</p>
          
          <ul className="quote-list">
            <li className="quote-item"><span className="quote-dot" /> Free Consultation</li>
            <li className="quote-item"><span className="quote-dot" /> Detailed Strategy Mapping</li>
            <li className="quote-item"><span className="quote-dot" /> Fixed Pricing Tiers Available</li>
            <li className="quote-item"><span className="quote-dot" /> Non-Disclosure Guaranteed</li>
          </ul>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input" placeholder="Zaid Al-Hassan" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" placeholder="zaid@example.com" required />
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Interested In</label>
            <select className="form-select" required>
              <option value="">Select a service...</option>
              <option value="web">Web Development</option>
              <option value="app">Mobile Application</option>
              <option value="ai">AI & Automation</option>
              <option value="branding">Branding & Design</option>
              <option value="marketing">Digital Marketing</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Project Details</label>
            <textarea className="form-textarea" placeholder="Tell us about your goals, timeline, and budget..." required></textarea>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Send Inquiry ✦
          </button>
        </form>
      </div>
    </section>
  )
}
