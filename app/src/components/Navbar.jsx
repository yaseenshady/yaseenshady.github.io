import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

const links = [
  { label: 'Origin',     href: '#about'  },
  { label: 'Experience', href: '#work'   },
  { label: 'Builds',     href: '#builds' },
  { label: 'Life',       href: '#life'   },
  { label: 'Contact',    href: '#cta'    },
]

export default function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 48))

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled
            ? 'glass shadow-glass'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <a href="#top" className="text-sm font-bold tracking-[0.18em] uppercase text-[#f0ede4]">
          YS
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium tracking-[0.2em] uppercase text-[rgba(240,237,228,0.55)] hover:text-[#ffd60a] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:yaseenshady7@gmail.com"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-[rgba(255,214,10,0.3)] bg-[rgba(255,214,10,0.08)] px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-[#ffd60a] hover:bg-[rgba(255,214,10,0.16)] transition-all duration-300"
        >
          Say hello
        </a>
      </div>
    </motion.header>
  )
}
