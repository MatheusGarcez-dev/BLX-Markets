import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { REGISTER_INVESTOR_URL, REGISTER_MANAGER_URL } from '../../data/content'
import { pammIntro } from '../../data/pamm'
import { PammVisual } from './PammVisual'

export function PammHero() {
  return (
    <section className="pamm-hero" aria-labelledby="pamm-hero-title">
      <div className="blx-container pamm-hero__grid">
        <div className="pamm-hero__copy">
          <Reveal hero>
            <p className="blx-eyebrow">{pammIntro.eyebrow}</p>
          </Reveal>
          <Reveal hero>
            <h1 id="pamm-hero-title" className="blx-display mt-5">
              {pammIntro.title}
            </h1>
          </Reveal>
          <Reveal hero>
            <p className="mt-4 text-lg font-medium tracking-tight text-blx-heading md:text-xl">
              {pammIntro.subtitle}
            </p>
          </Reveal>
          <Reveal hero>
            <p className="blx-lead mt-6 max-w-xl">{pammIntro.lead}</p>
          </Reveal>
          <Reveal hero className="mt-8 flex flex-wrap gap-3">
            <Button href={REGISTER_MANAGER_URL}>Register as manager</Button>
            <Button href={REGISTER_INVESTOR_URL} variant="secondary">
              Register as investor
            </Button>
          </Reveal>
        </div>

        <Reveal hero className="pamm-hero__visual min-w-0">
          <PammVisual priority />
        </Reveal>
      </div>
      <div className="blx-container">
        <div className="blx-rule mt-14 opacity-40" aria-hidden />
      </div>
    </section>
  )
}
