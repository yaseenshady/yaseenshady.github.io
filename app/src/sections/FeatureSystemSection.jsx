import { motion } from "framer-motion";
import { featureClusters } from "../content";

export default function FeatureSystemSection({ sectionRef }) {
  return (
    <section id="features" ref={sectionRef} data-scene-section className="section-shell">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="space-y-6">
          <p className="eyebrow">Feature system</p>
          <h2 className="section-title">Not a card grid — a connected operating surface.</h2>
          <p className="text-lg leading-8 text-slate-300">
            Every capability is designed to feel part of the same motion system: input, reasoning, orchestration, execution, and handoff.
          </p>
        </div>

        <div className="relative min-h-[640px]">
          <div className="absolute left-1/2 top-1/2 grid h-56 w-56 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#7dd3fc]/20 bg-white/[0.04] text-center shadow-glow backdrop-blur-2xl">
            <div>
              <p className="eyebrow mb-3">Core</p>
              <h3 className="font-display text-3xl font-semibold text-white">Lexoire</h3>
              <p className="mt-3 px-6 text-sm leading-6 text-slate-300">
                Premium orchestration layer across voice, context, agents, and delivery.
              </p>
            </div>
          </div>

          {featureClusters.map((feature, index) => {
            const positions = [
              "left-0 top-10",
              "right-0 top-0",
              "right-8 top-[40%]",
              "left-6 bottom-8",
              "right-16 bottom-2"
            ];

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className={`absolute w-full max-w-xs rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-2xl shadow-glass ${positions[index]}`}
              >
                <p className="eyebrow">{`0${index + 1}`}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{feature.body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
