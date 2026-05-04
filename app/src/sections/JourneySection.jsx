import { motion } from "framer-motion";
import TiltCard from "../components/ui/TiltCard";

export default function JourneySection({ items }) {
  return (
    <section id="journey" className="relative px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs uppercase tracking-[0.26em] text-yellow-200/70">Scroll story</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
            This is the card sequence you asked for — but with a background that actually feels good.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-300">
            The cards pin and flow past each other while the 3D field behind them keeps moving. That makes
            the whole page feel like one connected scene instead of stacked sections.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-yellow-300/40 via-white/20 to-transparent lg:block" />
          <div className="space-y-8">
            {items.map((item, index) => (
              <motion.div
                key={item.step}
                className="sticky"
                style={{ top: `${96 + index * 18}px` }}
                initial={{ opacity: 0, y: 36, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard className="p-7 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-yellow-200/70">
                        Chapter {item.step}
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
                        {item.title}
                      </h3>
                    </div>
                    <div className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
                      personal arc
                    </div>
                  </div>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">{item.body}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.details.map((detail) => (
                      <span
                        key={detail}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-200"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
