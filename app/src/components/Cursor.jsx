import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  // Dot: snappy, nearly instant
  const dotX = useMotionValue(-300)
  const dotY = useMotionValue(-300)

  // Ring: slow spring lag
  const ringTargetX = useMotionValue(-300)
  const ringTargetY = useMotionValue(-300)
  const ringX = useSpring(ringTargetX, { stiffness: 90, damping: 18, restDelta: 0.5 })
  const ringY = useSpring(ringTargetY, { stiffness: 90, damping: 18, restDelta: 0.5 })

  useEffect(() => {
    // Touch devices: don't mount cursor, don't hide OS cursor
    if (typeof window === 'undefined') return
    if (window.matchMedia('(hover: none)').matches) return

    document.documentElement.style.cursor = 'none'

    let first = true

    const onMove = (e) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)

      if (first) {
        // Teleport ring to cursor on first move (no fly-in animation)
        ringTargetX.set(e.clientX)
        ringTargetY.set(e.clientY)
        ringX.set(e.clientX)
        ringY.set(e.clientY)
        first = false
      } else {
        ringTargetX.set(e.clientX)
        ringTargetY.set(e.clientY)
      }

      if (!visible) setVisible(true)
    }

    const onOver = (e) => {
      setHovered(!!e.target.closest('a, button, [role="button"], [data-hover]'))
    }

    const onDown = () => setClicked(true)
    const onUp   = () => setClicked(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)

    return () => {
      document.documentElement.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      {/* Dot — instant tracking */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            scale:           clicked ? 0.3 : hovered ? 1.8 : 1,
            backgroundColor: hovered ? '#ffffff' : '#ffd60a',
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="w-[6px] h-[6px] rounded-full bg-[#ffd60a]"
        />
      </motion.div>

      {/* Ring — slow spring lag */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            scale:   clicked ? 0.6 : hovered ? 2.4 : 1,
            opacity: hovered ? 0.7 : 0.22,
          }}
          transition={{ type: 'spring', stiffness: 140, damping: 22 }}
          className="w-9 h-9 rounded-full border border-[#ffd60a]"
          style={{
            boxShadow: hovered ? '0 0 18px rgba(255,214,10,0.2)' : 'none',
          }}
        />
      </motion.div>
    </>
  )
}
