import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

const EASE = [0.25, 0.1, 0.25, 1] as const

export function Safety() {
  return (
    <section
      id="safety"
      className="py-[clamp(4rem,8vw,6rem)] px-4 sm:px-6 bg-white"
      aria-labelledby="safety-heading"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Left-aligned header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: EASE }}
          className="mb-10 max-w-xl"
        >
          <p className="text-sm font-semibold tracking-widest text-amber-500 uppercase mb-3">
            Safety &amp; trust
          </p>
          <h2
            id="safety-heading"
            className="font-display text-4xl sm:text-5xl text-neutral-900 tracking-tight"
          >
            Built to trust
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Card 1 — Activerides screenshot (white, 1/3) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
            className="bg-neutral-50 rounded-3xl overflow-hidden flex flex-col min-h-[320px] border border-neutral-100"
          >
            <div className="px-6 pt-6 pb-3 shrink-0">
              <h3 className="font-display text-xl text-neutral-900 mb-1">
                Track every trip
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Active rides visible to you at every step.
              </p>
            </div>
            <div className="flex-1 flex items-end justify-center px-4 overflow-hidden">
              <img
                src="/Activerides.png"
                alt="SchoolBus app showing active trip tracking"
                className="w-full max-w-[200px] object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>

          {/* Card 2 — "You know who you're riding with" (dark, 2/3) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.14, ease: EASE }}
            className="md:col-span-2 bg-neutral-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <span className="inline-flex items-center gap-2 bg-brand-yellow/15 border border-brand-yellow/20 text-brand-yellow text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                Campus verified
              </span>
              <h3 className="font-display text-3xl sm:text-[2.5rem] text-white leading-snug mb-3">
                You know who<br />you're riding with.
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                Every account is tied to a real .edu email from your campus. No anonymous profiles, no one-star unknowns. Just people from your community.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/[0.08]">
              {['.edu required', 'Campus-scoped', 'Rated after every ride'].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/[0.06] border border-white/10 text-neutral-400 text-xs px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3 — Ratings (amber-tinted, 2/3) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
            className="md:col-span-2 bg-amber-50 border border-amber-100 rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[220px]"
          >
            <div>
              {/* Star row */}
              <div className="flex items-center gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="h-5 w-5 text-amber-400 fill-current" viewBox="0 0 20 20" aria-hidden>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-neutral-900 mb-2">
                Rated after every ride.
              </h3>
              <p className="text-neutral-600/80 text-sm leading-relaxed max-w-sm">
                Drivers with consistently low ratings get removed. Riders can see full rating history before accepting a trip.
              </p>
            </div>
            <p className="text-neutral-900/25 text-xs mt-4 font-medium tracking-wide uppercase">
              No hiding behind a faceless profile
            </p>
          </motion.div>

          {/* Card 4 — Pastrides screenshot (white, 1/3) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.26, ease: EASE }}
            className="bg-neutral-50 rounded-3xl overflow-hidden flex flex-col min-h-[220px] border border-neutral-100"
          >
            <div className="px-6 pt-6 pb-3 shrink-0">
              <h3 className="font-display text-xl text-neutral-900 mb-1">
                Full trip history
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Every completed ride, rated and logged.
              </p>
            </div>
            <div className="flex-1 flex items-end justify-center px-4 overflow-hidden">
              <img
                src="/Pastrides.png"
                alt="SchoolBus app showing past ride history with ratings"
                className="w-full max-w-[200px] object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
