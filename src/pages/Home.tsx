import { Link } from 'react-router-dom'

import { SectionTitle } from '../components/ui/SectionTitle'

import { Button } from '../components/ui/Button'
import { BlxGlowCard } from '../components/ui/BlxGlowCard'

import { ScrollImmersion } from '../components/ui/ScrollImmersion'

import { PaymentLogos } from '../components/ui/PaymentLogos'

import { Hero, HeroPillars } from '../components/home/Hero'
import { FeatureGrid } from '../components/sections/FeatureGrid'
import { TrustBar } from '../components/sections/TrustBar'
import { Reveal, RevealGroup } from '../components/ui/Reveal'
import { whyBlxFeatures } from '../data/siteFeatures'

import { MarketTerminal } from '../components/home/MarketTerminal'

import { PlatformMockup } from '../components/platform/PlatformMockup'

import { EditorialMarketBand } from '../components/ui/EditorialMarketBand'

import { TradingViewMarketOverview } from '../components/tradingview/TradingViewMarketOverview'

import { TradingViewMiniChart } from '../components/tradingview/TradingViewMiniChart'

import { assetClasses, accounts, registerSteps, REGISTER_URL } from '../data/content'

import { assetClassCharts } from '../data/markets'



export function Home() {

  return (

    <>

      <Hero />

      <TrustBar />

      <section className="blx-section-band blx-section-band--after-hero">
        <div className="blx-container blx-section">
          <Reveal>
            <SectionTitle
              align="center"
              eyebrow="Markets"
              title="Live market board"
              description="Key instruments across forex, metals, indices, and digital assets—streamed in real time."
            />
          </Reveal>
          <Reveal className="mt-12">
            <MarketTerminal />
          </Reveal>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Why BLX"
        title="Infrastructure built for disciplined operators"
        description="Process, transparency, and controlled exposure—without the noise of retail hype."
        features={whyBlxFeatures}
        variant="elevated"
        align="center"
      />

      <section className="blx-section">
        <div className="blx-container">
          <Reveal>
            <SectionTitle
              align="center"
              eyebrow="Watchlist"
              title="Full multi-asset overview"
              description="Browse by asset class with live charts and pricing from TradingView."
            />
          </Reveal>
          <Reveal className="mt-12">
            <TradingViewMarketOverview height={500} />
          </Reveal>
        </div>
      </section>



      <section className="blx-section">

        <div className="blx-container">

          <Reveal>
            <SectionTitle
              eyebrow="Coverage"
              title="Asset classes under one roof"
              description="Diversified instruments for operators building structured exposure."
            />
          </Reveal>

          <RevealGroup className="blx-grid-soft mt-12 md:grid-cols-2 lg:grid-cols-4">

            {assetClasses.map((item, i) => {

              const chart = assetClassCharts[i]

              return (

                <Reveal key={item.title}>
                <BlxGlowCard
                  variant="elevated"
                  className="h-full overflow-hidden"
                >
                  {chart && <TradingViewMiniChart symbol={chart.symbol} label={chart.label} />}

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <span className="font-mono text-xs text-blx-text-muted">0{i + 1}</span>

                    <h3 className="mt-4 text-lg font-medium tracking-tight text-blx-heading">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-blx-text-muted">{item.desc}</p>
                  </div>
                </BlxGlowCard>
                </Reveal>

              )

            })}

          </RevealGroup>

        </div>

      </section>



      <section className="blx-section-band">

        <div className="blx-container blx-section">

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-4">
              <SectionTitle eyebrow="Approach" title="Built for operators, not noise" />
            </Reveal>
            <HeroPillars />
          </div>

          <Reveal className="mt-14">
            <Link to="/about" className="blx-link">
              Read our philosophy →
            </Link>
          </Reveal>

        </div>

      </section>



      <section className="blx-section">

        <div className="blx-container">

          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionTitle
                eyebrow="Accounts"
                title="Structures aligned to capital and strategy"
                description="Minimum funding requirements vary by tier. Full specifications on the accounts page."
              />
              <Button to="/account-types" variant="secondary" className="shrink-0">
                View all accounts
              </Button>
            </div>
          </Reveal>

          <Reveal className="blx-table-shell mt-12 overflow-x-auto px-1">

            <table className="w-full min-w-[640px] border-collapse text-left text-sm">

              <thead>

                <tr className="text-[11px] tracking-[0.12em] text-blx-text-muted uppercase">

                  <th className="px-6 pb-4 pt-5 pr-6 font-medium">Account</th>

                  <th className="pb-4 pr-6 font-medium">Profile</th>

                  <th className="pb-4 pr-6 font-medium">Minimum</th>

                  <th className="px-6 pb-4 font-medium">Focus</th>

                </tr>

              </thead>

              <tbody>

                {accounts.map((acc, i) => (

                  <tr

                    key={acc.name}

                    className={i < accounts.length - 1 ? 'border-t border-white/[0.05]' : ''}

                  >

                    <td className="px-6 py-5 pr-6 font-medium text-blx-heading">{acc.name}</td>

                    <td className="py-5 pr-6 text-blx-text-muted">{acc.tag}</td>

                    <td className="py-5 pr-6 font-mono text-blx-heading">{acc.min}</td>

                    <td className="max-w-xs px-6 py-5 text-blx-text-muted">{acc.desc}</td>

                  </tr>

                ))}

              </tbody>

            </table>
          </Reveal>

        </div>

      </section>



      <ScrollImmersion />



      <section className="relative z-10 -mt-px overflow-hidden rounded-t-[2rem] bg-blx-light text-[#18181b] shadow-[0_-24px_64px_-32px_rgba(0,0,0,0.25)]">

        <EditorialMarketBand light />

        <TrustBar light />

        <div className="blx-container blx-section relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-14">
            <Reveal>
              <SectionTitle
                light
                eyebrow="Platform"
                title="MetaTrader 5, deployed across devices"
                description="Desktop and mobile terminals with the tooling serious traders expect—execution, charting, and workflow continuity."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/platform">Platform details</Button>
                <Button
                  href={REGISTER_URL}
                  variant="secondary"
                  className="!border-black/10 !bg-black/[0.03] !text-[#3f3f46] hover:!bg-black/[0.05]"
                >
                  Register
                </Button>
              </div>
            </Reveal>

            <Reveal className="home-platform-mockup min-w-0">
              <PlatformMockup />
            </Reveal>
          </div>
        </div>

        <div className="blx-container px-5 pb-16 lg:px-8">
          <Reveal>
            <TradingViewMarketOverview light height={440} />
          </Reveal>
        </div>

        <div className="blx-container blx-section !pt-4">
          <Reveal>
            <SectionTitle
              light
              align="center"
              eyebrow="Onboarding"
              title="Four steps to a live account"
            />
          </Reveal>

          <RevealGroup className="blx-grid-soft mx-auto mt-12 max-w-4xl md:grid-cols-2 lg:grid-cols-4" as="ol">
            {registerSteps.map((s) => (
              <Reveal key={s.step} as="li">
                <BlxGlowCard variant="light" className="h-full">
                  <div className="p-6">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blx-accent/10 font-mono text-xs text-blx-accent">
                      {s.step}
                    </span>
                    <p className="mt-4 font-medium text-[#18181b]">{s.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#52525b]">{s.desc}</p>
                  </div>
                </BlxGlowCard>
              </Reveal>
            ))}
          </RevealGroup>

          <Reveal className="mt-14 text-center">
            <Button href={REGISTER_URL}>Start application</Button>
          </Reveal>
        </div>

        <Reveal className="blx-container pb-24 pt-4">
          <PaymentLogos light />
        </Reveal>

      </section>

    </>

  )

}


