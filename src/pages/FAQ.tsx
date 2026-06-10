import { useState } from 'react'
import { PageIntro } from '../components/layout/PageIntro'
import { Reveal, RevealGroup } from '../components/ui/Reveal'
import { faqCategories } from '../data/faq'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="bg-blx-bg">
      <PageIntro
        eyebrow="FAQs"
        title="Practical answers"
        description="Regulatory context varies by jurisdiction. Contact the desk for specifics related to your residency."
      />

      <div className="blx-container max-w-3xl space-y-12 pb-24">
        {faqCategories.map((cat) => (
          <section key={cat.title}>
            <Reveal>
              <h2 className="blx-eyebrow">{cat.title}</h2>
            </Reveal>
            <RevealGroup className="mt-6 flex flex-col gap-2" as="ul">
              {cat.items.map((item) => {
                const id = `${cat.title}-${item.q}`
                const open = openId === id
                return (
                  <Reveal key={id} as="li" className="blx-faq-item">
                    <button
                      type="button"
                      className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left md:px-6"
                      onClick={() => setOpenId(open ? null : id)}
                      aria-expanded={open}
                    >
                      <span className="text-sm font-medium text-blx-heading">{item.q}</span>
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs transition ${
                          open
                            ? 'border-blx-accent/30 bg-blx-accent/10 text-blx-accent'
                            : 'border-white/[0.08] text-blx-text-muted'
                        }`}
                      >
                        {open ? '−' : '+'}
                      </span>
                    </button>
                    <div className="faq-panel" data-open={open}>
                      <div>
                        <p className="px-5 pb-5 text-sm leading-relaxed text-blx-text-muted md:px-6">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </RevealGroup>
          </section>
        ))}
      </div>
    </div>
  )
}
