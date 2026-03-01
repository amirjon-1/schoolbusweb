import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Slide =
  | { type: "image"; src: string; alt?: string }
  | {
      type: "video";
      src: string;
      alt?: string; // used as aria-label
      poster?: string;
      muted?: boolean;
      loop?: boolean;
      controls?: boolean;
      autoPlay?: boolean; // video autoplay (requires muted in most browsers)
    };

type Props = {
  slides: Slide[];
  reduceMotion?: boolean;
  autoPlayMs?: number; // slide autoplay; set 0 to disable
  className?: string;
};

export function FramedPhoneSlider({
  slides,
  reduceMotion = false,
  autoPlayMs = 9500,
  className = "",
}: Props) {
  const [[index, direction], setIndex] = React.useState<[number, number]>([0, 0]);
  const count = slides.length;

  const wrap = React.useCallback(
    (i: number) => ((i % count) + count) % count,
    [count]
  );

  const paginate = React.useCallback(
    (dir: number) => {
      if (count <= 1) return;
      setIndex(([i]) => [wrap(i + dir), dir]);
    },
    [count, wrap]
  );

  // OPTIONAL slide autoplay:
  // If the current slide is a video and you want users to watch, you may want to disable slide autoplay.
  const current = count ? slides[wrap(index)] : null;

  React.useEffect(() => {
    if (reduceMotion) return;
    if (!autoPlayMs || autoPlayMs <= 0) return;
    if (count <= 1) return;

    // If current slide is a video, don't auto-advance (so it can play).
    if (current?.type === "video") return;

    const id = window.setInterval(() => paginate(1), autoPlayMs);
    return () => window.clearInterval(id);
  }, [autoPlayMs, count, current?.type, paginate, reduceMotion]);

  if (!current) return null;

  const variants = {
    enter: (dir: number) => ({
      x: reduceMotion ? 0 : dir > 0 ? 24 : -24,
      opacity: 0,
      scale: reduceMotion ? 1 : 0.995,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: reduceMotion ? 0 : dir > 0 ? -24 : 24,
      opacity: 0,
      scale: reduceMotion ? 1 : 1.005,
    }),
  };

  return (
    <div className={`relative ${className}`} aria-roledescription="carousel">
      <div className="relative overflow-hidden w-full h-[620px] sm:h-[680px]">
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
            key={`${current.type}:${current.src}`}
            className="absolute inset-0"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                opacity: { duration: reduceMotion ? 0 : 0.22, ease: "easeOut" },
                x: { duration: reduceMotion ? 0 : 0.28, ease: "easeOut" },
                scale: { duration: reduceMotion ? 0 : 0.28, ease: "easeOut" },
              }}
        >
            {current.type === "image" ? (
              <img
                src={current.src}
                alt={current.alt ?? `Slide ${wrap(index) + 1}`}
                className="absolute inset-0 w-full h-full object-contain"
                draggable={false}
              />
            ) : (
              <video
                className="block w-full h-auto"
                src={current.src}
                poster={current.poster}
                muted={current.muted ?? true}
                loop={current.loop ?? true}
                controls={current.controls ?? false}
                autoPlay={current.autoPlay ?? true}
                playsInline
                // Accessibility label:
                aria-label={current.alt ?? `Video slide ${wrap(index) + 1}`}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* drag overlay */}
        {count > 1 && (
          <motion.div
            className="absolute inset-0"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              const swipe = info.offset.x;
              const threshold = 80;
              if (swipe > threshold) paginate(-1);
              else if (swipe < -threshold) paginate(1);
            }}
          />
        )}

        {/* arrows */}
        {/* {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => paginate(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-neutral-900/60 backdrop-blur px-3 py-2 text-white hover:bg-neutral-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-neutral-900/60 backdrop-blur px-3 py-2 text-white hover:bg-neutral-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              aria-label="Next slide"
            >
              ›
            </button>
          </>
        )} */}
      </div>

      {/* dots */}
      {count > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {slides.map((_, i) => {
            const active = wrap(index) === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setIndex([i, i > wrap(index) ? 1 : -1])}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  active ? "bg-brand-yellow" : "bg-black/30 hover:bg-black/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={active ? "true" : "false"}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}