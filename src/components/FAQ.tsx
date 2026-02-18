import { useState, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const items = [
  {
    question: 'How do I know drivers are actually students?',
    answer: 'Every driver signs up with a valid .edu email from a school we support. We verify that email before they can accept rides. No .edu, no drive.',
  },
  {
    question: 'Can I schedule a ride in advance?',
    answer: 'Yes. When you request a ride, you can choose "Now" or "Schedule for later." Pick your date and time—great for early flights, late classes, or grocery runs.',
  },
  {
    question: 'How does pricing work?',
    answer: 'You see the full fare before you request. Pricing is based on distance and demand. You can split the fare with friends in the app before or after the ride.',
  },
  {
    question: 'What if my school isn\'t on SchoolBus yet?',
    answer: 'We\'re adding campuses over time. We\'ll notify you when we launch at your school. You can also tell your student government or transportation office to reach out.',
  },
  {
    question: 'Is there a safety feature if something goes wrong?',
    answer: 'Yes. In the app you can share your trip with a contact, see real-time location, and use in-app emergency options. Our support team is available 24/7 for safety-related issues.',
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
      className="py-[clamp(4rem,8vw,6rem)] px-4 sm:px-6 bg-neutral-50"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[720px]">
        <motion.h2
          id="faq-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl font-bold text-neutral-900 text-center mb-4"
        >
          Frequently asked questions
        </motion.h2>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-neutral-600 text-center mb-12"
        >
          Quick answers to common questions.
        </motion.p>

        <div className="space-y-2" role="list">
          {items.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              reduceMotion={!!reduceMotion}
            />
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
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className="rounded-2xl border border-neutral-200 bg-white shadow-soft overflow-hidden"
      role="listitem"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.slice(0, 20)}`}
        id={`faq-question-${question.slice(0, 20)}`}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-neutral-900 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-inset"
      >
        {question}
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      <motion.div
        id={`faq-answer-${question.slice(0, 20)}`}
        role="region"
        aria-labelledby={`faq-question-${question.slice(0, 20)}`}
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={reduceMotion ? { duration: 0.01 } : { duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div ref={contentRef} className="px-5 pb-4 pt-0">
          <p className="text-neutral-600 text-sm leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </div>
  )
}
