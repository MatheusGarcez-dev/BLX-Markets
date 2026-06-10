import { useEffect, useState } from 'react'
import { MarketPanel } from '../ui/MarketPanel'
import { TradingViewEmbed } from './TradingViewEmbed'

type TradingViewAdvancedChartProps = {
  symbol?: string
  height?: number
  className?: string
}

function useChartHeight(defaultHeight: number) {
  const [height, setHeight] = useState(defaultHeight)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    const update = () => setHeight(mq.matches ? 480 : defaultHeight)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [defaultHeight])

  return height
}

export function TradingViewAdvancedChart({
  symbol = 'FX:EURUSD',
  height: defaultHeight = 640,
  className = '',
}: TradingViewAdvancedChartProps) {
  const height = useChartHeight(defaultHeight)

  const config = {
    autosize: false,
    symbol,
    interval: '60',
    timezone: 'Etc/UTC',
    theme: 'dark',
    style: '1',
    locale: 'en',
    width: '100%',
    height,
    enable_publishing: false,
    allow_symbol_change: true,
    calendar: false,
    support_host: 'https://www.tradingview.com',
    hide_top_toolbar: false,
    hide_legend: false,
    hide_side_toolbar: false,
    save_image: false,
    withdateranges: true,
    backgroundColor: '#141416',
    gridColor: 'rgba(39, 39, 42, 0.5)',
    overrides: {
      'paneProperties.background': '#141416',
      'paneProperties.backgroundType': 'solid',
    },
  }

  return (
    <MarketPanel className={`platform-chart-panel ${className}`}>
      <TradingViewEmbed widget="advancedChart" config={config} height={height} />
    </MarketPanel>
  )
}
