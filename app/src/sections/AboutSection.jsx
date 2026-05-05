import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const STORY = [
  {
    year: '2014',
    line: 'started coding at 12 in Cairo — no courses, no hand-holding, just curiosity and late nights diving into whatever problem was in front of me.',
  },
  {
    year: '2020',
    line: 'moved to the Bay Area, built faster than ever, and finally understood what depth looks like when the stakes are real.',
  },
  {
    year: '2022',
    line: 'interned at Microsoft three times, shipped to millions of users, cut P95 latency in half on a production service, and earned a SIGMOD citation.',
  },
  {
    year: 'now',
    line: 'building the tools I wish existed — Lexoire and Amunet — and spending time outside the screen: scuba diving, guitar, DJing, snowboarding, and photography.',
  },
]

function WordReveal({ year, line, reduceMotion }) {
  const words = line.split(' ')

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="text-[1.15rem] leading-[1.95] tracking-[-0.01em] text-[rgba(240,237,228,0.72)]"
    >
      {/* Year inline */}
      <motion.span
        variants={{
          hidden:  { opacity: 0, y: reduceMotion ? 0 : 14 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
        }}
        className="mr-2 inline-block rounded-full border border-[rgba(255,214,10,0.3)] bg-[rgba(255,214,10,0.07)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#ffd60a]"
      >
        {year}
      </motion.span>

      {/* Words */}
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden:  { opacity: 0, y: reduceMotion ? 0 : 16, filter: 'blur(4px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.38, delay: 0.06 + i * 0.028, ease: EASE },
            },
          }}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  )
}

export default function AboutSection({ reduceMotion }) {
  return (
    <section id="about" className="relative px-6 py-28 sm:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,214,10,0.04),transparent)]" />

      <div className="mx-auto max-w-4xl">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-5 text-[11px] font-semibold uppercase tracking-[0.36em] text-[#ffd60a]"
        >
          Biography
        </motion.p>

        {/* Headline — words reveal */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16 text-[clamp(2.6rem,5.5vw,4.4rem)] font-black leading-[1.04] tracking-[-0.04em] text-[#f0ede4]"
        >
          {['Self-taught', 'engineer,', 'founder,', 'and', 'builder.'].map((word, i) => (
            <motion.span
              key={word}
              variants={{
                hidden:  { opacity: 0, y: reduceMotion ? 0 : 22 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07, ease: EASE } },
              }}
              className="mr-[0.22em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* Story — one sentence per era */}
        <div className="space-y-10">
          {STORY.map((s) => (
            <WordReveal
              key={s.year}
              year={s.year}
              line={s.line}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* Bridge to scroll journey */}
        <motion.a
          href="#story"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          className="mt-14 flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.025] px-6 py-5 transition-all duration-300 hover:border-[rgba(255,214,10,0.22)] hover:bg-white/[0.04] sm:px-8"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#ffd60a]">
              Hobbies &amp; full story
            </p>
            <p className="mt-1 text-[0.9rem] text-[rgba(240,237,228,0.45)]">
              Scuba, guitar, DJ, snowboarding, photography — and the career chapters.
            </p>
          </div>
          <motion.span
            animate={reduceMotion ? {} : { y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="text-[rgba(255,214,10,0.45)] text-base"
          >
            ↓
          </motion.span>
        </motion.a>

      </div>
    </section>
  )
}
