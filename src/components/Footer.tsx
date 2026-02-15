import { APP_STORE_URL, GOOGLE_PLAY_URL } from '../theme'

const footerLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Safety', href: '#safety' },
  { label: 'FAQ', href: '#faq' },
]

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12 px-4 sm:px-6" role="contentinfo">
      <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8">
        <a
          href="#hero"
          className="flex shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded"
        >
          <img
            src="/sblogo.png"
            alt="SchoolBus"
            className="h-8 w-auto brightness-0 invert opacity-90"
            width={100}
            height={28}
          />
        </a>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={APP_STORE_URL}
            className="text-sm font-medium text-white hover:text-brand-yellow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded"
          >
            App Store
          </a>
          <span className="text-neutral-500" aria-hidden>
            |
          </span>
          <a
            href={GOOGLE_PLAY_URL}
            className="text-sm font-medium text-white hover:text-brand-yellow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded"
          >
            Google Play
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] mt-8 pt-8 border-t border-neutral-700 text-center text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} SchoolBus. Campus rides, made simple.</p>
      </div>
    </footer>
  )
}
