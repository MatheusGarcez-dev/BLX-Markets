import type { CSSProperties, ReactNode } from 'react'
import BorderGlow, { type BorderGlowProps } from './BorderGlow'

export const BLX_GLOW_PRESETS = {
  dark: {
    backgroundColor: '#141416',
    glowColor: '355 68% 48%',
    colors: ['#cb2733', '#8f222c', '#2a1215'],
    borderClass: 'border-white/[0.08]',
    style: undefined as CSSProperties | undefined,
  },
  elevated: {
    backgroundColor: '#1a1a1e',
    glowColor: '355 65% 52%',
    colors: ['#cb2733', '#a82230', '#3d1519'],
    borderClass: 'border-white/[0.1]',
    style: undefined as CSSProperties | undefined,
  },
  light: {
    backgroundColor: '#ffffff',
    glowColor: '355 58% 44%',
    colors: ['#cb2733', '#f0b4b8', '#e4e4e7'],
    borderClass: 'border-black/[0.08]',
    style: {
      boxShadow:
        '0 1px 0 0 rgba(0,0,0,0.03) inset, 0 16px 40px -24px rgba(15,15,16,0.12)',
    } as CSSProperties,
  },
} as const

type BlxGlowCardProps = {
  children: ReactNode
  className?: string
  variant?: keyof typeof BLX_GLOW_PRESETS
  borderRadius?: number
  animated?: boolean
  glowProps?: Partial<BorderGlowProps>
}

export function BlxGlowCard({
  children,
  className = '',
  variant = 'dark',
  borderRadius = 24,
  animated = false,
  glowProps,
}: BlxGlowCardProps) {
  const preset = BLX_GLOW_PRESETS[variant]

  return (
    <BorderGlow
      className={`${preset.borderClass} ${className}`}
      backgroundColor={preset.backgroundColor}
      glowColor={preset.glowColor}
      colors={[...preset.colors]}
      borderRadius={borderRadius}
      glowRadius={32}
      glowIntensity={0.85}
      edgeSensitivity={26}
      coneSpread={22}
      fillOpacity={0.4}
      animated={animated}
      style={preset.style}
      {...glowProps}
    >
      {children}
    </BorderGlow>
  )
}
