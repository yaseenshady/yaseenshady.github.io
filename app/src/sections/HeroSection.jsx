const CHIPS = ['Self-taught', 'Started at 12', 'AI + product', 'Egypt → Bay Area']

const QUICK_STATS = [
  { value: '10+', label: 'years coding' },
  { value: '3×',  label: 'Microsoft intern' },
  { value: '−50%', label: 'P95 latency cut' },
]

export default function HeroSection() {
  return (
    <section id="top" className="min-h-screen w-full px-6 pb-16 pt-36 sm:px-12 sm:pb-20 sm:pt-44">
      <div className="mx-auto max-w-4xl">

        {/* Tag line */}
        <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.36em] text-[#ffd60a]">
          Engineer · Founder · Builder
        </p>

        {/* Name */}
        <h1 className="mb-6 font-black leading-[0.9] tracking-[-0.04em]" style={{ fontSize: 'clamp(3.8rem,10vw,8rem)' }}>
          Yaseen<br />
          <span className="text-gradient">Shady.</span>
        </h1>

        {/* Bio */}
        <p className="mb-10 max-w-2xl text-[1.1rem] leading-relaxed text-[rgba(240,237,228,0.68)]">
          Self-taught engineer and founder building AI systems, developer tooling, and product
          experiences with depth. Started coding at 12 in Egypt; now focused on shipping thoughtful
          software shaped by curiosity and systems thinking.
        </p>

        {/* Chips */}
        <div className="mb-10 flex flex-wrap gap-2">
          {CHIPS.map(chip => (
            <span
              key={chip}
              className="rounded-full border border-[rgba(255,214,10,0.22)] bg-[rgba(255,214,10,0.07)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ffd60a]"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* Quick-stat cards */}
        <div className="mb-12 grid grid-cols-3 gap-4 sm:max-w-xl">
          {QUICK_STATS.map(s => (
            <div
              key={s.label}
              className="glass rounded-2xl px-5 py-4 text-center"
            >
              <p className="text-2xl font-black text-[#ffd60a]">{s.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[rgba(240,237,228,0.45)]">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a href="https://github.com/yaseenshady" target="_blank" rel="noreferrer" className="btn-glass">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yaseen-shady/" target="_blank" rel="noreferrer" className="btn-glass">
            LinkedIn
          </a>
          <a href="mailto:yaseenshady7@gmail.com" className="btn-gold">
            Say hello
          </a>
        </div>

      </div>
    </section>
  )
}

