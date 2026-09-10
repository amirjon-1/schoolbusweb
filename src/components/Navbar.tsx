import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/75 backdrop-blur-xl border-b border-white/40 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.07)]'
          : 'bg-transparent'
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
            className="h-9 w-auto transition-all duration-300 [mix-blend-mode:multiply]"
            width={120}
            height={36}
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-medium text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
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
        <ul className="flex flex-col gap-1 px-4 pb-4 pt-2 bg-white/95 backdrop-blur-xl border-t border-neutral-200">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-3 rounded-xl text-neutral-700 font-medium hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.header>
  )
}
