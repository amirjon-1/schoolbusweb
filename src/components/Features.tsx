import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import {
  GraduationCap,
  CalendarClock,
  Wallet,
  Receipt,
  Star,
  MessageCircle,
} from 'lucide-react'

const features = [
  {
    icon: GraduationCap,
    title: 'Campus-only matching',
    description: 'Only students from your school. No randoms—just classmates you might see in the dining hall.',
  },
  {
    icon: CalendarClock,
    title: 'Scheduled rides',
    description: 'Book for class, airport runs, or grocery trips. Set it and forget it until pickup time.',
  },
  {
    icon: Wallet,
    title: 'Driver earnings for students',
    description: 'Drive when it fits your schedule. Earn on your way to class or between shifts.',
  },
  {
    icon: Receipt,
    title: 'Upfront pricing & split fare',
    description: 'See the price before you request. Splitting with friends? One tap to divide the fare.',
  },
  {
    icon: Star,
    title: 'Ratings & verification',
    description: 'Every rider and driver is verified with a .edu email. Rate after each trip so everyone stays accountable.',
  },
  {
    icon: MessageCircle,
    title: 'Real-time ETAs & in-app chat',
    description: 'Live tracking and ETA updates. Message your driver or rider without sharing your number.',
  },
]

export function Features() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="features"
      ref={ref}
      className="py-[clamp(4rem,8vw,6rem)] px-4 sm:px-6"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.h2
          id="features-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl font-bold text-neutral-900 text-center mb-4"
        >
          Built for campus life
        </motion.h2>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-neutral-600 text-center max-w-2xl mx-auto mb-14"
        >
          Everything you need to ride or drive—without the hassle.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 + i * 0.06 }}
              whileHover={reduceMotion ? {} : { y: -4, boxShadow: '0 0 0 1px rgba(250, 204, 21, 0.2), 0 8px 24px -4px rgba(250, 204, 21, 0.15)' }}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft transition-shadow focus-within:ring-2 focus-within:ring-brand-yellow focus-within:ring-offset-2"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow-muted text-brand-yellow-dark mb-4">
                <feature.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{feature.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
