import pammImage from '@assets/PAMM.png'

type PammVisualProps = {
  className?: string
  priority?: boolean
}

export function PammVisual({ className = '', priority = false }: PammVisualProps) {
  return (
    <div className={`pamm-visual-frame ${className}`.trim()}>
      <img
        src={pammImage}
        alt="PAMM system connecting investors, managers, and performance"
        className="pamm-visual"
        width={1200}
        height={675}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </div>
  )
}
