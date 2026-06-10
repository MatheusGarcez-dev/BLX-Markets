type EditorialMarketBandProps = {
  light?: boolean
  className?: string
}

/** Faixa visual com textura de mercado — complementa os widgets ao vivo. */
export function EditorialMarketBand({ light = false, className = '' }: EditorialMarketBandProps) {
  return (
    <div
      className={`editorial-market-band pointer-events-none absolute inset-0 ${light ? 'editorial-market-band--light' : ''} ${className}`}
      aria-hidden
    />
  )
}
