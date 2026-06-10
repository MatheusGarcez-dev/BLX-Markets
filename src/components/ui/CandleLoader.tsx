import type { CSSProperties } from 'react'
import { CANDLE_LOADER_DATA, getCandleDirections } from '../../data/candleLoader'

type CandleLoaderProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const directions = getCandleDirections()

export function CandleLoader({ className = '', size = 'md' }: CandleLoaderProps) {
  return (
    <div
      className={`candle-loader candle-loader--${size} ${className}`}
      role="status"
      aria-label="Loading"
    >
      <div className="candle-loader__chart">
        {CANDLE_LOADER_DATA.map((candle, i) => (
          <div
            key={i}
            className={`candle-loader__candle candle-loader__candle--${directions[i]}`}
            style={
              {
                '--b': `${candle.b}%`,
                '--h': `${candle.h}%`,
                '--wb': `${candle.wb}%`,
                '--wh': `${candle.wh}%`,
                animationDelay: `${candle.delay}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  )
}
