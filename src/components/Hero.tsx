import { motion, useReducedMotion } from 'framer-motion'
import { useComingSoon } from '../context/ComingSoonContext'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1 },
}

export function Hero() {
  const reduceMotion = useReducedMotion()
  const { openModal } = useComingSoon()

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16"
      aria-labelledby="hero-heading"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-yellow/20 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-brand-yellow/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          variants={reduceMotion ? undefined : container}
          initial="hidden"
          animate="show"
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            variants={item}
            className="text-brand-yellow-dark font-semibold text-sm uppercase tracking-wider mb-3"
          >
            College-only rideshare
          </motion.p>
          <motion.h1
            id="hero-heading"
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-4"
          >
            Riders & drivers.
            <br />
            <span className="text-brand-yellow-dark">All students.</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-neutral-600 max-w-xl mx-auto lg:mx-0 mb-8"
          >
            We facilitate affordable rides between students to travel across underserved areas, while offering a lucrative side hustle          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 text-white px-6 py-3.5 font-semibold hover:bg-neutral-750 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
              aria-label="App Store — coming soon"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </button>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-neutral-300 text-neutral-800 px-6 py-3.5 font-semibold hover:border-brand-yellow hover:bg-brand-yellow-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
              aria-label="Google Play — coming soon"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l6.54-6.54 4.22 4.22 2.27-2.27-2.27-2.27-2.27 2.27-2.27-2.27 2.27-2.27 2.27 2.27 2.27-2.27-2.27-2.27 2.27-2.27 2.27 2.27 4.22-4.22 2.27 2.27-2.27 2.27 2.27 2.27-2.27 2.27-6.76-6.76zM20.16 3.15c.5.24.84.76.84 1.35v17c0 .59-.34 1.11-.84 1.35L13.69 12 20.16 3.15zM6.05 2.66l10.76 10.76-4.22 4.22L6.05 2.66z" />
              </svg>
              Google Play
            </button>
          </motion.div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 0.4, duration: 0.5 }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            animate={reduceMotion ? {} : { y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="w-64 h-[520px] rounded-[2.5rem] bg-neutral-800 shadow-soft-lg border-[10px] border-neutral-700 flex flex-col overflow-hidden">
              <div className="h-12 flex items-center justify-center border-b border-neutral-600">
                <div className="w-20 h-1.5 rounded-full bg-neutral-600" />
              </div>
              <div className="flex-1 p-4 space-y-3 bg-neutral-900">
                <div className="h-10 rounded-xl bg-brand-yellow/30 flex items-center justify-center">
                  <span className="text-brand-yellow font-bold text-sm">SchoolBus</span>
                </div>
                <div className="h-24 rounded-xl bg-neutral-700/50" />
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-16 rounded-lg bg-neutral-700/50" />
                  ))}
                </div>
                <div className="h-12 rounded-full bg-brand-yellow flex items-center justify-center mt-4">
                  <span className="text-neutral-900 font-semibold text-sm">Request ride</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
