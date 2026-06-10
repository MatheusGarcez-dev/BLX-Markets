import { PlatformHero } from '../components/platform/PlatformHero'
import { FeatureGrid } from '../components/sections/FeatureGrid'
import { TrustBar } from '../components/sections/TrustBar'
import { Button } from '../components/ui/Button'
import { BlxGlowCard } from '../components/ui/BlxGlowCard'
import { Reveal, RevealGroup } from '../components/ui/Reveal'
import { SectionTitle } from '../components/ui/SectionTitle'
import { TradingViewAdvancedChart } from '../components/tradingview/TradingViewAdvancedChart'
import { TradingViewMarketOverview } from '../components/tradingview/TradingViewMarketOverview'
import {
  mt5Content,
  platformConclusion,
  platformDownloads,
  platformRegisterIntro,
  platformRegisterSteps,
  REGISTER_URL,
} from '../data/content'
import { platformFeatures } from '../data/siteFeatures'
import { TRADINGVIEW_WATCHLIST_URL } from '../data/markets'

export function Platform() {
  return (
    <div className="platform-page">
      <PlatformHero />
      <TrustBar />

      <FeatureGrid
        eyebrow="Capabilities"
        title="Everything you need to operate with confidence"
        description="From mobile access to advanced charting—MT5 deployed the way professionals expect."
        features={platformFeatures}
        variant="elevated"
        align="center"
      />

      <section className="blx-container pb-16 md:pb-20">
        <RevealGroup className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
          <Reveal className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-blx-text-muted">
              Charts mirror the{' '}
              <a
                href={TRADINGVIEW_WATCHLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blx-heading underline-offset-2 hover:underline"
              >
                BLX watchlist
              </a>{' '}
              with live market data alongside your MT5 execution workflow.
            </p>
          </Reveal>
          <Reveal className="min-w-0 lg:col-span-7">
            <TradingViewAdvancedChart />
          </Reveal>
        </RevealGroup>
      </section>

      <section className="blx-container border-t border-white/[0.06] py-16 md:py-20">
        <RevealGroup className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <SectionTitle eyebrow={mt5Content.eyebrow} title={mt5Content.title} />
            <p className="mt-6 text-sm leading-relaxed text-blx-text-muted md:text-base">
              {mt5Content.body}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-blx-text-muted md:text-base">
              {mt5Content.availability}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <SectionTitle
              eyebrow="Downloads"
              title="Download MT5 for your operating system"
              description="Available for all major operating systems."
            />
            <ul className="mt-8 divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {platformDownloads.map((d) => (
                <li key={d.os}>
                  <a
                    href="#"
                    className="platform-download flex items-center justify-between gap-4 py-5 text-sm transition-colors hover:text-blx-heading"
                  >
                    <span className="font-medium text-blx-heading">{d.os}</span>
                    <span className="font-mono text-xs tracking-wide text-blx-accent">
                      {d.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </RevealGroup>
      </section>

      <section className="blx-container border-t border-white/[0.06] py-16 md:py-20">
        <Reveal>
          <SectionTitle
            eyebrow={platformRegisterIntro.eyebrow}
            title={platformRegisterIntro.title}
            description={platformRegisterIntro.lead}
          />
        </Reveal>
        <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10" as="ol">
          {platformRegisterSteps.map((s) => (
            <Reveal key={s.step} as="li">
              <BlxGlowCard variant="dark" className="h-full">
                <div className="platform-step p-6 md:p-7">
                  <span className="platform-step__num font-mono text-3xl text-blx-accent/90">
                    {s.step}
                  </span>
                  <p className="mt-4 font-medium text-blx-heading">{s.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-blx-text-muted">{s.desc}</p>
                </div>
              </BlxGlowCard>
            </Reveal>
          ))}
        </RevealGroup>
        <Reveal className="mt-10">
          <Button href={REGISTER_URL}>Register now</Button>
        </Reveal>
      </section>

      <section className="blx-container border-t border-white/[0.06] py-16 md:py-20">
        <Reveal>
          <SectionTitle
            eyebrow="Markets"
            title="Multi-asset overview"
            description="Browse instruments and timeframes without leaving your workflow."
          />
        </Reveal>
        <Reveal className="mt-12">
          <TradingViewMarketOverview height={480} />
        </Reveal>
      </section>

      <section className="blx-container pb-20 md:pb-24">
        <RevealGroup className="grid gap-10 border-t border-white/[0.06] pt-16 md:grid-cols-12 md:items-end md:gap-14 md:pt-20">
          <Reveal className="md:col-span-8">
            <p className="blx-eyebrow !py-0.5">Conclusion</p>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-blx-text-muted md:text-base">
              {platformConclusion}
            </p>
          </Reveal>
          <Reveal className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
            <Button href={REGISTER_URL}>Access and learn more</Button>
            <Button to="/account-types" variant="secondary">
              Account types
            </Button>
          </Reveal>
        </RevealGroup>
      </section>
    </div>
  )
}
