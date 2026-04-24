import { motion } from 'framer-motion'
import { useReveal } from '../hooks'
import Abstract3D from './Abstract3D'
import './AboutSection.css'

const VALUES = [
  { icon: '🎯', title: 'Results First', desc: 'Every decision is tied to measurable outcomes.' },
  { icon: '🤖', title: 'AI-Native Thinking', desc: "AI isn't an add-on — it's built into everything we create." },
  { icon: '🤝', title: 'Long-Term Partnerships', desc: 'We grow with our clients, not just deliver and disappear.' },
  { icon: '🌍', title: 'Global Perspective', desc: 'Diverse team, diverse markets, diverse thinking.' },
]

const TEAM = [
  { name: 'AHAMED ANAS H', role: 'AI Systems & Full-Stack Tech', avatar: '👨‍💻' },
  { name: 'MOHAMMED SULAIMAN KAIF', role: 'AI-Driven Design & Branding', avatar: '🎨' },
]

export default function AboutSection() {
  useReveal()
  
  return (
    <section className="about-section">
      <div className="about-inner">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-tag" style={{ marginBottom: 20 }}>About Us</div>
          <h2>We Are <span>Zelouris</span> —<br />Where AI Meets<br />Creative Excellence</h2>
          <p>Born from the belief that businesses deserve more than fragmented services, Zelouris was built as the agency for the AI era. We combine deep creative expertise with cutting-edge AI technology to deliver results that actually move the needle.</p>
          <p>We're not a traditional agency. We're a growth partner — obsessed with your outcomes, fluent in technology, and driven by craft.</p>
          
          <div className="about-values">
            {VALUES.map((v, i) => (
              <motion.div 
                className="about-value" 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ x: 10, backgroundColor: 'rgba(91, 110, 245, 0.08)' }}
              >
                <div className="about-value-icon">{v.icon}</div>
                <div>
                  <div className="about-value-title">{v.title}</div>
                  <div className="about-value-desc">{v.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="about-founder-side"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative' }}
        >
          <Abstract3D type="torus" withStars={true} style={{ opacity: 0.3, zIndex: -1, right: '-20%', left: '-20%', top: '-20%', height: '140%', width: '140%' }} />
          <div className="section-tag" style={{ marginBottom: 20 }}>The Founders</div>
          <div className="team-grid" style={{ gridTemplateColumns: '1fr' }}>
            {TEAM.map((t, i) => (
              <motion.div 
                className="team-card" 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 10,
                  rotateX: -5,
                  transition: { duration: 0.3 }
                }}
                style={{ perspective: 1000, marginBottom: 16 }}
              >
                <motion.div 
                  className="team-avatar"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  {t.avatar}
                </motion.div>
                <div className="team-name">{t.name}</div>
                <div className="team-role">{t.role}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
