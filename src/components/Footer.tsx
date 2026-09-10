import { Link } from 'react-router-dom'
import { useComingSoon } from '../context/ComingSoonContext'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Safety', href: '/#safety' },
  { label: 'FAQ', href: '/#faq' },
]

const legalLinks = [
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Terms of service', href: '/terms' },
]

function NavLink({ href, label }: { href: string; label: string }) {
  const cls = 'text-neutral-400 text-sm hover:text-neutral-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded'
  if (href.startsWith('/#') || href === '/') {
    return <a href={href} className={cls}>{label}</a>
  }
  return <Link to={href} className={cls}>{label}</Link>
}

export function Footer() {
  const { openModal } = useComingSoon()

  return (
    <footer
      className="relative overflow-hidden bg-neutral-50"
      role="contentinfo"
    >
      {/* Main grid */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-6 mb-14">

          {/* Brand column */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mb-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded"
            >
              <span className="text-neutral-900 font-bold text-xl tracking-tight">SchoolBus</span>
            </Link>
            <p className="text-neutral-900 font-semibold text-xl leading-snug mb-3">
              Campus rides, made simple.
            </p>
            <p className="text-neutral-500 text-sm leading-relaxed mb-7 max-w-[320px]">
              The campus carpool app built for students — only verified .edu accounts, no strangers, no surge pricing.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://apps.apple.com/us/app/schoolbus-campus-carpool/id6759405182"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-neutral-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-2 bg-white text-neutral-700 border border-neutral-200 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-neutral-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                Google Play
              </button>
            </div>
          </div>

          {/* Navigate */}
          <nav aria-label="Site navigation">
            <p className="text-neutral-900 text-sm font-semibold mb-5">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal navigation">
            <p className="text-neutral-900 text-sm font-semibold mb-5">Legal</p>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-200 pt-6">
          <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} SchoolBus — All rights reserved</p>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="relative z-0 overflow-hidden pointer-events-none select-none" aria-hidden>
        <p
          className="font-display leading-[0.85] text-neutral-900/[0.045] whitespace-nowrap px-2 -mb-[0.12em]"
          style={{ fontSize: 'clamp(4.5rem, 18vw, 22rem)' }}
        >
          SchoolBus
        </p>
      </div>
    </footer>
  )
}
