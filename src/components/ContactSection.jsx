import { useState } from 'react'
import { useReveal } from '../hooks'
import './ContactSection.css'

const CONTACT_ITEMS = [
  { icon: '📧', label: 'Email', value: 'hello@zelouris.com' },
  { icon: '💬', label: 'WhatsApp', value: '+1 (555) 000-0000' },
  { icon: '📍', label: 'Location', value: 'Global — Remote' },
  { icon: '⏱️', label: 'Response', value: '< 24 Hours' },
]

export default function ContactSection() {
  useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact-section">
      <div className="section-header reveal">
        <div className="section-tag">Contact</div>
        <h2 className="section-title">Let's <span>Start a Conversation</span></h2>
        <p className="section-sub">We reply within 24 hours. Usually much faster.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info reveal-left">
          <h3>Get in Touch</h3>
          <p>Whether you have a project in mind, a question about our services, or just want to explore what we can do together — we're here.</p>
          <div className="contact-items">
            {CONTACT_ITEMS.map((c, i) => (
              <div className="contact-item" key={i}>
                <div className="contact-item-icon">{c.icon}</div>
                <div>
                  <div className="contact-item-label">{c.label}</div>
                  <div className="contact-item-value">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-right">
          {sent ? (
            <div className="contact-form" style={{ textAlign: 'center', padding: '80px 40px' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--text-primary)', marginBottom: 8 }}>
                Message Sent!
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
                We'll get back to you within 24 hours.
              </p>
              <button className="btn-secondary" style={{ marginTop: 24 }} onClick={() => setSent(false)}>Send Another</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input className="form-input" placeholder="Your name" value={form.name} onChange={update('name')} required />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input className="form-input" type="email" placeholder="your@email.com" value={form.email} onChange={update('email')} required />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Tell us about your project..." value={form.message} onChange={update('message')} required />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message ✦
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
