'use client'

import { useEffect, useRef, useState } from 'react'
import { T, Lang } from '@/lib/translations'
import Counter from '@/components/ui/Counter'

interface Props { lang: Lang }

const targets = [7, 43, 12]
const durations = [1600, 1400, 1100]
const prefixes = ['', '+', '']
const suffixes = ['€', '%', '+']

export default function Results({ lang }: Props) {
  const t = T[lang].results
  const [triggered, setTriggered] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden" style={{ background: '#FF3319' }}>
      {/* Ghost DATA */}
      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 font-oswald font-bold select-none pointer-events-none leading-none"
        style={{ fontSize: 'clamp(120px, 20vw, 320px)', color: '#fff', opacity: 0.08 }}
        aria-hidden
      >
        DATA
      </span>

      <div className="max-w-7xl mx-auto px-6 relative">
        <p className="font-oswald font-bold mb-2" style={{ fontSize: 'clamp(32px, 5vw, 60px)', color: '#fff' }}>
          {t.header}
        </p>
        <p className="font-dm text-sm mb-16" style={{ color: 'rgba(255,255,255,0.7)' }}>
          {t.client}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {t.stats.map((stat, i) => (
            <div key={stat.label}>
              <p className="font-dm text-xs uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {stat.label}
              </p>
              {stat.before && (
                <p className="font-oswald font-light line-through mb-1" style={{ fontSize: '24px', color: 'rgba(255,255,255,0.4)' }}>
                  {stat.before}
                </p>
              )}
              <p className="font-oswald font-bold leading-none mb-2" style={{ fontSize: 'clamp(56px, 8vw, 96px)', color: '#fff' }}>
                <Counter
                  target={targets[i]}
                  duration={durations[i]}
                  triggered={triggered}
                  prefix={prefixes[i]}
                  suffix={suffixes[i]}
                />
              </p>
              <p className="font-dm text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
