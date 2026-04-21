import { T, Lang } from '@/lib/translations'

interface Props { lang: Lang }

export default function About({ lang }: Props) {
  const t = T[lang].about

  return (
    <section style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div
              className="relative flex items-center justify-center"
              style={{
                border: '2px dashed var(--border)',
                minHeight: '480px',
                background: 'var(--warm)',
              }}
            >
              <span
                className="font-oswald font-bold select-none"
                style={{ fontSize: 'clamp(100px, 18vw, 220px)', color: 'var(--border)', lineHeight: 1 }}
                aria-hidden
              >
                B.
              </span>

              {/* Available badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#22c55e' }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#22c55e' }} />
                </span>
                <span className="font-dm text-xs" style={{ color: 'var(--ink)' }}>{t.available}</span>
              </div>

              {/* Location label */}
              <div
                className="absolute bottom-6 left-6 right-6 py-3 px-4"
                style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
              >
                <p className="font-dm text-sm" style={{ color: 'var(--mid)' }}>{t.location}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2
              className="font-oswald font-bold leading-none mb-2"
              style={{ fontSize: 'clamp(56px, 8vw, 100px)', color: 'var(--ink)' }}
            >
              {t.name}
            </h2>
            <p className="font-dm text-sm mb-8" style={{ color: 'var(--mid)' }}>
              {t.role}
            </p>

            <p className="font-dm font-light leading-relaxed mb-6" style={{ color: 'var(--mid)', fontSize: '16px' }}>
              {t.bio}
            </p>

            <div
              className="p-5 mb-8 border-l-2"
              style={{ background: 'var(--warm)', borderLeftColor: '#FF3319' }}
            >
              <p className="font-dm font-light text-sm leading-relaxed" style={{ color: 'var(--mid)' }}>
                {t.ai}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {t.tags.map(tag => (
                <span
                  key={tag}
                  className="font-dm text-xs px-2.5 py-1 border"
                  style={{ color: 'var(--mid)', borderColor: 'var(--border)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
