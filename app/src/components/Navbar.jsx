import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

const links = [
  { label: 'Story',   href: '#story'  },
  { label: 'Builds',  href: '#builds' },
  { label: 'Life',    href: '#life'   },
  { label: 'Contact', href: '#cta'    },
]

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  // Smooth spring progress bar
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 48))

  return (
    <>
      {/* ── Scroll progress bar — fixed at very top of viewport ── */}
      <motion.div
        style={{ scaleX, transformOrigin: 'left' }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-[#ffd60a] via-[#ffe680] to-[#ffb703] origin-left"
      />

      <motion.header
        className="fixed inset-x-0 top-[2px] z-50 px-4 pt-4 sm:px-8"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled
              ? 'glass-flow shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              : 'border border-transparent bg-transparent'
          }`}
        >
          <a href="#top" className="text-sm font-bold tracking-[0.18em] uppercase text-[#f0ede4] hover:text-[#ffd60a] transition-colors duration-300">
            YS
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-medium tracking-[0.2em] uppercase text-[rgba(240,237,228,0.5)] hover:text-[#ffd60a] transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="mailto:yaseenshady7@gmail.com"
            className="hidden md:inline-flex btn-glass text-[11px] tracking-widest uppercase text-[#ffd60a] px-5 py-2"
            style={{ borderColor: 'rgba(255,214,10,0.25)' }}
          >
            Say hello
          </a>
        </div>
      </motion.header>
    </>
  )
}
