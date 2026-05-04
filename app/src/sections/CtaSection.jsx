import { motion } from "framer-motion";
import GlowButton from "../components/ui/GlowButton";

export default function CtaSection({ sectionRef }) {
  return (
    <section id="cta" ref={sectionRef} data-scene-section className="section-shell pb-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel overflow-hidden px-6 py-10 text-center sm:px-10 sm:py-14"
        >
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow justify-center">Final CTA</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
              Building the future of AI tooling should feel as premium as the work itself.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              If you want to build voice-native developer experiences, agent systems, or high-end interactive product surfaces, let’s talk.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <GlowButton href="mailto:yaseenshady7@gmail.com">Email Yaseen</GlowButton>
              <GlowButton
                href="https://github.com/yaseenshady/Lexoire"
                target="_blank"
                rel="noreferrer"
                variant="ghost"
              >
                Explore Lexoire
              </GlowButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
