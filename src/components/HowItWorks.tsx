import { motion } from 'framer-motion'
import { MapPin, Users, Car } from 'lucide-react'

const EASE = [0.25, 0.1, 0.25, 1] as const

const steps = [
  {
    icon: MapPin,
    num: '01',
    title: 'Request',
    description: 'Set your pickup and drop-off. Choose now or schedule for later: classes, airport, groceries.',
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
  return (
    <section
      id="how-it-works"
      className="py-[clamp(4rem,8vw,6rem)] px-4 sm:px-6 bg-white"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-[1200px]">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: EASE }}
          className="mb-12 max-w-xl"
        >
          <p className="text-sm font-semibold tracking-widest text-amber-500 uppercase mb-3">
            Simple as 1-2-3
          </p>
          <h2
            id="how-it-works-heading"
            className="font-display text-4xl sm:text-5xl text-neutral-900 tracking-tight"
          >
            How it works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.1, ease: EASE }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative bg-white rounded-3xl border border-neutral-100 p-7 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300 overflow-hidden"
            >
              <span
                className="absolute top-5 right-6 font-display text-6xl leading-none text-neutral-900/[0.05] select-none pointer-events-none"
                aria-hidden
              >
                {step.num}
              </span>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow shadow-[0_4px_16px_rgba(250,204,21,0.35)] mb-6">
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
