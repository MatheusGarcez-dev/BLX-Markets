import { AppLink } from '../components/ui/AppLink'
import { AboutHero } from '../components/about/AboutHero'
import { FeatureGrid } from '../components/sections/FeatureGrid'
import { TrustBar } from '../components/sections/TrustBar'
import { Button } from '../components/ui/Button'
import { Reveal, RevealGroup } from '../components/ui/Reveal'
import {
  aboutCompany,
  aboutMission,
  aboutPhilosophy,
  companyLegal,
  REGISTER_URL,
} from '../data/content'
import { aboutValues } from '../data/siteFeatures'

export function About() {
  return (
    <div className="about-page">
      <AboutHero />
      <TrustBar />

      <FeatureGrid
        eyebrow="Our values"
        title="What guides every engagement"
        description="Management, technology, and client alignment—without overpromising outcomes we cannot guarantee."
        features={aboutValues}
        variant="dark"
        align="center"
      />

      <section className="blx-container max-w-3xl pb-20 md:pb-24">
        <article className="about-prose">
          <RevealGroup className="space-y-0">
            <Reveal className="about-prose__block">
              <h2 className="about-prose__title">{aboutPhilosophy.title}</h2>
              <p className="about-prose__text">{aboutPhilosophy.body}</p>
            </Reveal>

            <Reveal className="about-prose__block">
              <h2 className="about-prose__title">{aboutCompany.title}</h2>
              <div className="space-y-5">
                {aboutCompany.paragraphs.map((paragraph, i) => (
                  <p key={i} className="about-prose__text">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal className="about-prose__block">
              <h2 className="about-prose__title">{aboutMission.title}</h2>
              <div className="space-y-5">
                {aboutMission.paragraphs.map((paragraph, i) => (
                  <p key={i} className="about-prose__text">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal className="about-prose__block about-prose__block--corporate">
              <h2 className="about-prose__title">Corporate</h2>
              <p className="about-prose__text">
                {companyLegal.name}
                <br />
                Registration number {companyLegal.reg}
                <br />
                {companyLegal.address}
              </p>
            </Reveal>
          </RevealGroup>

          <Reveal className="mt-12 flex flex-wrap gap-3">
            <Button href={REGISTER_URL}>Register</Button>
            <Button to="/contact" variant="secondary">
              Contact us
            </Button>
            <AppLink to="/faqs" className="blx-link self-center">
              Read FAQ →
            </AppLink>
          </Reveal>
        </article>
      </section>
    </div>
  )
}
