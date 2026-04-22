import { useEffect, useRef } from 'react'

export default function Cursor() {
  const pos = useRef({ x: -100, y: -100 }) // Start off-screen
  const ring = useRef({ x: -100, y: -100 })
  const rafRef = useRef(null)

  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const cursorRing = document.getElementById('cursor-ring')

    if (!cursor || !cursorRing) return

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      // Direct update for the main cursor dot for zero latency
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
    }

    const animate = () => {
      // Smooth interpolation for the ring
      ring.current.x += (pos.current.x - ring.current.x) * 0.15
      ring.current.y += (pos.current.y - ring.current.y) * 0.15
      
      if (cursorRing) {
        cursorRing.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`
      }
      
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    const onEnter = () => {
      cursor.classList.add('hovering')
      cursorRing.classList.add('hovering')
    }
    const onLeave = () => {
      cursor.classList.remove('hovering')
      cursorRing.classList.remove('hovering')
    }

    window.addEventListener('mousemove', onMove, { passive: true })

    const addListeners = () => {
      const interactables = document.querySelectorAll(
        'a, button, [role="button"], .service-card, .portfolio-card, .pricing-card, .testi-card, .filter-pill, .nav-logo, .nav-link'
      )
      interactables.forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    addListeners()
    const interval = setInterval(addListeners, 2000)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      clearInterval(interval)
    }
  }, [])

  return null
}
