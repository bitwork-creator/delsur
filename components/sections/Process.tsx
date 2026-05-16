import { T, Lang } from '@/lib/translations'

interface Props { lang: Lang }

export default function Process({ lang }: Props) {
  const t = T[lang].process

  return (
    <section style={{ background: 'var(--warm)' }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2
          className="font-oswald font-bold uppercase mb-16"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: 'var(--ink)' }}
        >
          {t.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {t.steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connector line (desktop) */}
              {i < t.steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-px"
                  style={{ background: 'var(--border)', zIndex: 0 }}
                />
              )}

              <span
                className="block font-oswald font-bold mb-4"
                style={{ fontSize: '48px', color: 'var(--border)', lineHeight: 1 }}
              >
                {step.num}
              </span>
              <h3
                className="font-oswald font-medium mb-3"
                style={{ fontSize: '20px', color: 'var(--ink)' }}
              >
                {step.title}
              </h3>
              <p
                className="font-dm font-light text-sm leading-relaxed"
                style={{ color: 'var(--mid)' }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* AI block */}
        <div
          className="p-8 border-l-2 mt-12"
          style={{ background: 'var(--card)', borderLeftColor: '#FF3319' }}
        >
          <div className="flex items-start gap-6">
            <span
              className="font-oswald font-bold text-lg flex-shrink-0 px-3 py-1"
              style={{ background: '#FF3319', color: '#fff' }}
            >
              {t.ai.label}
            </span>
            <div>
              <p className="font-dm font-medium mb-2" style={{ color: 'var(--ink)' }}>
                {t.ai.title}
              </p>
              <p className="font-dm font-light text-sm leading-relaxed" style={{ color: 'var(--mid)' }}>
                {t.ai.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
