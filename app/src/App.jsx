import { lazy, Suspense, useMemo, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  featureCards,
  hero,
  journeyCards,
  metrics,
  problemCards,
  workPanels,
} from "./content";
import CtaSection from "./sections/CtaSection";
import FeaturesSection from "./sections/FeaturesSection";
import HeroSection from "./sections/HeroSection";
import JourneySection from "./sections/JourneySection";
import MetricsSection from "./sections/MetricsSection";
import ProblemSection from "./sections/ProblemSection";
import ProductSection from "./sections/ProductSection";

const SceneCanvas = lazy(() => import("./components/SceneCanvas"));

export default function App() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const [sceneProgress, setSceneProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setSceneProgress(latest);
  });

  const ambientShift = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const gridOpacity = useTransform(scrollYProgress, [0, 1], [0.24, 0.08]);

  const navigation = useMemo(
    () => [
      { label: "Story", href: "#journey" },
      { label: "Work", href: "#selected-work" },
      { label: "CTA", href: "#cta" },
    ],
    [],
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          style={{ y: ambientShift }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(121,228,255,0.12),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(155,140,255,0.14),transparent_24%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_20%)]"
        />
        <motion.div
          style={{ opacity: gridOpacity }}
          className="absolute inset-0 bg-grid bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]"
        />
        {!reduceMotion && (
          <Suspense fallback={null}>
            <SceneCanvas progress={sceneProgress} />
          </Suspense>
        )}
      </div>

      <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/20 px-5 py-3 shadow-glass backdrop-blur-2xl">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
            Yaseen Shady
          </a>
          <nav className="hidden items-center gap-5 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-[0.24em] text-slate-300 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <HeroSection content={hero} scrollYProgress={scrollYProgress} />
        <ProblemSection items={problemCards} />
        <ProductSection items={workPanels} />
        <FeaturesSection items={featureCards} />
        <JourneySection items={journeyCards} />
        <MetricsSection items={metrics} />
        <CtaSection />
      </main>
    </div>
  );
}
