import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TiltCard from "../components/ui/TiltCard";

function HobbyVisual({ visual, progress }) {
  const bobY = useTransform(progress, [0, 1], [18, -18]);
  const rotate = useTransform(progress, [0, 1], [-10, 10]);
  const scale = useTransform(progress, [0, 0.5, 1], [0.92, 1.02, 0.94]);

  if (visual === "scuba") {
    return (
      <motion.div style={{ y: bobY }} className="relative h-full w-full">
        <div className="absolute inset-x-[12%] bottom-[16%] h-14 rounded-full bg-yellow-300/10 blur-3xl" />
        <div className="absolute inset-x-[18%] top-[18%] h-px bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent" />
        <div className="absolute left-[40%] top-[24%] h-20 w-px bg-gradient-to-b from-yellow-200/55 to-transparent" />
        <div className="absolute left-[44%] top-[34%] h-10 w-10 rounded-full border border-yellow-200/40 bg-white/[0.03]" />
        <div className="absolute left-[54%] top-[48%] h-16 w-8 rounded-full border border-yellow-200/30 bg-white/[0.02]" />
        {[0, 1, 2].map((bubble) => (
          <motion.div
            key={bubble}
            className="absolute rounded-full border border-yellow-200/25 bg-white/[0.03]"
            style={{
              left: `${22 + bubble * 16}%`,
              bottom: `${20 + bubble * 10}%`,
              width: `${10 + bubble * 4}px`,
              height: `${10 + bubble * 4}px`,
            }}
            animate={{ y: [-6, -22, -6], opacity: [0.25, 0.75, 0.25] }}
            transition={{ duration: 3 + bubble * 0.4, repeat: Number.POSITIVE_INFINITY }}
          />
        ))}
      </motion.div>
    );
  }

  if (visual === "guitar") {
    return (
      <motion.div style={{ scale }} className="relative h-full w-full">
        <div className="absolute left-[26%] top-[16%] h-[68%] w-8 rounded-full bg-gradient-to-b from-yellow-200/40 to-yellow-600/20" />
        <div className="absolute left-[38%] top-[26%] h-40 w-40 rounded-[44%] border border-yellow-300/30 bg-yellow-300/[0.08]" />
        {[0, 1, 2, 3, 4, 5].map((line) => (
          <motion.div
            key={line}
            className="absolute h-[62%] w-px bg-gradient-to-b from-yellow-100/40 via-yellow-300/60 to-yellow-100/10"
            style={{ left: `${31 + line * 3.8}%`, top: "18%" }}
            animate={{ x: [0, line % 2 === 0 ? 3 : -3, 0] }}
            transition={{ duration: 1.4 + line * 0.12, repeat: Number.POSITIVE_INFINITY }}
          />
        ))}
      </motion.div>
    );
  }

  if (visual === "dj") {
    return (
      <motion.div style={{ rotate, scale }} className="relative h-full w-full">
        <div className="absolute left-[12%] top-[24%] h-40 w-40 rounded-full border border-yellow-300/30 bg-white/[0.03]" />
        <div className="absolute right-[12%] top-[24%] h-40 w-40 rounded-full border border-yellow-300/30 bg-white/[0.03]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute left-[12%] top-[24%] h-40 w-40 rounded-full border border-yellow-200/35"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute right-[12%] top-[24%] h-40 w-40 rounded-full border border-yellow-200/35"
        />
        {[0, 1, 2, 3].map((bar) => (
          <motion.div
            key={bar}
            className="absolute bottom-[18%] w-8 rounded-t-[14px] bg-gradient-to-t from-yellow-500/60 to-yellow-200/15"
            style={{ left: `${42 + bar * 7}%` }}
            animate={{ height: ["20%", `${54 + bar * 8}%`, "24%"] }}
            transition={{ duration: 1.8 + bar * 0.15, repeat: Number.POSITIVE_INFINITY }}
          />
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div style={{ scale, y: bobY }} className="relative h-full w-full">
      <div className="absolute inset-[18%] rounded-[32px] border border-yellow-300/25 bg-white/[0.03]" />
      <div className="absolute inset-[26%] rounded-[24px] border border-yellow-200/20" />
      <div className="absolute left-[34%] top-[30%] h-20 w-28 rounded-[18px] border border-yellow-200/25 bg-yellow-300/[0.05]" />
      <div className="absolute right-[28%] top-[34%] h-9 w-9 rounded-full border border-yellow-200/30" />
      {[0, 1, 2].map((frame) => (
        <motion.div
          key={frame}
          className="absolute bottom-[18%] h-14 w-12 rounded-[12px] border border-white/10 bg-white/[0.03]"
          style={{ left: `${24 + frame * 18}%` }}
          animate={{ y: [0, frame % 2 === 0 ? -10 : 10, 0] }}
          transition={{ duration: 3 + frame * 0.2, repeat: Number.POSITIVE_INFINITY }}
        />
      ))}
    </motion.div>
  );
}

function HobbyCard({ item, index }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard className="h-full p-6 sm:p-7">
        <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-yellow-200/70">{item.eyebrow}</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{item.title}</h3>
            <p className="mt-4 max-w-sm text-base leading-7 text-slate-300">{item.body}</p>
          </div>
          <motion.div
            style={reduceMotion ? undefined : { y }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.12),transparent_24%),radial-gradient(circle_at_80%_80%,rgba(245,158,11,0.08),transparent_24%)]" />
            <div className="relative h-64">
              <HobbyVisual visual={item.visual} progress={scrollYProgress} />
            </div>
          </motion.div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function HobbiesSection({ items }) {
  return (
    <section id="hobbies" className="relative px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.26em] text-yellow-200/70">Hobbies</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
            Then the other side of my life.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
            These are the things that keep the story human: depth, rhythm, energy, and framing.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          {items.map((item, index) => (
            <HobbyCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
