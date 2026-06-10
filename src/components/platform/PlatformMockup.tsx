import mockupNote from '@assets/mockup-note.png'

export function PlatformMockup() {
  return (
    <img
      src={mockupNote}
      alt="Trading terminal on laptop — MetaTrader 5 and market analysis"
      className="platform-mockup"
      width={1400}
      height={1050}
      loading="lazy"
      decoding="async"
    />
  )
}
