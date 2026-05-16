import { T, Lang } from '@/lib/translations'

interface Props { lang: Lang }

export default function Pricing({ lang }: Props) {
  const t = T[lang].pricing

  return (
    <section id="precios" style={{ background: 'var(--warm)' }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2
          className="font-oswald font-bold uppercase mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: 'var(--ink)' }}
        >
          {t.title}
        </h2>
        <p className="font-dm font-light max-w-2xl mb-2 leading-relaxed" style={{ color: 'var(--mid)', fontSize: '16px' }}>
          {t.intro}
        </p>
        <p className="font-dm text-sm mb-16" style={{ color: 'var(--soft)' }}>
          {t.note}
        </p>

        {/* Calculator */}
        <div className="mb-16 p-8" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <h3 className="font-oswald font-medium text-xl mb-6" style={{ color: 'var(--ink)' }}>
            {t.calcTitle}
          </h3>
          <div className="space-y-0">
            {t.calcRows.map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-4"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <span className="font-dm text-sm" style={{ color: 'var(--mid)' }}>{row.label}</span>
                <span className="font-oswald font-medium" style={{ color: 'var(--ink)' }}>{row.value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between py-4">
              <span className="font-dm font-medium text-sm" style={{ color: 'var(--ink)' }}>
                {lang === 'es' ? 'TOTAL potencialmente perdido' : 'TOTAL potentially lost'}
              </span>
              <span className="font-oswald font-bold text-2xl" style={{ color: '#FF3319' }}>{t.calcTotal}</span>
            </div>
          </div>
          <p className="font-dm text-xs mt-4" style={{ color: 'var(--soft)' }}>
            {t.calcNote.replace('Una auditoría gratis', '<strong>Una auditoría gratis</strong>')}
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {t.plans.map((plan) => {
            const bg = plan.red ? '#FF3319' : plan.dark ? '#020202' : 'var(--card)'
            const textColor = (plan.red || plan.dark) ? '#EDEDED' : 'var(--ink)'
            const midColor = plan.red ? 'rgba(255,255,255,0.75)' : plan.dark ? '#A0A0A0' : 'var(--mid)'
            const borderColor = plan.red ? 'rgba(255,255,255,0.2)' : plan.dark ? '#1E1E1E' : 'var(--border)'

            return (
              <div
                key={plan.name}
                className="relative p-8 flex flex-col"
                style={{ background: bg, border: `1px solid ${borderColor}` }}
              >
                {plan.badge && (
                  <span
                    className="absolute -top-3 left-8 font-dm text-xs px-3 py-1"
                    style={{
                      background: plan.red ? '#fff' : '#FF3319',
                      color: plan.red ? '#FF3319' : '#fff',
                    }}
                  >
                    {plan.badge}
                  </span>
                )}

                <p className="font-dm text-xs uppercase tracking-widest mb-2" style={{ color: midColor }}>
                  {plan.period}
                </p>
                <h3 className="font-oswald font-bold text-2xl mb-4" style={{ color: textColor }}>
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="font-oswald font-bold" style={{ fontSize: '48px', color: textColor, lineHeight: 1 }}>
                    {plan.price}
                  </span>
                  <span className="font-dm text-sm ml-1" style={{ color: midColor }}>
                    {plan.sub}
                  </span>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span style={{ color: plan.red ? '#fff' : '#FF3319', marginTop: '2px' }}>✓</span>
                      <span className="font-dm text-sm" style={{ color: midColor }}>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Spots indicator */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#22c55e' }} />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: '#22c55e' }} />
                  </span>
                  <span className="font-dm text-xs" style={{ color: midColor }}>{plan.spots}</span>
                </div>

                <a
                  href="#contacto"
                  className="block text-center py-3 font-dm font-medium text-sm transition-opacity hover:opacity-80"
                  style={{
                    background: plan.red ? '#fff' : plan.dark ? '#FF3319' : '#020202',
                    color: plan.red ? '#FF3319' : '#fff',
                  }}
                >
                  {lang === 'es' ? 'Quiero este plan →' : 'I want this plan →'}
                </a>
              </div>
            )
          })}
        </div>

        <p className="font-dm text-sm text-center leading-relaxed" style={{ color: 'var(--mid)', maxWidth: '600px', margin: '0 auto' }}>
          {t.footNote}
        </p>
      </div>
    </section>
  )
}
