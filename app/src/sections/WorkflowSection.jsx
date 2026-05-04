import { motion } from "framer-motion";
import { workflowSteps } from "../content";

export default function WorkflowSection({ sectionRef }) {
  return (
    <section id="workflow" ref={sectionRef} data-scene-section className="section-shell">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <p className="eyebrow">Workflow animation</p>
          <h2 className="section-title">An engineered chain, not a loose chat thread.</h2>
          <p className="text-lg leading-8 text-slate-300">
            Requests travel through a guided system with real structure, visible state, and purpose-built delegation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-8 bottom-8 hidden w-px bg-gradient-to-b from-cyan-300/60 via-white/20 to-transparent md:block" />
          <div className="space-y-5">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                className="glass-panel relative overflow-hidden px-6 py-6 md:ml-10"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-300 via-blue-400 to-violet-400" />
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="eyebrow">{`Stage 0${index + 1}`}</p>
                    <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 max-w-2xl leading-7 text-slate-300">{step.detail}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-xs uppercase tracking-[0.18em] text-slate-400">
                    Active flow
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
