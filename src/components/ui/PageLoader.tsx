import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLoaderGate } from '../../context/LoaderGateContext'
import { lockScroll, scrollToTop, unlockScroll } from '../../lib/scroll'
import { LOADER_BOOT_MS, LOADER_ROUTE_MS } from '../../lib/pageLoader'
import { CandleLoader } from './CandleLoader'

export function PageLoader() {
  const { pathname } = useLocation()
  const { setLoaderBusy } = useLoaderGate()
  const [bootVisible, setBootVisible] = useState(true)
  const [routeVisible, setRouteVisible] = useState(false)
  const bootFinishedRef = useRef(false)

  useEffect(() => {
    let done = false
    const start = performance.now()

    const finish = () => {
      if (done) return
      done = true
      const elapsed = performance.now() - start
      const wait = Math.max(0, LOADER_BOOT_MS - elapsed)
      window.setTimeout(() => setBootVisible(false), wait)
    }

    if (document.readyState === 'complete') {
      finish()
    } else {
      window.addEventListener('load', finish, { once: true })
    }

    return () => window.removeEventListener('load', finish)
  }, [])

  useLayoutEffect(() => {
    if (bootVisible) return

    if (!bootFinishedRef.current) {
      bootFinishedRef.current = true
      return
    }

    setRouteVisible(true)
  }, [pathname, bootVisible])

  useEffect(() => {
    if (!routeVisible) return
    const timer = window.setTimeout(() => setRouteVisible(false), LOADER_ROUTE_MS)
    return () => window.clearTimeout(timer)
  }, [routeVisible])

  const visible = bootVisible || routeVisible

  useLayoutEffect(() => {
    setLoaderBusy(visible)

    if (visible) {
      lockScroll()
      scrollToTop(true)
      return
    }

    unlockScroll()
    scrollToTop(true)
  }, [visible, setLoaderBusy])

  return (
    <div
      className={`page-loader ${visible ? 'page-loader--visible' : 'page-loader--hidden'}`}
      aria-hidden={!visible}
      aria-busy={visible}
    >
      <div className="page-loader__panel">
        <CandleLoader size="lg" />
        <p className="page-loader__label">BLX Markets</p>
      </div>
    </div>
  )
}
