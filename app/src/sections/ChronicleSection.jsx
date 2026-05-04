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
    <p className="text-[1.08rem] leading-[1.9] text-[rgba(240,237,228,0.62)]">
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
    color: '#ffd60a', icon: '💻',
    title: 'The spark.',
    sentence: 'Age 12. No classroom, no teacher — just a computer and relentless curiosity that became a decade of building.',
  },
  {
    year: '2019', place: 'SF Bay Area',
    color: '#ffd60a', icon: '🧠',
    title: 'Found the edge.',
    sentence: 'Fell into AI, algorithmic trading, and data science — earning certifications because the intersection felt like the most interesting problem on earth.',
  },
  {
    year: '2020', place: 'Middle College',
    color: '#ffd60a', icon: '🚀',
    title: 'Skipped the queue.',
    sentence: 'Replaced my final two years of high school with college-level computer science courses. Traditional timelines weren\'t moving fast enough.',
  },
  {
    year: 'Jul 2022', place: 'Microsoft ATL · Cairo',
    color: '#00a4ef', icon: '🏢',
    title: 'First internship.',
    sentence: 'Built a meeting summarizer at Microsoft in Cairo — transcripts, keywords, summaries, and video in one unified interface backed by Azure Cosmos DB.',
  },
  {
    year: 'Jan–Apr 2022', place: 'U.S. State Department',
    color: '#34d399', icon: '📄',
    title: 'Published research.',
    sentence: 'Built a misinformation detection toolkit for State Department senior leadership — my name is listed on the published research paper.',
  },
  {
    year: 'May–Aug 2023', place: 'Microsoft Gray Systems Lab',
    color: '#00a4ef', icon: '🗄️',
    title: 'Open source.',
    sentence: 'Pioneered applying MLOS — Microsoft\'s ML-assisted tuning framework — to MariaDB. Scripts merged directly into the open-source project.',
  },
  {
    year: '2023 – 2025', place: 'Amunet · Solo Founder',
    color: '#ffd60a', icon: '📱',
    title: 'Solo founder.',
    sentence: 'Built an iOS app from zero and shipped it globally alone — SwiftUI, the site, the legal entity. 100 downloads in the first month. Everything, solo.',
  },
  {
    year: 'May–Aug 2024', place: 'Microsoft Gray Systems Lab',
    color: '#00a4ef', icon: '📊',
    title: '50% faster.',
    sentence: 'Discovered a 50% improvement in P95 latency for the TPC-C benchmark. Work cited in the SIGMOD 2025 autotuning tutorial.',
  },
  {
    year: 'Now', place: 'Microsoft · Redmond',
    color: '#00a4ef', icon: '⚡',
    title: 'Building at scale.',
    sentence: 'Full-time Software Engineer at Microsoft — distributed systems, ML-assisted performance tuning, and developer tooling at scale. Just getting started.',
  },
]

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
        {/* Icon container */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-36 h-36 rounded-3xl flex items-center justify-center text-7xl"
          style={{
            background: `radial-gradient(circle at 35% 35%, ${ch.color}22 0%, ${ch.color}08 70%)`,
            boxShadow: `0 0 60px ${ch.color}30, 0 0 120px ${ch.color}12, inset 0 1px 0 rgba(255,255,255,0.1)`,
            border: `1px solid ${ch.color}30`,
          }}
        >
          {ch.icon}
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
                Every chapter, in order.
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
