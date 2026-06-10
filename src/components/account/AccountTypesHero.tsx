import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { accountTypesIntro, REGISTER_URL } from '../../data/content'
import { AccountPhoneMockup } from './AccountPhoneMockup'

export function AccountTypesHero() {
  return (
    <section className="account-hero" aria-labelledby="account-hero-title">
      <div className="blx-container account-hero__grid">
        <div className="account-hero__copy">
          <Reveal hero>
            <p className="blx-eyebrow">{accountTypesIntro.eyebrow}</p>
          </Reveal>
          <Reveal hero>
            <h1 id="account-hero-title" className="blx-display mt-5">
              {accountTypesIntro.title}
            </h1>
          </Reveal>
          <Reveal hero>
            <p className="blx-lead mt-6 max-w-xl">{accountTypesIntro.lead}</p>
          </Reveal>
          <Reveal hero className="mt-8 flex flex-wrap gap-3">
            <Button href={REGISTER_URL}>Register</Button>
            <Button to="/platform" variant="secondary">
              View platform
            </Button>
          </Reveal>
        </div>

        <Reveal hero className="account-hero__device">
          <AccountPhoneMockup />
        </Reveal>
      </div>
      <div className="blx-container">
        <div className="blx-rule mt-14 opacity-40" aria-hidden />
      </div>
    </section>
  )
}
