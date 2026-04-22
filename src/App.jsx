import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import '../src/styles/global.css'

import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Quote from './pages/Quote'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Loader />
      <div id="cursor" />
      <div id="cursor-ring" />
      <Cursor />
      <Nav />
      <main style={{ paddingTop: 72 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
