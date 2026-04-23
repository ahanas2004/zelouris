import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReveal } from '../hooks'
import { SERVICES } from '../data'
import './ServicesSection.css'

const CATS = ['All', 'Development', 'Design', 'Marketing', 'AI & Automation', 'Growth Services']

export default function ServicesSection() {
  const [filter, setFilter] = useState('All')
  useReveal([filter])
  const filtered = filter === 'All' ? SERVICES : SERVICES.filter(s => s.cat === filter)

  return (
    <section className="services-section">
      <div className="glow-blob-1" />
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-tag">AI-Integrated Ecosystem</div>
        <h2 className="section-title">One Agency. <span>Unlimited AI</span> Potential.</h2>
        <p className="section-sub">We don't just provide services. We deploy AI-powered growth engines across design, development, and marketing.</p>
      </motion.div>

      <div className="services-filters" data-delay="100">
        {CATS.map(c => (
          <button 
            key={c} 
            className={`filter-pill${filter === c ? ' active' : ''}`} 
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="services-grid"
      >
        <AnimatePresence mode='popLayout'>
          {filtered.map((s, i) => (
            <motion.div
              layout
              key={`${s.name}-${s.cat}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ 
                y: -10,
                rotateX: -5,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="service-card"
              style={{ perspective: 1000 }}
            >
              <span className="service-icon">{s.icon}</span>
              {s.isAI && <div className="ai-badge">AI Optimized</div>}
              <div className="service-cat">{s.cat}</div>
              <div className="service-name">{s.name}</div>
              <div className="service-desc">{s.desc}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
