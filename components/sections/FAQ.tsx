'use client'

import { useState } from 'react'
import { T, Lang } from '@/lib/translations'

interface Props { lang: Lang }

export default function FAQ({ lang }: Props) {
  const t = T[lang].faq
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={{ background: 'var(--card)' }}>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h2
          className="font-oswald font-bold uppercase mb-12"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: 'var(--ink)' }}
        >
          {t.title}
        </h2>

        <div className="space-y-0">
          {t.items.map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <button
                className="w-full flex items-center justify-between py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-dm font-medium text-sm pr-8" style={{ color: 'var(--ink)' }}>
                  {item.q}
                </span>
                <span
                  className="flex-shrink-0 transition-transform duration-300 text-xl font-light"
                  style={{
                    color: '#FF3319',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '300px' : '0px' }}
              >
                <p className="font-dm font-light text-sm leading-relaxed pb-5" style={{ color: 'var(--mid)' }}>
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
