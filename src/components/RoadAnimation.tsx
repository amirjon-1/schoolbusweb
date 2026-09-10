import { useReducedMotion } from 'framer-motion'

// Wavy S-curve road — peaks at y≈330, valleys at y≈460 across 1440×900 viewBox
const CENTER = "M -50,440 C 160,440 180,330 380,330 S 570,470 720,455 S 900,330 1090,330 S 1300,455 1490,435"
const UPPER  = "M -50,418 C 160,418 180,308 380,308 S 570,448 720,433 S 900,308 1090,308 S 1300,433 1490,413"
const LOWER  = "M -50,462 C 160,462 180,352 380,352 S 570,492 720,477 S 900,352 1090,352 S 1300,477 1490,457"

export function RoadAnimation() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Road fill */}
        <path d={CENTER} stroke="rgba(188,162,90,0.11)" strokeWidth="48" strokeLinecap="round" />
        {/* Edge lines */}
        <path d={UPPER} stroke="rgba(168,142,70,0.25)" strokeWidth="1.5" strokeLinecap="round" />
        <path d={LOWER} stroke="rgba(168,142,70,0.25)" strokeWidth="1.5" strokeLinecap="round" />

        {!reduceMotion && (
          <>
            {/* Hidden motion path */}
            <path id="sb-car-path" d={CENTER} opacity={0} />

            {/* Side-view car, facing right. Origin (0,0) sits on path center line. */}
            <g>
              {/* Wheels — rear left, front right */}
              <circle cx="-13" cy="7"  r="7.5" fill="#546070" />
              <circle cx="-13" cy="7"  r="3"   fill="#8A96A8" />
              <circle cx="13"  cy="7"  r="7.5" fill="#546070" />
              <circle cx="13"  cy="7"  r="3"   fill="#8A96A8" />

              {/* Car body */}
              <rect x="-22" y="-8" width="44" height="17" rx="4" fill="#C9A84C" />

              {/* Cabin / roof */}
              <path d="M -11,-8 L -8,-20 L 9,-20 L 12,-8 Z" fill="#B8953D" />

              {/* Rear window */}
              <path d="M -9.5,-8.5 L -7,-19 L -1,-19 L -1,-8.5 Z" fill="rgba(185,215,248,0.50)" />

              {/* Front windshield (angled) */}
              <path d="M 1,-19 L 8.5,-19 L 12,-8.5 L 1,-8.5 Z" fill="rgba(185,215,248,0.45)" />

              {/* Door divider */}
              <line x1="0" y1="-19" x2="0" y2="-8" stroke="rgba(0,0,0,0.09)" strokeWidth="0.8" />

              {/* Headlight */}
              <rect x="21.5" y="-6.5" width="2.5" height="4" rx="0.6" fill="rgba(255,248,170,0.95)" />

              {/* Front bumper */}
              <rect x="21.5" y="0" width="3" height="3" rx="1" fill="#9A6E22" />

              {/* Tail light */}
              <rect x="-24" y="-6.5" width="2.5" height="4" rx="0.6" fill="rgba(255,55,55,0.55)" />

              <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
                <mpath href="#sb-car-path" />
              </animateMotion>
            </g>
          </>
        )}
      </svg>
    </div>
  )
}
