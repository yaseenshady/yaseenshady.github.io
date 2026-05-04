import { motion } from "framer-motion";
import TiltCard from "../components/ui/TiltCard";

export default function ProductSection({ items }) {
  return (
    <section id="selected-work" className="relative px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.26em] text-cyan-100/70">Selected work</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
            Panels that feel like product surfaces, not flat screenshots.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300">
            This section uses floating interface panels to represent how I think about shipping: clear
            systems, strong motion, and interfaces with enough depth to hold serious ideas.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[32rem] overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.05] p-6 shadow-glass backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(121,228,255,0.18),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(155,140,255,0.16),transparent_28%)]" />
            <div className="relative grid h-full content-between gap-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">Experience layer</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
                    Personal systems, presented like a premium interface.
                  </h3>
                </div>
                <div className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
                  scroll reactive
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">Focus</p>
                  <p className="mt-4 text-lg leading-7 text-slate-100">
                    AI products, trading interfaces, and frontend systems with stronger narrative than a
                    standard portfolio grid.
                  </p>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">Motion</p>
                  <p className="mt-4 text-lg leading-7 text-slate-100">
                    Hover depth, scroll transitions, and soft magnetic movement that still protect
                    readability.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/70">{item.tag}</p>
                    <h4 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {items.map((item, index) => (
              <TiltCard key={item.title} className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.75, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">{item.tag}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-200"
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
