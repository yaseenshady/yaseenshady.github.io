import { motion } from "framer-motion";
import { metrics } from "../content";

export default function MetricsSection({ sectionRef }) {
  return (
    <section id="metrics" ref={sectionRef} data-scene-section className="section-shell">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow">Metrics</p>
          <h2 className="section-title">Grounded in real engineering, not inflated launch-page fiction.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.article
              key={metric.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className={`glass-panel px-6 py-7 ${index === 0 ? "md:col-span-2 xl:col-span-2" : ""}`}
            >
              <p className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">{metric.value}</p>
              <p className="mt-5 max-w-sm leading-7 text-slate-300">{metric.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
