import { T, Lang } from '@/lib/translations'

interface Props { lang: Lang }

export default function Manifesto({ lang }: Props) {
  const t = T[lang].manifesto

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: '#020202' }}
    >
      {/* Ghost SUR */}
      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 font-oswald font-bold select-none pointer-events-none leading-none"
        style={{
          fontSize: 'clamp(160px, 28vw, 420px)',
          color: '#EDEDED',
          opacity: 0.018,
        }}
        aria-hidden
      >
        SUR
      </span>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-4xl">
          <p
            className="font-oswald font-light leading-tight mb-2"
            style={{ fontSize: 'clamp(36px, 6vw, 80px)', color: '#A0A0A0' }}
          >
            {t.line1}
          </p>
          <p
            className="font-oswald leading-tight mb-12"
            style={{ fontSize: 'clamp(36px, 6vw, 80px)', color: '#EDEDED' }}
          >
            {t.line2a}
            <em style={{ color: '#FF3319', fontStyle: 'italic' }}>{t.line2b}</em>
          </p>
          <p
            className="font-dm font-light leading-relaxed mb-12 max-w-2xl"
            style={{ fontSize: 'clamp(16px, 1.8vw, 20px)', color: '#A0A0A0' }}
          >
            {t.body}
          </p>
          <p
            className="font-dm text-sm"
            style={{ color: '#3C3C3C' }}
          >
            {t.signature}
          </p>
        </div>
      </div>
    </section>
  )
}
