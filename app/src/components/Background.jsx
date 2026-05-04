import { useScroll, useTransform, useSpring, motion } from 'framer-motion'

export default function Background() {
  const { scrollYProgress } = useScroll()

  // Spring-smooth scroll progress (reduces jitter on fast scroll)
  const smooth = useSpring(scrollYProgress, { stiffness: 40, damping: 20 })

  // Orb 1 — top-left warm gold, drifts down-right as you scroll
  const orb1Y = useTransform(smooth, [0, 1], ['-15%', '35%'])
  const orb1X = useTransform(smooth, [0, 1], ['-12%', '8%'])
  const orb1Op = useTransform(smooth, [0, 0.4, 0.8, 1], [0.9, 0.6, 0.4, 0.2])

  // Orb 2 — top-right muted white, drifts down-left
  const orb2Y = useTransform(smooth, [0, 1], ['-8%', '50%'])
  const orb2X = useTransform(smooth, [0, 1], ['10%', '-5%'])
  const orb2Op = useTransform(smooth, [0, 0.5, 1], [0.5, 0.7, 0.3])

  // Orb 3 — mid-page amber, rises as you scroll down
  const orb3Y = useTransform(smooth, [0, 1], ['60%', '20%'])
  const orb3X = useTransform(smooth, [0, 1], ['50%', '30%'])
  const orb3Op = useTransform(smooth, [0, 0.3, 0.7, 1], [0, 0.6, 0.7, 0.4])

  // Orb 4 — bottom accent, swells in at end
  const orb4Y = useTransform(smooth, [0, 1], ['90%', '65%'])
  const orb4Op = useTransform(smooth, [0, 0.6, 1], [0, 0.3, 0.6])

  const ribbonY = useTransform(smooth, [0, 1], ['-10%', '18%'])
  const ribbonRotate = useTransform(smooth, [0, 1], ['-10deg', '12deg'])
  const glassY = useTransform(smooth, [0, 1], ['8%', '-18%'])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050505]" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,214,10,0.08),transparent_44%),radial-gradient(ellipse_at_18%_70%,rgba(14,165,233,0.08),transparent_40%),radial-gradient(ellipse_at_84%_58%,rgba(244,114,182,0.06),transparent_38%)]" />

      {/* Dot grid — very subtle techy texture */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <motion.div
        style={{ y: ribbonY, rotate: ribbonRotate }}
        className="absolute left-1/2 top-[8%] h-[28rem] w-[120vw] -translate-x-1/2 rounded-[50%] opacity-60 blur-2xl"
      >
        <div
          className="h-full w-full"
          style={{
            background: 'conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(255,214,10,0.10) 70deg, rgba(56,189,248,0.08) 150deg, transparent 250deg, rgba(255,255,255,0.05) 320deg, transparent 360deg)',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: glassY }}
        className="absolute inset-x-[8%] top-[18%] h-[34rem] rounded-[999px] border border-white/[0.035] bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.035),transparent)] blur-[1px]"
      />

      {/* Orb 1 — large warm gold anchor */}
      <motion.div
        style={{ y: orb1Y, x: orb1X, opacity: orb1Op }}
        className="absolute -top-[20%] -left-[15%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full"
        css={{ background: 'radial-gradient(circle at 40% 40%, rgba(255,214,10,0.12) 0%, rgba(255,183,3,0.06) 40%, transparent 70%)', filter: 'blur(80px)' }}
      >
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle at 40% 40%, rgba(255,214,10,0.12) 0%, rgba(255,183,3,0.06) 40%, transparent 70%)', filter: 'blur(80px)' }} />
      </motion.div>

      {/* Orb 2 — cool white top-right */}
      <motion.div
        style={{ y: orb2Y, x: orb2X, opacity: orb2Op }}
        className="absolute -top-[10%] right-0 w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full"
      >
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,214,10,0.03) 50%, transparent 70%)', filter: 'blur(100px)' }} />
      </motion.div>

      {/* Orb 3 — mid amber, appears as you scroll */}
      <motion.div
        style={{ y: orb3Y, x: orb3X, opacity: orb3Op }}
        className="absolute top-0 left-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full"
      >
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,183,3,0.09) 0%, transparent 70%)', filter: 'blur(90px)' }} />
      </motion.div>

      {/* Orb 4 — bottom warm glow, swells in near CTA */}
      <motion.div
        style={{ y: orb4Y, opacity: orb4Op }}
        className="absolute bottom-0 left-1/4 w-[80vw] h-[40vw] max-w-[900px] max-h-[500px] rounded-full"
      >
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(255,214,10,0.07) 0%, rgba(255,183,3,0.04) 50%, transparent 70%)', filter: 'blur(80px)' }} />
      </motion.div>

      {/* Subtle top edge line highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,214,10,0.15)] to-transparent" />
    </div>
  )
}
