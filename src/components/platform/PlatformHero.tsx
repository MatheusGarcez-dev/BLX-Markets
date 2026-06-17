import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { LOGIN_URL, platformIntro, REGISTER_URL } from '../../data/content'
import { PlatformMockup } from './PlatformMockup'

export function PlatformHero() {
  return (
    <section className="platform-hero" aria-labelledby="platform-hero-title">
      <div className="blx-container platform-hero__grid">
        <div className="platform-hero__copy">
          <Reveal hero>
            <p className="blx-eyebrow">{platformIntro.eyebrow}</p>
          </Reveal>
          <Reveal hero>
            <h1 id="platform-hero-title" className="blx-display mt-5">
              {platformIntro.title}
            </h1>
          </Reveal>
          <Reveal hero>
            <p className="mt-4 text-lg font-medium tracking-tight text-blx-heading md:text-xl">
              {platformIntro.subtitle}
            </p>
          </Reveal>
          <Reveal hero>
            <p className="blx-lead mt-6 max-w-xl">{platformIntro.lead}</p>
          </Reveal>
          <Reveal hero className="mt-8 flex flex-wrap gap-3">
            <Button href={REGISTER_URL}>Start trading now</Button>
            <Button href={LOGIN_URL} variant="secondary">
              Log in
            </Button>
          </Reveal>
        </div>

        <Reveal hero className="platform-hero__visual min-w-0">
          <PlatformMockup />
        </Reveal>
      </div>
      <div className="blx-container">
        <div className="blx-rule mt-14 opacity-40" aria-hidden />
      </div>
    </section>
  )
}
