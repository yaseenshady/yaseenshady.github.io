import { useState, useEffect } from 'react'

const links = [
  { label: 'Bio',     href: '#about'  },
  { label: 'Story',   href: '#story'  },
  { label: 'Builds',  href: '#builds' },
  { label: 'Contact', href: '#cta'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(5,5,5,0.85)] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <a href="#top" className="text-sm font-bold tracking-[0.18em] uppercase text-[#f0ede4] hover:text-[#ffd60a] transition-colors duration-200">
          YS
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium tracking-[0.2em] uppercase text-[rgba(240,237,228,0.5)] hover:text-[#ffd60a] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href="https://github.com/yaseenshady" target="_blank" rel="noreferrer" className="btn-glass px-4 py-2 text-[11px] uppercase tracking-widest text-[#ffd60a]">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yaseen-shady/" target="_blank" rel="noreferrer" className="btn-glass px-4 py-2 text-[11px] uppercase tracking-widest text-[#ffd60a]">
            LinkedIn
          </a>
          <a href="mailto:yaseenshady7@gmail.com" className="btn-glass px-4 py-2 text-[11px] uppercase tracking-widest text-[#ffd60a]">
            Say hello
          </a>
        </div>
      </div>
    </header>
  )
}

