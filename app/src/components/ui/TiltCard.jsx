import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export default function TiltCard({ className = "", children }) {
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 180, damping: 18, mass: 0.6 });
  const rotateY = useSpring(0, { stiffness: 180, damping: 18, mass: 0.6 });
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const handleMove = (event) => {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    rotateY.set((px - 0.5) * 12);
    rotateX.set((0.5 - py) * 12);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareX.set(50);
    glareY.set(50);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] shadow-glass backdrop-blur-2xl ${className}`.trim()}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: glareX.to(
            (x) =>
              `radial-gradient(circle at ${x}% ${glareY.get()}%, rgba(255,255,255,0.22), transparent 34%)`,
          ),
        }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
