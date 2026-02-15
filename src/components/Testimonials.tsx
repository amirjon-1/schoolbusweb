import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Finally someone gets it—I don't want to Uber with randoms at 11pm. My driver was in my chem section. So much easier.",
    author: 'Maya K.',
    role: 'Junior, UC Berkeley',
  },
  {
    quote: "I drive between classes and make enough for coffee and then some. Way better than sitting in the library for that gap.",
    author: 'Jake T.',
    role: 'Sophomore, UT Austin',
  },
  {
    quote: "Scheduled my airport ride a week ahead. No stress, fair price, and the driver was actually on time. 10/10.",
    author: 'Priya S.',
    role: 'Senior, NYU',
  },
]

export function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-[clamp(4rem,8vw,6rem)] px-4 sm:px-6"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.h2
          id="testimonials-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl font-bold text-neutral-900 text-center mb-4"
        >
          What students are saying
        </motion.h2>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-neutral-600 text-center max-w-2xl mx-auto mb-14"
        >
          Real rides. Real students.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="rounded-2xl bg-neutral-50 border border-neutral-100 p-6 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-yellow/40" aria-hidden />
              <p className="text-neutral-700 mb-4 relative z-10">&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <cite className="not-italic font-semibold text-neutral-900">{t.author}</cite>
                <span className="text-neutral-500 text-sm block">{t.role}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
