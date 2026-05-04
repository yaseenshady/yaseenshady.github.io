import { motion } from "framer-motion";
import GlowButton from "../components/ui/GlowButton";
import GlassCard from "../components/ui/GlassCard";

export default function CtaSection() {
  return (
    <section id="cta" className="relative px-6 pb-28 pt-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <GlassCard className="relative overflow-hidden px-7 py-12 sm:px-10 sm:py-14 lg:px-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(250,204,21,0.2),transparent_26%),radial-gradient(circle_at_82%_24%,rgba(245,158,11,0.2),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.12),transparent_40%)]" />
          <motion.div
            aria-hidden="true"
            animate={{ scale: [1, 1.12, 1], opacity: [0.28, 0.42, 0.28] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/20 blur-[110px]"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-yellow-200/70">Final frame</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                First the life journey. Then the things I do for the love of it.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                The page is lighter on copy now, heavier on motion, and built to move like one continuous story.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <GlowButton href="#top">Back to top</GlowButton>
              <GlowButton href="#hobbies" variant="secondary">
                See hobbies
              </GlowButton>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
