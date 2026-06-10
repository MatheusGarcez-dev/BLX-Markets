import { Button } from '../ui/Button'
import { HeroOrbitBg } from './HeroOrbitBg'
import { BlxIcon, type IconName } from '../ui/BlxIcon'
import { Reveal, RevealGroup } from '../ui/Reveal'
import { REGISTER_URL } from '../../data/content'

const metrics = [
  { label: 'Experience', value: '5+ years' },
  { label: 'Platform', value: 'MT5 · TradingView' },
  { label: 'Coverage', value: 'Multi-asset' },
  { label: 'Desk', value: '24/7 support' },
] as const

const pillars: { label: string; title: string; text: string; icon: IconName }[] = [
  {
    label: '01',
    icon: 'shield',
    title: 'Risk discipline',
    text: 'Human oversight and technology working together—not speculation without structure.',
  },
  {
    label: '02',
    icon: 'globe',
    title: 'Multi-asset access',
    text: 'Forex, indices, metals, and digital assets through a single operational stack.',
  },
  {
    label: '03',
    icon: 'cpu',
    title: 'Automation-ready',
    text: 'Infrastructure designed for systematic workflows and efficient execution.',
  },
]

export { pillars as heroPillars }

export function Hero() {
  return (
    <section className="hero-scene" aria-labelledby="hero-heading">
      <HeroOrbitBg />
      <div className="hero-scene__veil" aria-hidden />
      <div className="hero-scene__fade-bottom" aria-hidden />
      <div className="blx-container hero-scene__inner">
        <Reveal hero className="hero-scene__copy">
          <p className="hero-scene__kicker">Multi-asset brokerage infrastructure</p>

          <h1 id="hero-heading" className="hero-scene__headline mt-5">
            <span className="hero-scene__headline-line">Institutional access</span>
            <span className="hero-scene__headline-line hero-scene__headline-line--accent">
              to global markets.
            </span>
          </h1>

          <p className="hero-scene__lead mt-6">
            Trading infrastructure, account structures, and client support for operators who
            prioritise process, transparency, and controlled exposure.
          </p>
        </Reveal>

        <Reveal hero className="hero-scene__actions">
          <Button href={REGISTER_URL}>Open account</Button>
          <Button to="/account-types" variant="secondary">
            Compare accounts
          </Button>
        </Reveal>

        <RevealGroup className="hero-scene__metrics" as="dl">
          {metrics.map((item) => (
            <Reveal key={item.label} hero className="hero-scene__metric">
              <dt className="hero-scene__metric-label">{item.label}</dt>
              <dd className="hero-scene__metric-value">{item.value}</dd>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

export function HeroPillars() {
  return (
    <RevealGroup className="blx-grid-soft lg:col-span-8 lg:grid-cols-3">
      {pillars.map((p) => (
        <Reveal key={p.label}>
          <div className="blx-pillar h-full">
            <span className="feature-grid__icon">
              <BlxIcon name={p.icon} size={20} />
            </span>
            <span className="mt-4 block font-mono text-xs text-blx-accent">{p.label}</span>
            <h3 className="mt-3 font-medium tracking-tight text-blx-heading">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-blx-text-muted">{p.text}</p>
          </div>
        </Reveal>
      ))}
    </RevealGroup>
  )
}
