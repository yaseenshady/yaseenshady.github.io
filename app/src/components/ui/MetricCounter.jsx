import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function MetricCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (!inView) return undefined;

    if (reduceMotion) {
      count.set(value);
      return undefined;
    }

    const controls = animate(count, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [count, inView, reduceMotion, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[28px] border border-white/10 bg-white/[0.05] px-6 py-7 shadow-glass backdrop-blur-2xl"
    >
      <div className="text-4xl font-semibold tracking-[-0.04em] text-white">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <p className="mt-3 max-w-[16ch] text-sm text-slate-300">{label}</p>
    </motion.div>
  );
}
