import { useState, useRef } from 'react'
import { motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const items = [
  {
    question: 'How do I know drivers are actually students?',
    answer: 'Every driver signs up with a valid .edu email from a school we support. We verify that email before they can accept rides. No .edu, no drive.',
  },
  {
    question: 'Can I schedule an instant ride?',
    answer: 'No. We do not provide instant connect requests. You must schedule a ride in advance. Pick your date and time—great for early flights, late classes, or grocery runs.',
  },
  {
    question: 'How does pricing work?',
    answer: 'We are a carpool app and do not charge fares. The fee showed and agreed upon by the driver and rider is to offset the cost of the trip.',
  },
  {
    question: "What if my school isn't on SchoolBus yet?",
    answer: "We're adding campuses over time. We'll notify you when we launch at your school. You can also tell your student government or transportation office to reach out to us at hiroshi@schoolbus.cc.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="faq"
      ref={ref}
      className="relative py-[clamp(4rem,8vw,6rem)] px-4 sm:px-6 overflow-hidden bg-white"
      aria-labelledby="faq-heading"
    >

      <div className="relative mx-auto max-w-[680px]">
        <motion.h2
          id="faq-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="font-display text-4xl sm:text-5xl text-neutral-900 text-center tracking-tight mb-3"
        >
          Frequently asked questions
        </motion.h2>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="text-neutral-500 text-center mb-12 max-w-md mx-auto"
        >
          Quick answers to common questions.
        </motion.p>

        <div className="space-y-2.5" role="list">
          {items.map((faq, i) => (
            <motion.div
              key={i}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.07 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                reduceMotion={!!reduceMotion}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  reduceMotion,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  reduceMotion: boolean
}) {
  return (
    <div
      className={`rounded-2xl border bg-white/80 backdrop-blur-sm overflow-hidden transition-all duration-200 ${
        isOpen
          ? 'border-brand-yellow/40 shadow-[0_4px_24px_-4px_rgba(250,204,21,0.15)]'
          : 'border-neutral-200/70 shadow-soft hover:border-neutral-300'
      }`}
      role="listitem"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.slice(0, 20)}`}
        id={`faq-question-${question.slice(0, 20)}`}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-neutral-900 hover:bg-neutral-50/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-inset transition-colors"
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: 'easeInOut' }}
          className="shrink-0"
        >
          <ChevronDown className={`h-5 w-5 transition-colors ${isOpen ? 'text-brand-yellow-dark' : 'text-neutral-400'}`} aria-hidden />
        </motion.div>
      </button>
      <motion.div
        id={`faq-answer-${question.slice(0, 20)}`}
        role="region"
        aria-labelledby={`faq-question-${question.slice(0, 20)}`}
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={reduceMotion ? { duration: 0.01 } : { duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 pt-1 text-neutral-500 text-sm leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  )
}
