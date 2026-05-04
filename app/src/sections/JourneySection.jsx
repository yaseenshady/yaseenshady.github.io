import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TiltCard from "../components/ui/TiltCard";

function JourneyVisual({ item, progress }) {
  const rotate = useTransform(progress, [0, 1], item.visual === "route" ? [-8, 8] : [-4, 4]);
  const y = useTransform(progress, [0, 1], [30, -30]);
  const scale = useTransform(progress, [0, 0.5, 1], [0.88, 1, 0.94]);
  const tracerX = useTransform(progress, [0, 1], ["8%", "82%"]);
  const tracerY = useTransform(progress, [0, 1], ["78%", "18%"]);
  const barHeight = useTransform(progress, [0, 1], ["30%", "90%"]);

  if (item.visual === "origin") {
    return (
      <motion.div style={{ y }} className="relative h-full w-full">
        <div className="absolute left-1/2 top-[10%] h-[78%] w-px -translate-x-1/2 bg-gradient-to-b from-yellow-300/10 via-yellow-300/70 to-transparent" />
        {[20, 48, 72].map((top, dot) => (
          <motion.div
            key={top}
            style={{ y, top: `${top}%` }}
            animate={{ scale: [1, 1.18, 1], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 3 + dot, repeat: Number.POSITIVE_INFINITY, delay: dot * 0.35 }}
            className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border border-yellow-200/40 bg-yellow-300/70 shadow-[0_0_24px_rgba(250,204,21,0.45)]"
          />
        ))}
        <motion.div
          style={{ scale }}
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-300/20 bg-yellow-300/[0.06] blur-[1px]"
        />
      </motion.div>
    );
  }

  if (item.visual === "route") {
    return (
      <motion.div style={{ rotate, scale }} className="relative h-full w-full">
        <div className="absolute inset-x-[12%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-yellow-300/70 to-transparent" />
        <div className="absolute left-[14%] top-[26%] h-24 w-24 rounded-full border border-white/10 bg-white/[0.03]" />
        <div className="absolute right-[18%] bottom-[18%] h-32 w-32 rounded-full border border-white/10 bg-white/[0.03]" />
        <motion.div
          style={{ left: tracerX, top: tracerY }}
          className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300 shadow-[0_0_26px_rgba(250,204,21,0.55)]"
        />
      </motion.div>
    );
  }

  if (item.visual === "systems") {
    return (
      <motion.div style={{ scale }} className="relative h-full w-full">
        <div className="absolute inset-[18%] rounded-full border border-yellow-300/25" />
        <div className="absolute inset-[28%] rounded-full border border-yellow-300/20" />
        <motion.div
          style={{ rotate }}
          className="absolute inset-[22%] rounded-full border border-dashed border-yellow-200/30"
        />
        {[0, 1, 2, 3].map((bar) => (
          <motion.div
            key={bar}
            style={{ height: barHeight }}
            className="absolute bottom-[16%] w-10 rounded-t-[18px] bg-gradient-to-t from-yellow-500/50 to-yellow-200/15"
            initial={false}
            animate={{ opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 2.4 + bar * 0.2, repeat: Number.POSITIVE_INFINITY }}
            ref={undefined}
          />
        ))}
        <div className="absolute bottom-[16%] left-[18%] w-10 rounded-t-[18px] bg-gradient-to-t from-yellow-500/50 to-yellow-200/15" style={{ height: "46%" }} />
        <div className="absolute bottom-[16%] left-[34%] w-10 rounded-t-[18px] bg-gradient-to-t from-yellow-500/50 to-yellow-200/15" style={{ height: "68%" }} />
        <div className="absolute bottom-[16%] left-[50%] w-10 rounded-t-[18px] bg-gradient-to-t from-yellow-500/50 to-yellow-200/15" style={{ height: "58%" }} />
        <div className="absolute bottom-[16%] left-[66%] w-10 rounded-t-[18px] bg-gradient-to-t from-yellow-500/50 to-yellow-200/15" style={{ height: "78%" }} />
      </motion.div>
    );
  }

  return (
    <motion.div style={{ rotate, scale }} className="relative h-full w-full">
      <div className="absolute inset-[16%] rounded-full border border-yellow-300/20" />
      <div className="absolute inset-[28%] rounded-full border border-yellow-200/20" />
      <div className="absolute inset-[40%] rounded-full border border-yellow-100/20" />
      <motion.div
        style={{ y }}
        className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300 shadow-[0_0_32px_rgba(250,204,21,0.6)]"
      />
      <div className="absolute left-1/2 top-[16%] h-[68%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-yellow-300/35 to-transparent" />
      <div className="absolute top-1/2 left-[16%] h-px w-[68%] -translate-y-1/2 bg-gradient-to-r from-transparent via-yellow-300/35 to-transparent" />
    </motion.div>
  );
}

function JourneyMoment({ item, index }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [72, -72]);
  const visualY = useTransform(scrollYProgress, [0, 1], [-28, 28]);

  return (
    <article ref={ref} className="relative min-h-[90vh] py-10">
      <div className="grid items-center gap-8 lg:grid-cols-[0.44fr_0.56fr]">
        <motion.div
          style={reduceMotion ? undefined : { y: cardY }}
          className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}
        >
          <TiltCard className="p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-yellow-200/70">
              {item.period} · chapter {item.step}
            </p>
            <h3 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              {item.title}
            </h3>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-300">{item.body}</p>
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

        <motion.div
          style={reduceMotion ? undefined : { y: visualY }}
          className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}
        >
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.05] p-6 shadow-glass backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.14),transparent_24%),radial-gradient(circle_at_80%_80%,rgba(245,158,11,0.1),transparent_22%)]" />
            <div className="relative h-[26rem]">
              <JourneyVisual item={item} progress={scrollYProgress} />
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}

export default function JourneySection({ items }) {
  return (
    <section id="journey" className="relative px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.26em] text-yellow-200/70">Scroll story</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
            A cleaner chronological journey, with motion carrying the story.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Start at the beginning, move through the bigger shifts, and let the visuals do more of the work.
          </p>
        </div>
        <div className="mt-10">
          {items.map((item, index) => (
            <JourneyMoment key={item.step} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
