import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export default function CtaSection({ reduceMotion }) {
  return (
    <section id="cta" className="relative py-40 px-6 sm:px-12">
      {/* Dramatic glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_60%,rgba(255,214,10,0.1),transparent),radial-gradient(ellipse_40%_30%_at_50%_80%,rgba(255,183,3,0.08),transparent)]" />

      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-5 text-[11px] font-semibold tracking-[0.32em] uppercase text-[#ffd60a]"
        >
          Let's connect
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="mb-6 text-[clamp(2.6rem,6vw,5rem)] font-black leading-[1.0] tracking-[-0.04em] text-[#f0ede4]"
        >
          Building something interesting?<br />
          <span className="text-gradient">Let's talk.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mb-12 text-[1.08rem] leading-relaxed text-[rgba(240,237,228,0.58)]"
        >
          I'm always up for a great conversation about AI, systems design, developer tooling, or the ocean.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.3, ease: EASE }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="mailto:yaseenshady7@gmail.com" className="btn-gold px-8 py-3.5">
            Email me
          </a>
          <a href="https://github.com/yaseenshady" target="_blank" rel="noreferrer"
            className="btn-glass px-8 py-3.5">
            GitHub ↗
          </a>
          <a href="https://yaseensh.github.io/Lexoire/" target="_blank" rel="noreferrer"
            className="btn-glass px-8 py-3.5">
            Lexoire site →
          </a>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-24 text-center text-[11px] tracking-[0.18em] text-[rgba(240,237,228,0.2)] uppercase"
      >
        Yaseen Shady · {new Date().getFullYear()} · Engineer · Founder · Explorer
      </motion.footer>
    </section>
  )
}
