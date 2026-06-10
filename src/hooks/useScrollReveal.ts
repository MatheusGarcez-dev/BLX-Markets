import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { refreshScroll } from '../lib/scroll'
import { scrollToTop } from '../hooks/useLenis'

gsap.registerPlugin(ScrollTrigger)

const FROM = { autoAlpha: 0, y: 28, filter: 'blur(10px)' }
const HERO_FROM = { autoAlpha: 0, filter: 'blur(10px)' }
const TO = {
  autoAlpha: 1,
  y: 0,
  filter: 'blur(0px)',
  duration: 0.85,
  ease: 'power3.out',
}
const HERO_TO = {
  autoAlpha: 1,
  filter: 'blur(0px)',
  duration: 0.65,
  ease: 'power3.out',
}

function markRevealed(elements: Element | Element[] | NodeListOf<Element>) {
  gsap.utils.toArray<Element>(elements).forEach((el) => el.classList.add('is-revealed'))
}

function resetRevealed() {
  document.querySelectorAll('[data-reveal], [data-reveal-hero]').forEach((el) => {
    el.classList.remove('is-revealed')
  })
}

function initScrollReveals() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduced) {
    markRevealed(document.querySelectorAll('[data-reveal], [data-reveal-hero]'))
    return undefined
  }

  return gsap.context(() => {
    gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((group) => {
      const items = group.querySelectorAll<HTMLElement>('[data-reveal]')
      if (!items.length) return

      gsap.fromTo(items, FROM, {
        ...TO,
        stagger: 0.07,
        immediateRender: false,
        scrollTrigger: {
          trigger: group,
          start: 'top 85%',
          once: true,
          invalidateOnRefresh: true,
        },
        onComplete: () => markRevealed(items),
      })
    })

    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      if (el.closest('[data-reveal-group]')) return

      gsap.fromTo(el, FROM, {
        ...TO,
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
          invalidateOnRefresh: true,
        },
        onComplete: () => markRevealed(el),
      })
    })
  })
}

function initHeroReveals() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduced) {
    markRevealed(document.querySelectorAll('[data-reveal-hero]'))
    return undefined
  }

  return gsap.context(() => {
    const heroItems = gsap.utils.toArray<HTMLElement>('[data-reveal-hero]')
    if (!heroItems.length) return

    gsap.fromTo(heroItems, HERO_FROM, {
      ...HERO_TO,
      stagger: 0.06,
      delay: 0.05,
      immediateRender: false,
      onComplete: () => markRevealed(heroItems),
    })
  })
}

export function useScrollReveal(routeKey: string, ready = true, loaderIdle = true) {
  useEffect(() => {
    if (!ready) return

    let ctx: gsap.Context | undefined
    let cancelled = false
    let frame = 0

    resetRevealed()

    frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (cancelled) return
        ctx = initScrollReveals()
        refreshScroll()
      })
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      ctx?.revert()
      resetRevealed()
    }
  }, [routeKey, ready])

  useEffect(() => {
    if (!ready || !loaderIdle) return

    let ctx: gsap.Context | undefined
    let cancelled = false
    let frame = 0

    frame = requestAnimationFrame(() => {
      if (cancelled) return
      scrollToTop(true)
      ctx = initHeroReveals()
      requestAnimationFrame(() => scrollToTop(true))
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      ctx?.revert()
      document.querySelectorAll('[data-reveal-hero]').forEach((el) => {
        el.classList.remove('is-revealed')
      })
    }
  }, [routeKey, ready, loaderIdle])
}
