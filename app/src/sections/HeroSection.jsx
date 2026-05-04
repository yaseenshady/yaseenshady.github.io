import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.22, 1, 0.36, 1]

function Magnetic({ children, strength = 0.22 }) {
  const ref = useRef(null)
  const x = useSpring(0, { stiffness: 200, damping: 18 })
  const y = useSpring(0, { stiffness: 200, damping: 18 })

  const onMove = (e) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}

function RevealWord({ word, delay = 0, goldGradient = false }) {
  return (
    <span className={goldGradient ? 'inline-block text-[#ffd60a]' : 'inline-block'}>
      {word.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 54, rotateX: -42, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: delay + i * 0.06, ease: EASE }}
          className="inline-block"
          style={{ transformOrigin: 'bottom center' }}
        >
          {char === ' ' ? '\u00a0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default function HeroSection({ reduceMotion }) {
  const { scrollY } = useScroll()
  const textY = useTransform(scrollY, [0, 520], [0, -90])
  const glowScale = useTransform(scrollY, [0, 520], [1, 1.18])
  const glowOpacity = useTransform(scrollY, [0, 520], [0.55, 0.15])

  return (
    <section id="top" className="relative flex min-h-screen w-full items-center overflow-hidden">
      <motion.div
        aria-hidden="true"
        style={{
          scale: reduceMotion ? 1 : glowScale,
          opacity: reduceMotion ? 0.42 : glowOpacity,
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,214,10,0.2),rgba(255,214,10,0.04)_42%,transparent_68%)] blur-2xl"
      />

      <motion.div
        style={{ y: reduceMotion ? 0 : textY }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-24 pt-36 text-center sm:px-12"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
          className="mb-7 text-[10px] font-semibold uppercase tracking-[0.36em] text-[#ffd60a]"
        >
          yaseenshady.github.io
        </motion.p>

        <h1
          className="font-black leading-[0.86] tracking-[-0.05em]"
          style={{ fontSize: 'clamp(4.5rem, 12vw, 10rem)', perspective: '800px' }}
        >
          <RevealWord word="Yaseen" delay={0.15} />
          <br />
          <RevealWord word="Shady." delay={0.5} goldGradient />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15, ease: EASE }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Magnetic>
            <a href="https://github.com/yaseenshady" target="_blank" rel="noreferrer" className="btn-glass">
              GitHub
            </a>
          </Magnetic>
          <Magnetic>
            <a href="https://www.linkedin.com/in/yaseenshady/" target="_blank" rel="noreferrer" className="btn-glass">
              LinkedIn
            </a>
          </Magnetic>
          <Magnetic>
            <a href="mailto:yaseenshady7@gmail.com" className="btn-gold">
              Say hello
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-24 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[rgba(240,237,228,0.18)]"
        >
          <motion.span
            animate={reduceMotion ? {} : { x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
            className="inline-block h-px w-8 bg-[rgba(255,214,10,0.3)]"
          />
          scroll
        </motion.div>
      </motion.div>
    </section>
  )
}
