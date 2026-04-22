import { useReveal } from '../hooks'
import './AboutSection.css'

const VALUES = [
  { icon: '🎯', title: 'Results First', desc: 'Every decision is tied to measurable outcomes.' },
  { icon: '🤖', title: 'AI-Native Thinking', desc: "AI isn't an add-on — it's built into everything we create." },
  { icon: '🤝', title: 'Long-Term Partnerships', desc: 'We grow with our clients, not just deliver and disappear.' },
  { icon: '🌍', title: 'Global Perspective', desc: 'Diverse team, diverse markets, diverse thinking.' },
]

const TEAM = [
  { name: 'AHAMED ANAS H', role: 'Development & Tech', avatar: '👨‍💻' },
  { name: 'MOHAMMED SULAIMAN KAIF', role: 'Design, Graphics & Logos', avatar: '🎨' },
]

export default function AboutSection() {
  useReveal()
  return (
    <section className="about-section">
      <div className="about-inner">
        <div className="about-text reveal-left">
          <div className="section-tag" style={{ marginBottom: 20 }}>About Us</div>
          <h2>We Are <span>Zelouris</span> —<br />Where AI Meets<br />Creative Excellence</h2>
          <p>Born from the belief that businesses deserve more than fragmented services, Zelouris was built as the agency for the AI era. We combine deep creative expertise with cutting-edge AI technology to deliver results that actually move the needle.</p>
          <p>We're not a traditional agency. We're a growth partner — obsessed with your outcomes, fluent in technology, and driven by craft.</p>
          <div className="about-values">
            {VALUES.map((v, i) => (
              <div className="about-value reveal" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="about-value-icon">{v.icon}</div>
                <div>
                  <div className="about-value-title">{v.title}</div>
                  <div className="about-value-desc">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-right">
          <div className="section-tag" style={{ marginBottom: 20 }}>The Founders</div>
          <div className="team-grid" style={{ gridTemplateColumns: '1fr' }}>
            {TEAM.map((t, i) => (
              <div className="team-card reveal" key={i} style={{ transitionDelay: `${i * 80}ms`, marginBottom: 16 }}>
                <div className="team-avatar">{t.avatar}</div>
                <div className="team-name">{t.name}</div>
                <div className="team-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
