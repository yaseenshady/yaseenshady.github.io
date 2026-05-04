import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/* ── Inline chapter graphics ─────────────────────────────────── */

function TerminalGraphic() {
  const lines = [
    { text: '> print("hello world")', color: '#ffd60a' },
    { text: 'hello world', color: '#86efac' },
    { text: '> for i in range(∞):', color: '#ffd60a' },
    { text: '...   learn()', color: '#86efac' },
    { text: '...   build()', color: '#86efac' },
    { text: '...   repeat()', color: '#60efff' },
  ]
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="w-72 rounded-xl border border-[rgba(255,214,10,0.18)] bg-[#0a0a0a] p-5 font-mono text-[11px] shadow-[0_0_60px_rgba(255,214,10,0.08)]"
      >
        <div className="flex gap-1.5 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        {lines.map((l, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.14, duration: 0.4 }}
            style={{ color: l.color }}
            className="leading-6"
          >{l.text}</motion.div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="text-[#ffd60a]"
        >▋</motion.span>
      </motion.div>
    </div>
  )
}

function NetworkGraphic() {
  const nodes = [
    [50, 30], [20, 60], [80, 60], [35, 90], [65, 90], [50, 130],
  ]
  const edges = [[0,1],[0,2],[1,3],[2,4],[3,5],[4,5],[1,2],[0,5]]
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative"
      >
        <svg width="160" height="160" viewBox="0 0 100 160">
          {edges.map(([a, b], i) => (
            <motion.line key={i}
              x1={nodes[a][0]} y1={nodes[a][1]}
              x2={nodes[b][0]} y2={nodes[b][1]}
              stroke="rgba(255,214,10,0.25)" strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            />
          ))}
          {nodes.map(([x, y], i) => (
            <motion.circle key={i} cx={x} cy={y} r="4"
              fill="#ffd60a"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 + i * 0.1, duration: 0.4, type: 'spring' }}
            />
          ))}
        </svg>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center text-[10px] tracking-widest uppercase text-[rgba(255,214,10,0.5)] mt-2"
        >AI · Trading · Data Science</motion.p>
      </motion.div>
    </div>
  )
}

function SkipGraphic() {
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-center"
      >
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="text-7xl mb-4"
        >🚀</motion.div>
        <div className="flex flex-col gap-1 items-center">
          {['Year 11', 'Year 12', '→ College CS'].map((t, i) => (
            <motion.div key={t}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className={`text-xs font-mono px-3 py-1 rounded border ${i === 2 ? 'border-[#ffd60a] text-[#ffd60a]' : 'border-[rgba(255,255,255,0.1)] text-[rgba(240,237,228,0.4)] line-through'}`}
            >{t}</motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function MeetingGraphic() {
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="w-64 rounded-xl border border-[rgba(0,164,239,0.25)] bg-[rgba(0,164,239,0.05)] p-5"
      >
        <p className="text-[10px] tracking-widest uppercase text-[#00a4ef] mb-3">Meeting Summarizer</p>
        {['Transcript ✓', 'Keywords ✓', 'Summary ✓', 'Video ✓'].map((item, i) => (
          <motion.div key={item}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.12 }}
            className="flex items-center gap-2 py-1.5 border-b border-[rgba(255,255,255,0.05)] text-sm text-[rgba(240,237,228,0.7)] last:border-0"
          >{item}</motion.div>
        ))}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-3 text-[10px] text-[rgba(240,237,228,0.35)]"
        >Built on Azure Cosmos DB · Cairo 2022</motion.p>
      </motion.div>
    </div>
  )
}

function ResearchGraphic() {
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="w-60 text-center"
      >
        <div className="relative inline-block">
          <div className="w-40 h-52 mx-auto rounded-lg border border-[rgba(52,211,153,0.3)] bg-[rgba(52,211,153,0.04)] flex flex-col items-center justify-center gap-3 p-4">
            <div className="w-full space-y-1.5">
              {[90,70,85,60,75].map((w,i) => (
                <motion.div key={i}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  style={{ width: `${w}%`, transformOrigin: 'left' }}
                  className="h-1.5 rounded-full bg-[rgba(52,211,153,0.4)]"
                />
              ))}
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 300 }}
              className="text-3xl"
            >✅</motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="absolute -top-3 -right-3 rounded-full bg-[#34d399] text-[#050505] text-[9px] font-bold px-2 py-0.5 tracking-wider"
          >PUBLISHED</motion.div>
        </div>
        <p className="mt-3 text-[10px] text-[rgba(240,237,228,0.4)] tracking-wide">U.S. State Dept · Misinformation Detection</p>
      </motion.div>
    </div>
  )
}

