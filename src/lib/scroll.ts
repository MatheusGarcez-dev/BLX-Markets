import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getLenis, scrollToTop, lockScroll, unlockScroll } from '../hooks/useLenis'

gsap.registerPlugin(ScrollTrigger)

export function unlockPageInteraction() {
  unlockScroll()
  document.body.style.removeProperty('height')
  document.body.style.removeProperty('pointer-events')
  document.documentElement.style.removeProperty('height')
}

export { lockScroll, unlockScroll, scrollToTop }

export function cleanupOrphanDom() {
  document.querySelectorAll('.pin-spacer').forEach((el) => {
    el.remove()
  })
  unlockPageInteraction()
}

export function cleanupLeavingHome() {
  ScrollTrigger.getById('home-transition')?.kill(true)
  cleanupOrphanDom()

  if (ScrollTrigger.clearScrollMemory) {
    ScrollTrigger.clearScrollMemory()
  }
}

export function refreshScroll() {
  getLenis()?.resize()
  requestAnimationFrame(() => {
    ScrollTrigger.refresh(true)
  })
}

/** Chamar no clique ANTES da troca de rota */
export function prepareNavigation(from: string, to: string) {
  if (from === to) return

  unlockPageInteraction()

  if (from === '/' && to !== '/') {
    cleanupLeavingHome()
  } else if (to === '/') {
    cleanupOrphanDom()
    document.body.dataset.theme = 'dark'
  }

  scrollToTop(true)
}

export function handleRouteChange(from: string | null, to: string) {
  unlockPageInteraction()

  if (to !== '/') {
    document.body.dataset.theme = 'dark'
  }

  if (from === '/' && to !== '/') {
    cleanupLeavingHome()
  } else if (from !== null && from !== to) {
    cleanupOrphanDom()
  }

  scrollToTop(true)

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      refreshScroll()
    })
  })
}
