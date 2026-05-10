const builds = [
  {
    name:  'Lexoire',
    sub:   'Voice-native CLI orchestration',
    body:  'Voice command routing, provider switching, GitHub-aware context, and persistent sessions — unified into one CLI-native surface.',
    tags:  ['Voice AI', 'CLI', 'GitHub', 'Sessions'],
    links: [
      { label: 'Repo',      href: 'https://github.com/yaseenshady/Lexoire' },
      { label: 'Live site', href: 'https://yaseensh.github.io/Lexoire/' },
    ],
  },
  {
    name:  'forge-ml',
    sub:   'Sentence → trained model',
    body:  'Multi-agent ML platform that turns a plain-English request into a researched, trained, and optimized model. Research → dataset → build → optimize.',
    tags:  ['Claude', 'GPT-4o', 'HuggingFace', 'Optuna'],
    links: [
      { label: 'Repo', href: 'https://github.com/yaseenshady/forge-ml' },
    ],
  },
  {
    name:  'Amunet',
    sub:   'Solo-founded iOS app — globally shipped',
    body:  '100 downloads in the first month. Thousands of lines of SwiftUI, the marketing site, and the legal entity — all built solo over 2+ years.',
    tags:  ['SwiftUI', 'App Store', 'Solo founder'],
    links: [],
  },
]

export default function BuildsSection() {
  return (
    <section id="builds" className="px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-[11px] font-semibold tracking-[0.32em] uppercase text-[#ffd60a]">
          Personal builds
        </p>
        <h2 className="mb-10 text-[clamp(2.2rem,5vw,3.8rem)] font-black leading-[1.05] tracking-[-0.04em] text-[#f0ede4]">
          Things I built because<br />they needed to exist.
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {builds.map(b => (
            <div
              key={b.name}
              className="glass card-hover-gold flex h-full cursor-default flex-col rounded-2xl p-7 transition-all duration-300"
            >
              <div className="mb-4">
                <p className="mb-1 text-[10px] font-semibold tracking-[0.22em] uppercase text-[rgba(240,237,228,0.4)]">
                  {b.sub}
                </p>
                <h3 className="text-2xl font-black text-[#f0ede4]">{b.name}</h3>
              </div>
              <p className="flex-1 text-[0.93rem] leading-relaxed text-[rgba(240,237,228,0.6)] mb-5">
                {b.body}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {b.tags.map(t => (
                  <span
                    key={t}
                    className="rounded-full border border-[rgba(255,255,255,0.1)] px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-[rgba(240,237,228,0.42)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {b.links.length > 0 && (
                <div className="flex gap-4">
                  {b.links.map(l => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold tracking-wider text-[#ffd60a] hover:underline"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

