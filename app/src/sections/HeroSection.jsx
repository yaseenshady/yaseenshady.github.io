import { motion, useScroll, useTransform } from "framer-motion";
import GlowButton from "../components/ui/GlowButton";

export default function HeroSection({ sectionRef }) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      data-scene-section
      className="relative flex min-h-[120svh] items-center justify-center overflow-hidden px-5 pb-24 pt-32 sm:px-8 lg:px-12"
    >
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-pill mb-8"
        >
          Yaseen Shady · Lexoire · Voice-native orchestration
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="max-w-5xl font-display text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-8xl"
        >
          The premium interface layer for
          <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
            {" "}
            voice-driven AI builders.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-8 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
        >
          Lexoire turns natural language, repo context, agent orchestration, and CLI execution into one cinematic workflow.
          Designed by Yaseen Shady to feel precise, intelligent, and engineered — not templated.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <GlowButton href="#problem">Enter the story</GlowButton>
          <GlowButton href="https://github.com/yaseenshady/Lexoire" target="_blank" rel="noreferrer" variant="ghost">
            View repo
          </GlowButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.34 }}
          className="mt-14 grid w-full max-w-5xl gap-4 md:grid-cols-[1.3fr_0.9fr]"
        >
          <div className="glass-panel px-6 py-6 text-left">
            <p className="eyebrow">Launch posture</p>
            <p className="text-lg font-medium leading-8 text-white">
              A dark, premium launch surface with connected motion, cinematic 3D depth, and glass UI that never feels like a stock SaaS grid.
            </p>
          </div>
          <div className="glass-panel px-6 py-6 text-left">
            <p className="eyebrow">System arc</p>
            <div className="flex flex-wrap gap-2">
              {["Voice", "Context", "Agents", "GitHub", "CLI", "Delivery"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
