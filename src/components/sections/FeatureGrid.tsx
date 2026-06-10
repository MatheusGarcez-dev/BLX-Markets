import type { SiteFeature } from '../../data/siteFeatures'
import { BlxGlowCard } from '../ui/BlxGlowCard'
import { BlxIcon } from '../ui/BlxIcon'
import { Reveal, RevealGroup } from '../ui/Reveal'
import { SectionTitle } from '../ui/SectionTitle'

type FeatureGridProps = {
  eyebrow?: string
  title: string
  description?: string
  features: SiteFeature[]
  variant?: 'dark' | 'elevated' | 'light'
  light?: boolean
  align?: 'left' | 'center'
}

export function FeatureGrid({
  eyebrow,
  title,
  description,
  features,
  variant = 'dark',
  light = false,
  align = 'left',
}: FeatureGridProps) {
  return (
    <section className="blx-section">
      <div className="blx-container">
        <Reveal>
          <SectionTitle
            eyebrow={eyebrow}
            title={title}
            description={description}
            light={light}
            align={align}
          />
        </Reveal>

        <RevealGroup className="feature-grid mt-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Reveal key={feature.title}>
              <BlxGlowCard variant={variant} className="feature-grid__card h-full">
                <div className="p-6 md:p-7">
                  <span className="feature-grid__icon">
                    <BlxIcon name={feature.icon} size={20} />
                  </span>
                  <h3 className="mt-4 font-medium tracking-tight text-blx-heading">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-blx-text-muted">{feature.desc}</p>
                </div>
              </BlxGlowCard>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
