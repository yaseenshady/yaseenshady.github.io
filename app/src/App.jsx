import { useReducedMotion } from 'framer-motion'
import Navbar        from './components/Navbar'
import HeroSection   from './sections/HeroSection'
import AboutSection  from './sections/AboutSection'
import WorkSection   from './sections/WorkSection'
import BuildsSection from './sections/BuildsSection'
import LifeSection   from './sections/LifeSection'
import CtaSection    from './sections/CtaSection'

export default function App() {
  const reduceMotion = useReducedMotion()
  return (
    <div className="relative bg-[#050505] text-[#f0ede4] overflow-x-hidden">
      <Navbar />
      <HeroSection   reduceMotion={reduceMotion} />
      <AboutSection  reduceMotion={reduceMotion} />
      <WorkSection   reduceMotion={reduceMotion} />
      <BuildsSection reduceMotion={reduceMotion} />
      <LifeSection   reduceMotion={reduceMotion} />
      <CtaSection    reduceMotion={reduceMotion} />
    </div>
  )
}
