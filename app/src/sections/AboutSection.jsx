const STORY = [
  {
    year: '2014',
    line: 'Started coding at 12 in Cairo — no courses, no hand-holding, just curiosity and late nights diving into whatever problem was in front of me.',
  },
  {
    year: '2020',
    line: 'Moved to the Bay Area, built faster than ever, and finally understood what depth looks like when the stakes are real.',
  },
  {
    year: '2022',
    line: 'Interned at Microsoft three times, shipped to millions of users, cut P95 latency in half on a production service, and earned a SIGMOD citation.',
  },
  {
    year: 'Now',
    line: 'Building the tools I wish existed — Lexoire and Amunet — and spending time outside the screen: scuba diving, guitar, DJing, snowboarding, and photography.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-4xl">

        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.36em] text-[#ffd60a]">
          Biography
        </p>

        <h2 className="mb-12 text-[clamp(2.2rem,5vw,3.8rem)] font-black leading-[1.06] tracking-[-0.04em] text-[#f0ede4]">
          Self-taught engineer,<br />founder, and builder.
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {STORY.map(s => (
            <div
              key={s.year}
              className="glass rounded-2xl p-6"
            >
              <span className="mb-3 inline-block rounded-full border border-[rgba(255,214,10,0.3)] bg-[rgba(255,214,10,0.08)] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#ffd60a]">
                {s.year}
              </span>
              <p className="text-[0.95rem] leading-relaxed text-[rgba(240,237,228,0.7)]">
                {s.line}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#story"
          className="mt-8 flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.025] px-6 py-5 transition-all duration-200 hover:border-[rgba(255,214,10,0.22)] hover:bg-white/[0.04] sm:px-8"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#ffd60a]">
              Hobbies &amp; full story
            </p>
            <p className="mt-1 text-[0.9rem] text-[rgba(240,237,228,0.45)]">
              Scuba, guitar, DJ, snowboarding, photography — and the career chapters.
            </p>
          </div>
          <span className="text-[rgba(255,214,10,0.45)] text-base">↓</span>
        </a>

      </div>
    </section>
  )
}

