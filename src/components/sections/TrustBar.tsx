import { trustSignals } from '../../data/siteFeatures'
import { BlxIcon } from '../ui/BlxIcon'
import { Reveal, RevealGroup } from '../ui/Reveal'

type TrustBarProps = {
  light?: boolean
  className?: string
}

export function TrustBar({ light = false, className = '' }: TrustBarProps) {
  return (
    <RevealGroup
      className={`trust-bar ${light ? 'trust-bar--light' : ''} ${className}`}
      as="section"
    >
      <div className="blx-container">
        <ul className="trust-bar__list">
          {trustSignals.map((item) => (
            <Reveal key={item.label} as="li" className="trust-bar__item">
              <span className={`trust-bar__icon ${light ? 'trust-bar__icon--light' : ''}`}>
                <BlxIcon name={item.icon} size={18} />
              </span>
              <span className={light ? 'text-[#52525b]' : 'text-blx-text-muted'}>
                {item.label}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </RevealGroup>
  )
}
