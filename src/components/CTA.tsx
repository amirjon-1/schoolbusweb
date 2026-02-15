import { useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '../theme'
import { CheckCircle, Loader2 } from 'lucide-react'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function CTA() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduceMotion = useReducedMotion()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) {
      setStatus('error')
      setMessage('Please enter your email.')
      return
    }
    if (!emailRegex.test(trimmed)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }
    setStatus('loading')
    // Simulate submit (no backend)
    setTimeout(() => {
      setStatus('success')
      setMessage('You\'re on the list! We\'ll email you when we launch at your school.')
      setEmail('')
    }, 800)
  }

  return (
    <section
      id="cta"
      ref={ref}
      className="py-[clamp(4rem,8vw,6rem)] px-4 sm:px-6 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-yellow/20 blur-3xl" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-yellow/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1200px] text-center">
        <motion.h2
          id="cta-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4"
        >
          Get on the road today
        </motion.h2>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-lg text-neutral-600 max-w-2xl mx-auto mb-10"
        >
          Download SchoolBus and start riding or driving with classmates. Not at your school yet? Join the waitlist.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 text-white px-6 py-3.5 font-semibold hover:bg-neutral-750 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
            aria-label="Download on the App Store"
          >
            App Store
          </a>
          <a
            href={GOOGLE_PLAY_URL}
            className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 text-white px-6 py-3.5 font-semibold hover:bg-neutral-750 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
            aria-label="Get it on Google Play"
          >
            Google Play
          </a>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="max-w-md mx-auto"
        >
          <p className="text-sm font-medium text-neutral-700 mb-2">Join the waitlist</p>
          <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-2">
            <label htmlFor="waitlist-email" className="sr-only">
              Email for waitlist
            </label>
            <input
              id="waitlist-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@university.edu"
              disabled={status === 'success'}
              className="flex-1 rounded-2xl border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:border-transparent disabled:bg-neutral-100"
              autoComplete="email"
              aria-invalid={status === 'error'}
              aria-describedby={message ? 'waitlist-message' : undefined}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-2xl bg-brand-yellow text-neutral-900 px-6 py-3 font-semibold hover:bg-brand-yellow-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-dark focus-visible:ring-offset-2 disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Joining…
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle className="h-4 w-4" aria-hidden />
                  Joined
                </>
              ) : (
                'Join waitlist'
              )}
            </button>
          </form>
          {message && (
            <p
              id="waitlist-message"
              role="status"
              className={`mt-2 text-sm ${status === 'error' ? 'text-red-600' : 'text-neutral-600'}`}
            >
              {message}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
