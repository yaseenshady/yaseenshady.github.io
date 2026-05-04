import { Suspense, lazy } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Scene = lazy(() => import('../components/Scene'))

const EASE = [0.22, 1, 0.36, 1]

export default function HeroSection({ reduceMotion }) {
  const { scrollY } = useScroll()
  const orbOpacity = useTransform(scrollY, [0, 600], [1, 0])
  const orbScale   = useTransform(scrollY, [0, 600], [1, 0.75])
  const textY      = useTransform(scrollY, [0, 500], [0, -60])

  return (
    <section id="top" className="relative flex min-h-screen w-full items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-5%,rgba(255,214,10,0.13),transparent),radial-gradient(circle_at_80%_50%,rgba(255,183,3,0.07),transparent_55%)]" />

      {/* 3D Orb (right panel on desktop, full bg on mobile) */}
      <motion.div
        style={{ opacity: orbOpacity, scale: orbScale }}
        className="absolute inset-0 md:left-[42%]"
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </motion.div>

      {/* Readability gradients */}
      <div className="absolute inset-0 hidden md:block bg-[linear-gradient(to_right,#050505_42%,rgba(5,5,5,0.5)_64%,transparent)]" />
      <div className="absolute inset-0 md:hidden bg-[linear-gradient(to_bottom,transparent_35%,rgba(5,5,5,0.94))]" />

      {/* Hero text */}
      <motion.div
        style={{ y: reduceMotion ? 0 : textY }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-12 pt-28 pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mb-5 text-[11px] font-semibold tracking-[0.32em] uppercase text-[#ffd60a]"
        >
          Microsoft engineer · AI technologist · Explorer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
          className="mb-8 font-black leading-[0.9] tracking-[-0.05em]"
          style={{ fontSize: 'clamp(4rem, 11vw, 9rem)' }}
        >
          Yaseen<br />
          <span className="text-gradient">Shady.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
          className="mb-10 max-w-[480px] text-[1.1rem] leading-[1.75] text-[rgba(240,237,228,0.65)]"
        >
          Self-taught in Egypt at 12. Grew up through the Bay Area.
          Now building at <span className="text-[#f0ede4] font-medium">Microsoft</span> —
          AI systems, developer tools, and things that didn't exist before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.72, ease: EASE }}
          className="flex flex-wrap gap-3"
        >
          <a href="#work" className="rounded-full bg-[#ffd60a] px-7 py-3 text-sm font-bold text-[#050505] tracking-wide hover:bg-[#ffe44d] transition-all duration-300 hover:shadow-glow">
            See the journey
          </a>
          <a href="#builds" className="glass rounded-full px-7 py-3 text-sm font-medium text-[#f0ede4] hover:border-[rgba(255,214,10,0.3)] transition-all duration-300">
            Builds
          </a>
          <a href="mailto:yaseenshady7@gmail.com" className="rounded-full px-7 py-3 text-sm font-medium text-[rgba(240,237,228,0.45)] hover:text-[#ffd60a] transition-colors duration-300">
            Say hello →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2 }}
          className="mt-20 flex items-center gap-3 text-[10px] tracking-[0.28em] uppercase text-[rgba(240,237,228,0.25)]"
        >
          <span className="h-px w-8 bg-[rgba(255,214,10,0.35)]" />
          scroll to explore
        </motion.div>
      </motion.div>
    </section>
  )
}
