import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Star, MapPin, Users } from 'lucide-react'

const sidePoints = [
  {
    icon: Star,
    title: 'Transparent profiles',
    description: 'Ratings and trip count before you ride.',
  },
  {
    icon: MapPin,
    title: 'Campus-only',
    description: 'Matching stays within your school.',
  },
  {
    icon: Users,
    title: 'For students, by students',
    description: 'Built by people who ride it too.',
  },
]

export function Safety() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="safety"
      ref={ref}
      className="relative py-[clamp(4rem,8vw,6rem)] px-4 sm:px-6 overflow-hidden bg-white"
      aria-labelledby="safety-heading"
    >
      <div className="relative mx-auto max-w-[1200px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest text-amber-500 uppercase mb-3">Your safety first</p>
          <h2
            id="safety-heading"
            className="font-display text-4xl sm:text-5xl text-neutral-900 tracking-tight mb-3"
          >
            Safety &amp; trust
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            Only verified students. Transparent profiles. Ride with confidence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Left — large hero card with pulsing shield */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-3xl backdrop-blur-2xl bg-white/50 border border-amber-200/30 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.95),0_12px_48px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.03)] p-10 flex flex-col"
          >
            {/* Pulsing shield animation */}
            <div className="relative flex items-center justify-center w-28 h-28 mb-8">
              {!reduceMotion && (
                <>
                  <motion.div
                    className="absolute w-28 h-28 rounded-full border-2 border-brand-yellow/35"
                    animate={{ scale: [1, 1.28, 1], opacity: [0.55, 0, 0.55] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute w-[4.5rem] h-[4.5rem] rounded-full border border-brand-yellow/25"
                    animate={{ scale: [1, 1.22, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.55 }}
                  />
                </>
              )}
              <div className="w-16 h-16 rounded-full bg-brand-yellow flex items-center justify-center shadow-[0_4px_20px_rgba(250,204,21,0.45)] z-10">
                <ShieldCheck className="h-8 w-8 text-neutral-900" aria-hidden />
              </div>
            </div>

            <h3 className="font-display text-3xl text-neutral-900 mb-3">Only verified students</h3>
            <p className="text-neutral-500 leading-relaxed">
              .edu email required. No strangers — everyone you ride with is a student on your campus.
            </p>
          </motion.div>

          {/* Right — stacked side cards */}
          <div className="flex flex-col gap-4">
            {sidePoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={reduceMotion ? {} : { y: -4, transition: { type: 'spring', stiffness: 300, damping: 24 } }}
                className="flex items-center gap-5 rounded-3xl backdrop-blur-2xl bg-white/50 border border-amber-200/30 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.95),0_12px_48px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.03)] px-6 py-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-yellow shadow-[0_4px_12px_rgba(250,204,21,0.35)]">
                  <point.icon className="h-6 w-6 text-neutral-900" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-xl text-neutral-900 mb-0.5">{point.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
