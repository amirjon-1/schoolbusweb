import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  GraduationCap,
  CalendarClock,
  Wallet,
  Receipt,
  Star,
  MessageCircle,
} from 'lucide-react'

const riderFeatures = [
  {
    icon: GraduationCap,
    title: 'Campus-only matching',
    description: 'Only students from your school. No randoms — just classmates you might see in the dining hall.',
    large: true,
  },
  {
    icon: CalendarClock,
    title: 'Scheduled rides',
    description: 'Book ahead, set it and forget it.',
  },
  {
    icon: Receipt,
    title: 'Upfront & split fees',
    description: 'See the price, split with friends.',
  },
]

const driverFeatures = [
  {
    icon: Wallet,
    title: 'Driver operations',
    description: 'Drive when it fits your schedule — on your way to class or errands.',
    large: true,
  },
  {
    icon: Star,
    title: 'Ratings & verification',
    description: 'Verified with a .edu email.',
  },
  {
    icon: MessageCircle,
    title: 'In-app chat',
    description: 'ETAs without sharing numbers.',
  },
]

function FeatureCard({
  icon: Icon,
  title,
  description,
  large = false,
  dark = false,
  delay,
  inView,
  reduceMotion,
}: {
  icon: LucideIcon
  title: string
  description: string
  large?: boolean
  dark?: boolean
  delay: number
  inView: boolean
  reduceMotion: boolean | null
}) {
  const glass = 'bg-white/50 border border-amber-200/30 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.95),0_12px_48px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[inset_0_1.5px_0_rgba(255,255,255,0.98),0_20px_56px_rgba(0,0,0,0.08)]'

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={reduceMotion ? {} : { y: -5, transition: { type: 'spring', stiffness: 300, damping: 24 } }}
      className={`relative rounded-3xl backdrop-blur-2xl cursor-default transition-shadow duration-300 ${glass} ${large ? 'p-8' : 'p-6'}`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl mb-5 ${
          dark
            ? 'bg-neutral-900 shadow-[0_4px_16px_rgba(0,0,0,0.22)]'
            : 'bg-brand-yellow shadow-[0_4px_16px_rgba(250,204,21,0.40)]'
        }`}
      >
        <Icon className={`h-6 w-6 ${dark ? 'text-brand-yellow' : 'text-neutral-900'}`} aria-hidden />
      </div>

      <h3 className={`font-display text-neutral-900 mb-2 ${large ? 'text-2xl sm:text-[1.65rem]' : 'text-xl'}`}>
        {title}
      </h3>
      <p className={`text-neutral-500 leading-relaxed ${large ? 'text-base' : 'text-sm'}`}>
        {description}
      </p>
    </motion.article>
  )
}

export function Features() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-[clamp(4rem,8vw,6rem)] px-4 sm:px-6 overflow-hidden bg-white"
      aria-labelledby="features-heading"
    >
      <div className="relative mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest text-amber-500 uppercase mb-3">
            No Ubers. No strangers. No surge.
          </p>
          <h2
            id="features-heading"
            className="font-display text-4xl sm:text-5xl text-neutral-900 tracking-tight"
          >
            Built for campus life
          </h2>
        </motion.div>

        {/* Two-column feature grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* For riders */}
          <div className="flex flex-col gap-4">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-sm text-neutral-400 font-medium"
            >
              For riders
            </motion.p>

            <FeatureCard
              {...riderFeatures[0]}
              delay={0.15} inView={inView} reduceMotion={reduceMotion} dark={false}
            />

            <div className="grid grid-cols-2 gap-4">
              <FeatureCard {...riderFeatures[1]} delay={0.22} inView={inView} reduceMotion={reduceMotion} dark={false} />
              <FeatureCard {...riderFeatures[2]} delay={0.28} inView={inView} reduceMotion={reduceMotion} dark={false} />
            </div>
          </div>

          {/* For drivers */}
          <div className="flex flex-col gap-4">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.12 }}
              className="text-sm text-neutral-400 font-medium"
            >
              For drivers
            </motion.p>

            <FeatureCard
              {...driverFeatures[0]}
              delay={0.20} inView={inView} reduceMotion={reduceMotion} dark
            />

            <div className="grid grid-cols-2 gap-4">
              <FeatureCard {...driverFeatures[1]} delay={0.27} inView={inView} reduceMotion={reduceMotion} dark />
              <FeatureCard {...driverFeatures[2]} delay={0.33} inView={inView} reduceMotion={reduceMotion} dark />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
