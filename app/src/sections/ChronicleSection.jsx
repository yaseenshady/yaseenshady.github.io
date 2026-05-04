import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion'
import { useRef, useState } from 'react'

const EASE = [0.22, 1, 0.36, 1]

/* ── Word-by-word animated sentence — re-animates on each new card ── */
function AnimatedSentence({ text }) {
  const words = text.split(' ')
  return (
    <p className="text-[1.02rem] leading-[1.75] text-[rgba(240,237,228,0.62)]">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.05, y: 12, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, delay: 0.25 + i * 0.052, ease: EASE }}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
    </p>
  )
}

/* ── Chapter data ──────────────────────────────────────────────── */
const chapters = [
  {
    year: '2012', place: 'Egypt',
    color: '#ffd60a', visual: 'code',
    title: 'A kid and a keyboard.',
    sentence: 'Age 12 in Egypt. I taught myself by going deeper every night.',
  },
  {
    year: '2019', place: 'SF Bay Area',
    color: '#ffd60a', visual: 'network',
    title: 'The map opened.',
    sentence: 'The Bay Area pulled me toward AI, markets, data, and sharper ambition.',
  },
  {
    year: '2020', place: 'Middle College',
    color: '#ffd60a', visual: 'cards',
    title: 'Skipped the queue.',
    sentence: 'I traded the normal timeline for college computer science and momentum.',
  },
  {
    year: 'Jul 2022', place: 'Microsoft ATL · Cairo',
    color: '#00a4ef', visual: 'microsoft',
    title: 'First Microsoft build.',
    sentence: 'A meeting summarizer: transcript, keywords, video, and Azure data in one flow.',
  },
  {
    year: 'Jan–Apr 2022', place: 'U.S. State Department',
    color: '#34d399', visual: 'research',
    title: 'Signal from noise.',
    sentence: 'Research became a toolkit for detecting misinformation at global scale.',
  },
  {
    year: 'May–Aug 2023', place: 'Microsoft Gray Systems Lab',
    color: '#00a4ef', visual: 'database',
    title: 'Tuning the engine.',
    sentence: 'I connected ML-assisted optimization to MariaDB and pushed it into open source.',
  },
  {
    year: '2023 – 2025', place: 'Amunet · Solo Founder',
    color: '#ffd60a', visual: 'phone',
    title: 'Built alone.',
    sentence: 'SwiftUI, website, legal entity, App Store launch. The whole loop, solo.',
  },
  {
    year: 'May–Aug 2024', place: 'Microsoft Gray Systems Lab',
    color: '#00a4ef', visual: 'chart',
    title: '50% faster.',
    sentence: 'A benchmark GUI uncovered a 50% P95 latency improvement.',
  },
  {
    year: 'Now', place: 'Microsoft · Redmond',
    color: '#00a4ef', visual: 'system',
    title: 'Building at scale.',
    sentence: 'Distributed systems, AI-assisted tuning, and tools that make complex work usable.',
  },
]

