const journeyCards = [
  {
    step: '01',
    period: 'Egypt · age 12',
    title: 'The beginning was pure curiosity.',
    body: 'Coding started early, self-taught, and driven by experimentation more than structure.',
    tags: ['Self-taught', 'Internet-native', 'Built constantly'],
  },
  {
    step: '02',
    period: 'Bay Area',
    title: 'Then the work got taste and direction.',
    body: 'Being around stronger product thinking pushed me beyond code into interface quality, narrative, and trust.',
    tags: ['Product taste', 'Interaction design', 'Startup energy'],
  },
  {
    step: '03',
    period: 'AI · data · research',
    title: 'The systems got deeper.',
    body: 'My center of gravity moved toward intelligence, workflows, data-rich surfaces, and practical execution.',
    tags: ['AI workflows', 'Trading + research', 'System design'],
  },
  {
    step: '04',
    period: 'Now',
    title: 'Now the focus is sharper craft.',
    body: 'The goal is fewer generic surfaces, stronger story, and products that feel deliberate at every layer.',
    tags: ['Technical rigor', 'Clearer narrative', 'Cinematic polish'],
  },
]

const hobbiesCards = [
  {
    title: 'Scuba diving',
    eyebrow: 'Depth',
    body: 'I like the calm, pressure, and focus of going below the surface. Scuba taught me to breathe first, move with intention, and trust the system.',
  },
  {
    title: 'Guitar',
    eyebrow: 'Rhythm',
    body: 'Started playing sophomore year of high school. Tiny adjustments, better tone, and repetition still pull me in.',
  },
  {
    title: 'DJing',
    eyebrow: 'Energy',
    body: 'Started DJing freshman year of college. Timing, transitions, and controlling the feeling of a room — same instinct I use in product.',
  },
  {
    title: 'Snowboarding',
    eyebrow: 'Motion',
    body: 'Started in 2025. Balance, speed, and commitment in one clean line. Hesitation costs more than a wrong turn.',
  },
  {
    title: 'Photography',
    eyebrow: 'Framing',
    body: 'Light, composition, and knowing what deserves focus feels close to product design. Framing signal before noise takes over.',
  },
]

export default function ChronicleSection() {
  return (
    <section id="story" className="px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-6xl space-y-20">

        {/* Journey */}
        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.36em] text-[#ffd60a]">
            The journey
          </p>
          <h2 className="mb-10 text-[clamp(2rem,4.5vw,3.4rem)] font-black leading-[1.06] tracking-[-0.04em] text-[#f0ede4]">
            Four chapters that shaped the work.
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {journeyCards.map(card => (
              <div key={card.step} className="glass rounded-2xl p-6 flex flex-col">
                <div className="mb-4 flex items-start justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[rgba(255,214,10,0.5)]">
                    {card.step}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[rgba(240,237,228,0.35)]">
                    {card.period}
                  </span>
                </div>
                <h3 className="mb-3 text-[0.95rem] font-bold leading-snug text-[#f0ede4]">
                  {card.title}
                </h3>
                <p className="mb-5 flex-1 text-[0.875rem] leading-relaxed text-[rgba(240,237,228,0.58)]">
                  {card.body}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {card.tags.map(t => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-[rgba(240,237,228,0.4)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div id="hobbies">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.36em] text-[#ffd60a]">
            Outside the screen
          </p>
          <h2 className="mb-10 text-[clamp(2rem,4.5vw,3.4rem)] font-black leading-[1.06] tracking-[-0.04em] text-[#f0ede4]">
            Five things that keep me balanced.
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hobbiesCards.map(card => (
              <div key={card.title} className="glass rounded-2xl p-6">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ffd60a]">
                  {card.eyebrow}
                </p>
                <h3 className="mb-3 text-xl font-black text-[#f0ede4]">{card.title}</h3>
                <p className="text-[0.9rem] leading-relaxed text-[rgba(240,237,228,0.6)]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
