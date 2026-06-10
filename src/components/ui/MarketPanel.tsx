import type { ReactNode } from 'react'

type MarketPanelProps = {
  children: ReactNode
  light?: boolean
  className?: string
  label?: string
}

export function MarketPanel({ children, light = false, className = '', label }: MarketPanelProps) {
  return (
    <div
      className={`market-panel overflow-hidden ${light ? 'market-panel--light' : ''} ${className}`}
    >
      {label && (
        <div
          className={`market-panel__head flex items-center justify-between px-4 py-2.5 text-[10px] font-semibold tracking-[0.14em] uppercase ${
            light ? 'text-[#71717a]' : 'text-blx-text-muted'
          }`}
        >
          <span>{label}</span>
          <span className="font-mono font-normal tracking-normal text-blx-accent">Live</span>
        </div>
      )}
      <div className="market-panel__body">{children}</div>
    </div>
  )
}
