import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance: Lenis | null = null

export function getLenis() {
  return lenisInstance
}

export function scrollToTop(immediate = true) {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate, force: true })
  }
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

export function lockScroll() {
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
}

export function unlockScroll() {
  document.documentElement.style.removeProperty('overflow')
  document.body.style.removeProperty('overflow')
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })

    lenisInstance = lenis
    lenis.on('scroll', ScrollTrigger.update)

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    scrollToTop(true)

    const onTick = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(onTick)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}
