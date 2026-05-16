'use client'

import { Lang } from '@/lib/translations'

interface Props {
  lang: Lang
  setLang: (l: Lang) => void
}

export default function LangToggle({ lang, setLang }: Props) {
  return (
    <div className="flex items-center text-xs font-dm font-medium" style={{ color: 'var(--mid)' }}>
      {(['es', 'en'] as Lang[]).map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && (
            <span className="mx-1" style={{ color: 'var(--soft)' }}>|</span>
          )}
          <button
            onClick={() => setLang(l)}
            className="px-1.5 py-0.5 rounded transition-colors uppercase tracking-wider"
            style={{
              background: lang === l ? '#FF3319' : 'transparent',
              color: lang === l ? '#fff' : 'var(--mid)',
            }}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  )
}
