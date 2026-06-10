import { AccountTypesHero } from '../components/account/AccountTypesHero'
import { TrustBar } from '../components/sections/TrustBar'
import { Button } from '../components/ui/Button'
import { BlxGlowCard } from '../components/ui/BlxGlowCard'
import { Reveal, RevealGroup } from '../components/ui/Reveal'
import { SectionTitle } from '../components/ui/SectionTitle'
import {
  accountExperience,
  accounts,
  presenceStats,
  REGISTER_URL,
} from '../data/content'

export function AccountTypes() {
  return (
    <div className="account-page">
      <AccountTypesHero />
      <TrustBar />

      <section className="blx-container py-16 md:py-20">
        <RevealGroup
          className="account-tiers-list divide-y divide-white/[0.06] border-y border-white/[0.06]"
          as="ol"
        >
          {accounts.map((acc, index) => (
            <Reveal
              key={acc.name}
              as="li"
              className="account-tiers-list__item grid gap-6 py-8 md:grid-cols-12 md:gap-10 md:py-10"
            >
              <div className="flex gap-5 md:col-span-4">
                <span className="font-mono text-sm text-blx-accent/80">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.14em] text-blx-text-muted uppercase">
                    {acc.tag}
                  </p>
                  <h2 className="mt-2 text-lg font-medium tracking-tight text-blx-heading md:text-xl">
                    {acc.name}
                  </h2>
                  <p className="mt-3 font-mono text-xl text-blx-heading md:text-2xl">{acc.min}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-blx-text-muted md:col-span-8 md:self-center md:text-base">
                {acc.desc}
              </p>
            </Reveal>
          ))}
        </RevealGroup>
      </section>

      <section className="border-t border-white/[0.06]">
        <div className="blx-container py-16 md:py-20">
          <Reveal>
            <SectionTitle
              align="center"
              eyebrow="Our presence"
              title="Revolutionizing trading experiences globally"
            />
          </Reveal>
          <RevealGroup className="account-presence mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {presenceStats.map((stat) => (
              <Reveal key={stat.label} className="account-presence__cell">
                <BlxGlowCard variant="dark" borderRadius={20}>
                  <div className="px-5 py-5 md:px-6 md:py-6">
                    <p className="text-[11px] tracking-[0.1em] text-blx-text-muted uppercase">
                      {stat.label}
                    </p>
                    <p className="mt-3 font-mono text-4xl tracking-tight text-blx-heading">
                      {stat.value}
                      <span className="text-blx-accent">{stat.suffix}</span>
                    </p>
                  </div>
                </BlxGlowCard>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="blx-container py-16 md:py-20">
        <RevealGroup className="mx-auto max-w-2xl space-y-8">
          <Reveal>
            <SectionTitle
              align="center"
              eyebrow={accountExperience.eyebrow}
              title={accountExperience.title}
              description={accountExperience.lead}
            />
          </Reveal>
          {accountExperience.paragraphs.map((paragraph, i) => (
            <Reveal key={i}>
              <p className="text-center text-sm leading-relaxed text-blx-text-muted md:text-base">
                {paragraph}
              </p>
            </Reveal>
          ))}
          <Reveal className="text-center">
            <Button to="/platform">Access the platform</Button>
          </Reveal>
        </RevealGroup>
      </section>

      <section className="blx-container border-t border-white/[0.06] py-16 md:py-20">
        <RevealGroup className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl">
            <p className="blx-eyebrow !py-0.5">Get started</p>
            <h3 className="mt-4 text-2xl font-medium tracking-tight text-blx-heading md:text-3xl">
              Ready to enter the world of hedge funds?
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-blx-text-muted md:text-base">
              Take the first step and we&apos;ll take care of the rest. Register to open your
              account and start trading on BLX infrastructure.
            </p>
          </Reveal>
          <Reveal className="flex shrink-0 flex-wrap gap-3">
            <Button href={REGISTER_URL}>Register</Button>
            <Button to="/contact" variant="secondary">
              Contact us
            </Button>
          </Reveal>
        </RevealGroup>
      </section>
    </div>
  )
}
