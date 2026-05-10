import Navbar           from './components/Navbar'
import HeroSection      from './sections/HeroSection'
import AboutSection     from './sections/AboutSection'
import ChronicleSection from './sections/ChronicleSection'
import StatsStrip       from './sections/StatsStrip'
import BuildsSection    from './sections/BuildsSection'
import CtaSection       from './sections/CtaSection'

export default function App() {
  return (
    <div className="bg-[#050505] text-[#f0ede4]" style={{ overflowX: 'clip' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ChronicleSection />
      <StatsStrip />
      <BuildsSection />
      <CtaSection />
    </div>
  )
}
