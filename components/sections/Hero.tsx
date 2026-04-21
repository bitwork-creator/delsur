'use client'

import { T, Lang } from '@/lib/translations'

interface Props {
  lang: Lang
  bannerVisible: boolean
}

const chips = [
  { label: 'Google Ads', on: true },
  { label: 'GTM', on: true },
  { label: 'GA4', on: true },
  { label: 'CRO', on: false },
  { label: 'Next.js', on: false },
  { label: 'WordPress', on: false },
]

export default function Hero({ lang, bannerVisible }: Props) {
  const t = T[lang].hero
  const topOffset = bannerVisible ? 'calc(40px + 64px)' : '64px'

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'var(--bg)', paddingTop: topOffset }}
    >
      {/* Dot pattern (light mode only) */}
      <div
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.5,
        }}
      />

      {/* Ghost "SUR" */}
      <span
        className="absolute bottom-0 left-0 font-oswald font-bold select-none pointer-events-none leading-none"
        style={{
          fontSize: 'clamp(140px, 30vw, 400px)',
          color: 'var(--ink)',
          opacity: 0.018,
          bottom: '-40px',
        }}
        aria-hidden
      >
        SUR
      </span>

      {/* Service chips — top right, desktop only */}
      <div className="absolute top-24 right-8 hidden lg:flex flex-col gap-2" style={{ zIndex: 10 }}>
        {chips.map(chip => (
          <span
            key={chip.label}
            className="font-dm text-xs px-2.5 py-1 rounded-sm border"
            style={{
              background: chip.on ? '#FF3319' : 'transparent',
              color: chip.on ? '#fff' : 'var(--mid)',
              borderColor: chip.on ? '#FF3319' : 'var(--border)',
            }}
          >
            {chip.label}
          </span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#22c55e' }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#22c55e' }} />
          </span>
          <span className="font-dm text-sm" style={{ color: 'var(--mid)' }}>
            {t.eyebrow} · <strong style={{ color: 'var(--ink)' }}>{t.available}</strong>
          </span>
        </div>

        {/* H1 */}
        <h1
          className="font-oswald leading-none mb-8"
          style={{ fontSize: 'clamp(52px, 9vw, 130px)' }}
        >
          <span className="block font-light" style={{ color: 'var(--ink)' }}>{t.h1a}</span>
          <span className="block font-bold" style={{ color: 'var(--ink)' }}>{t.h1b}</span>
          <span className="block font-light" style={{ color: '#FF3319' }}>{t.h1c}</span>
          <span className="block font-bold" style={{ color: 'var(--ink)' }}>{t.h1d}</span>
        </h1>

        {/* Sub */}
        <p
          className="font-dm font-light max-w-2xl mb-10 leading-relaxed"
          style={{ fontSize: 'clamp(15px, 1.8vw, 20px)', color: 'var(--mid)' }}
          dangerouslySetInnerHTML={{
            __html: t.sub.replace(
              /resultados reales, no métricas de vanidad\.|real results, not vanity metrics\./,
              m => `<strong style="color:var(--ink)">${m}</strong>`
            ),
          }}
        />

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center px-6 py-3.5 font-dm font-medium text-sm transition-colors"
            style={{ background: '#FF3319', color: '#fff' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#E02200')}
            onMouseLeave={e => (e.currentTarget.style.background = '#FF3319')}
          >
            {t.cta1}
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center px-6 py-3.5 font-dm font-medium text-sm border transition-colors"
            style={{ color: 'var(--ink)', borderColor: 'var(--border)', background: 'transparent' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--ink)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            {t.cta2}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-6 flex items-center gap-2 opacity-40">
        <div
          className="w-px h-10"
          style={{ background: 'var(--mid)' }}
        />
      </div>
    </section>
  )
}
