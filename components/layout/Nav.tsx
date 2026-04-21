'use client'

import { useState, useEffect } from 'react'
import { T, Lang } from '@/lib/translations'
import ThemeToggle from '@/components/ui/ThemeToggle'
import LangToggle from '@/components/ui/LangToggle'

interface Props {
  lang: Lang
  setLang: (l: Lang) => void
  bannerVisible: boolean
}

export default function Nav({ lang, setLang, bannerVisible }: Props) {
  const t = T[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navTop = bannerVisible ? '40px' : '0px'

  return (
    <nav
      className="fixed left-0 right-0 z-40 transition-all duration-300"
      style={{
        top: navTop,
        background: scrolled ? 'color-mix(in srgb, var(--bg) 85%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-oswald font-bold text-xl tracking-tight" style={{ color: 'var(--ink)' }}>
          DELSUR<span style={{ color: '#FF3319' }}>.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {t.links.map((link, i) => (
            <li key={link}>
              <a
                href={t.hrefs[i]}
                className="font-dm text-sm transition-colors hover:opacity-100"
                style={{ color: 'var(--mid)' }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <LangToggle lang={lang} setLang={setLang} />
          <ThemeToggle />
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-dm font-medium rounded-sm transition-colors"
            style={{ background: '#FF3319', color: '#fff' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#E02200')}
            onMouseLeave={e => (e.currentTarget.style.background = '#FF3319')}
          >
            {t.cta}
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{ color: 'var(--ink)' }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M3 3l16 16M19 3L3 19" />
              ) : (
                <>
                  <path d="M3 6h16M3 11h16M3 16h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
        >
          <ul className="px-6 py-4 flex flex-col gap-4">
            {t.links.map((link, i) => (
              <li key={link}>
                <a
                  href={t.hrefs[i]}
                  className="font-dm text-sm block py-1"
                  style={{ color: 'var(--ink)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="inline-flex items-center px-4 py-2 text-xs font-dm font-medium"
                style={{ background: '#FF3319', color: '#fff' }}
                onClick={() => setMenuOpen(false)}
              >
                {t.cta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
