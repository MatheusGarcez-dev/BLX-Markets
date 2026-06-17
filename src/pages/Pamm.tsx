import { PammHero } from '../components/pamm/PammHero'
import { FeatureGrid } from '../components/sections/FeatureGrid'
import { TrustBar } from '../components/sections/TrustBar'
import { Button } from '../components/ui/Button'
import { BlxGlowCard } from '../components/ui/BlxGlowCard'
import { Reveal, RevealGroup } from '../components/ui/Reveal'
import { SectionTitle } from '../components/ui/SectionTitle'
import { REGISTER_INVESTOR_URL, REGISTER_MANAGER_URL } from '../data/content'
import {
  pammConclusion,
  pammFeatures,
  pammHowItWorks,
  pammRoles,
  pammTechnology,
} from '../data/pamm'

export function Pamm() {
  return (
    <div className="pamm-page">
      <PammHero />
      <TrustBar />

      <FeatureGrid
        eyebrow="Capabilities"
        title="Institutional-grade money management"
        description="TFB PAMM technology on MetaTrader 5—allocation, reporting, and risk controls in one environment."
        features={pammFeatures}
        variant="elevated"
        align="center"
      />

      <section className="blx-container py-16 md:py-20">
        <Reveal>
          <SectionTitle
            align="center"
            eyebrow="Roles"
            title="Built for managers and investors"
            description="Two distinct pathways—one shared infrastructure. Both sides access the platform with role-appropriate dashboards and permissions."
          />
        </Reveal>
        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
          {pammRoles.map((role) => (
            <Reveal key={role.tag}>
              <BlxGlowCard variant="dark" className="h-full">
                <div className="p-6 md:p-8">
                  <p className="font-mono text-xs text-blx-accent">{role.tag}</p>
                  <h3 className="mt-3 text-xl font-medium tracking-tight text-blx-heading">
                    {role.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-blx-text-muted md:text-base">
                    {role.desc}
                  </p>
                  <ul className="mt-6 divide-y divide-white/[0.06] border-y border-white/[0.06]">
                    {role.points.map((point) => (
                      <li key={point} className="py-3 text-sm text-blx-text-muted">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </BlxGlowCard>
            </Reveal>
          ))}
        </RevealGroup>
      </section>

      <section className="blx-container border-t border-white/[0.06] py-16 md:py-20">
        <Reveal>
          <SectionTitle
            align="center"
            eyebrow="Process"
            title="How PAMM works on BLX"
            description="From onboarding to settlement—four stages that connect managers, investors, and the allocation engine."
          />
        </Reveal>
        <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" as="ol">
          {pammHowItWorks.map((item) => (
            <Reveal key={item.step} as="li">
              <BlxGlowCard variant="dark" className="h-full">
                <div className="p-6 md:p-7">
                  <span className="font-mono text-3xl text-blx-accent/90">{item.step}</span>
                  <p className="mt-4 font-medium text-blx-heading">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-blx-text-muted">{item.desc}</p>
                </div>
              </BlxGlowCard>
            </Reveal>
          ))}
        </RevealGroup>
      </section>

      <section className="blx-container border-t border-white/[0.06] py-16 md:py-20">
        <RevealGroup className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
          <Reveal className="lg:col-span-5">
            <SectionTitle eyebrow="Technology" title={pammTechnology.title} />
          </Reveal>
          <Reveal className="lg:col-span-7">
            <div className="space-y-5">
              {pammTechnology.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-blx-text-muted md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </RevealGroup>
      </section>

      <section className="blx-container pb-20 md:pb-24">
        <RevealGroup className="grid gap-10 border-t border-white/[0.06] pt-16 md:grid-cols-12 md:items-end md:gap-14 md:pt-20">
          <Reveal className="md:col-span-8">
            <p className="blx-eyebrow !py-0.5">Get started</p>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-blx-text-muted md:text-base">
              {pammConclusion}
            </p>
          </Reveal>
          <Reveal className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
            <Button href={REGISTER_MANAGER_URL}>Register as manager</Button>
            <Button href={REGISTER_INVESTOR_URL} variant="secondary">
              Register as investor
            </Button>
            <Button to="/contact" variant="secondary">
              Contact desk
            </Button>
          </Reveal>
        </RevealGroup>
      </section>
    </div>
  )
}
