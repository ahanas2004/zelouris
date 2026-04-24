import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReveal, useTilt } from '../hooks'
import Abstract3D from './Abstract3D'
import './CTABanner.css'

export default function CTABanner() {
  useReveal()
  const ref = useRef(null)
  useTilt(ref, { intensity: 4, scale: 1.01 })

  return (
    <section className="cta-section">
      <div className="cta-box reveal-scale" ref={ref}>
        <Abstract3D type="icosahedron" withStars={true} style={{ opacity: 0.4, zIndex: 0, width: '100%', height: '100%', top: 0, left: 0 }} />
        <div className="cta-glow c1" />
        <div className="cta-glow c2" />
        
        <div className="cta-title" style={{ position: 'relative', zIndex: 2 }}>The Future is <span>Autonomous.</span><br />Is Your Brand?</div>
        <div className="cta-sub" style={{ position: 'relative', zIndex: 2 }}>Join 150+ high-growth brands scaling with Zelouris AI Engine. Your first strategic AI consultation is on us.</div>
        
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 2 }}>
          <Link to="/quote" className="btn-primary">Get a Free Quote →</Link>
          <Link to="/contact" className="btn-secondary">Talk to Us First</Link>
        </div>
      </div>
    </section>
  )
}
