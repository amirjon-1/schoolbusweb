import { motion, useReducedMotion } from 'framer-motion'
import { useComingSoon } from '../context/ComingSoonContext'
import { FramedPhoneSlider } from './FramedPhoneSlider'
import { RoadAnimation } from './RoadAnimation'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const item = {
  hidden: { y: 22, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
}

export function Hero() {
  const reduceMotion = useReducedMotion()
  const { openModal } = useComingSoon()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(155deg, #FFF8DC 0%, #FFFEF5 45%, #FFF3C4 100%)' }}
      aria-labelledby="hero-heading"
    >
      {/* Road animation */}
      <RoadAnimation />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0000000A 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
        aria-hidden="true"
      />

      {/* Atmospheric glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={reduceMotion ? {} : { scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-[5%] w-[700px] h-[700px] rounded-full bg-brand-yellow/25 blur-[180px]"
        />
        <motion.div
          animate={reduceMotion ? {} : { x: [0, -30, 0], y: [0, 22, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute top-1/4 -left-20 w-[450px] h-[450px] rounded-full bg-yellow-200/30 blur-[120px]"
        />
      </div>

      {/* Centered content: heading + phone stacked */}
      <div className="relative z-10 flex flex-1 flex-col items-center pt-28 pb-0 px-4 sm:px-6">
        <motion.div
          variants={reduceMotion ? undefined : container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center max-w-2xl"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/[0.07] border border-neutral-900/[0.10] text-neutral-600 font-medium text-sm mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" aria-hidden />
            College Community Rideshare
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="font-display text-neutral-900 text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem] leading-[1.02] tracking-tight mb-6"
          >
            Riders &amp;<br />drivers.
            <br />
            <em className="not-italic text-amber-500">One community.</em>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-neutral-500 text-base sm:text-lg max-w-md mb-10 leading-relaxed"
          >
            Affordable rides between verified campus community members—and a lucrative side hustle for drivers.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <a
              href="https://apps.apple.com/us/app/schoolbus-campus-carpool/id6759405182"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-brand-yellow text-neutral-900 px-7 py-4 font-bold text-[0.9375rem] hover:scale-[1.03] hover:shadow-[0_8px_32px_-4px_rgba(250,204,21,0.55)] active:scale-[0.97] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
              aria-label="Download on the App Store"
            >
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center gap-2.5 rounded-2xl bg-neutral-900 text-white px-7 py-4 font-semibold text-[0.9375rem] hover:scale-[1.03] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.25)] active:scale-[0.97] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
              aria-label="Google Play — coming soon"
            >
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
              </svg>
              Google Play
            </button>
          </motion.div>

        </motion.div>

        {/* Phone + floating cards */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 0.45, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mt-6 flex justify-center"
        >
          <div className="absolute -inset-x-20 top-1/4 bottom-0 bg-brand-yellow/20 blur-[80px] rounded-full pointer-events-none" aria-hidden />

          {/* Floating phone */}
          <motion.div
            animate={reduceMotion ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-[270px] sm:w-[310px] lg:w-[340px]"
          >
            {/* Ride Request card — left */}
            <motion.div
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: reduceMotion ? 0 : 1.1, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute -left-52 top-14 hidden lg:block"
              aria-hidden="true"
            >
              <motion.div
                animate={reduceMotion ? {} : { y: [0, -7, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <motion.div
                  whileHover={reduceMotion ? {} : { scale: 1.07, y: -6 }}
                  whileTap={reduceMotion ? {} : { scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                  className="w-48 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.10),0_0_0_1px_rgba(255,255,255,0.9)] hover:shadow-[0_20px_56px_rgba(0,0,0,0.16),0_0_0_1px_rgba(255,255,255,0.95)] p-3.5 cursor-default transition-shadow duration-200"
                >
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                  <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">Ride Request</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="flex flex-col items-center pt-0.5 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-brand-yellow ring-2 ring-neutral-900/10" />
                    <div className="w-px h-4 bg-neutral-200 my-0.5" />
                    <div className="w-2 h-2 rounded-full bg-neutral-900" />
                  </div>
                  <div className="flex flex-col gap-2.5 min-w-0">
                    <span className="text-[11px] font-medium text-neutral-700 leading-tight">400 Tech Ave</span>
                    <span className="text-[11px] font-medium text-neutral-700 leading-tight">Bruin Dining Hall</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[10px] text-neutral-400">Est. fee</span>
                  <span className="text-sm font-bold text-neutral-900">$5.00</span>
                </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Earnings card — right */}
            <motion.div
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: reduceMotion ? 0 : 1.3, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute -right-48 top-36 hidden lg:block"
              aria-hidden="true"
            >
              <motion.div
                animate={reduceMotion ? {} : { y: [0, 6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <motion.div
                  whileHover={reduceMotion ? {} : { scale: 1.07, y: -6 }}
                  whileTap={reduceMotion ? {} : { scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                  className="w-44 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.10),0_0_0_1px_rgba(255,255,255,0.9)] hover:shadow-[0_20px_56px_rgba(0,0,0,0.16),0_0_0_1px_rgba(255,255,255,0.95)] p-3.5 cursor-default transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">This week</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                  </div>
                  <p className="text-2xl font-bold text-neutral-900 mb-2">$47.50</p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-brand-yellow text-xs leading-none">★</span>
                    <span className="text-xs font-semibold text-neutral-700">4.9</span>
                    <span className="text-neutral-300 text-xs">·</span>
                    <span className="text-xs text-neutral-400">12 rides</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Driver Matched card — left lower */}
            <motion.div
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: reduceMotion ? 0 : 1.5, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute -left-52 top-[52%] hidden lg:block"
              aria-hidden="true"
            >
              <motion.div
                animate={reduceMotion ? {} : { y: [0, 8, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
              >
                <motion.div
                  whileHover={reduceMotion ? {} : { scale: 1.07, y: -6 }}
                  whileTap={reduceMotion ? {} : { scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                  className="w-48 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.10),0_0_0_1px_rgba(255,255,255,0.9)] hover:shadow-[0_20px_56px_rgba(0,0,0,0.16),0_0_0_1px_rgba(255,255,255,0.95)] p-3.5 cursor-default transition-shadow duration-200"
                >
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="relative flex h-1.5 w-1.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                    </span>
                    <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">Driver Matched</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                      <span className="text-[11px] font-bold text-neutral-900">JR</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900 leading-tight">Jalen R.</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-brand-yellow text-[11px] leading-none">★</span>
                        <span className="text-[11px] text-neutral-500">4.8 · 3 min away</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Fare Split card — right lower */}
            <motion.div
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: reduceMotion ? 0 : 1.7, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute -right-48 bottom-40 hidden lg:block"
              aria-hidden="true"
            >
              <motion.div
                animate={reduceMotion ? {} : { y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
              >
                <motion.div
                  whileHover={reduceMotion ? {} : { scale: 1.07, y: -6 }}
                  whileTap={reduceMotion ? {} : { scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                  className="w-44 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.10),0_0_0_1px_rgba(255,255,255,0.9)] hover:shadow-[0_20px_56px_rgba(0,0,0,0.16),0_0_0_1px_rgba(255,255,255,0.95)] p-3.5 cursor-default transition-shadow duration-200"
                >
                  <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">Fare Split</span>
                  <div className="flex items-center mt-2 mb-2.5">
                    {['A', 'M', 'K'].map((initial, idx) => (
                      <div
                        key={initial}
                        style={{ marginLeft: idx === 0 ? 0 : -6 }}
                        className="w-7 h-7 rounded-full bg-neutral-100 border-2 border-white flex items-center justify-center shrink-0"
                      >
                        <span className="text-[9px] font-bold text-neutral-600">{initial}</span>
                      </div>
                    ))}
                    <span className="ml-2 text-[11px] text-neutral-400">3 riders</span>
                  </div>
                  <p className="text-sm font-bold text-neutral-900">
                    $1.67 <span className="text-xs font-normal text-neutral-400">each</span>
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            <FramedPhoneSlider
              reduceMotion={!!reduceMotion}
              autoPlayMs={reduceMotion ? 0 : 4500}
              slides={[
                { type: 'image', src: '/Fieldtrips.png', alt: 'Field trips screen' },
                { type: 'image', src: '/Pastrides.png', alt: 'Past rides screen' },
                { type: 'image', src: '/Activerides.png', alt: 'Active rides screen' },
                { type: 'image', src: '/inbox.png', alt: 'Inbox screen' },
              ]}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none z-20" aria-hidden />
    </section>
  )
}
