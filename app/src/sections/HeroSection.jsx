import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

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

// Magnetic button wrapper — pulls toward cursor
function Magnetic({ children, strength = 0.28 }) {
  const ref = useRef(null)
  const x = useSpring(0, { stiffness: 200, damping: 18 })
  const y = useSpring(0, { stiffness: 200, damping: 18 })

  const onMove = (e) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width  / 2)) * strength)
    y.set((e.clientY - (r.top  + r.height / 2)) * strength)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div ref={ref} style={{ x, y }} onMouseMove={onMove} onMouseLeave={onLeave}
      className="inline-block">
      {children}
    </motion.div>
  )
}

// Letter-by-letter span sequence
function RevealWord({ word, delay = 0, className = '', goldGradient = false }) {
  return (
    <span className={goldGradient ? 'text-gradient inline-block' : 'inline-block'}>
      {word.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 44, rotateX: -30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.55, delay: delay + i * 0.055, ease: EASE }}
          className={`inline-block ${className}`}
          style={{ transformOrigin: 'bottom center' }}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default function HeroSection({ reduceMotion }) {
  const { scrollY } = useScroll()
  const textY = useTransform(scrollY, [0, 500], [0, -80])
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2200)
    return () => clearInterval(id)
  }, [reduceMotion])

  return (
    <section id="top" className="relative flex min-h-screen w-full items-center overflow-hidden">

      {/* Section glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,rgba(255,214,10,0.09),transparent)]" />

      <motion.div
        style={{ y: reduceMotion ? 0 : textY }}
        className="relative z-10 mx-auto w-full max-w-5xl px-6 sm:px-12 pt-36 pb-28"
      >
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-[#ffd60a]" />
          <span className="glass-ball rounded-full px-4 py-1 text-[10px] font-semibold tracking-[0.32em] uppercase text-[#ffd60a]">
            Microsoft Engineer · AI Technologist
          </span>
        </motion.div>

        {/* Name — letter by letter */}
        <h1
          className="mb-5 font-black leading-[0.88] tracking-[-0.05em]"
          style={{ fontSize: 'clamp(4.5rem, 12vw, 10rem)', perspective: '600px' }}
        >
          <RevealWord word="Yaseen" delay={0.15} />
          <br />
          <RevealWord word="Shady." delay={0.45} goldGradient />
        </h1>

        {/* Rotating role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mb-8 h-8 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIdx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="text-lg font-medium tracking-wide text-[rgba(240,237,228,0.42)]"
            >
              {ROLES[roleIdx]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Bio — glass ball */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.05, ease: EASE }}
          className="glass-ball rounded-2xl p-6 mb-9 max-w-xl"
        >
          <ul className="space-y-2.5">
            {[
              { mark: '🇪🇬', text: 'Self-taught from scratch in Egypt at 12.' },
              { mark: '🌉', text: 'Fell into AI, trading & data science in the Bay Area.' },
              { mark: '🚀', text: 'Replaced 2 years of high school with college CS.' },
              { mark: '⚡', text: 'Now building distributed systems at Microsoft.' },
            ].map(({ mark, text }, i) => (
              <motion.li
                key={text}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.15 + i * 0.08, ease: EASE }}
                className="flex items-start gap-3 text-[0.97rem] leading-relaxed text-[rgba(240,237,228,0.68)]"
              >
                <span className="mt-0.5 flex-shrink-0">{mark}</span>
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Hobby pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35, ease: EASE }}
          className="mb-10 flex flex-wrap gap-2"
        >
          {HOBBIES.map((h, i) => (
            <motion.span
              key={h.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.4 + i * 0.06, ease: EASE }}
              className="glass-ball flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-wide text-[rgba(240,237,228,0.65)]"
            >
              <span>{h.icon}</span>{h.label}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs — magnetic + glass */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6, ease: EASE }}
          className="flex flex-wrap gap-3"
        >
          <Magnetic strength={0.3}>
            <a href="#story" className="btn-gold">See the journey</a>
          </Magnetic>
          <Magnetic strength={0.25}>
            <a href="#builds" className="btn-glass">Builds</a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a href="mailto:yaseenshady7@gmail.com" className="btn-glass">Say hello →</a>
          </Magnetic>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1.2 }}
          className="mt-24 flex items-center gap-3 text-[10px] tracking-[0.28em] uppercase text-[rgba(240,237,228,0.18)]"
        >
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
            className="h-px w-8 bg-[rgba(255,214,10,0.3)] inline-block"
          />
          scroll to explore
        </motion.div>
      </motion.div>
    </section>
  )
}
