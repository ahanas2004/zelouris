import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCounter, useReveal } from '../hooks'
import './Hero.css'

/* Ultra-Optimized Particle canvas (Removed connections for performance) */
function Particles() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const N = 25 // Minimal particles
    for (let i = 0; i < N; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(91, 110, 245, ${p.opacity})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])
  return <canvas ref={canvasRef} className="hero-canvas" />
}

export default function Hero() {
  const [statsStarted, setStatsStarted] = useState(false)
  const statsRef = useRef(null)
  const c1 = useCounter(200, 2200, statsStarted)
  const c2 = useCounter(150, 2400, statsStarted)
  const c3 = useCounter(12, 1800, statsStarted)
  const c4 = useCounter(98, 2000, statsStarted)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setStatsStarted(true)
    }, { threshold: 0.3 })
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  useReveal()

  return (
    <section className="hero">
      <div className="hero-mesh" />
      <div className="hero-grid" />
      <Particles />
      <div className="hero-orb orb1" />
      <div className="hero-orb orb2" />
      <div className="hero-orb orb3" />

      <div className="hero-cards">
        <div className="float-card fc1">
          <span className="fc-dot green" />
          <span>AI Chatbot Live</span>
          <span className="fc-tag">Production</span>
        </div>
        <div className="float-card fc2">
          📈&nbsp;<span>ROAS 4.2x</span>
          <span className="fc-tag">This Month</span>
        </div>
        <div className="float-card fc3">
          🚀&nbsp;<span>Site Deployed ✓</span>
          <span className="fc-tag">24h ago</span>
        </div>
        <div className="float-card fc4">
          <span className="fc-dot blue" />
          <span>Automation Running</span>
          <span className="fc-tag">98% uptime</span>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          AI-Powered Creative Agency
        </div>

        <h1 className="hero-title">
          We Build Brands<br />
          That <span className="gradient-word">Scale</span>{' '}
          <span className="outline-word">with AI</span>
        </h1>

        <p className="hero-sub">
          Zelouris is a full-stack AI-powered agency. From design and development
          to marketing, automation, and intelligent systems — we bring every service
          under one roof.
        </p>

        <div className="hero-btns">
          <Link to="/quote" className="btn-primary">
            Get a Free Quote →
          </Link>
          <Link to="/portfolio" className="btn-secondary">
            View Our Work
          </Link>
        </div>

        <div className="hero-stats" ref={statsRef}>
          {[
            { num: c1 + '+', label: 'Projects Delivered' },
            { num: c2 + '+', label: 'Happy Clients' },
            { num: c3 + '+', label: 'Countries Served' },
            { num: c4 + '%', label: 'Client Satisfaction' },
          ].map((s, i) => (
            <div className="hero-stat" key={i}>
              <div className="hero-stat-num">{s.num}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-text">Scroll</div>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </div>
    </section>
  )
}
