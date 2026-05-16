'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return

    const move = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`
      el.style.top = `${e.clientY}px`
    }

    const expand = () => el.classList.add('expanded')
    const shrink = () => el.classList.remove('expanded')

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [data-cursor-expand]').forEach(el => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', move)
    }
  }, [])

  return <div ref={cursorRef} className="custom-cursor hidden md:block" />
}
