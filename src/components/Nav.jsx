import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { NAV_LINKS } from '../data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { theme, toggleTheme } = useTheme()

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
        <Link to="/" className="nav-logo">
          Zelouris<span className="logo-ai">AI</span>
        </Link>

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
          
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

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

        <button 
          className="theme-toggle mobile" 
          onClick={() => { toggleTheme(); closeMenu(); }} 
          style={{ marginTop: '20px' }}
        >
          {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </>
  )
}
