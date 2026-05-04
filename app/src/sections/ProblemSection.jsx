import { motion } from "framer-motion";
import GlassCard from "../components/ui/GlassCard";

export default function ProblemSection({ items }) {
  return (
    <section className="relative px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs uppercase tracking-[0.26em] text-yellow-200/70">Personal lens</p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
            I wanted the background to feel premium, so the cards had to earn the scroll.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-300">
            Instead of cheap figures behind the content, this version uses a calm spatial field and lets
            the story cards reveal the substance one layer at a time.
          </p>
        </div>

        <div className="grid gap-5">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 46 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard className="p-7 sm:p-8">
                <p className="text-xs uppercase tracking-[0.24em] text-yellow-200/70">{item.eyebrow}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">{item.body}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
