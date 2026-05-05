import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const EASE = [0.22, 1, 0.36, 1]

const stats = [
  { prefix: '',  value: 10,  suffix: '+', label: 'years coding'      },
  { prefix: '',  value: 3,   suffix: '×', label: 'Microsoft intern'  },
  { prefix: '−', value: 50,  suffix: '%', label: 'P95 latency cut'   },
  { prefix: '',  value: 1,   suffix: '',  label: 'SIGMOD citation'    },
  { prefix: '',  value: 100, suffix: '+', label: 'app downloads'     },
]

function Counter({ target, prefix, suffix, duration = 1.6 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
      else setCount(target)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  )
}

export default function StatsStrip() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,214,10,0.15)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,214,10,0.15)] to-transparent" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-[11px] font-semibold tracking-[0.32em] uppercase text-[#ffd60a]">
            Numbers with weight
          </p>
          <h2 className="text-[clamp(2rem,4.5vw,3.4rem)] font-black leading-[1.05] tracking-[-0.04em] text-[#f0ede4]">
            Real work leaves a mark.
          </h2>
        </motion.div>

        <div className="glass-flow rounded-[2rem]">
          <div className="grid grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-[rgba(255,255,255,0.07)] sm:px-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="text-center lg:px-6"
              >
                <div className="mb-2 text-[2.6rem] font-black leading-none tracking-tight text-[#ffd60a]">
                  <Counter
                    target={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    duration={1.4 + i * 0.1}
                  />
                </div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[rgba(240,237,228,0.45)]">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
