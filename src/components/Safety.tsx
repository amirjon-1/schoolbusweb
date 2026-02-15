import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Star, GraduationCap, AlertCircle } from 'lucide-react'

const points = [
  {
    icon: ShieldCheck,
    title: 'Only verified students',
    description: '.edu email required. No strangers—everyone is a student on your campus.',
  },
  {
    icon: Star,
    title: 'Transparent profiles',
    description: 'See ratings and trip count before you request or accept. Ride with confidence.',
  },
  {
    icon: GraduationCap,
    title: 'Campus-only',
    description: 'Matching stays within your school. Familiar faces, same community.',
  },
  {
    icon: AlertCircle,
    title: 'SOS & support',
    description: 'In-app emergency options and 24/7 support. We take safety seriously.',
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
      className="py-[clamp(4rem,8vw,6rem)] px-4 sm:px-6 bg-brand-yellow-muted/50"
      aria-labelledby="safety-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.h2
          id="safety-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl font-bold text-neutral-900 text-center mb-4"
        >
          Safety & Trust
        </motion.h2>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-lg text-neutral-700 text-center max-w-2xl mx-auto mb-12"
        >
          Only verified students. Transparent profiles. Ride with confidence.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.05 }}
              className="rounded-2xl bg-white p-6 shadow-soft border border-neutral-100"
            >
              <point.icon className="h-8 w-8 text-brand-yellow-dark mb-3" aria-hidden />
              <h3 className="font-bold text-neutral-900 mb-1">{point.title}</h3>
              <p className="text-neutral-600 text-sm">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
