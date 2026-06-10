import { PageIntro } from '../components/layout/PageIntro'
import { Button } from '../components/ui/Button'
import { BlxGlowCard } from '../components/ui/BlxGlowCard'
import { BlxIcon } from '../components/ui/BlxIcon'
import { Reveal, RevealGroup } from '../components/ui/Reveal'
import { companyLegal, SUPPORT_EMAIL } from '../data/content'

export function Contact() {
  return (
    <div className="bg-blx-bg">
      <PageIntro
        eyebrow="Contact"
        title="Speak with the desk"
        description="Account setup, platform access, or partnership enquiries. Reach our support team directly—we do not provide personalised investment advice by email."
      />

      <div className="blx-container grid gap-12 pb-24 lg:grid-cols-2 lg:gap-16">
        <RevealGroup className="space-y-8">
          <Reveal>
            <BlxGlowCard variant="dark">
              <div className="p-6 md:p-7">
                <span className="feature-grid__icon">
                  <BlxIcon name="headset" size={20} />
                </span>
                <p className="blx-eyebrow mt-4 !border-white/10 !bg-white/[0.03] !text-blx-text-muted">
                  Email
                </p>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="mt-4 block text-lg font-medium text-blx-heading hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
                <p className="mt-3 text-sm text-blx-text-muted">
                  Typical response within one business day for account and platform enquiries.
                </p>
              </div>
            </BlxGlowCard>
          </Reveal>

          <Reveal>
            <BlxGlowCard variant="dark">
              <div className="p-6 md:p-7">
                <span className="feature-grid__icon">
                  <BlxIcon name="globe" size={20} />
                </span>
                <p className="blx-eyebrow mt-4 !border-white/10 !bg-white/[0.03] !text-blx-text-muted">
                  Registered office
                </p>
                <p className="mt-4 text-sm leading-relaxed text-blx-text-muted">
                  {companyLegal.name}
                  <br />
                  {companyLegal.address}
                </p>
              </div>
            </BlxGlowCard>
          </Reveal>
        </RevealGroup>

        <Reveal>
          <BlxGlowCard variant="elevated" className="h-fit">
            <div className="p-7 md:p-9">
              <span className="feature-grid__icon">
                <BlxIcon name="headset" size={20} />
              </span>
              <h2 className="mt-5 text-xl font-medium tracking-tight text-blx-heading md:text-2xl">
                Need help from the desk?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-blx-text-muted md:text-base">
                For account setup, platform access, funding questions, or general enquiries, contact
                our support team and we will respond as soon as practicable.
              </p>
              <Button href={`mailto:${SUPPORT_EMAIL}`} className="mt-8">
                Contact support
              </Button>
            </div>
          </BlxGlowCard>
        </Reveal>
      </div>
    </div>
  )
}
