import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { LoaderGateProvider, useLoaderGate } from '../../context/LoaderGateContext'
import { Header } from './Header'
import { Footer } from './Footer'
import { PageLoader } from '../ui/PageLoader'
import { useLenis } from '../../hooks/useLenis'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { handleRouteChange, refreshScroll, scrollToTop } from '../../lib/scroll'

function LayoutContent() {
  useLenis()
  const { loaderIdle } = useLoaderGate()
  const { pathname } = useLocation()
  const prevPathRef = useRef<string | null>(null)
  const isFirstMount = useRef(true)
  const [revealReady, setRevealReady] = useState(false)

  useEffect(() => {
    scrollToTop(true)
  }, [])

  useEffect(() => {
    if (!loaderIdle) return

    scrollToTop(true)
    const frame = requestAnimationFrame(() => {
      scrollToTop(true)
      refreshScroll()
      scrollToTop(true)
    })

    return () => cancelAnimationFrame(frame)
  }, [loaderIdle, pathname])

  useEffect(() => {
    const from = prevPathRef.current

    setRevealReady(false)

    if (!isFirstMount.current) {
      handleRouteChange(from, pathname)
    } else {
      isFirstMount.current = false
    }

    prevPathRef.current = pathname

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setRevealReady(true))
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname])

  useScrollReveal(pathname, revealReady, loaderIdle)

  return (
    <div className="flex min-h-screen flex-col">
      <PageLoader />
      <Header />
      <main
        id="main"
        className="relative z-0 flex-1 pt-16 lg:pt-[4.25rem]"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export function Layout() {
  return (
    <LoaderGateProvider>
      <LayoutContent />
    </LoaderGateProvider>
  )
}
