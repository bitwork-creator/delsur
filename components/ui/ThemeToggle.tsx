'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  function toggle() {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    setDark(next)
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-10 h-5 rounded-full border transition-colors duration-300 flex items-center px-0.5"
      style={{ borderColor: 'var(--border)', background: dark ? 'var(--soft)' : 'var(--warm)' }}
    >
      <span
        className="w-4 h-4 rounded-full transition-transform duration-300"
        style={{
          background: dark ? 'var(--ink)' : '#020202',
          transform: dark ? 'translateX(20px)' : 'translateX(0)',
        }}
      />
    </button>
  )
}
