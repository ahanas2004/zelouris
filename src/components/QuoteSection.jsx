import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReveal } from '../hooks'
import './QuoteSection.css'

const STEPS = [
  { id: 1, title: 'Identity', icon: '👤' },
  { id: 2, title: 'Concept', icon: '💡' },
  { id: 3, title: 'Strategy', icon: '🚀' }
]

export default function QuoteSection() {
  useReveal()
  const [step, setStep] = useState(1)
  const [sent, setSent] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    details: '',
    budget: '',
    timeline: '',
    company: ''
  })

  const nextStep = () => setStep(s => Math.min(s + 1, 3))
  const prevStep = () => setStep(s => Math.max(s - 1, 1))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < 3) {
      nextStep()
    } else {
      setSent(true)
    }
  }

  if (sent) {
    return (
      <section className="quote-section">
        <motion.div 
          className="quote-container success-view"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="success-icon">🚀</div>
          <h2 className="section-title">Mission <span>Accepted.</span></h2>
          <p className="section-sub">Our AI-core is analyzing your requirements. A human strategist will reach out within 24 hours.</p>
          <button onClick={() => { setSent(false); setStep(1); setShowMore(false); }} className="btn-secondary" style={{ marginTop: 32 }}>Initiate New Sequence</button>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="quote-section">
      <div className="quote-container reveal-scale">
        <div className="quote-sidebar">
          <div className="sidebar-bg-glow" />
          <div className="section-tag">Project Portal</div>
          <h2>Bring Your <span>Vision</span> To Life</h2>
          
          <div className="quote-steps">
            {STEPS.map(s => (
              <div key={s.id} className={`step-item ${step >= s.id ? 'active' : ''}`}>
                <div className="step-number">
                  <span className="step-glow" />
                  {step > s.id ? '✓' : s.icon}
                </div>
                <div className="step-info">
                  <div className="step-label">Sequence 0{s.id}</div>
                  <div className="step-name">{s.title}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="sidebar-footer">
            <div className="system-status">
              <span className="status-dot" /> System Ready
            </div>
          </div>
        </div>

        <div className="quote-main">
          <form className="quote-form-new" onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="step-content"
                >
                  <div className="step-header">
                    <span className="step-badge">Phase 1</span>
                    <h3>Who are <span>we building for?</span></h3>
                  </div>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="John Doe" 
                        required 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Company (Optional)</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="Zelouris Corp" 
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      className="form-input" 
                      placeholder="john@visionary.com" 
                      required 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="step-content"
                >
                  <div className="step-header">
                    <span className="step-badge">Phase 2</span>
                    <h3>Select your <span>growth engine</span></h3>
                  </div>
                  <div className="service-grid">
                    {[
                      { id: 'web', label: 'Web Platform', icon: '🌐' },
                      { id: 'app', label: 'Mobile Core', icon: '📱' },
                      { id: 'ai', label: 'AI Intelligence', icon: '🤖' },
                      { id: 'branding', label: 'Digital Brand', icon: '🎨' },
                      { id: 'marketing', label: 'Market Scale', icon: '📊' },
                      { id: 'automation', label: 'Workflows', icon: '⚡' }
                    ].map(s => (
                      <div 
                        key={s.id} 
                        className={`service-card ${formData.service === s.id ? 'selected' : ''}`}
                        onClick={() => setFormData({...formData, service: s.id})}
                      >
                        <div className="service-icon-box">{s.icon}</div>
                        <div className="service-label">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="step-content"
                >
                  <div className="step-header">
                    <span className="step-badge">Phase 3</span>
                    <h3>The Final <span>Blueprint</span></h3>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Project Essence</label>
                    <textarea 
                      className="form-textarea" 
                      placeholder="Tell us about the dream, the goals, and the impact..." 
                      required
                      value={formData.details}
                      onChange={e => setFormData({...formData, details: e.target.value})}
                    ></textarea>
                  </div>

                  {!showMore ? (
                    <button 
                      type="button" 
                      className="btn-more"
                      onClick={() => setShowMore(true)}
                    >
                      <span>+</span> Add Budget & Timeline
                    </button>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="more-fields"
                    >
                      <div className="form-grid">
                        <div className="form-group">
                          <label className="form-label">Budget Range</label>
                          <select 
                            className="form-select"
                            value={formData.budget}
                            onChange={e => setFormData({...formData, budget: e.target.value})}
                          >
                            <option value="">Select Range...</option>
                            <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                            <option value="1L-5L">₹1,00,000 - ₹5,00,000</option>
                            <option value="5L+">₹5,00,000+</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="form-label">Timeline</label>
                          <select 
                            className="form-select"
                            value={formData.timeline}
                            onChange={e => setFormData({...formData, timeline: e.target.value})}
                          >
                            <option value="">Select Priority...</option>
                            <option value="urgent">ASAP / Urgent</option>
                            <option value="1m">1-2 Months</option>
                            <option value="3m">3+ Months</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="quote-actions">
              <div className="actions-left">
                {step > 1 && (
                  <button type="button" onClick={prevStep} className="btn-back">
                    Back
                  </button>
                )}
              </div>
              <button type="submit" className="btn-primary-glow">
                {step === 3 ? 'Deploy Request ✦' : 'Next Sequence →'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
