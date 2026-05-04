import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useMemo } from "react";
import GlowButton from "../components/ui/GlowButton";
import GlassCard from "../components/ui/GlassCard";

export default function HeroSection({ content, scrollYProgress }) {
  const reduceMotion = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.72]);
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.7 });

  const floatingCards = useMemo(
    () => [
      {
        title: "Building signal",
        text: "Designing interfaces that hold depth without collapsing into noise.",
        position: "left-0 top-6",
      },
      {
        title: "Shipping taste",
        text: "Product-minded engineering with motion, systems, and narrative built together.",
        position: "right-0 top-28",
      },
      {
        title: "Staying personal",
        text: "The story starts with the person behind the work, not a generic SaaS shell.",
        position: "left-16 bottom-0",
      },
    ],
    [],
  );

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={reduceMotion ? undefined : { y: springY, opacity }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.7rem] uppercase tracking-[0.26em] text-slate-300 backdrop-blur-xl">
            {content.eyebrow}
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-white sm:text-6xl lg:text-[6.5rem]">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {content.body}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">{content.subcopy}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <GlowButton href={content.primaryAction.href}>{content.primaryAction.label}</GlowButton>
            <GlowButton href={content.secondaryAction.href} variant="secondary">
              {content.secondaryAction.label}
            </GlowButton>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-slate-300">
            {content.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur-xl"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 36 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[32rem]"
        >
          <GlassCard className="absolute inset-x-10 top-16 p-8 lg:inset-x-14">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-yellow-200/70">Personal signal</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-white">
                  Scroll-led story cards, backed by a real spatial system.
                </h2>
              </div>
              <div className="rounded-full border border-yellow-300/25 bg-yellow-300/[0.08] px-3 py-1 text-xs uppercase tracking-[0.24em] text-yellow-100">
                live motion
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {content.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[22px] border border-white/10 bg-black/20 px-4 py-5"
                >
                  <div className="text-3xl font-semibold tracking-[-0.06em] text-white">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          {floatingCards.map((card, index) => (
            <motion.div
              key={card.title}
              className={`absolute w-64 ${card.position}`}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, index % 2 === 0 ? -10 : 10, 0],
                      rotate: [0, index % 2 === 0 ? -2 : 2, 0],
                    }
              }
              transition={{
                duration: 8 + index,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <GlassCard className="p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-yellow-200/70">{card.title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-200">{card.text}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
