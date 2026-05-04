import { motion } from "framer-motion";
import TiltCard from "../components/ui/TiltCard";

export default function FeaturesSection({ items }) {
  return (
    <section className="relative px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.26em] text-yellow-200/70">System design</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
            The site is modular: one scene system, one motion language, one clear visual standard.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="h-full p-7 sm:p-8">
                <p className="text-xs uppercase tracking-[0.24em] text-yellow-200/70">0{index + 1}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{item.copy}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
