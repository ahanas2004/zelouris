import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useCounter, useReveal } from '../hooks'
import { useTheme } from '../context/ThemeContext'
import ThreeBackground from './ThreeBackground'
import './Hero.css'

export default function Hero() {
  const { theme } = useTheme()
  const [statsStarted, setStatsStarted] = useState(false)
  const statsRef = useRef(null)
  
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  // Stats Counters
  const c1 = useCounter(200, 2000, statsStarted)
  const c2 = useCounter(150, 2000, statsStarted)
  const c3 = useCounter(12, 1500, statsStarted)
  const c4 = useCounter(98, 1800, statsStarted)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setStatsStarted(true)
    }, { threshold: 0.1 })
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  useReveal()

  const cardVariants = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }),
    hover: {
      scale: 1.05,
      rotateY: 10,
      rotateX: -5,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  return (
    <section className="hero" data-theme={theme}>
      <div className="hero-mesh" />
      <div className="hero-grid" />
      <ThreeBackground />
      <div className="hero-orb orb1" />
      <div className="hero-orb orb2" />
      <div className="hero-orb orb3" />

      <div className="hero-cards">
        {[
          { id: 'fc1', icon: <span className="fc-dot green" />, text: 'AI Chatbot Live', tag: 'PRODUCTION' },
          { id: 'fc2', icon: '📄', text: 'ROAS 4.2x', tag: 'THIS MONTH' },
          { id: 'fc3', icon: '🚀', text: 'Site Deployed ✓', tag: '24H AGO' },
          { id: 'fc4', icon: <span className="fc-dot blue" />, text: 'Automation Running', tag: '99% UPTIME' }
        ].map((card, i) => (
          <motion.div
            key={card.id}
            className={`float-card ${card.id}`}
            custom={i}
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={cardVariants}
          >
            <div className="fc-content">
              {typeof card.icon === 'string' ? <span className="fc-icon">{card.icon}</span> : card.icon}
              <span className="fc-text">{card.text}</span>
            </div>
            <span className="fc-tag">{card.tag}</span>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="hero-content"
        style={{ y: y1, opacity }}
      >
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="hero-badge-dot" />
          AI-Powered Creative Agency
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          We Build<br />
          Brands<br />
          That Scale<br />
          <span className="outline-word">with AI</span>
        </motion.h1>

        <motion.p 
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Zelouris is a full-stack AI-powered agency. From design and development to marketing, 
          automation, and intelligent systems — we bring every service under one roof.
        </motion.p>

        <motion.div 
          className="hero-btns"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
        >
          <Link to="/quote" className="btn-primary">
            Get a Free Quote →
          </Link>
          <Link to="/portfolio" className="btn-secondary">
            View Our Work
          </Link>
        </motion.div>

        <motion.div 
          className="hero-stats" 
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="hero-stat">
            <div className="hero-stat-num">{c1}+</div>
            <div className="hero-stat-label">Projects Delivered</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">{c2}+</div>
            <div className="hero-stat-label">Happy Clients</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">{c3}+</div>
            <div className="hero-stat-label">Countries Served</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">{c4}%</div>
            <div className="hero-stat-label">Client Satisfaction</div>
          </div>
        </motion.div>
      </motion.div>

      <div className="scroll-indicator">
        <div className="scroll-text">Scroll</div>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </div>
    </section>
  )
}