function DatabaseGraphic() {
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="text-center"
      >
        <div className="relative inline-block">
          {/* DB cylinder */}
          <div className="w-28 mx-auto">
            <div className="h-5 rounded-full border border-[rgba(0,164,239,0.4)] bg-[rgba(0,164,239,0.08)]" />
            <div className="h-20 border-x border-[rgba(0,164,239,0.4)] bg-[rgba(0,164,239,0.04)] flex flex-col justify-center gap-2 px-3">
              {['MySQL', 'MariaDB', 'MLOS'].map((db, i) => (
                <motion.div key={db}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="text-[9px] font-mono text-[#00a4ef] text-center"
                >{db}</motion.div>
              ))}
            </div>
            <div className="h-5 rounded-full border border-[rgba(0,164,239,0.4)] bg-[rgba(0,164,239,0.08)]" />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-3 text-[10px] text-[rgba(240,237,228,0.35)] tracking-wide"
          >Open source · Gray Systems Lab 2023</motion.div>
        </div>
      </motion.div>
    </div>
  )
}

function PhoneGraphic() {
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative"
      >
        {/* Phone frame */}
        <div className="w-36 h-64 rounded-[2rem] border-2 border-[rgba(255,214,10,0.3)] bg-[#0a0a0a] flex flex-col items-center justify-center p-3 shadow-[0_0_40px_rgba(255,214,10,0.1)]">
          <div className="w-12 h-1 rounded-full bg-[rgba(255,255,255,0.15)] mb-6" />
          {/* App icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 280 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ffd60a] to-[#ff9500] flex items-center justify-center text-2xl mb-4"
          >🌙</motion.div>
          <p className="text-xs font-bold text-[#f0ede4] mb-1">Amunet</p>
          <p className="text-[9px] text-[rgba(240,237,228,0.4)]">App Store</p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mt-4 rounded-full bg-[rgba(255,214,10,0.12)] border border-[rgba(255,214,10,0.3)] px-3 py-1 text-[9px] text-[#ffd60a] font-bold"
          >100 downloads ↑</motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, type: 'spring' }}
          className="absolute -top-2 -right-2 rounded-full bg-[#28c840] text-[#050505] text-[8px] font-black px-2 py-0.5"
        >LIVE</motion.div>
      </motion.div>
    </div>
  )
}

function ChartGraphic() {
  const bars = [38, 55, 62, 70, 100]
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="text-center"
      >
        <p className="text-[10px] tracking-widest uppercase text-[#ffd60a] mb-4">P95 Latency</p>
        <div className="flex items-end gap-2 h-32 justify-center">
          {bars.map((h, i) => (
            <motion.div key={i}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.5, ease: EASE }}
              style={{ height: `${h}%`, transformOrigin: 'bottom',
                background: i === bars.length - 1
                  ? 'linear-gradient(to top, #ffd60a, #ff9500)'
                  : 'rgba(255,255,255,0.12)'
              }}
              className="w-8 rounded-t-md"
            />
          ))}
        </div>
        <div className="mt-2 flex items-center justify-center gap-2">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-2xl font-black text-[#ffd60a]"
          >-50%</motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="text-[10px] text-[rgba(240,237,228,0.45)] text-left leading-tight"
          >P95 latency<br />TPC-C benchmark</motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-2 text-[9px] text-[rgba(255,214,10,0.6)] tracking-wide"
        >Cited · SIGMOD 2025</motion.p>
      </motion.div>
    </div>
  )
}

function NowGraphic() {
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative flex items-center justify-center"
      >
        {[1,2,3].map(i => (
          <motion.div key={i}
            animate={{ scale: [1, 1.15 + i * 0.1, 1], opacity: [0.5, 0.15, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.5 + i * 0.4, delay: i * 0.3 }}
            className="absolute rounded-full border border-[rgba(255,214,10,0.3)]"
            style={{ width: 60 + i * 40, height: 60 + i * 40 }}
          />
        ))}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-2xl bg-[#00a4ef] flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 21 21" fill="white">
              <path d="M0 0h10v10H0z"/>
              <path d="M11 0h10v10H11z" opacity=".8"/>
              <path d="M0 11h10v10H0z" opacity=".8"/>
              <path d="M11 11h10v10H11z"/>
            </svg>
          </div>
          <p className="text-xs font-bold text-[#f0ede4]">Microsoft</p>
          <p className="text-[9px] text-[rgba(240,237,228,0.45)]">Software Engineer</p>
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="rounded-full bg-[#28c840] w-2 h-2 mt-1"
          />
        </div>
      </motion.div>
    </div>
  )
}

/* ── Chapter data ─────────────────────────────────────────────── */

const chapters = [
  {
    year: '2012',
    place: 'Egypt',
    color: '#ffd60a',
    title: 'The spark.',
    body: 'Age 12. No classroom, no teacher, no curriculum. Just a computer and relentless curiosity. I taught myself to program from scratch — the first language I ever learned that felt like actual power.',
    Graphic: TerminalGraphic,
  },
  {
    year: '2019',
    place: 'SF Bay Area',
    color: '#ffd60a',
    title: 'Found the edge.',
    body: 'After moving to the Bay Area I fell deep into AI, algorithmic trading, and data science. I earned professional certifications in 2019 — not because someone told me to, but because the intersection of math, markets, and intelligence felt like the most interesting problem on earth.',
    Graphic: NetworkGraphic,
  },
  {
    year: '2020',
    place: 'Middle College',
    color: '#ffd60a',
    title: 'Skipped the queue.',
    body: 'Traditional timelines weren\'t moving fast enough. Through the Middle College program I replaced my final two years of high school with full college-level computer science courses — and never looked back.',
    Graphic: SkipGraphic,
  },
  {
    year: 'Jul 2022',
    place: 'Cairo · Microsoft ATL',
    color: '#00a4ef',
    title: 'First internship.',
    body: 'Built a meeting summarizer prototype at Microsoft Advanced Technology Lab in Cairo — timed transcripts, keyword extraction, summaries, and video output in one unified web interface, backed by Azure Cosmos DB.',
    Graphic: MeetingGraphic,
  },
  {
    year: 'Jan–Apr 2022',
    place: 'U.S. State Department',
    color: '#34d399',
    title: 'Published research.',
    body: 'Built a misinformation detection toolkit for State Department senior leadership as part of the Diplomacy Lab. My name is listed on the published research paper.',
    Graphic: ResearchGraphic,
  },
  {
    year: 'May–Aug 2023',
    place: 'Microsoft Gray Systems Lab',
    color: '#00a4ef',
    title: 'Open source.',
    body: 'Pioneered applying MLOS — Microsoft\'s ML-assisted performance tuning framework — to MariaDB. The scripts I wrote were integrated directly into the open-source MLOS project.',
    Graphic: DatabaseGraphic,
  },
  {
    year: 'Jun 2023 – Aug 2025',
    place: 'Amunet · Founder',
    color: '#ffd60a',
    title: 'Solo founder.',
    body: 'Built an iOS app from zero and shipped it globally — alone. Thousands of lines of SwiftUI, the marketing site, the legal entity. 100 downloads in the first month. Everything, solo.',
    Graphic: PhoneGraphic,
  },
  {
    year: 'May–Aug 2024',
    place: 'Microsoft Gray Systems Lab',
    color: '#00a4ef',
    title: '50% faster.',
    body: 'Discovered a 50% improvement in P95 latency for the TPC-C benchmark through a custom benchmarking GUI. The work was cited in the SIGMOD 2025 autotuning tutorial — the top database research conference in the world.',
    Graphic: ChartGraphic,
  },
  {
    year: 'Now',
    place: 'Microsoft · Redmond',
    color: '#00a4ef',
    title: 'Building at scale.',
    body: 'Full-time Software Engineer at Microsoft. Distributed systems, ML-assisted performance tuning, and developer tooling at scale. From intern to engineer — and still just getting started.',
    Graphic: NowGraphic,
  },
]

/* ── Chapter card ─────────────────────────────────────────────── */

function Chapter({ ch, index }) {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center py-20 border-t border-[rgba(255,255,255,0.04)]">

      {/* Year watermark */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -left-2 top-16 text-[7rem] font-black leading-none tracking-tighter select-none hidden md:block"
        style={{ color: 'rgba(255,255,255,0.025)' }}
      >{ch.year}</motion.span>

      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative z-10"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="h-px w-6 flex-shrink-0" style={{ background: ch.color }} />
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase" style={{ color: ch.color }}>
            {ch.year} · {ch.place}
          </span>
        </div>

        <h3 className="mb-5 text-[clamp(2rem,4vw,3rem)] font-black leading-[1.0] tracking-[-0.04em] text-[#f0ede4]">
          {ch.title}
        </h3>

        <p className="text-[1.02rem] leading-[1.85] text-[rgba(240,237,228,0.6)] max-w-md">
          {ch.body}
        </p>
      </motion.div>

      {/* Graphic side */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        className="h-56 md:h-64"
      >
        <ch.Graphic />
      </motion.div>
    </div>
  )
}

/* ── Section ──────────────────────────────────────────────────── */

export default function ChronicleSection({ reduceMotion }) {
  return (
    <section id="story" className="relative px-6 sm:px-12 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(255,214,10,0.05),transparent)]" />

      <div className="mx-auto max-w-5xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-4"
        >
          <p className="mb-4 text-[11px] font-semibold tracking-[0.34em] uppercase text-[#ffd60a]">
            The story
          </p>
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black leading-[1.0] tracking-[-0.04em] text-[#f0ede4]">
            Every chapter.<br />In order.
          </h2>
          <p className="mt-4 max-w-md text-[rgba(240,237,228,0.5)]">
            From a kid learning to code in Egypt, to engineer at Microsoft. Here's how it happened.
          </p>
        </motion.div>

        {/* Chapters */}
        <div>
          {chapters.map((ch, i) => (
            <Chapter key={ch.year + ch.place} ch={ch} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
