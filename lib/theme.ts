'use client'

export function initTheme() {
  const stored = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const theme = stored ?? (prefersDark ? 'dark' : 'light')
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
