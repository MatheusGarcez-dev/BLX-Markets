import { useMemo } from 'react'
import { tickerSymbols } from '../../data/markets'
import { TradingViewEmbed } from './TradingViewEmbed'

export function TradingViewTicker() {
  const config = useMemo(
    () => ({
      symbols: tickerSymbols,
      showSymbolLogo: true,
      colorTheme: 'dark',
      isTransparent: true,
      displayMode: 'adaptive',
      locale: 'en',
    }),
    [],
  )

  return (
    <div className="tv-ticker border-b border-blx-border bg-blx-bg/95 backdrop-blur-sm">
      <TradingViewEmbed widget="ticker" config={config} height={52} showAttribution={false} />
    </div>
  )
}
