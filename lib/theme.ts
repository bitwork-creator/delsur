'use client'

export function initTheme() {
  const stored = localStorage.getItem('theme')
  const theme = stored !== 'light' ? 'dark' : 'light'
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark')
  const next = isDark ? 'light' : 'dark'
  document.documentElement.classList.toggle('dark', !isDark)
  localStorage.setItem('theme', next)
  return next
}

export function getTheme(): 'light' | 'dark' {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}
