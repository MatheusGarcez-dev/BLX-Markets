import type { CSSProperties, ElementType, ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  as?: ElementType
  hero?: boolean
  style?: CSSProperties
}

export function Reveal({ children, className = '', as: Tag = 'div', hero = false, style }: RevealProps) {
  return (
    <Tag
      className={className}
      data-reveal={hero ? undefined : true}
      data-reveal-hero={hero ? true : undefined}
      style={style}
    >
      {children}
    </Tag>
  )
}

type RevealGroupProps = {
  children: ReactNode
  className?: string
  as?: ElementType
} & Record<string, unknown>

export function RevealGroup({ children, className = '', as: Tag = 'div', ...rest }: RevealGroupProps) {
  return (
    <Tag className={className} data-reveal-group {...rest}>
      {children}
    </Tag>
  )
}
