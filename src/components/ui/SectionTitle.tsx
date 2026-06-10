type SectionTitleProps = {
  eyebrow?: string
  title: string
  description?: string
  light?: boolean
  align?: 'left' | 'center'
  glow?: boolean
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
  align = 'left',
  glow = false,
}: SectionTitleProps) {
  const centered = align === 'center'

  return (
    <header className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <p className="blx-eyebrow">{eyebrow}</p>}
      <h2
        className={[
          glow ? 'blx-title-glow' : '',
          light ? (glow ? 'blx-title-glow--light blx-h2-light' : 'blx-h2-light') : 'blx-h2',
          eyebrow ? 'mt-4' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 ${light ? 'blx-lead-light' : 'blx-lead'}`}>{description}</p>
      )}
    </header>
  )
}
