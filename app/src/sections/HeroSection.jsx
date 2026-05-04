import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const EASE = [0.22, 1, 0.36, 1]

const ROLES = [
  'AI Technologist',
  'Software Engineer',
  'Scuba Diver',
  'DJ & Musician',
  'Snowboarder',
  'Founder',
  'Explorer',
]

const HOBBIES = [
  { icon: '🤿', label: 'Scuba diver' },
  { icon: '🏂', label: 'Snowboarder' },
  { icon: '🎸', label: 'Guitarist' },
  { icon: '🎛️', label: 'DJ' },
  { icon: '📷', label: 'Photographer' },
  { icon: '🌍', label: 'Egypt → Bay Area → Redmond' },
]

export default function HeroSection({ reduceMotion }) {
  const { scrollY } = useScroll()
  const textY = useTransform(scrollY, [0, 500], [0, -80])

  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(() => {
      setRoleIdx(i => (i + 1) % ROLES.length)
    }, 2200)
    return () => clearInterval(id)
  }, [reduceMotion])

  return (
    <section id="top" className="relative flex min-h-screen w-full items-center overflow-hidden">

      {/* Section-specific glow lift */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,rgba(255,214,10,0.09),transparent)]" />

      <motion.div
        style={{ y: reduceMotion ? 0 : textY }}
        className="relative z-10 mx-auto w-full max-w-5xl px-6 sm:px-12 pt-36 pb-28"
      >
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-[#ffd60a]" />
          <span className="glass-ball rounded-full px-4 py-1 text-[10px] font-semibold tracking-[0.3em] uppercase text-[#ffd60a]">
            Microsoft Engineer · AI Technologist
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: EASE }}
          className="mb-6 font-black leading-[0.88] tracking-[-0.05em]"
          style={{ fontSize: 'clamp(4.5rem, 12vw, 10rem)' }}
        >
          Yaseen<br />
          <span className="text-gradient">Shady.</span>
        </motion.h1>

        {/* Animated rotating role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-8 h-8 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIdx}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.38, ease: EASE }}
              className="text-lg font-medium tracking-wide text-[rgba(240,237,228,0.45)]"
            >
              {ROLES[roleIdx]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Bio — glass ball container, punchy lines */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.65, ease: EASE }}
          className="glass-ball rounded-2xl p-6 mb-8 max-w-xl"
        >
          <ul className="space-y-2.5">
            {[
              { mark: '🇪🇬', text: 'Self-taught from scratch in Egypt at 12.' },
              { mark: '🌉', text: 'Fell into AI, trading & data science in the Bay Area.' },
              { mark: '🚀', text: 'Replaced 2 years of high school with college CS.' },
              { mark: '⚡', text: 'Now building distributed systems at Microsoft.' },
            ].map(({ mark, text }) => (
              <li key={text} className="flex items-start gap-3 text-[0.97rem] leading-relaxed text-[rgba(240,237,228,0.68)]">
                <span className="mt-0.5 text-base flex-shrink-0">{mark}</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Hobby pills — glass ball style */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.82, ease: EASE }}
          className="mb-10 flex flex-wrap gap-2"
        >
          {HOBBIES.map((h, i) => (
            <motion.span
              key={h.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.07, ease: EASE }}
              className="glass-ball flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-wide text-[rgba(240,237,228,0.7)]"
            >
              <span>{h.icon}</span>{h.label}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs — glass flow buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: EASE }}
          className="flex flex-wrap gap-3"
        >
          <a href="#story" className="btn-gold">
            See the journey
          </a>
          <a href="#builds" className="btn-glass">
            Builds
          </a>
          <a href="mailto:yaseenshady7@gmail.com" className="btn-glass">
            Say hello →
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1.2 }}
          className="mt-24 flex items-center gap-3 text-[10px] tracking-[0.28em] uppercase text-[rgba(240,237,228,0.2)]"
        >
          <span className="h-px w-8 bg-[rgba(255,214,10,0.3)]" />
          scroll to explore
        </motion.div>
      </motion.div>
    </section>
  )
}
