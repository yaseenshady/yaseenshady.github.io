import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'

const VARIANT_ACCENTS = {
  hero:  { gold: 'rgba(255,214,10,0.36)', cool: 'rgba(159,233,255,0.28)' },
  about: { gold: 'rgba(255,214,10,0.28)', cool: 'rgba(255,255,255,0.16)' },
  stats: { gold: 'rgba(255,214,10,0.32)', cool: 'rgba(56,189,248,0.2)' },
  builds:{ gold: 'rgba(255,214,10,0.3)',  cool: 'rgba(167,139,250,0.2)' },
  cta:   { gold: 'rgba(255,214,10,0.38)', cool: 'rgba(255,255,255,0.2)' },
}

function HeroVisual({ reduceMotion, points }) {
  return (
    <>
      {/* Background panel */}
      <div className="absolute inset-[8%] rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,214,10,0.04),rgba(255,255,255,0.02))] shadow-[0_40px_120px_rgba(0,0,0,0.45)]" />

      {/* Rotating border ring */}
      <motion.div
        animate={reduceMotion ? undefined : { rotate: [0, 6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute inset-[12%] rounded-[2.8rem] border border-[rgba(255,214,10,0.12)]"
      />

      {/* Centered card — no framer x/y so centering is stable */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="w-full max-w-[22rem] rounded-[1.8rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,214,10,0.05),rgba(0,0,0,0.24))] p-6 shadow-[0_36px_100px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ffd60a]">
            Yaseen Shady
          </p>
          <p className="mt-4 text-[2rem] font-black leading-[1.1] tracking-[-0.03em] text-white">
            Engineer.
            <br />
            Founder.
            <br />
            Builder.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[rgba(240,237,228,0.6)]">
            AI systems, developer tooling, and product craft built with depth.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {points.slice(0, 3).map((point) => (
              <span
                key={point}
                className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[rgba(240,237,228,0.7)]"
              >
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scanning line */}
      <motion.div
        animate={reduceMotion ? undefined : { x: ['-10%', '108%'] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute top-[18%] h-[2px] w-[34%] bg-gradient-to-r from-transparent via-[#ffd60a] to-transparent"
      />
    </>
  )
}

function AboutVisual({ reduceMotion, parallaxX, parallaxY }) {
  return (
    <>
      <motion.div
        style={reduceMotion ? undefined : { x: parallaxX, y: parallaxY }}
        className="absolute inset-[10%] rounded-[2.2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,214,10,0.04),rgba(0,0,0,0.18))] shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
      />

      <motion.div
        style={reduceMotion ? undefined : { x: parallaxX, y: parallaxY }}
        className="absolute inset-x-[14%] top-[14%] bottom-[14%] rounded-[1.8rem] border border-white/10 bg-black/18 p-6 backdrop-blur-xl"
      >
        <div className="grid h-full gap-4 md:grid-cols-[0.42fr_0.58fr]">
          <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,214,10,0.14),rgba(255,255,255,0.03),rgba(0,0,0,0.16))] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#ffd60a]">Journey map</p>
            <div className="relative mt-6 h-[calc(100%-2rem)] min-h-[12rem]">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[rgba(255,214,10,0.55)] via-[rgba(255,255,255,0.18)] to-transparent" />
              {[
                { label: 'Egypt', top: '0%' },
                { label: 'Bay Area', top: '34%' },
                { label: 'Microsoft', top: '68%' },
              ].map((item) => (
                <div key={item.label} className="absolute left-0 right-0 flex items-center gap-4" style={{ top: item.top }}>
                  <span className="h-6 w-6 rounded-full border border-[rgba(255,214,10,0.4)] bg-[#050505] shadow-[0_0_24px_rgba(255,214,10,0.14)]" />
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[1.4rem] border border-white/10 bg-black/20 p-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#ffd60a]">Through-line</p>
              <h3 className="mt-3 text-2xl font-black leading-tight text-white">
                Growth through depth,
                <br />
                not noise.
              </h3>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[rgba(240,237,228,0.5)]">Started</p>
                <p className="mt-2 text-sm font-semibold text-white">Self-taught and moving fast.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[rgba(255,214,10,0.07)] p-4">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[rgba(240,237,228,0.5)]">Now</p>
                <p className="mt-2 text-sm font-semibold text-white">Systems, tooling, products, craft.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

function StatsVisual({ reduceMotion, points }) {
  const bars = [28, 46, 62, 54, 78, 92]

  return (
    <>
      <div
        className="absolute inset-6 rounded-[2rem] opacity-80"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
        }}
      />

      <div className="absolute inset-x-8 bottom-8 flex items-end gap-3">
        {bars.map((height, index) => (
          <motion.div
            key={height}
            animate={reduceMotion ? { height: `${height}%` } : { height: [`${Math.max(height - 14, 16)}%`, `${height}%`, `${Math.max(height - 8, 18)}%`] }}
            transition={{ duration: 3.5 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            className="relative flex-1 rounded-t-[1rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,214,10,0.7),rgba(255,214,10,0.08))]"
          >
            <div className="absolute inset-x-0 top-0 h-8 rounded-t-[1rem] bg-white/20 blur-md" />
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={reduceMotion ? undefined : { x: ['-8%', '104%'] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[18%] h-[2px] w-[38%] bg-gradient-to-r from-transparent via-[#ffd60a] to-transparent"
      />

      <div className="absolute left-6 top-6 flex flex-wrap gap-2">
        {points.slice(0, 3).map((point) => (
          <span
            key={point}
            className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white"
          >
            {point}
          </span>
        ))}
      </div>
    </>
  )
}

function BuildsVisual({ reduceMotion, points, parallaxX, parallaxY }) {
  return (
    <>
      {points.slice(0, 3).map((point, index) => (
        <motion.div
          key={point}
          animate={reduceMotion ? undefined : { y: [0, -14 + index * 4, 0], rotate: [-8 + index * 5, -4 + index * 5, -8 + index * 5] }}
          transition={{ duration: 5.5 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/2 w-[78%] max-w-[28rem] rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,214,10,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl"
          style={{
            ...(reduceMotion ? {} : { x: parallaxX }),
            translateX: '-50%',
            translateY: '-50%',
            zIndex: 5 - index,
          }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#ffd60a]">Project 0{index + 1}</p>
          <h3 className="mt-3 text-2xl font-black text-white">{point}</h3>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="h-14 rounded-2xl bg-white/10" />
            <div className="h-14 rounded-2xl bg-[rgba(255,214,10,0.16)]" />
            <div className="h-14 rounded-2xl bg-white/6" />
          </div>
        </motion.div>
      ))}
    </>
  )
}

function CtaVisual({ reduceMotion, points }) {
  return (
    <>
      <motion.div
        animate={reduceMotion ? undefined : { rotate: [0, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(255,214,10,0.22)]"
      />
      <motion.div
        animate={reduceMotion ? undefined : { rotate: [360, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15"
      />
      <motion.div
        animate={reduceMotion ? undefined : { scale: [0.96, 1.04, 0.96], opacity: [0.42, 0.72, 0.42] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,214,10,0.75),rgba(255,183,3,0.08)_60%,transparent_72%)] blur-sm"
      />
      {points.slice(0, 3).map((point, index) => (
        <motion.span
          key={point}
          animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -10 : 10, 0] }}
          transition={{ duration: 4 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white ${
            index === 0 ? 'left-[12%] top-[24%]' : index === 1 ? 'right-[10%] top-[38%]' : 'left-[24%] bottom-[18%]'
          }`}
        >
          {point}
        </motion.span>
      ))}
    </>
  )
}

function VariantVisual({ variant, reduceMotion, parallaxX, parallaxY, points }) {
  if (variant === 'hero') {
    return <HeroVisual reduceMotion={reduceMotion} points={points} />
  }

  if (variant === 'about') {
    return <AboutVisual reduceMotion={reduceMotion} parallaxX={parallaxX} parallaxY={parallaxY} />
  }

  if (variant === 'stats') {
    return <StatsVisual reduceMotion={reduceMotion} points={points} />
  }

  if (variant === 'builds') {
    return <BuildsVisual reduceMotion={reduceMotion} parallaxX={parallaxX} parallaxY={parallaxY} points={points} />
  }

  return <CtaVisual reduceMotion={reduceMotion} points={points} />
}

export default function InteractiveStage({
  variant = 'hero',
  className = '',
  eyebrow,
  title,
  points = [],
  showOverlay = true,
  reduceMotion: reduceMotionProp,
}) {
  const systemReducedMotion = useReducedMotion()
  const reduceMotion = reduceMotionProp ?? systemReducedMotion
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const smoothX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 })
  const smoothY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 })
  const rotateY = useTransform(smoothX, [0, 1], [-9, 9])
  const rotateX = useTransform(smoothY, [0, 1], [9, -9])
  const parallaxX = useTransform(smoothX, [0, 1], [-18, 18])
  const parallaxY = useTransform(smoothY, [0, 1], [-18, 18])
  const glowX = useTransform(smoothX, (value) => `${value * 100}%`)
  const glowY = useTransform(smoothY, (value) => `${value * 100}%`)
  const accent = VARIANT_ACCENTS[variant] ?? VARIANT_ACCENTS.hero
  const glow = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, ${accent.gold}, transparent 32%)`

  const handleMove = (event) => {
    if (reduceMotion) return

    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width)
    y.set((event.clientY - rect.top) / rect.height)
  }

  const reset = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      data-hover
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1400, transformStyle: 'preserve-3d' }}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04),rgba(255,214,10,0.04))] shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl ${className}`.trim()}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.26))]" />
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ backgroundImage: glow }} />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: `inset 0 0 120px ${accent.cool}, inset 0 0 0 1px rgba(255,255,255,0.04)` }}
      />

      <VariantVisual
        variant={variant}
        reduceMotion={reduceMotion}
        parallaxX={parallaxX}
        parallaxY={parallaxY}
        points={points}
      />

      {showOverlay && (eyebrow || title) && (
        <div className="absolute bottom-5 right-5 max-w-[14rem] rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-right backdrop-blur-xl">
          {eyebrow && (
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#ffd60a]">{eyebrow}</p>
          )}
          {title && <p className="mt-2 text-sm font-semibold text-white">{title}</p>}
        </div>
      )}
    </motion.div>
  )
}
