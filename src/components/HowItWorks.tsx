import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Users, Car } from 'lucide-react'

const steps = [
  {
    icon: MapPin,
    title: 'Request',
    description: 'Set your pickup and drop-off. Choose now or schedule for later—classes, airport, groceries.',
  },
  {
    icon: Users,
    title: 'Match',
    description: 'We connect you with verified student drivers on your campus. See profile and rating before you go.',
  },
  {
    icon: Car,
    title: 'Ride',
    description: 'Get real-time ETA, chat in-app, and ride with a classmate. Pay upfront—split fare with friends if you want.',
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
      className="py-[clamp(4rem,8vw,6rem)] px-4 sm:px-6 bg-neutral-50"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.h2
          id="how-it-works-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl font-bold text-neutral-900 text-center mb-4"
        >
          How it works
        </motion.h2>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-neutral-600 text-center max-w-2xl mx-auto mb-14"
        >
          Three steps to get where you need to go—or start earning as a driver.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.article
              key={step.title}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-yellow text-neutral-900 shadow-soft mb-5">
                <step.icon className="h-8 w-8" aria-hidden />
              </div>
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-4rem)] h-0.5 bg-neutral-200"
                  aria-hidden
                />
              )}
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{step.title}</h3>
              <p className="text-neutral-600">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
