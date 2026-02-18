import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useComingSoon } from '../context/ComingSoonContext'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Safety', href: '#safety' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const { openModal } = useComingSoon()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="flex shrink-0 items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 rounded-lg"
        >
          <img
            src="/sblogo.png"
            alt="SchoolBus — Campus rides, made simple"
            className="h-9 w-auto"
            width={120}
            height={36}
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-neutral-700 hover:text-neutral-900 font-medium text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 text-white px-4 py-2.5 text-sm font-semibold hover:bg-neutral-750 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
            aria-label="Get the app — coming soon"
          >
            Get the App
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[80vh]' : 'max-h-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <ul className="flex flex-col gap-1 px-4 pb-4 pt-2 bg-white border-t border-neutral-100">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-3 rounded-xl text-neutral-700 font-medium hover:bg-brand-yellow-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false)
                openModal()
              }}
              className="w-full text-center rounded-2xl bg-brand-yellow text-neutral-900 py-3 font-semibold hover:bg-brand-yellow-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-dark"
            >
              Get the App
            </button>
          </li>
        </ul>
      </div>
    </motion.header>
  )
}
