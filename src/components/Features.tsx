import { motion } from 'framer-motion'
import { GraduationCap, TrendingUp, Lock } from 'lucide-react'

const EASE = [0.25, 0.1, 0.25, 1] as const

export function Features() {
  return (
    <section
      id="features"
      className="py-[clamp(4rem,8vw,6rem)] px-4 sm:px-6 bg-white"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Left-aligned editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: EASE }}
          className="mb-10 max-w-xl"
        >
          <p className="text-sm font-semibold tracking-widest text-amber-500 uppercase mb-3">
            What makes it different
          </p>
          <h2
            id="features-heading"
            className="font-display text-4xl sm:text-5xl text-neutral-900 tracking-tight"
          >
            Everything campus rides should be
          </h2>
        </motion.div>

        {/* Bento grid — row 1: wide dark + screenshot; row 2: yellow + wide dark with screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Card 1 — "Only people from your school" (dark, 2/3 width) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
            className="md:col-span-2 bg-neutral-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <span className="inline-flex items-center gap-2 bg-brand-yellow/15 border border-brand-yellow/20 text-brand-yellow text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <GraduationCap className="h-3.5 w-3.5" aria-hidden />
                .edu verified only
              </span>
              <h3 className="font-display text-3xl sm:text-[2.5rem] text-white leading-snug mb-3">
                Only people<br />from your school.
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                Every driver and rider verifies a .edu email from your campus before their first trip. No anonymous accounts, no strangers from the internet.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/[0.08]">
              {['.edu required', 'Campus-scoped matching', 'Rated by peers'].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/[0.06] border border-white/10 text-neutral-400 text-xs px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2 — Browse campus rides (Fieldtrips screenshot) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.14, ease: EASE }}
            className="bg-white rounded-3xl overflow-hidden flex flex-col min-h-[320px]"
          >
            <div className="px-6 pt-6 pb-3 shrink-0">
              <h3 className="font-display text-xl text-neutral-900 mb-1">
                Browse campus rides
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Popular routes and available drivers near you.
              </p>
            </div>
            <div className="flex-1 flex items-end justify-center px-4 overflow-hidden">
              <img
                src="/Fieldtrips.png"
                alt="SchoolBus app showing campus ride map"
                className="w-full max-w-[200px] object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>

          {/* Card 3 — Earn between classes (yellow) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
            className="bg-amber-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <TrendingUp className="h-6 w-6 text-neutral-900/40 mb-5" aria-hidden />
              <h3 className="font-display text-2xl text-neutral-900 mb-2">
                Earn between classes
              </h3>
              <p className="text-neutral-800/70 text-sm leading-relaxed">
                Drivers set their own routes and schedule. Your commute, your income.
              </p>
            </div>
            <p className="text-neutral-900/30 text-xs mt-4 font-medium tracking-wide uppercase">
              No vehicle minimums
            </p>
          </motion.div>

          {/* Card 4 — Chat in-app (dark, 2/3 width, inbox screenshot) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.26, ease: EASE }}
            className="md:col-span-2 bg-neutral-800 rounded-3xl overflow-hidden flex flex-col sm:flex-row min-h-[220px]"
          >
            <div className="px-8 py-8 flex flex-col justify-center sm:w-[55%] shrink-0">
              <Lock className="h-5 w-5 text-neutral-500 mb-5" aria-hidden />
              <h3 className="font-display text-2xl sm:text-3xl text-white mb-2 leading-snug">
                Chat in-app,<br />not in texts.
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Every ride gets its own thread. Coordinate ETAs and pickups without handing out your number.
              </p>
            </div>
            <div className="flex-1 flex items-end justify-center px-6 overflow-hidden">
              <img
                src="/inbox.png"
                alt="SchoolBus inbox showing ride conversations"
                className="w-full max-w-[170px] object-contain drop-shadow-[0_-16px_40px_rgba(0,0,0,0.5)]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
