import { T, Lang } from '@/lib/translations'

interface Props { lang: Lang }

const googleColors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#34A853', '#EA4335']

export default function Certifications({ lang }: Props) {
  const t = T[lang].certifications

  return (
    <section style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-baseline gap-3 mb-4">
          <h2
            className="font-oswald font-bold uppercase"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: 'var(--ink)' }}
          >
            {t.title}
          </h2>
          <span
            className="font-oswald font-light uppercase"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: 'var(--mid)' }}
          >
            {t.subtitle}
          </span>
        </div>
        <p className="font-dm text-sm mb-12" style={{ color: 'var(--mid)', maxWidth: '480px' }}>
          {t.note}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {t.items.map((cert, i) => (
            <div
              key={cert.label}
              className="relative p-6"
              style={{
                background: cert.active ? 'var(--card)' : 'transparent',
                border: cert.active
                  ? `1px solid var(--border)`
                  : '1px dashed var(--border)',
              }}
            >
              {cert.active ? (
                <>
                  {/* Google G colored */}
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="font-oswald font-bold text-2xl"
                      style={{ color: googleColors[i] }}
                    >
                      G
                    </span>
                    <span className="font-dm text-xs uppercase tracking-widest" style={{ color: 'var(--soft)' }}>
                      oogle
                    </span>
                  </div>
                  <p className="font-dm font-medium text-sm mb-3" style={{ color: 'var(--ink)' }}>
                    {cert.label}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#22c55e' }} />
                    <span className="font-dm text-xs" style={{ color: '#22c55e' }}>{t.verified}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-oswald font-bold text-2xl" style={{ color: 'var(--border)' }}>G</span>
                    <span className="font-dm text-xs uppercase tracking-widest" style={{ color: 'var(--border)' }}>oogle</span>
                  </div>
                  <p className="font-dm font-medium text-sm mb-3" style={{ color: 'var(--soft)' }}>
                    {cert.label}
                  </p>
                  <span className="font-dm text-xs" style={{ color: 'var(--soft)' }}>{t.soon}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