function VisualGlyph({ type, color }) {
  if (type === 'code') {
    return (
      <div className="relative h-48 w-64 rounded-[30px] border border-white/10 bg-black/45 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
        {[0, 1, 2, 3].map((line) => (
          <motion.span
            key={line}
            className="mb-4 block h-2 rounded-full"
            style={{ background: line === 1 ? color : 'rgba(240,237,228,0.18)', width: `${52 + line * 12}%` }}
            animate={{ opacity: [0.35, 1, 0.35], x: [0, 12, 0] }}
            transition={{ duration: 2.4, delay: line * 0.18, repeat: Infinity }}
          />
        ))}
        <motion.div className="absolute -bottom-8 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full border border-yellow-200/25"
          animate={{ scale: [0.85, 1.18, 0.85], opacity: [0.25, 0.7, 0.25] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    )
  }

  if (type === 'network' || type === 'system') {
    const nodes = [[50, 18], [22, 48], [74, 44], [38, 76], [66, 78]]
    return (
      <div className="relative h-64 w-72">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
          <path d="M50 18 L22 48 L38 76 L66 78 L74 44 Z M22 48 L74 44 M50 18 L66 78" fill="none" stroke={color} strokeOpacity="0.35" strokeWidth="0.7" />
        </svg>
        {nodes.map(([left, top], index) => (
          <motion.span
            key={index}
            className="absolute h-8 w-8 rounded-full border border-white/15 bg-black/50"
            style={{ left: `${left}%`, top: `${top}%`, boxShadow: `0 0 34px ${color}44` }}
            animate={{ scale: [0.9, 1.18, 0.9], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.8, delay: index * 0.2, repeat: Infinity }}
          />
        ))}
      </div>
    )
  }

  if (type === 'cards') {
    return (
      <div className="relative h-60 w-72">
        {[0, 1, 2].map((card) => (
          <motion.div
            key={card}
            className="absolute left-1/2 top-1/2 h-36 w-48 rounded-[24px] border border-white/10 bg-white/[0.055] backdrop-blur-xl"
            style={{ marginLeft: -96, marginTop: -72, rotate: `${-10 + card * 10}deg`, y: -card * 18 }}
            animate={{ y: [-card * 18, -card * 18 - 14, -card * 18], rotateX: [8, -4, 8] }}
            transition={{ duration: 3.4, delay: card * 0.18, repeat: Infinity }}
          />
        ))}
      </div>
    )
  }

  if (type === 'microsoft') {
    return (
      <div className="grid h-52 w-52 grid-cols-2 gap-3">
        {[0, 1, 2, 3].map((tile) => (
          <motion.div
            key={tile}
            className="rounded-[22px] border border-white/10 bg-white/[0.045]"
            style={{ boxShadow: `0 0 44px ${color}24` }}
            animate={{ y: [0, tile % 2 ? 10 : -10, 0], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 3, delay: tile * 0.16, repeat: Infinity }}
          />
        ))}
      </div>
    )
  }

  if (type === 'research') {
    return (
      <div className="relative h-60 w-56 rounded-[26px] border border-white/10 bg-white/[0.05] p-6">
        {[0, 1, 2, 3, 4].map((line) => <span key={line} className="mb-4 block h-2 rounded-full bg-white/15" style={{ width: `${88 - line * 10}%` }} />)}
        <motion.div className="absolute left-0 right-0 top-10 h-px" style={{ background: color }}
          animate={{ y: [0, 150, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 2.6, repeat: Infinity }}
        />
      </div>
    )
  }

  if (type === 'database') {
    return (
      <div className="relative h-60 w-64">
        {[0, 1, 2, 3].map((disk) => (
          <motion.div
            key={disk}
            className="absolute left-1/2 h-16 w-56 -translate-x-1/2 rounded-[50%] border border-white/10 bg-white/[0.045]"
            style={{ bottom: `${disk * 34}px`, boxShadow: `0 0 42px ${color}1f` }}
            animate={{ x: [0, disk % 2 ? 8 : -8, 0] }}
            transition={{ duration: 2.8, delay: disk * 0.14, repeat: Infinity }}
          />
        ))}
      </div>
    )
  }

  if (type === 'phone') {
    return (
      <motion.div className="relative h-64 w-36 rounded-[32px] border border-white/15 bg-black/55 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
        animate={{ rotateZ: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="h-full rounded-[24px] border border-white/10 bg-gradient-to-b from-yellow-200/15 to-white/[0.02]" />
        <motion.span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-200/40"
          animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.25, 0.8, 0.25] }}
          transition={{ duration: 2.8, repeat: Infinity }}
        />
      </motion.div>
    )
  }

  if (type === 'chart') {
    return (
      <div className="flex h-56 w-72 items-end justify-center gap-4 rounded-[30px] border border-white/10 bg-white/[0.035] p-8">
        {[44, 70, 96, 128, 168].map((height, index) => (
          <motion.div
            key={height}
            className="w-8 rounded-t-2xl bg-gradient-to-t from-yellow-600/70 to-yellow-200/80"
            animate={{ height: [height * 0.55, height, height * 0.62] }}
            transition={{ duration: 2.4, delay: index * 0.13, repeat: Infinity }}
          />
        ))}
      </div>
    )
  }

  return null
}

/* ── Right-side visual panel ───────────────────────────────────── */
function ChapterVisual({ ch, motionStyle }) {
  return (
    <motion.div
      key={ch.year}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.06 }}
      transition={{ duration: 0.6, ease: EASE }}
      style={{
        transformPerspective: 1200,
        rotateX: motionStyle.visualRotateX,
        rotateY: motionStyle.visualRotateY,
        y: motionStyle.visualY,
      }}
      className="relative w-full h-full flex items-center justify-center"
    >
      {/* Giant translucent year watermark */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.055, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-black text-[#f0ede4] leading-none text-center"
        style={{ fontSize: 'clamp(5rem, 14vw, 11rem)', letterSpacing: 0 }}
      >
        {ch.year}
      </motion.span>

      {/* Pulsing concentric glow rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full"
          style={{
            width:  `${ring * 140}px`,
            height: `${ring * 140}px`,
            border: `1px solid ${ch.color}`,
            opacity: 0,
          }}
          animate={{
            opacity:   [0, 0.18 / ring, 0],
            scale:     [0.7, 1.15, 1.4],
          }}
          transition={{
            duration: 2.8,
            delay:    ring * 0.45,
            repeat:   Infinity,
            ease:     'easeOut',
          }}
        />
      ))}

      {/* Soft radial glow behind icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
        className="relative z-10 flex flex-col items-center gap-4"
      >
        {/* Story-specific visual */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex min-h-72 min-w-72 items-center justify-center rounded-[36px]"
          style={{
            background: `radial-gradient(circle at 50% 45%, ${ch.color}18 0%, ${ch.color}05 62%, transparent 72%)`,
            boxShadow: `0 0 70px ${ch.color}24, 0 0 130px ${ch.color}0f`,
          }}
        >
          <VisualGlyph type={ch.visual} color={ch.color} />
        </motion.div>

        <motion.div
          className="absolute inset-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          style={{ rotate: motionStyle.orbitRotate }}
        >
          {[0, 1, 2, 3].map((dot) => (
            <span
              key={dot}
              className="absolute h-2 w-2 rounded-full"
              style={{
                left: `${50 + Math.cos((Math.PI * 2 * dot) / 4) * 48}%`,
                top: `${50 + Math.sin((Math.PI * 2 * dot) / 4) * 48}%`,
                background: ch.color,
                boxShadow: `0 0 18px ${ch.color}`,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          className="absolute left-1/2 top-1/2 -z-20 h-72 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[36px] border border-white/10 bg-white/[0.035] shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          style={{ rotateZ: motionStyle.visualPanelRotate }}
        />

        {/* Place label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="text-[11px] font-semibold tracking-[0.28em] uppercase"
          style={{ color: ch.color }}
        >
          {ch.place}
        </motion.p>
      </motion.div>

      {/* Corner accent dots */}
      {[
        'top-6 left-6', 'top-6 right-6',
        'bottom-6 left-6', 'bottom-6 right-6',
      ].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos} w-1.5 h-1.5 rounded-full`}
          style={{ background: ch.color, opacity: 0.3 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2.4, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </motion.div>
  )
}

/* ── Left-side chapter card ────────────────────────────────────── */
function ChapterCard({ ch, motionStyle }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -70 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -48 }}
      transition={{ duration: 0.55, ease: EASE }}
      style={{
        transformPerspective: 1200,
        rotateX: motionStyle.cardRotateX,
        rotateY: motionStyle.cardRotateY,
        y: motionStyle.cardY,
        scale: motionStyle.cardScale,
      }}
      className="glass-flow rounded-3xl overflow-hidden w-full"
    >
      {/* Color accent bar */}
      <div className="h-[2px]"
        style={{ background: `linear-gradient(to right, ${ch.color}, transparent 80%)` }}
      />

      <div className="p-8 md:p-10">
        {/* Year / place label */}
        <div className="flex items-center gap-2.5 mb-5">
          <span className="h-px w-5 shrink-0" style={{ background: ch.color }} />
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase"
            style={{ color: ch.color }}>
            {ch.year} · {ch.place}
          </span>
        </div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="font-black leading-[1.0] tracking-normal text-[#f0ede4] mb-7"
          style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}
        >
          {ch.title}
        </motion.h3>

        {/* Animated sentence */}
        <AnimatedSentence text={ch.sentence} />
      </div>
    </motion.div>
  )
}

/* ── Section ───────────────────────────────────────────────────── */
export default function ChronicleSection() {
  const containerRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const localChapterProgress = useTransform(scrollYProgress, (v) => {
    if (v >= 0.999) return 1
    const raw = v * chapters.length
    return raw - Math.floor(raw)
  })

  const spring = { stiffness: 130, damping: 24, mass: 0.55 }
  const motionStyle = {
    cardRotateX: useSpring(useTransform(localChapterProgress, [0, 0.5, 1], [13, -2, -11]), spring),
    cardRotateY: useSpring(useTransform(localChapterProgress, [0, 0.5, 1], [-12, 2, 13]), spring),
    cardY: useSpring(useTransform(localChapterProgress, [0, 0.5, 1], [34, 0, -30]), spring),
    cardScale: useSpring(useTransform(localChapterProgress, [0, 0.5, 1], [0.965, 1.025, 0.985]), spring),
    visualRotateX: useSpring(useTransform(localChapterProgress, [0, 0.5, 1], [8, -2, -8]), spring),
    visualRotateY: useSpring(useTransform(localChapterProgress, [0, 0.5, 1], [14, -3, -14]), spring),
    visualY: useSpring(useTransform(localChapterProgress, [0, 0.5, 1], [28, 0, -26]), spring),
    visualPanelRotate: useSpring(useTransform(localChapterProgress, [0, 0.5, 1], [-10, 1, 10]), spring),
    orbitRotate: useTransform(scrollYProgress, [0, 1], [0, 900]),
  }

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(Math.floor(v * chapters.length), chapters.length - 1)
    setActiveIdx(idx)
  })

  const ch = chapters[activeIdx]

  return (
    <section
      id="story"
      ref={containerRef}
      style={{ height: `calc(${chapters.length * 100}vh + 100vh)` }}
      className="relative"
    >
      {/* ── Sticky panel ── */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">

        {/* Background atmosphere — color shifts per chapter */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{ opacity: [0.04, 0.08, 0.04] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 70% 55% at 70% 50%, ${ch.color}14, transparent)`,
            }}
          />
        </div>

        {/* ── Top bar ── */}
        <div className="relative z-10 pt-24 pb-4 px-6 sm:px-12">
          <div className="mx-auto max-w-6xl flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.34em] uppercase text-[#ffd60a] mb-1">
                The story
              </p>
              <h2 className="text-2xl font-black tracking-normal text-[#f0ede4]">
                Deeper with every scroll.
              </h2>
            </div>

            {/* Chapter counter */}
            <div className="glass-ball rounded-2xl px-5 py-3 text-right">
              <motion.p
                key={activeIdx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-black text-[#ffd60a] leading-none tabular-nums"
              >
                {String(activeIdx + 1).padStart(2, '0')}
              </motion.p>
              <p className="text-[10px] tracking-widest text-[rgba(240,237,228,0.35)] mt-0.5">
                / {String(chapters.length).padStart(2, '0')}
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mx-auto max-w-6xl mt-4">
            <div className="h-px w-full bg-[rgba(255,255,255,0.07)] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ scaleX: scrollYProgress, transformOrigin: 'left center', background: ch.color }}
              />
            </div>
          </div>
        </div>

        {/* ── Two-column content area ── */}
        <div className="relative z-10 flex-1 flex items-center px-6 sm:px-12 pb-4">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-center">

            {/* LEFT — chapter card */}
            <div>
              <AnimatePresence mode="wait">
                <ChapterCard key={activeIdx} ch={ch} motionStyle={motionStyle} />
              </AnimatePresence>
            </div>

            {/* RIGHT — visual panel */}
            <div className="hidden lg:flex items-center justify-center h-[420px]">
              <AnimatePresence mode="wait">
                <ChapterVisual key={activeIdx} ch={ch} motionStyle={motionStyle} />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── Scroll hint ── */}
        <div className="relative z-10 pb-5 flex flex-col items-center gap-2">
          {activeIdx < chapters.length - 1 ? (
            <>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="w-px h-7 bg-gradient-to-b from-[rgba(255,214,10,0.5)] to-transparent"
              />
              <p className="text-[10px] tracking-[0.28em] uppercase text-[rgba(240,237,228,0.2)]">
                scroll for next
              </p>
            </>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] tracking-[0.28em] uppercase text-[rgba(255,214,10,0.4)]"
            >
              that's the story ↓
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}
