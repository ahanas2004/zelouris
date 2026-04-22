import { useState, useEffect } from 'react'

export default function Loader() {
  const [gone, setGone] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setGone(true), 2200)
    const t2 = setTimeout(() => setHidden(true), 3000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (hidden) return null

  return (
    <div className={`loader-overlay${gone ? ' gone' : ''}`}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="glow-blob" style={{ width: 400, height: 400, top: '20%', left: '30%', background: 'radial-gradient(circle, rgba(91,110,245,0.6), transparent 70%)' }} />
        <div className="glow-blob" style={{ width: 300, height: 300, top: '50%', right: '20%', background: 'radial-gradient(circle, rgba(139,92,246,0.5), transparent 70%)' }} />
      </div>
      <div className="loader-logo-text">Zelouris</div>
      <div className="loader-bar-track">
        <div className="loader-bar-fill" />
      </div>
      <div className="loader-tagline">AI-Powered Creative Agency</div>
    </div>
  )
}
