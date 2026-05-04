import { lazy, Suspense, useEffect, useMemo, useRef } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import HeroSection from "./sections/HeroSection";
import ProblemSection from "./sections/ProblemSection";
import JourneySection from "./sections/JourneySection";
import FeatureSystemSection from "./sections/FeatureSystemSection";
import WorkflowSection from "./sections/WorkflowSection";
import MetricsSection from "./sections/MetricsSection";
import CtaSection from "./sections/CtaSection";
import GlowButton from "./components/ui/GlowButton";
import { navItems } from "./content";

const SceneCanvas = lazy(() => import("./components/SceneCanvas"));

export default function App() {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef(null);
  const problemRef = useRef(null);
  const journeyRef = useRef(null);
  const featuresRef = useRef(null);
  const workflowRef = useRef(null);
  const metricsRef = useRef(null);
  const ctaRef = useRef(null);
  const sceneStateRef = useRef({
    progress: 0,
    sectionIndex: 0,
    sectionProgress: 0,
    mouse: { x: 0, y: 0 },
    reducedMotion: false
  });

  const sectionRefs = useMemo(
    () => [heroRef, problemRef, journeyRef, featuresRef, workflowRef, metricsRef, ctaRef],
    []
  );

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    sceneStateRef.current.progress = value;
  });

  useEffect(() => {
    sceneStateRef.current.reducedMotion = Boolean(reducedMotion);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      sceneStateRef.current.mouse.x = event.clientX / window.innerWidth - 0.5;
      sceneStateRef.current.mouse.y = event.clientY / window.innerHeight - 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reducedMotion]);

  useEffect(() => {
    let frame = 0;

    const updateSection = () => {
      const viewportCenter = window.innerHeight * 0.5;
      let activeIndex = 0;
      let localProgress = 0;

      sectionRefs.forEach((ref, index) => {
        const node = ref.current;
        if (!node) {
          return;
        }

        const rect = node.getBoundingClientRect();
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          activeIndex = index;
          localProgress = Math.min(
            1,
            Math.max(0, (viewportCenter - rect.top) / Math.max(rect.height, 1))
          );
        }
      });

      sceneStateRef.current.sectionIndex = activeIndex;
      sceneStateRef.current.sectionProgress = localProgress;
      frame = 0;
    };

    const handleScroll = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(updateSection);
    };

    updateSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [sectionRefs]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-white">
      <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.14),transparent_22%),linear-gradient(180deg,#040507_0%,#05070a_38%,#06070b_100%)]" />
      <div className="fixed inset-0 -z-20 bg-noise opacity-90" />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-[-20%] h-[50vh] bg-[radial-gradient(circle,rgba(125,211,252,0.16),transparent_60%)] blur-3xl" />
        <div className="absolute right-[-10%] top-[12%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.12),transparent_62%)] blur-3xl" />
        <div className="absolute left-[-10%] top-[55%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(134,239,172,0.12),transparent_60%)] blur-3xl" />
      </div>

      <Suspense fallback={null}>
        <SceneCanvas sceneStateRef={sceneStateRef} reducedMotion={reducedMotion} />
      </Suspense>

      <header className="pointer-events-none fixed inset-x-0 top-0 z-30 px-4 pt-4 sm:px-8">
        <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/35 px-4 py-3 shadow-glass backdrop-blur-2xl">
          <a href="#hero" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 font-display text-sm font-bold tracking-[0.18em] text-[#7dd3fc]">
              YS
            </span>
            <div>
              <strong className="block text-sm font-semibold text-white">Yaseen Shady</strong>
              <span className="text-xs uppercase tracking-[0.16em] text-slate-400">Lexoire launch system</span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:block">
            <GlowButton href="#cta" variant="ghost" className="px-4 py-2 text-[11px]">
              Contact
            </GlowButton>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <HeroSection sectionRef={heroRef} />
        <ProblemSection sectionRef={problemRef} />
        <JourneySection sectionRef={journeyRef} />
        <FeatureSystemSection sectionRef={featuresRef} />
        <WorkflowSection sectionRef={workflowRef} />
        <MetricsSection sectionRef={metricsRef} />
        <CtaSection sectionRef={ctaRef} />
      </main>

      <footer className="relative z-10 border-t border-white/10 px-5 py-10 text-center text-sm text-slate-500 sm:px-8">
        Yaseen Shady · Microsoft engineer · founder · AI systems builder
      </footer>
    </div>
  );
}
