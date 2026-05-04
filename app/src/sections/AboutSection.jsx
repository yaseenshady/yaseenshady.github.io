import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const cards = [
  {
    label:   'Age 12 · Egypt',
    title:   'Self-taught from scratch.',
    body:    'No classroom, no curriculum. Just a computer and relentless curiosity. Programming was the first language I taught myself.',
    accent:  '#ffd60a',
  },
  {
    label:   'SF Bay Area',
    title:   'Found my people.',
    body:    'After moving to the Bay Area, I fell deep into AI, algorithmic trading, and data science. Earned professional certifications in 2019.',
    accent:  '#ffd60a',
  },
  {
    label:   'Middle College',
    title:   'Skipped the queue.',
    body:    'Replaced my final two years of high school with college-level CS courses. Traditional timelines weren\'t moving fast enough.',
    accent:  '#ffd60a',
  },
  {
    label:   'Now · Microsoft',
    title:   'Building what matters.',
    body:    'From intern to full-time engineer — databases, ML performance tuning, distributed systems, and developer tooling at scale.',
    accent:  '#ffd60a',
  },
]

function Card({ card, index, reduceMotion }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, delay: index * 0.1, ease: EASE }}
      className="glass rounded-2xl p-8 hover:border-[rgba(255,214,10,0.25)] transition-all duration-500 group"
    >
      <span className="mb-4 inline-block rounded-full border border-[rgba(255,214,10,0.3)] bg-[rgba(255,214,10,0.07)] px-3 py-1 text-[10px] font-bold tracking-[0.22em] uppercase text-[#ffd60a]">
        {card.label}
      </span>
      <h3 className="mb-3 text-xl font-bold leading-tight text-[#f0ede4] group-hover:text-white transition-colors">
        {card.title}
      </h3>
      <p className="text-[0.95rem] leading-relaxed text-[rgba(240,237,228,0.58)]">
        {card.body}
      </p>
    </motion.div>
  )
}

export default function AboutSection({ reduceMotion }) {
  return (
    <section id="about" className="relative py-32 px-6 sm:px-12">
      {/* Section glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,214,10,0.06),transparent)]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16"
        >
          <p className="mb-4 text-[11px] font-semibold tracking-[0.32em] uppercase text-[#ffd60a]">
            Origin story
          </p>
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.04em] text-[#f0ede4]">
            Started with curiosity.<br />Never stopped.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map((c, i) => (
            <Card key={c.label} card={c} index={i} reduceMotion={reduceMotion} />
          ))}
        </div>
      </div>
    </section>
  )
}
