'use client'

import { useState } from 'react'
import { T, Lang } from '@/lib/translations'

interface Props {
  lang: Lang
  onDismiss: () => void
}

export default function Banner({ lang, onDismiss }: Props) {
  const t = T[lang].banner
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  function handleDismiss() {
    setDismissed(true)
    onDismiss()
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-3 px-4 py-2.5 text-sm"
      style={{ background: '#020202', color: '#EDEDED' }}
    >
      <span className="relative flex h-2 w-2 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#22c55e' }} />
        <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#22c55e' }} />
      </span>
      <p className="font-dm text-center text-xs sm:text-sm">
        {t.text}
        <strong style={{ color: '#FF3319' }}>{t.highlight}</strong>
        {t.sub}
      </p>
      <a
        href="#contacto"
        onClick={handleDismiss}
        className="hidden sm:inline-flex items-center px-3 py-1 text-xs font-dm font-medium rounded transition-colors flex-shrink-0"
        style={{ background: '#FF3319', color: '#fff' }}
      >
        {t.cta}
      </a>
      <button
        onClick={handleDismiss}
        aria-label="Cerrar banner"
        className="ml-auto flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity"
        style={{ color: '#EDEDED' }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 1l12 12M13 1L1 13" />
        </svg>
      </button>
    </div>
  )
}
