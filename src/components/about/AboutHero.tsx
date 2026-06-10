import { aboutIntro } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { AboutDossierMockup } from './AboutDossierMockup'

export function AboutHero() {
  return (
    <section className="about-hero" aria-labelledby="about-hero-title">
      <div className="blx-container about-hero__grid">
        <div className="about-hero__copy">
          <Reveal hero>
            <p className="blx-eyebrow">{aboutIntro.eyebrow}</p>
          </Reveal>
          <Reveal hero>
            <h1 id="about-hero-title" className="blx-display mt-5">
              {aboutIntro.title}
            </h1>
          </Reveal>
          <Reveal hero>
            <p className="blx-lead mt-6 max-w-xl">{aboutIntro.lead}</p>
          </Reveal>
        </div>
        <Reveal hero className="about-hero__dossier">
          <AboutDossierMockup />
        </Reveal>
      </div>
      <div className="blx-container">
        <div className="blx-rule mt-14 opacity-40" aria-hidden />
      </div>
    </section>
  )
}
