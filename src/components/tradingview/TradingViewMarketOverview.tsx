import { useMemo } from 'react'
import { marketTabs } from '../../data/markets'
import { tvDarkChartColors, tvDarkChartColorsLight } from '../../lib/tradingview'
import { MarketPanel } from '../ui/MarketPanel'
import { TradingViewEmbed } from './TradingViewEmbed'

type TradingViewMarketOverviewProps = {
  light?: boolean
  className?: string
  height?: number
}

export function TradingViewMarketOverview({
  light = false,
  className = '',
  height = 480,
}: TradingViewMarketOverviewProps) {
  const config = useMemo(
    () => ({
      colorTheme: light ? 'light' : 'dark',
      dateRange: '1D',
      showChart: true,
      showFloatingTooltip: true,
      locale: 'en',
      width: '100%',
      height: '100%',
      isTransparent: false,
      showSymbolLogo: true,
      tabs: marketTabs.map((tab) => ({
        title: tab.title,
        symbols: tab.symbols,
      })),
      ...(light ? tvDarkChartColorsLight : tvDarkChartColors),
    }),
    [light],
  )

  return (
    <MarketPanel light={light} className={className}>
      <TradingViewEmbed
        widget="marketOverview"
        config={config}
        height={height}
        showAttribution
      />
    </MarketPanel>
  )
}
