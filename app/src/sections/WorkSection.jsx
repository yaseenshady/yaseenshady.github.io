import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const jobs = [
  {
    org:    'Microsoft',
    role:   'Software Engineer',
    when:   'Now',
    tags:   ['Full-time', 'Redmond'],
    body:   'Building at Microsoft. Distributed systems, ML-assisted performance tuning, and developer tooling at scale.',
    color:  '#00a4ef',
  },
  {
    org:    'Microsoft · Gray Systems Lab',
    role:   'SWE Intern — MySQL',
    when:   'May – Aug 2024',
    tags:   ['Distributed systems', 'Python', 'SIGMOD 2025'],
    body:   'Found a 50% improvement in P95 latency for the TPC-C benchmark via a custom benchmarking GUI. Work cited in SIGMOD 2025 autotuning tutorial.',
    color:  '#00a4ef',
  },
  {
    org:    'Amunet',
    role:   'Founder',
    when:   'Jun 2023 – Aug 2025',
    tags:   ['SwiftUI', 'iOS', 'App Store'],
    body:   'Built an iOS app and shipped it globally — solo. 100 downloads in the first month. Wrote thousands of lines of SwiftUI, built the site, handled the legal entity.',
    color:  '#ffd60a',
  },
  {
    org:    'Microsoft · Gray Systems Lab',
    role:   'SWE Intern — MySQL',
    when:   'May – Aug 2023',
    tags:   ['MLOS', 'MariaDB', 'Open source'],
    body:   'Pioneered applying MLOS (ML-assisted performance tuning) to MariaDB. Scripts integrated into the open-source MLOS project.',
    color:  '#00a4ef',
  },
  {
    org:    'Microsoft Advanced Technology Lab',
    role:   'Undergrad Intern',
    when:   'Jul 2022 · Cairo',
    tags:   ['Azure Cosmos DB', 'Product dev'],
    body:   'Built a meeting summarizer prototype: timed transcripts, keyword extraction, summaries, and video — all in one web interface.',
    color:  '#00a4ef',
  },
  {
    org:    'Si-Ware Systems',
    role:   'ML Engineer Intern',
    when:   'Jun 2022',
    tags:   ['Scikit-Learn', 'Python', 'Spectroscopy'],
    body:   'Applied ML to NIR spectroscopy sensor data for NeoSpectra portable analyzers.',
    color:  '#a78bfa',
  },
  {
    org:    'U.S. Department of State',
    role:   'Diplomacy Lab — Research',
    when:   'Jan – Apr 2022',
    tags:   ['Published research', 'Data science', 'Python'],
    body:   'Built a misinformation detection toolkit for State Department senior leadership. Name listed on the published research paper.',
    color:  '#34d399',
  },
]

export default function WorkSection({ reduceMotion }) {
  return (
    <section id="work" className="relative py-32 px-6 sm:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(0,164,239,0.05),transparent)]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16"
        >
          <p className="mb-4 text-[11px] font-semibold tracking-[0.32em] uppercase text-[#ffd60a]">Experience</p>
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.04em] text-[#f0ede4]">
            A timeline of real work.
          </h2>
          <p className="mt-4 max-w-lg text-[rgba(240,237,228,0.55)]">Every role taught something different. All of it compounded.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-10">
          {/* Rail */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[rgba(255,255,255,0.06)]" />

          <div className="space-y-6">
            {jobs.map((j, i) => (
              <motion.div
                key={j.org + j.when}
                initial={{ opacity: 0, x: reduceMotion ? 0 : -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: i * 0.06, ease: EASE }}
                className="glass relative rounded-2xl p-6 sm:p-8 hover:border-[rgba(255,214,10,0.2)] transition-all duration-500"
              >
                {/* Dot on rail */}
                <div
                  className="absolute -left-[calc(1.5rem+1px)] sm:-left-[calc(2.5rem+1px)] top-7 h-2.5 w-2.5 rounded-full border-2"
                  style={{ borderColor: j.color, background: '#050505', boxShadow: `0 0 8px ${j.color}80` }}
                />

                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-1" style={{ color: j.color }}>
                      {j.when}
                    </p>
                    <h3 className="text-lg font-bold text-[#f0ede4]">{j.role}</h3>
                    <p className="text-sm text-[rgba(240,237,228,0.5)]">{j.org}</p>
                  </div>
                </div>

                <p className="mb-4 text-[0.94rem] leading-relaxed text-[rgba(240,237,228,0.62)]">{j.body}</p>

                <div className="flex flex-wrap gap-2">
                  {j.tags.map(t => (
                    <span key={t} className="rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-[10px] font-medium tracking-wider text-[rgba(240,237,228,0.5)]">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
