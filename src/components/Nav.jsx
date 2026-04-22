import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NAV_LINKS } from '../data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40)
      const total = document.body.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* Progress bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, height: '2px', zIndex: 10001,
        width: `${scrollProgress}%`,
        background: 'linear-gradient(90deg, #5b6ef5, #8b5cf6, #22d3ee)',
        transition: 'width 0.1s linear',
        boxShadow: '0 0 10px rgba(91,110,245,0.8)',
      }} />

      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <Link to="/" className="nav-logo">Zelouris</Link>

        <div className="nav-links">
          {NAV_LINKS.map(l => (
            <NavLink
              key={l.path}
              to={l.path}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              end={l.path === '/'}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/quote" className="nav-cta">Get a Quote ✦</Link>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <div className="ham-line" style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
          <div className="ham-line" style={menuOpen ? { opacity: 0, transform: 'scaleX(0)' } : {}} />
          <div className="ham-line" style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map((l, i) => (
          <NavLink
            key={l.path}
            to={l.path}
            className="nav-link"
            onClick={closeMenu}
            end={l.path === '/'}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {l.label}
          </NavLink>
        ))}
        <Link to="/quote" className="btn-primary" onClick={closeMenu}>
          Get a Quote ✦
        </Link>
      </div>
    </>
  )
}
