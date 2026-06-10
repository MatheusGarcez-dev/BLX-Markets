import { useEffect, useState } from 'react'
import { TradingViewSymbolOverview } from '../tradingview/TradingViewSymbolOverview'
import { TRADINGVIEW_WATCHLIST_URL } from '../../data/markets'

function useTerminalHeight() {
  const [height, setHeight] = useState(540)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)')
    const update = () => setHeight(mq.matches ? 460 : 540)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return height
}

type MarketTerminalProps = {
  className?: string
}

export function MarketTerminal({ className = '' }: MarketTerminalProps) {
  const widgetHeight = useTerminalHeight()

  return (
    <div className={`market-terminal-wrap ${className}`}>
      <div className="hero-terminal">
        <div className="hero-terminal__chrome">
          <span className="hero-terminal__dots" aria-hidden>
            <span />
            <span />
            <span />
          </span>
          <span className="hero-terminal__title">Live market board</span>
          <span className="hero-terminal__live">
            <span className="hero-terminal__live-pulse" aria-hidden />
            Live
          </span>
        </div>
        <div
          className="hero-terminal__body"
          style={{ '--hero-widget-h': `${widgetHeight}px` } as React.CSSProperties}
        >
          <TradingViewSymbolOverview
            height={widgetHeight}
            unstyled
            variant="hero"
            className="hero-terminal__widget"
          />
        </div>
        <div className="hero-terminal__footer">
          <p className="hero-terminal__caption">
            Quotes via{' '}
            <a href={TRADINGVIEW_WATCHLIST_URL} target="_blank" rel="noopener noreferrer">
              TradingView watchlist
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
