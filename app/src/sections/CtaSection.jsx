export default function CtaSection() {
  return (
    <section id="cta" className="px-6 py-32 sm:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-5 text-[11px] font-semibold tracking-[0.32em] uppercase text-[#ffd60a]">
          Let's connect
        </p>

        <h2 className="mb-6 text-[clamp(2.4rem,6vw,4.5rem)] font-black leading-[1.0] tracking-[-0.04em] text-[#f0ede4]">
          Building something interesting?<br />
          <span className="text-gradient">Let's talk.</span>
        </h2>

        <p className="mb-12 text-[1.08rem] leading-relaxed text-[rgba(240,237,228,0.58)]">
          I'm always up for a great conversation about AI, systems design, developer tooling, or the ocean.
        </p>

        {/* Contact cards */}
        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          <a
            href="mailto:yaseenshady7@gmail.com"
            className="glass card-hover-gold rounded-2xl p-6 text-center transition-all duration-200"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ffd60a]">Email</p>
            <p className="text-[0.85rem] text-[rgba(240,237,228,0.5)]">yaseenshady7@gmail.com</p>
          </a>
          <a
            href="https://github.com/yaseenshady"
            target="_blank"
            rel="noreferrer"
            className="glass card-hover-gold rounded-2xl p-6 text-center transition-all duration-200"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ffd60a]">GitHub</p>
            <p className="text-[0.85rem] text-[rgba(240,237,228,0.5)]">yaseenshady</p>
          </a>
          <a
            href="https://www.linkedin.com/in/yaseen-shady/"
            target="_blank"
            rel="noreferrer"
            className="glass card-hover-gold rounded-2xl p-6 text-center transition-all duration-200"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ffd60a]">LinkedIn</p>
            <p className="text-[0.85rem] text-[rgba(240,237,228,0.5)]">yaseen-shady</p>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:yaseenshady7@gmail.com" className="btn-gold px-8 py-3.5">
            Email me
          </a>
          <a href="https://github.com/yaseenshady" target="_blank" rel="noreferrer" className="btn-glass px-8 py-3.5">
            GitHub ↗
          </a>
          <a href="https://yaseensh.github.io/Lexoire/" target="_blank" rel="noreferrer" className="btn-glass px-8 py-3.5">
            Lexoire site →
          </a>
        </div>
      </div>

      <footer className="mt-24 text-center text-[11px] tracking-[0.18em] text-[rgba(240,237,228,0.2)] uppercase">
        Yaseen Shady · {new Date().getFullYear()} · Engineer · Founder · Explorer
      </footer>
    </section>
  )
}

