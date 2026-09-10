import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Users, Car } from 'lucide-react'

const steps = [
  {
    icon: MapPin,
    num: '01',
    title: 'Request',
    description: 'Set your pickup and drop-off. Choose now or schedule for later—classes, airport, groceries.',
  },
  {
    icon: Users,
    num: '02',
    title: 'Match',
    description: 'We connect you with verified campus community members. See profile and rating before you go.',
  },
  {
    icon: Car,
    num: '03',
    title: 'Ride',
    description: 'Chat in-app, and ride with a classmate. Cover on your own or split fees with friends as you want.',
  },
]

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative py-[clamp(4rem,8vw,6rem)] px-4 sm:px-6 overflow-hidden bg-white"
      aria-labelledby="how-it-works-heading"
    >

      <div className="relative mx-auto max-w-[1200px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest text-amber-500 uppercase mb-3">Simple as 1-2-3</p>
          <h2
            id="how-it-works-heading"
            className="font-display text-4xl sm:text-5xl text-neutral-900 tracking-tight mb-3"
          >
            How it works
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto">
            Three steps to get where you need to go—or start earning as a driver.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.article
              key={step.title}
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={reduceMotion ? {} : { y: -5, transition: { duration: 0.2 } }}
              className="relative rounded-3xl bg-white/60 backdrop-blur-xl border border-white/70 p-7 shadow-[0_2px_40px_rgba(0,0,0,0.06),0_0_0_1px_rgba(255,255,255,0.7)] hover:bg-white/75 hover:shadow-[0_8px_40px_rgba(0,0,0,0.09)] transition-all duration-300"
            >
              {/* Step number — top-right */}
              <span className="absolute top-5 right-6 font-display text-5xl text-neutral-900/[0.06] select-none leading-none">
                {step.num}
              </span>

              {/* Icon badge */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow shadow-[0_4px_16px_rgba(250,204,21,0.4)] mb-6">
                <step.icon className="h-6 w-6 text-neutral-900" aria-hidden />
              </div>

              <h3 className="font-display text-2xl text-neutral-900 mb-2">{step.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
