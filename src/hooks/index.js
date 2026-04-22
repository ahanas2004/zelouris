import { useState, useEffect, useRef, useCallback } from 'react'

/* ── Counter animation ─────────────────────────────────── */
export function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const easeOut = (t) => 1 - Math.pow(1 - t, 3)
    const step = (ts) => {
      if (!startTime) startTime = ts
      const raw = (ts - startTime) / duration
      const progress = Math.min(raw, 1)
      setCount(Math.floor(easeOut(progress) * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

/* ── Scroll reveal ─────────────────────────────────────── */
export function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const delay = parseInt(e.target.dataset.delay || 0)
          setTimeout(() => e.target.classList.add('visible'), delay)
        }
      })
    }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, deps) // Re-run when dependencies change
}

/* ── Tilt 3D ───────────────────────────────────────────── */
export function useTilt(ref, { intensity = 12, scale = 1.03 } = {}) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const handler = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        el.style.transform = `perspective(1200px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale(${scale}) translateZ(0)`
        el.style.transition = 'none'
      })
    }
    const reset = () => {
      el.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      el.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1) translateZ(0)'
    }
    el.addEventListener('mousemove', handler)
    el.addEventListener('mouseleave', reset)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('mousemove', handler)
      el.removeEventListener('mouseleave', reset)
    }
  }, [ref, intensity, scale])
}

/* ── Magnetic button ───────────────────────────────────── */
export function useMagnetic(ref, { strength = 0.35 } = {}) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handler = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) * strength
      const dy = (e.clientY - cy) * strength
      el.style.transform = `translate(${dx}px, ${dy}px)`
      el.style.transition = 'transform 0.2s cubic-bezier(0.23,1,0.32,1)'
    }
    const reset = () => {
      el.style.transform = 'translate(0px, 0px)'
      el.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)'
    }
    el.addEventListener('mousemove', handler)
    el.addEventListener('mouseleave', reset)
    return () => {
      el.removeEventListener('mousemove', handler)
      el.removeEventListener('mouseleave', reset)
    }
  }, [ref, strength])
}

/* ── Parallax on scroll ────────────────────────────────── */
export function useParallax(ref, speed = 0.3) {
  useEffect(() => {
    if (!ref.current) return
    let raf
    const handler = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (!ref.current) return
        const scrollY = window.scrollY
        ref.current.style.transform = `translateY(${scrollY * speed}px)`
      })
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', handler)
    }
  }, [ref, speed])
}
