import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import InteractiveStage from '../components/InteractiveStage'

const EASE = [0.22, 1, 0.36, 1]

const INTRO_LINES = [
  'Engineer',
  'Founder',
  'AI',
  'Systems',
]


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
  const [introIdx, setIntroIdx] = useState(0)

  useEffect(() => {
    if (reduceMotion) return
    const id = window.setInterval(() => {
      setIntroIdx((current) => (current + 1) % INTRO_LINES.length)
    }, 1350)
    return () => window.clearInterval(id)
  }, [reduceMotion])

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden px-6 pb-16 pt-32 sm:px-12 sm:pb-20 sm:pt-36">
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
        className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-6xl flex-col justify-center"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
              className="mb-7 flex flex-col items-center justify-center gap-2 lg:items-start"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.36em] text-[#ffd60a]">
                yaseenshady.github.io
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
                {INTRO_LINES.map((line, index) => (
                  <motion.span
                    key={line}
                    animate={{
                      opacity: introIdx === index ? 1 : 0.44,
                      y: introIdx === index ? -2 : 0,
                      filter: introIdx === index ? 'blur(0px)' : 'blur(0.8px)',
                    }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="rounded-full border border-yellow-200/10 bg-white/[0.045] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[rgba(240,237,228,0.82)]"
                    style={{ boxShadow: introIdx === index ? '0 0 24px rgba(255,214,10,0.18)' : 'none' }}
                  >
                    {line}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <h1
              className="font-black leading-[0.86] tracking-[-0.05em]"
              style={{ fontSize: 'clamp(4rem, 10vw, 8.5rem)', perspective: '800px' }}
            >
              <RevealWord word="Yaseen" delay={0.85} />
              <br />
              <RevealWord word="Shady." delay={1.22} goldGradient />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.78, ease: EASE }}
              className="mt-8 max-w-2xl text-[1.05rem] leading-relaxed text-[rgba(240,237,228,0.72)] sm:text-[1.12rem] lg:max-w-xl"
            >
              Self-taught engineer and founder building AI systems, developer tooling, and product
              experiences with depth. Started coding at 12 in Egypt; now focused on shipping thoughtful
              software shaped by curiosity, motion, and systems thinking.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.98, ease: EASE }}
              className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              <Magnetic>
                <a href="https://github.com/yaseenshady" target="_blank" rel="noreferrer" className="btn-glass">
                  GitHub
                </a>
              </Magnetic>
              <Magnetic>
                <a href="https://www.linkedin.com/in/yaseen-shady/" target="_blank" rel="noreferrer" className="btn-glass">
                  LinkedIn
                </a>
              </Magnetic>
              <Magnetic>
                <a href="mailto:yaseenshady7@gmail.com" className="btn-gold">
                  Say hello
                </a>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.05, ease: EASE }}
            className="w-full"
          >
            <InteractiveStage
              variant="hero"
              reduceMotion={reduceMotion}
              points={['AI systems', 'Developer tooling', 'Product craft']}
              showOverlay={false}
              className="h-[18rem] sm:h-[24rem] lg:h-[30rem]"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.55, duration: 1 }}
          className="mt-10 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[rgba(240,237,228,0.18)] lg:justify-start"
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
