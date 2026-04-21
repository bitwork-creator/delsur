'use client'

import { useEffect, useState } from 'react'

export function useCounter(target: number, duration: number, triggered: boolean): number {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!triggered) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const elapsed = ts - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [triggered, target, duration])

  return count
}

interface CounterProps {
  target: number
  duration: number
  triggered: boolean
  prefix?: string
  suffix?: string
}

export default function Counter({ target, duration, triggered, prefix = '', suffix = '' }: CounterProps) {
  const value = useCounter(target, duration, triggered)
  return <>{prefix}{value}{suffix}</>
}
