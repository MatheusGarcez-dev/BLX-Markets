import type { ReactNode } from 'react'
import { SectionTitle } from '../ui/SectionTitle'
import { Reveal, RevealGroup } from '../ui/Reveal'

type PageIntroProps = {
  eyebrow: string
  title: string
  description?: string
  children?: ReactNode
}

export function PageIntro({ eyebrow, title, description, children }: PageIntroProps) {
  return (
    <div className="blx-container blx-section !pb-14 !pt-10 md:!pb-16 md:!pt-12">
      <RevealGroup className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <SectionTitle eyebrow={eyebrow} title={title} description={description} glow />
        </Reveal>
        {children && (
          <Reveal className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">{children}</Reveal>
        )}
      </RevealGroup>
      <div className="blx-rule mt-14 opacity-50" aria-hidden />
    </div>
  )
}
