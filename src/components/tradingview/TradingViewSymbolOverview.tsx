import { useMemo } from 'react'
import { heroSymbolOverview } from '../../data/markets'
import { tvDarkChartColors } from '../../lib/tradingview'
import { MarketPanel } from '../ui/MarketPanel'
import { TradingViewEmbed } from './TradingViewEmbed'

type TradingViewSymbolOverviewProps = {
  height?: number
  className?: string
  /** Sem moldura MarketPanel — para uso dentro do hero terminal */
  unstyled?: boolean
  /** Ajustes de layout para o painel da hero */
  variant?: 'default' | 'hero'
}

export function TradingViewSymbolOverview({
  height = 400,
  className = '',
  unstyled = false,
  variant = 'default',
}: TradingViewSymbolOverviewProps) {
  const isHero = variant === 'hero'

  const config = useMemo(
    () => ({
      symbols: [...heroSymbolOverview],
      chartOnly: false,
      width: '100%',
      height: String(height),
      locale: 'en',
      colorTheme: 'dark',
      isTransparent: false,
      showVolume: false,
      showMA: false,
      hideDateRanges: isHero,
      hideMarketStatus: isHero,
      hideSymbolLogo: isHero,
      scalePosition: 'right',
      scaleMode: 'Normal',
      fontFamily: 'IBM Plex Sans, system-ui, sans-serif',
      fontSize: isHero ? '11' : '12',
      noTimeScale: false,
      valuesTracking: '1',
      changeMode: 'price-and-percent',
      ...tvDarkChartColors,
    }),
    [height, isHero],
  )

  if (unstyled) {
    return (
      <div className={className}>
        <TradingViewEmbed
          widget="symbolOverview"
          config={config}
          height={height}
          showAttribution={false}
          className="tv-embed-host--hero"
        />
      </div>
    )
  }

  return (
    <MarketPanel className={className}>
      <TradingViewEmbed widget="symbolOverview" config={config} height={height} />
    </MarketPanel>
  )
}
