import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useComingSoon } from '../context/ComingSoonContext'

const footerLinks = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Features', href: '/#features' },
  { label: 'Safety', href: '/#safety' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
]

export function Footer() {
  const { openModal } = useComingSoon()
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12 px-4 sm:px-6" role="contentinfo">
      <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8">
        <Link
          to="/"
          className="flex shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded"
        >
          {logoError ? (
            <span className="text-white font-bold text-xl">SchoolBus</span>
          ) : (
            <img
              src="/sblogo.png"
              alt="SchoolBus"
              className="h-8 w-auto opacity-95"
              width={100}
              height={28}
              onError={() => setLogoError(true)}
            />
          )}
        </Link>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <li key={link.href}>
                {link.href.startsWith('/#') ? (
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="text-sm hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openModal}
            className="text-sm font-medium text-white hover:text-brand-yellow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded"
          >
            App Store
          </button>
          <span className="text-neutral-500" aria-hidden>
            |
          </span>
          <button
            type="button"
            onClick={openModal}
            className="text-sm font-medium text-white hover:text-brand-yellow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded"
          >
            Google Play
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] mt-8 pt-8 border-t border-neutral-700 text-center text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} SchoolBus. Campus rides, made simple.</p>
      </div>
    </footer>
  )
}
