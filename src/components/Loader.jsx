import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function Loader() {
  const [loading, setLoading] = useState(true)
  const { theme } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: theme === 'dark' ? '#04040e' : '#f8f9ff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            inset: 0,
            zIndex: 9999
          }}
        >
          <motion.div 
            className="loader-logo-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontSize: 'clamp(32px, 6vw, 64px)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #5b6ef5 0%, #8b5cf6 50%, #22d3ee 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 20
            }}
          >
            Zelouris
          </motion.div>
          
          <div className="loader-bar-track" style={{ width: 200, height: 2, background: 'rgba(255,255,255,0.1)', borderRadius: 99, overflow: 'hidden' }}>
            <motion.div 
              className="loader-bar-fill"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              style={{ height: '100%', background: 'var(--grad-1)' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
