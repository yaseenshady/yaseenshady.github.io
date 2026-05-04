import { motion } from "framer-motion";
import { journeySteps } from "../content";

export default function JourneySection({ sectionRef }) {
  return (
    <section id="journey" ref={sectionRef} data-scene-section className="section-shell">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow">Product journey</p>
          <h2 className="section-title">One continuous arc from intent to shipped output.</h2>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-glass sm:p-10">
          <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent lg:block" />

          <div className="grid gap-6 lg:grid-cols-4">
            {journeySteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="relative rounded-[1.6rem] border border-white/10 bg-slate-950/30 p-6 backdrop-blur-xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="glass-pill">{step.label}</span>
                  <span className="text-sm font-medium text-slate-500">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{step.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
