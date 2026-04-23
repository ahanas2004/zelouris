import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReveal, useTilt } from '../hooks'
import './CTABanner.css'

export default function CTABanner() {
  useReveal()
  const ref = useRef(null)
  useTilt(ref, { intensity: 4, scale: 1.01 })

  return (
    <section className="cta-section">
      <div className="cta-box reveal-scale" ref={ref}>
        <div className="cta-glow c1" />
        <div className="cta-glow c2" />
        
        <div className="cta-title">The Future is <span>Autonomous.</span><br />Is Your Brand?</div>
        <div className="cta-sub">Join 150+ high-growth brands scaling with Zelouris AI Engine. Your first strategic AI consultation is on us.</div>
        
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 2 }}>
          <Link to="/quote" className="btn-primary">Get a Free Quote →</Link>
          <Link to="/contact" className="btn-secondary">Talk to Us First</Link>
        </div>
      </div>
    </section>
  )
}
