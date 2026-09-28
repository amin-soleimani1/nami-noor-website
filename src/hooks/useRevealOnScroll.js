import { useEffect, useRef, useState } from 'react'

function useRevealOnScroll(threshold = 0.2, enabled = true) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(() => typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    const element = ref.current
    if (!enabled || !element || isVisible || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold })

    observer.observe(element)
    return () => observer.disconnect()
  }, [enabled, isVisible, threshold])

  return [ref, isVisible]
}

export default useRevealOnScroll
