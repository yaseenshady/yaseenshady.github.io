import { useReducedMotion } from 'framer-motion'
import Navbar           from './components/Navbar'
import Background       from './components/Background'
import Cursor           from './components/Cursor'
import HeroSection      from './sections/HeroSection'
import ChronicleSection from './sections/ChronicleSection'
import StatsStrip       from './sections/StatsStrip'
import BuildsSection    from './sections/BuildsSection'
import LifeSection      from './sections/LifeSection'
import CtaSection       from './sections/CtaSection'

export default function App() {
  const reduceMotion = useReducedMotion()
  return (
    <div className="relative bg-[#050505] text-[#f0ede4] overflow-x-hidden">
      <Cursor />
      <Background />
      <div className="relative z-10">
        <Navbar />
        <HeroSection      reduceMotion={reduceMotion} />
        <ChronicleSection reduceMotion={reduceMotion} />
        <StatsStrip />
        <BuildsSection    reduceMotion={reduceMotion} />
        <LifeSection      reduceMotion={reduceMotion} />
        <CtaSection       reduceMotion={reduceMotion} />
      </div>
    </div>
  )
}
