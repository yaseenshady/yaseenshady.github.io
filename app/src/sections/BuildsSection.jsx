import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.22, 1, 0.36, 1]

function TiltCard({ children, className }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6])

  function onMove(e) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top)  / rect.height - 0.5)
  }
  function onLeave() { x.set(0); y.set(0) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const builds = [
  {
    name:  'Lexoire',
    sub:   'Voice-native CLI orchestration',
    body:  'Voice command routing, provider switching, GitHub-aware context, and persistent sessions — unified into one CLI-native surface.',
    tags:  ['Voice AI', 'CLI', 'GitHub', 'Sessions'],
    links: [
      { label: 'Repo', href: 'https://github.com/yaseenshady/Lexoire' },
      { label: 'Live site', href: 'https://yaseensh.github.io/Lexoire/' },
    ],
    glow:  'rgba(255,214,10,0.12)',
  },
  {
    name:  'forge-ml',
    sub:   'Sentence → trained model',
    body:  'Multi-agent ML platform that turns a plain-English request into a researched, trained, and optimized model. Research → dataset → build → optimize.',
    tags:  ['Claude', 'GPT-4o', 'HuggingFace', 'Optuna'],
    links: [
      { label: 'Repo', href: 'https://github.com/yaseenshady/forge-ml' },
    ],
    glow:  'rgba(134,239,172,0.1)',
  },
  {
    name:  'Amunet',
    sub:   'Solo-founded iOS app — globally shipped',
    body:  '100 downloads in the first month. Thousands of lines of SwiftUI, the marketing site, and the legal entity — all built solo over 2+ years.',
    tags:  ['SwiftUI', 'App Store', 'Solo founder'],
    links: [],
    glow:  'rgba(255,183,3,0.1)',
  },
]

export default function BuildsSection({ reduceMotion }) {
  return (
    <section id="builds" className="relative py-32 px-6 sm:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(255,214,10,0.07),transparent)]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16"
        >
          <p className="mb-4 text-[11px] font-semibold tracking-[0.32em] uppercase text-[#ffd60a]">Personal builds</p>
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.04em] text-[#f0ede4]">
            Things I built because<br />they needed to exist.
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {builds.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
            >
              <TiltCard className="glass rounded-2xl p-7 h-full flex flex-col hover:border-[rgba(255,214,10,0.25)] transition-all duration-500 cursor-default"
                style={{ background: `radial-gradient(circle at top right, ${b.glow}, transparent 60%), rgba(255,255,255,0.04)` }}
              >
                <div className="mb-4">
                  <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[rgba(240,237,228,0.45)] mb-1">{b.sub}</p>
                  <h3 className="text-2xl font-black text-[#f0ede4]">{b.name}</h3>
                </div>
                <p className="flex-1 text-[0.93rem] leading-relaxed text-[rgba(240,237,228,0.6)] mb-5">{b.body}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {b.tags.map(t => (
                    <span key={t} className="rounded-full border border-[rgba(255,255,255,0.1)] px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-[rgba(240,237,228,0.45)]">{t}</span>
                  ))}
                </div>
                {b.links.length > 0 && (
                  <div className="flex gap-3">
                    {b.links.map(l => (
                      <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                        className="text-xs font-semibold tracking-wider text-[#ffd60a] hover:underline">
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
