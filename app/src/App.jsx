import { useReducedMotion } from 'framer-motion'
import Navbar           from './components/Navbar'
import HeroSection      from './sections/HeroSection'
import ChronicleSection from './sections/ChronicleSection'
import BuildsSection    from './sections/BuildsSection'
import LifeSection      from './sections/LifeSection'
import CtaSection       from './sections/CtaSection'

export default function App() {
  const reduceMotion = useReducedMotion()
  return (
    <div className="relative bg-[#050505] text-[#f0ede4] overflow-x-hidden">

      {/* ── Global floating glass orbs (background atmosphere) ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        {/* Top-left warm orb */}
        <div className="orb-1 absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,214,10,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        {/* Top-right cool orb */}
        <div className="orb-2 absolute -top-32 -right-64 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        {/* Mid-page gold orb */}
        <div className="orb-3 absolute top-[55%] left-[60%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,183,3,0.06) 0%, transparent 70%)', filter: 'blur(70px)' }} />
        {/* Bottom warm fill */}
        <div className="orb-1 absolute bottom-0 left-1/3 w-[800px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(255,214,10,0.05) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection      reduceMotion={reduceMotion} />
        <ChronicleSection reduceMotion={reduceMotion} />
        <BuildsSection    reduceMotion={reduceMotion} />
        <LifeSection      reduceMotion={reduceMotion} />
        <CtaSection       reduceMotion={reduceMotion} />
      </div>
    </div>
  )
}
