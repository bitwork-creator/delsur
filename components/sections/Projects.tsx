import { T, Lang } from '@/lib/translations'

interface Props { lang: Lang }

export default function Projects({ lang }: Props) {
  const t = T[lang].projects

  return (
    <section id="proyectos" style={{ background: 'var(--warm)' }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2
          className="font-oswald font-bold uppercase mb-16"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: 'var(--ink)' }}
        >
          {t.title}
        </h2>

        <div className="space-y-0">
          {t.items.map((proj, i) => {
            const isEven = i % 2 === 1
            return (
              <div
                key={proj.num}
                className="grid grid-cols-1 md:grid-cols-2 gap-0"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                {/* Image — alternates position */}
                <div
                  className={`relative h-64 md:h-auto flex items-center justify-center ${isEven ? 'md:order-2' : ''}`}
                  style={{ background: 'var(--card)', minHeight: '320px' }}
                >
                  {/* Ghost initials placeholder */}
                  <span
                    className="font-oswald font-bold select-none"
                    style={{
                      fontSize: 'clamp(80px, 14vw, 180px)',
                      color: 'var(--border)',
                      lineHeight: 1,
                    }}
                    aria-hidden
                  >
                    {proj.initials}
                  </span>
                  {/* Category chip */}
                  <span
                    className="absolute top-6 left-6 font-dm text-xs px-2.5 py-1"
                    style={{ background: '#FF3319', color: '#fff' }}
                  >
                    {proj.cat}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`p-8 md:p-12 flex flex-col justify-center ${isEven ? 'md:order-1' : ''}`}
                  style={{ background: 'var(--bg)' }}
                >
                  <span className="font-oswald font-light text-5xl mb-4" style={{ color: 'var(--border)' }}>
                    {proj.num}
                  </span>
                  <h3
                    className="font-oswald font-bold mb-2"
                    style={{ fontSize: 'clamp(32px, 4vw, 52px)', color: 'var(--ink)' }}
                  >
                    {proj.title}
                  </h3>
                  <p className="font-dm text-sm mb-4" style={{ color: 'var(--mid)' }}>
                    {proj.sub}
                  </p>
                  <p className="font-dm font-light text-sm leading-relaxed mb-6" style={{ color: 'var(--mid)' }}>
                    {proj.desc}
                  </p>
                  <p className="font-oswald font-medium text-xl mb-6" style={{ color: '#FF3319' }}>
                    {proj.result}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-dm text-xs px-2.5 py-1 border"
                        style={{ color: 'var(--soft)', borderColor: 'var(--border)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}

          {/* Empty slot */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-0"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <a
              href="#contacto"
              className="h-64 md:h-auto flex flex-col items-center justify-center gap-4 transition-opacity hover:opacity-70"
              style={{
                border: '2px dashed var(--border)',
                background: 'transparent',
                minHeight: '280px',
                textDecoration: 'none',
              }}
            >
              <span
                className="font-oswald font-light"
                style={{ fontSize: 'clamp(60px, 10vw, 120px)', color: 'var(--border)', lineHeight: 1 }}
              >
                +
              </span>
              <span className="font-dm text-sm" style={{ color: 'var(--mid)' }}>
                {t.slot.label}
              </span>
              <span
                className="font-dm text-xs px-3 py-1.5 border"
                style={{ color: '#FF3319', borderColor: '#FF3319' }}
              >
                {t.slot.cta}
              </span>
            </a>
            <div style={{ background: 'var(--warm)', minHeight: '280px' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
