import { Button } from '../ui/Button'
import { BlxGlowCard } from '../ui/BlxGlowCard'
import { BlxIcon } from '../ui/BlxIcon'
import { PammVisual } from '../pamm/PammVisual'
import { Reveal, RevealGroup } from '../ui/Reveal'
import { pammHome, pammHomeBenefits, pammRoles } from '../../data/pamm'

export function PammSection() {
  return (
    <section className="pamm-section blx-section-band">
      <div className="blx-container blx-section">
        <div className="pamm-section__main grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-14">
          <div className="pamm-section__left lg:col-span-6">
            <Reveal>
              <p className="blx-eyebrow !py-0.5">{pammHome.eyebrow}</p>
              <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-tight text-blx-heading md:text-4xl">
                {pammHome.titleBefore}{' '}
                <span className="text-blx-accent">{pammHome.titleAccent}</span>{' '}
                {pammHome.titleAfter}
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-blx-text-muted md:text-base">
                {pammHome.description}
              </p>
            </Reveal>

            <Reveal className="pamm-section__visual mt-8">
              <PammVisual />
            </Reveal>
          </div>

          <RevealGroup className="grid gap-6 lg:col-span-6">
            {pammRoles.map((role) => (
              <Reveal key={role.tag}>
                <BlxGlowCard variant="elevated" className="h-full">
                  <div className="p-6 md:p-8">
                    <p className="text-[11px] font-semibold tracking-[0.14em] text-blx-accent uppercase">
                      {role.tag}
                    </p>
                    <h3 className="mt-4 text-xl font-medium tracking-tight text-blx-heading">
                      {role.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-blx-text-muted md:text-base">
                      {role.desc}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {role.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm text-blx-text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blx-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </BlxGlowCard>
              </Reveal>
            ))}
          </RevealGroup>
        </div>

        <RevealGroup className="pamm-section__benefits mt-8 lg:mt-10">
          {pammHomeBenefits.map((benefit, index) => (
            <Reveal
              key={benefit.title}
              className={`pamm-section__benefit ${index < pammHomeBenefits.length - 1 ? 'pamm-section__benefit--divider' : ''}`}
            >
              <span className="feature-grid__icon">
                <BlxIcon name={benefit.icon} size={20} />
              </span>
              <h3 className="mt-4 font-medium tracking-tight text-blx-heading">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-blx-text-muted">{benefit.desc}</p>
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 text-center lg:mt-14">
          <Button to="/pamm">Explore PAMM in detail</Button>
        </Reveal>
      </div>
    </section>
  )
}
