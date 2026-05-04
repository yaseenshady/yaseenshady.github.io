import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
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

/* ── Chapter card — mounts fresh on each chapter, so words re-animate ── */
function ChapterCard({ ch }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.94, rotateX: 12 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      exit={{ opacity: 0, y: -50, scale: 0.96, rotateX: -6 }}
      transition={{ duration: 0.55, ease: EASE }}
      style={{ transformPerspective: 1100 }}
      className="glass-flow rounded-3xl overflow-hidden w-full"
    >
      {/* Color accent bar */}
      <div className="h-[2px]"
        style={{ background: `linear-gradient(to right, ${ch.color}, transparent 80%)` }}
      />

      <div className="p-8 md:p-12">
        {/* Header row */}
        <div className="flex items-start justify-between gap-6 mb-7">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-px w-5 shrink-0" style={{ background: ch.color }} />
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase"
                style={{ color: ch.color }}>
                {ch.year} · {ch.place}
              </span>
            </div>

            <motion.h3
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
              className="font-black leading-[1.0] tracking-[-0.04em] text-[#f0ede4]"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)' }}
            >
              {ch.title}
            </motion.h3>
          </div>

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 280, damping: 22 }}
            className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center text-4xl md:text-5xl"
            style={{
              background: `radial-gradient(circle at 35% 35%, ${ch.color}1a 0%, ${ch.color}07 70%)`,
              boxShadow: `0 0 40px ${ch.color}18, inset 0 1px 0 rgba(255,255,255,0.08)`,
              border: `1px solid ${ch.color}25`,
            }}
          >
            {ch.icon}
          </motion.div>
        </div>

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

  // Total height = chapters × 100vh (scroll distance) + 100vh (the pinned panel itself)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

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
      {/* ── Sticky panel: stays on screen while user scrolls ── */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">

        {/* Background atmosphere */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{ opacity: [0.04, 0.07, 0.04] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${ch.color}12, transparent)` }}
          />
        </div>

        {/* ── Top bar: section label + chapter counter ── */}
        <div className="relative z-10 pt-24 pb-4 px-6 sm:px-12">
          <div className="mx-auto max-w-4xl flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.34em] uppercase text-[#ffd60a] mb-1">
                The story
              </p>
              <h2 className="text-2xl font-black tracking-[-0.03em] text-[#f0ede4]">
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

          {/* Chapter progress bar */}
          <div className="mx-auto max-w-4xl mt-4">
            <div className="h-px w-full bg-[rgba(255,255,255,0.07)] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                animate={{ width: `${((activeIdx + 1) / chapters.length) * 100}%` }}
                style={{ background: ch.color }}
                transition={{ duration: 0.4, ease: EASE }}
              />
            </div>
          </div>
        </div>

        {/* ── Chapter card area ── */}
        <div className="relative z-10 flex-1 flex items-center px-6 sm:px-12">
          <div className="w-full max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <ChapterCard key={activeIdx} ch={ch} />
            </AnimatePresence>
          </div>
        </div>

        {/* ── Scroll hint ── */}
        <div className="relative z-10 pb-6 flex flex-col items-center gap-2">
          {activeIdx < chapters.length - 1 ? (
            <>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="w-px h-8 bg-gradient-to-b from-[rgba(255,214,10,0.5)] to-transparent"
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
