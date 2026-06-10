import { useEffect, useRef } from 'react'

const SCRIPTS = {
  ticker: 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js',
  marketOverview: 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js',
  symbolOverview: 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js',
  advancedChart: 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js',
  miniSymbol: 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js',
} as const

export type TradingViewScript = keyof typeof SCRIPTS

type TradingViewEmbedProps = {
  widget: TradingViewScript
  config: Record<string, unknown>
  className?: string
  height?: number | string
  showAttribution?: boolean
}

export function TradingViewEmbed({
  widget,
  config,
  className = '',
  height = 400,
  showAttribution = true,
}: TradingViewEmbedProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const configKey = JSON.stringify(config)
  const isAdvancedChart = widget === 'advancedChart'
  const chartHeight =
    typeof height === 'number' ? height : parseInt(String(height), 10) || 400

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    host.innerHTML = ''

    const wrap = document.createElement('div')
    wrap.className = 'tradingview-widget-container'
    wrap.style.width = '100%'
    wrap.style.height = isAdvancedChart ? `${chartHeight}px` : typeof height === 'number' ? `${height}px` : String(height)

    const widgetEl = document.createElement('div')
    widgetEl.className = 'tradingview-widget-container__widget'
    widgetEl.style.width = '100%'
    widgetEl.style.height = '100%'
    wrap.appendChild(widgetEl)

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = SCRIPTS[widget]
    script.async = true
    script.textContent = configKey
    wrap.appendChild(script)

    host.appendChild(wrap)

    if (showAttribution) {
      const attribution = document.createElement('div')
      attribution.className = 'tradingview-widget-copyright'
      const link = document.createElement('a')
      link.href = 'https://www.tradingview.com/'
      link.rel = 'noopener noreferrer'
      link.target = '_blank'
      link.textContent = 'Track all markets on TradingView'
      attribution.appendChild(link)
      host.appendChild(attribution)
    }

    return () => {
      host.innerHTML = ''
    }
  }, [widget, configKey, height, showAttribution, isAdvancedChart, chartHeight])

  return (
    <div
      ref={hostRef}
      className={`tv-embed-host ${isAdvancedChart ? 'tv-embed-host--chart' : ''} ${className}`}
      style={isAdvancedChart ? ({ '--tv-chart-h': `${chartHeight}px` } as React.CSSProperties) : undefined}
    />
  )
}
