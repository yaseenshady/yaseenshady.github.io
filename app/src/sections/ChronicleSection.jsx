import { motion } from 'framer-motion'
import { useRef, useState, useEffect, forwardRef } from 'react'

const EASE = [0.22, 1, 0.36, 1]

/* ── Word-by-word animated sentence ──────────────────────────── */
function AnimatedSentence({ text }) {
  const words = text.split(' ')
  return (
    <p className="text-[1.07rem] leading-[1.85] text-[rgba(240,237,228,0.62)]">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.08, y: 10, filter: 'blur(3px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10px' }}
          transition={{ duration: 0.45, delay: i * 0.048, ease: EASE }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </p>
  )
}

/* ── Chapter data (one punchy sentence each) ─────────────────── */
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
    sentence: 'Fell deep into AI, algorithmic trading, and data science — earning professional certifications because the intersection felt like the most interesting problem on earth.',
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
    sentence: 'Built a meeting summarizer prototype at Microsoft in Cairo — timed transcripts, keyword extraction, summaries, and video in one unified interface backed by Azure Cosmos DB.',
  },
  {
    year: 'Jan–Apr 2022', place: 'U.S. State Department',
    color: '#34d399', icon: '📄',
    title: 'Published research.',
    sentence: 'Built a misinformation detection toolkit for State Department senior leadership as part of the Diplomacy Lab — my name is on the published paper.',
  },
  {
    year: 'May–Aug 2023', place: 'Microsoft Gray Systems Lab',
    color: '#00a4ef', icon: '🗄️',
    title: 'Open source.',
    sentence: 'Pioneered applying MLOS — Microsoft\'s ML-assisted tuning framework — to MariaDB. Scripts integrated directly into the open-source project.',
  },
  {
    year: '2023 – 2025', place: 'Amunet · Solo Founder',
    color: '#ffd60a', icon: '📱',
    title: 'Solo founder.',
    sentence: 'Built an iOS app from zero, shipped globally alone — SwiftUI, the marketing site, the legal entity. 100 downloads in the first month. Everything, solo.',
  },
  {
    year: 'May–Aug 2024', place: 'Microsoft Gray Systems Lab',
    color: '#00a4ef', icon: '📊',
    title: '50% faster.',
    sentence: 'Discovered a 50% improvement in P95 latency for the TPC-C benchmark. Work cited in the SIGMOD 2025 autotuning tutorial — the top database research conference.',
  },
  {
    year: 'Now', place: 'Microsoft · Redmond',
    color: '#00a4ef', icon: '⚡',
    title: 'Building at scale.',
    sentence: 'Full-time Software Engineer at Microsoft — distributed systems, ML-assisted performance tuning, and developer tooling at scale. From intern to engineer, and still just getting started.',
  },
]

/* ── 3D Panel card ───────────────────────────────────────────── */
const ChapterCard = forwardRef(function ChapterCard({ ch, index }, ref) {
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 64, rotateX: 14, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.85, ease: EASE }}
        style={{ transformPerspective: 1100 }}
        className="glass-flow rounded-3xl overflow-hidden"
      >
        {/* Top accent bar */}
        <div className="h-[2px]" style={{ background: `linear-gradient(to right, ${ch.color}, transparent)` }} />

        <div className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start gap-8">

            {/* Left: text content */}
            <div className="flex-1 min-w-0">
              {/* Year · Place */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="h-px w-5 shrink-0" style={{ background: ch.color }} />
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase" style={{ color: ch.color }}>
                  {ch.year} · {ch.place}
                </span>
              </div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                className="mb-5 font-black leading-[1.0] tracking-[-0.04em] text-[#f0ede4]"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
              >
                {ch.title}
              </motion.h3>

              {/* Animated sentence */}
              <AnimatedSentence text={ch.sentence} />
            </div>

            {/* Right: icon accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 260, damping: 22 }}
              className="shrink-0 self-start md:self-center w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center text-4xl md:text-5xl"
              style={{
                background: `radial-gradient(circle at 35% 35%, ${ch.color}18 0%, ${ch.color}06 60%, transparent 100%)`,
                boxShadow: `0 0 40px ${ch.color}18, inset 0 1px 0 rgba(255,255,255,0.1)`,
                border: `1px solid ${ch.color}22`,
              }}
            >
              {ch.icon}
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  )
})

/* ── Section ──────────────────────────────────────────────────── */
export default function ChronicleSection({ reduceMotion }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const itemRefs = useRef([])

  useEffect(() => {
    const observers = itemRefs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIdx(i) },
        { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <section id="story" className="relative px-6 sm:px-12 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(255,214,10,0.05),transparent)]" />

      {/* Chapter progress dots */}
      <div className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-2.5">
        {chapters.map((ch, i) => (
          <motion.button
            key={i}
            animate={{
              scale:           activeIdx === i ? 1.6 : 1,
              backgroundColor: activeIdx === i ? ch.color : 'rgba(255,255,255,0.18)',
              boxShadow:       activeIdx === i ? `0 0 12px ${ch.color}60` : 'none',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            onClick={() => itemRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            className="w-2 h-2 rounded-full cursor-pointer"
            title={ch.title}
          />
        ))}
      </div>

      <div className="mx-auto max-w-4xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12"
        >
          <p className="mb-4 text-[11px] font-semibold tracking-[0.34em] uppercase text-[#ffd60a]">
            The story
          </p>
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black leading-[1.0] tracking-[-0.04em] text-[#f0ede4]">
            Every chapter.<br />In order.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {chapters.map((ch, i) => (
            <ChapterCard
              key={ch.year + ch.place}
              ch={ch}
              index={i}
              ref={el => { itemRefs.current[i] = el }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
