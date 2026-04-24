import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReveal } from '../hooks'
import { PORTFOLIO } from '../data'
import Abstract3D from './Abstract3D'
import './PortfolioSection.css'

const CATS = ['All', 'Web', 'App', 'Branding', 'Marketing', 'AI']

export default function PortfolioSection() {
  const [filter, setFilter] = useState('All')
  useReveal([filter])
  const filtered = filter === 'All' ? PORTFOLIO : PORTFOLIO.filter(p => p.cat === filter)

  return (
    <section className="portfolio-section">
      <Abstract3D type="sphere" withStars={true} style={{ opacity: 0.1, zIndex: 0, bottom: '-20%', left: '-20%', width: '60%', height: '60%' }} />
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div className="section-tag">Our Work</div>
        <h2 className="section-title">Built to <span>Impress</span></h2>
        <p className="section-sub">A selection of projects that delivered real, measurable results for our clients.</p>
      </motion.div>

      <div className="portfolio-filters" data-delay="100" style={{ position: 'relative', zIndex: 2 }}>
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

      <motion.div layout className="portfolio-grid" style={{ position: 'relative', zIndex: 2 }}>
        <AnimatePresence mode='popLayout'>
          {filtered.map((p, i) => (
            <motion.div
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="portfolio-card"
              whileHover={{ 
                y: -10,
                rotateX: -2,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: 1000 }}
            >
              <div className="portfolio-img" style={{ background: p.bg }}>
                <motion.span 
                  style={{ fontSize: 72 }}
                  whileHover={{ scale: 1.2, rotate: 10, z: 50 }}
                >
                  {p.emoji}
                </motion.span>
                <div className="portfolio-overlay">
                  <span className="portfolio-view">View Project ↗</span>
                </div>
              </div>
              <div className="portfolio-info">
                <div className="portfolio-cat">{p.cat}</div>
                <div className="portfolio-title">{p.title}</div>
                <div className="portfolio-desc">{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
