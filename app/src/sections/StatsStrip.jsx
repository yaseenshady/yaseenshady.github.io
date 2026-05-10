const stats = [
  { prefix: '',  value: '10+', label: 'years coding'     },
  { prefix: '',  value: '3×',  label: 'Microsoft intern' },
  { prefix: '−', value: '50%', label: 'P95 latency cut'  },
  { prefix: '',  value: '1',   label: 'SIGMOD citation'   },
  { prefix: '',  value: '100+',label: 'app downloads'    },
]

export default function StatsStrip() {
  return (
    <section className="px-6 py-20 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-[11px] font-semibold tracking-[0.32em] uppercase text-[#ffd60a]">
          Numbers with weight
        </p>
        <h2 className="mb-10 text-center text-[clamp(1.8rem,4vw,3rem)] font-black leading-[1.05] tracking-[-0.04em] text-[#f0ede4]">
          Real work leaves a mark.
        </h2>

        <div className="glass rounded-[2rem]">
          <div className="grid grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-3 sm:px-8 lg:grid-cols-5">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="mb-2 text-[2.4rem] font-black leading-none tracking-tight text-[#ffd60a]">
                  {s.prefix}{s.value}
                </div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[rgba(240,237,228,0.45)]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

