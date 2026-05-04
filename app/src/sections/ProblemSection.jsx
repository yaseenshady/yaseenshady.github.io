import { motion, useScroll, useTransform } from "framer-motion";
import GlassCard from "../components/ui/GlassCard";
import { problemItems } from "../content";

export default function ProblemSection({ sectionRef }) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const headingX = useTransform(scrollYProgress, [0, 1], [-40, 20]);

  return (
    <section id="problem" ref={sectionRef} data-scene-section className="section-shell">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div style={{ x: headingX }} className="space-y-6">
          <p className="eyebrow">Problem</p>
          <h2 className="section-title">
            AI workflows still feel fragmented, flat, and way too manual.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-slate-300">
            Most tools look polished in screenshots but break down in real execution. The interface disconnects from the repo, the agent, and the actual work.
          </p>
        </motion.div>

        <div className="relative grid gap-5 md:grid-cols-3">
          {problemItems.map((item, index) => (
            <GlassCard
              key={item.title}
              delay={index * 0.08}
              className={`flex min-h-[260px] flex-col justify-between px-6 py-6 ${index === 1 ? "md:-translate-y-8" : ""}`}
            >
              <div className="space-y-4">
                <p className="eyebrow">0{index + 1}</p>
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="leading-7 text-slate-300">{item.body}</p>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-cyan-300/50 via-white/20 to-transparent" />
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
