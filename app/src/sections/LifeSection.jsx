import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const items = [
  {
    emoji: '🤿',
    label: 'Scuba diving',
    title: 'Deep underwater.',
    body:  'Patience, precision, and staying calm under pressure. 30 meters below the surface, every decision matters.',
    color: '#00a4ef',
    bg:    'rgba(0,164,239,0.07)',
  },
  {
    emoji: '🎸',
    label: 'Guitar',
    title: 'Find the signal.',
    body:  'Same feedback loop as code — tiny adjustments, immediate results, infinite depth. Both reward deliberate practice.',
    color: '#ffd60a',
    bg:    'rgba(255,214,10,0.07)',
  },
  {
    emoji: '📷',
    label: 'Photography',
    title: 'Frame the moment.',
    body:  'Light, composition, patience. The instinct to notice details most people walk past.',
    color: '#a78bfa',
    bg:    'rgba(167,139,250,0.07)',
  },
  {
    emoji: '🏂',
    label: 'Snowboarding',
    title: 'Commit to the line.',
    body:  'Read the terrain, absorb the shock, keep moving. Balance under speed is a skill that transfers.',
    color: '#60efff',
    bg:    'rgba(96,239,255,0.07)',
  },
  {
    emoji: '🎛️',
    label: 'DJ / music production',
    title: 'Build the vibe.',
    body:  'Mixing, layering, and reading a room — energy design in real time.',
    color: '#f472b6',
    bg:    'rgba(244,114,182,0.07)',
  },
  {
    emoji: '🌍',
    label: 'Egypt → Bay Area → Redmond',
    title: 'Three worlds.',
    body:  'Each environment reshaped how I think, build, and collaborate. Perspective compounds like interest.',
    color: '#34d399',
    bg:    'rgba(52,211,153,0.07)',
  },
]

export default function LifeSection({ reduceMotion }) {
  return (
    <section id="life" className="relative py-32 px-6 sm:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(96,239,255,0.05),transparent)]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16"
        >
          <p className="mb-4 text-[11px] font-semibold tracking-[0.32em] uppercase text-[#ffd60a]">Beyond code</p>
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.04em] text-[#f0ede4]">
            Always exploring.<br />Always learning.
          </h2>
          <p className="mt-4 max-w-lg text-[rgba(240,237,228,0.55)]">
            Whether it's 30 meters underwater, deep in a guitar solo, or up a mountain — the same curiosity drives it.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="glass rounded-2xl p-7 flex flex-col hover:border-[rgba(255,255,255,0.15)] transition-all duration-400 cursor-default"
              style={{ background: `radial-gradient(circle at top left, ${item.bg}, rgba(255,255,255,0.03))` }}
            >
              <span className="mb-4 text-4xl">{item.emoji}</span>
              <span className="mb-2 text-[10px] font-semibold tracking-[0.22em] uppercase" style={{ color: item.color }}>
                {item.label}
              </span>
              <h3 className="mb-3 text-xl font-bold text-[#f0ede4]">{item.title}</h3>
              <p className="text-[0.93rem] leading-relaxed text-[rgba(240,237,228,0.58)]">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
