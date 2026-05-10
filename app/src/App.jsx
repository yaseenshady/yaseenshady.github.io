const projects = [
  {
    name: 'Lexoire',
    description: 'Voice-native CLI orchestration with GitHub-aware context and persistent sessions.',
    href: 'https://github.com/yaseenshady/Lexoire',
  },
  {
    name: 'forge-ml',
    description: 'A multi-agent platform that turns natural language into trained, optimized ML models.',
    href: 'https://github.com/yaseenshady/forge-ml',
  },
  {
    name: 'Amunet',
    description: 'A solo-built iOS product shipped globally, from app to marketing site.',
    href: 'mailto:yaseenshady7@gmail.com',
  },
]

const focusAreas = ['AI systems', 'Developer tooling', 'Product engineering', 'Practical execution']

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f0ede4]">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-[#050505]/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
          <a href="#top" className="text-sm font-bold tracking-[0.2em] text-[#ffd60a]">
            YS
          </a>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.14em] text-[rgba(240,237,228,0.75)]">
            <a href="#about" className="hover:text-[#ffd60a]">About</a>
            <a href="#projects" className="hover:text-[#ffd60a]">Projects</a>
            <a href="#contact" className="hover:text-[#ffd60a]">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-5xl px-6 pb-20 pt-16 sm:px-8 sm:pt-20">
        <section className="border-b border-white/10 pb-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffd60a]">
            Engineer · Founder
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Hi, I&apos;m Yaseen.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[rgba(240,237,228,0.8)] sm:text-lg">
            I build useful software with a focus on AI, systems, and product clarity. This site is now
            intentionally simple: what I do, what I&apos;ve built, and how to reach me.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:yaseenshady7@gmail.com" className="rounded-full bg-[#ffd60a] px-5 py-2.5 text-sm font-semibold text-[#050505]">
              Email me
            </a>
            <a href="https://github.com/yaseenshady" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold hover:border-[#ffd60a] hover:text-[#ffd60a]">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/yaseen-shady/" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold hover:border-[#ffd60a] hover:text-[#ffd60a]">
              LinkedIn
            </a>
          </div>
        </section>

        <section id="about" className="border-b border-white/10 py-14">
          <h2 className="text-2xl font-bold sm:text-3xl">About</h2>
          <p className="mt-4 max-w-3xl text-[rgba(240,237,228,0.8)]">
            I started coding at 12 in Egypt and now work at the intersection of AI and product engineering
            in the Bay Area. I care about building things that are technically strong and easy to trust.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {focusAreas.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="border-b border-white/10 py-14">
          <h2 className="text-2xl font-bold sm:text-3xl">Selected projects</h2>
          <div className="mt-6 grid gap-4">
            {projects.map((project) => (
              <article key={project.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[rgba(240,237,228,0.75)]">
                  {project.description}
                </p>
                <a
                  href={project.href}
                  target={project.href.startsWith('http') ? '_blank' : undefined}
                  rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="mt-4 inline-block text-sm font-semibold text-[#ffd60a] hover:underline"
                >
                  Learn more
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-14">
          <h2 className="text-2xl font-bold sm:text-3xl">Let&apos;s connect</h2>
          <p className="mt-4 max-w-2xl text-[rgba(240,237,228,0.8)]">
            If you&apos;re building something meaningful and want a thoughtful engineering partner, I&apos;d love
            to hear from you.
          </p>
          <a href="mailto:yaseenshady7@gmail.com" className="mt-6 inline-block rounded-full bg-[#ffd60a] px-5 py-2.5 text-sm font-semibold text-[#050505]">
            yaseenshady7@gmail.com
          </a>
        </section>
      </main>
    </div>
  )
}
