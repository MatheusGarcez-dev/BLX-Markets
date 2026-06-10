import { useMemo } from 'react'
import { tvDarkChartColors } from '../../lib/tradingview'
import { TradingViewEmbed } from './TradingViewEmbed'

type TradingViewMiniChartProps = {
  symbol: string
  label: string
  height?: number
}

export function TradingViewMiniChart({ symbol, label, height = 140 }: TradingViewMiniChartProps) {
  const config = useMemo(
    () => ({
      symbol,
      width: '100%',
      height: '100%',
      locale: 'en',
      dateRange: '1D',
      colorTheme: 'dark',
      isTransparent: true,
      autosize: true,
      largeChartUrl: '',
      chartOnly: true,
      ...tvDarkChartColors,
    }),
    [symbol],
  )

  return (
    <div className="market-mini-chart overflow-hidden border-b border-blx-border bg-blx-bg">
      <p className="px-4 pt-3 text-[10px] font-medium tracking-[0.12em] text-blx-text-muted uppercase">
        {label}
      </p>
      <TradingViewEmbed widget="miniSymbol" config={config} height={height} showAttribution={false} />
    </div>
  )
}
